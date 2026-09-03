/**
 * Generator: parses every reference doc under `../../references/api` and emits
 * a typed, category-scoped SDK under `../src/generated`.
 *
 * TikTok Shop specifics handled here:
 *  - YAML-ish frontmatter (method, path, version, base_url).
 *  - Request Parameters routed by `(query)`, `(header)`, `(path)` suffix.
 *  - Optional Request Body (dot-notation).
 *  - Response nesting via dot-notation with `array<object>` etc.
 *
 * Run: `npm run generate` (from sdk/).
 */
const fs = require('fs')
const path = require('path')

const API_ROOT = path.join(__dirname, '../../references/api')
const OUT_DIR = path.join(__dirname, '../src/generated')

const cats = fs.readdirSync(API_ROOT).filter((d) => fs.statSync(path.join(API_ROOT, d)).isDirectory()).sort()

const DEFAULT_BASE = 'https://open-api.tiktokglobalshop.com'

// ---------- Markdown helpers ----------

function splitSections(content) {
  const sections = {}
  let cur = null
  for (const line of content.split('\n')) {
    const m = line.match(/^## (.+)/)
    if (m) {
      cur = m[1].trim()
      sections[cur] = []
      continue
    }
    if (cur) sections[cur].push(line)
  }
  return sections
}

function parseFrontmatter(content) {
  const fm = {}
  const m = content.match(/^---\n([\s\S]*?)\n---/)
  if (m) {
    for (const line of m[1].split('\n')) {
      const mm = line.match(/^([^:]+):\s*(.*)$/)
      if (mm) fm[mm[1].trim().toLowerCase()] = mm[2].trim()
    }
  }
  return fm
}

function parseTable(lines) {
  const rows = []
  let header = null
  for (const line of lines) {
    const t = line.trim()
    if (!t.startsWith('|')) continue
    const cells = t.split('|').slice(1, -1).map((c) => c.trim().replace(/`/g, ''))
    if (cells.every((c) => /^[-: ]+$/.test(c))) continue
    if (!header && /^(field|name|property|properties)$/i.test(cells[0] || '')) {
      header = cells
      continue
    }
    if (header) rows.push({ cells, header })
  }
  return { rows, header }
}

function colIdx(header, names) {
  if (!header) return -1
  return header.findIndex((h) => names.includes(h.toLowerCase()))
}

const TYPE_IDX_NAMES = ['type', 'datatype']
const REQ_IDX_NAMES = ['required', 'mandatory']
const DESC_IDX_NAMES = ['description']

// ---------- Naming ----------

function pascal(str) {
  return str
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join('')
}

function camel(str) {
  const p = pascal(str)
  return p[0].toLowerCase() + p.slice(1)
}

function safeIdentifier(name) {
  const c = camel(name)
  if (/^[A-Za-z_$]/.test(c)) return c
  return '_' + c
}

function moduleName(cat) {
  return pascal(cat.replace(/[^A-Za-z0-9]+/g, ' '))
}

// ---------- Type mapping (TikTok -> TS) ----------

function mapBaseType(type) {
  const t = (type || '').trim().toLowerCase()
  if (t.startsWith('array<')) {
    const inner = t.slice('array<'.length, -1).trim()
    if (inner === 'object') return 'Array<Record<string, unknown>>'
    return `Array<${mapScalarNoArray(inner)}>`
  }
  return mapScalarNoArray(t)
}

function mapScalarNoArray(t) {
  if (t === 'object' || t === 'map' || t === 'jsonobject') return 'Record<string, unknown>'
  if (/^(integer|int|int8|int32|int64|long|float|double|number|bigdecimal)$/.test(t)) return 'number'
  if (t === 'boolean' || t === 'bool') return 'boolean'
  if (/^(string|text|url|enum|date|datetime|timezone|byte|binary)$/.test(t)) return 'string'
  return 'unknown'
}

// ---------- Dot-notation tree ----------

function buildTree(paths) {
  const root = { children: new Map(), type: null, rawType: null, required: false }
  // Pass 1: leaf types + required flags.
  for (const { key, type, required } of paths) {
    const segs = key.split('.')
    let node = root
    for (let i = 0; i < segs.length; i++) {
      const seg = segs[i]
      if (!node.children.has(seg)) node.children.set(seg, { children: new Map(), type: null, rawType: null, required: false })
      const child = node.children.get(seg)
      if (i === segs.length - 1) {
        child.type = mapBaseType(type)
        child.rawType = type
        child.required = !!required
      }
      node = child
    }
  }
  // Pass 2: intermediate node types (from any row that ends at a parent path).
  for (const { key, type } of paths) {
    const segs = key.split('.')
    let node = root
    for (const seg of segs) {
      node = node.children.get(seg)
      if (!node) break
      if (node.rawType === null) {
        node.rawType = type
        node.type = mapBaseType(type)
      }
    }
  }
  return root
}

function emitNode(node, indent, pad) {
  const padStr = pad.repeat(indent)
  const lines = []
  for (const [name, child] of node.children) {
    const childProps = [...child.children.keys()]
    const req = child.required
    if (childProps.length > 0) {
      const isArray = /^array<object>/.test(child.rawType || '')
      const inner = emitNode(child, indent + 1, pad)
      lines.push(`${padStr}${JSON.stringify(name)}${req ? '' : '?'}: ${isArray ? 'Array<{' : '{'}`)
      lines.push(inner)
      lines.push(`${padStr}${isArray ? '}>' : '}'},`)
    } else {
      lines.push(`${padStr}${JSON.stringify(name)}${req ? '' : '?'}: ${child.type},`)
    }
  }
  return lines.join('\n')
}

function nestedInterface(name, paths) {
  const tree = buildTree(paths)
  const pad = '  '
  const lines = [`export interface ${name} {`]
  for (const [rootKey, node] of tree.children) {
    const childProps = [...node.children.keys()]
    const req = node.required
    if (childProps.length > 0) {
      const isArray = /^array<object>/.test(node.rawType || '')
      const inner = emitNode(node, 1, pad)
      lines.push(`${pad}${JSON.stringify(rootKey)}${req ? '' : '?'}: ${isArray ? 'Array<{' : '{'}`)
      lines.push(inner)
      lines.push(`${pad}${isArray ? '}>' : '}'},`)
    } else {
      lines.push(`${pad}${JSON.stringify(rootKey)}${req ? '' : '?'}: ${node.type},`)
    }
  }
  lines.push(`}`)
  return lines.join('\n')
}

// ---------- Request interface (flat from param rows) ----------

function requestInterface(name, table) {
  const pad = '  '
  const lines = [`export interface ${name} {`]
  const seen = new Set()
  const typeIdx = colIdx(table.header, TYPE_IDX_NAMES)
  const reqIdx = colIdx(table.header, REQ_IDX_NAMES)
  const descIdx = colIdx(table.header, DESC_IDX_NAMES)
  for (const { cells, header } of table.rows) {
    const field = head(cells).replace(/\s*\((query|header|path|body)\)\s*$/, '')
    // Skip auto-managed headers.
    if (field.toLowerCase() === 'x-tts-access-token' || field.toLowerCase() === 'content-type') continue
    if (!field || seen.has(field)) continue
    seen.add(field)
    const type = typeIdx >= 0 ? cells[typeIdx] : (header.length > 1 ? cells[1] : '')
    const reqVal = reqIdx >= 0 ? cells[reqIdx] : undefined
    const required = reqVal !== undefined && /^yes$/i.test(String(reqVal).trim())
    const route = (head(cells).match(/\((query|header|path|body)\)/) || [null, 'query'])[1]
    const ts = mapBaseType(type)
    const desc = descIdx >= 0 ? cells[descIdx] : ''
    const jdoc = desc.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()
    const routeTxt = { query: 'query', header: 'header', path: 'path', body: 'body' }[route] || 'query'
    if (jdoc || routeTxt !== 'query') {
      const note = routeTxt === 'query' ? '' : ` (${routeTxt})`
      if (jdoc) lines.push(`${pad}/** ${jdoc}${note} */`)
      else lines.push(`${pad}/** ${note.trim()} */`)
    }
    lines.push(`${pad}${JSON.stringify(field)}${required ? '' : '?'}: ${ts},`)
  }
  lines.push(`}`)
  return lines.join('\n')
}

function head(cells) {
  return (cells[0] || '').trim()
}

// ---------- Doc parsing ----------

function parseDoc(cat, file, content) {
  const fm = parseFrontmatter(content)
  const sections = splitSections(content)
  const method = (fm.method || 'GET').trim().toUpperCase()
  const httpPath = (fm.path || '').trim()
  const baseUrl = (fm.base_url || DEFAULT_BASE).trim()
  const apiName = file.replace(/\.md$/, '')

  const reqTable = parseTable(sections['Request Parameters'] || [])
  const bodyTable = parseTable(sections['Request Body'] || [])
  const respTable = parseTable(sections['Response'] || [])

  // Request params: route by suffix.
  const query = []
  const headers = []
  const pathParams = []
  const reqFields = []
  const typeIdx = colIdx(reqTable.header, TYPE_IDX_NAMES)
  const reqIdx = colIdx(reqTable.header, REQ_IDX_NAMES)
  const descIdx = colIdx(reqTable.header, DESC_IDX_NAMES)
  const seen = new Set()
  for (const { cells } of reqTable.rows) {
    const raw = head(cells)
    const route = (raw.match(/\((query|header|path|body)\)/) || [null, 'query'])[1]
    const field = raw.replace(/\s*\((query|header|path|body)\)\s*$/, '')
    if (field.toLowerCase() === 'x-tts-access-token' || field.toLowerCase() === 'content-type') continue
    if (!field || seen.has(field)) continue
    seen.add(field)
    reqFields.push({
      field,
      type: typeIdx >= 0 ? cells[typeIdx] : '',
      required: reqIdx >= 0 && /^yes$/i.test(String(cells[reqIdx] || '').trim()),
      desc: descIdx >= 0 ? cells[descIdx] : '',
      route,
    })
    if (route === 'header') headers.push(field)
    else if (route === 'path') pathParams.push(field)
    else query.push(field)
  }

  // Body top-level keys + path->type map.
  const bodyTypeIdx = colIdx(bodyTable.header, TYPE_IDX_NAMES)
  const bodyReqIdx = colIdx(bodyTable.header, REQ_IDX_NAMES)
  const bodyPaths = []
  const bodyTopKeys = []
  for (const { cells } of bodyTable.rows) {
    const key = head(cells)
    if (!key) continue
    const type = bodyTypeIdx >= 0 ? cells[bodyTypeIdx] : ''
    const required = bodyReqIdx >= 0 && /^yes$/i.test(String(cells[bodyReqIdx] || '').trim())
    bodyPaths.push({ key, type, required })
    bodyTopKeys.push(key.split('.')[0])
  }
  const bodyTopUnique = [...new Set(bodyTopKeys)]

  // Response paths.
  const respTypeIdx = colIdx(respTable.header, TYPE_IDX_NAMES)
  const respReqIdx = colIdx(respTable.header, REQ_IDX_NAMES)
  const respPaths = []
  for (const { cells } of respTable.rows) {
    const key = head(cells)
    if (!key) continue
    const type = respTypeIdx >= 0 ? cells[respTypeIdx] : ''
    const required = respReqIdx >= 0 && /^yes$/i.test(String(cells[respReqIdx] || '').trim())
    respPaths.push({ key, type, required })
  }

  return {
    apiName,
    method,
    httpPath,
    baseUrl,
    reqFields,
    query,
    headers,
    pathParams,
    bodyPaths: bodyPaths.filter((p) => bodyTopUnique.includes(p.key.split('.')[0])),
    bodyTopKeys: bodyTopUnique,
    respPaths,
    reqTable,
  }
}

// ---------- Emit one category ----------

function emitCategory(cat) {
  const dir = path.join(API_ROOT, cat)
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort()
  const mod = moduleName(cat)
  const className = `TikTok${mod}Api`

  const typeParts = []
  const methodParts = []

  for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), 'utf8')
    const doc = parseDoc(cat, file, content)
    const { apiName, method, httpPath, baseUrl } = doc

    const Pascal = pascal(apiName)
    let reqType = Pascal
    let respType = Pascal
    let bodyType = `${Pascal}Body`
    if (!/Request$/.test(Pascal)) reqType = `${Pascal}Request`
    if (!/Response$/.test(Pascal)) respType = `${Pascal}Response`

    const hasBody = doc.bodyTopKeys.length > 0

    // Request type from param table (or empty).
    if (doc.reqFields.length && doc.reqTable.header) {
      typeParts.push(requestInterface(reqType, doc.reqTable))
    } else {
      typeParts.push(`export interface ${reqType} {}\n`)
    }

    // Body type (nested).
    if (hasBody) {
      typeParts.push(nestedInterface(bodyType, doc.bodyPaths))
    }

    // Response type (nested data envelope).
    if (doc.respPaths.length) {
      // Build nested data for the whole response (code/message/data).
      typeParts.push(nestedInterface(respType, doc.respPaths))
    } else {
      typeParts.push(`export interface ${respType} {\n  "code"?: number,\n  "message"?: string,\n  "request_id"?: string,\n  "data"?: Record<string, unknown>,\n}\n`)
    }

    const spec = {
      method,
      path: httpPath,
      baseUrl,
      query: doc.query,
      headers: doc.headers,
      pathParams: doc.pathParams,
      body: doc.bodyTopKeys,
    }

    const m = safeIdentifier(apiName)
    const specJson = JSON.stringify(spec)

    if (hasBody) {
      methodParts.push(`  /**
   * ${apiName.replace(/_/g, ' ')}
   * ${httpPath} (${method})
   */
  async ${m}(params: ${reqType}, body?: ${bodyType}, opts?: TikTokRequestOptions): Promise<${respType}> {
    return this.client.request(${specJson}, { ...(params as unknown as Record<string, unknown>), ...((body || {}) as Record<string, unknown>) }, opts)
  }`)
    } else {
      methodParts.push(`  /**
   * ${apiName.replace(/_/g, ' ')}
   * ${httpPath} (${method})
   */
  async ${m}(params: ${reqType}, opts?: TikTokRequestOptions): Promise<${respType}> {
    return this.client.request(${specJson}, params as unknown as Record<string, unknown>, opts)
  }`)
    }
  }

  const fileContent = `// AUTO-GENERATED from TikTok Shop reference docs (references/api/${cat}).
// Do not edit by hand; run \`npm run generate\` in sdk/.

import { TikTokClient } from '../../client'
import { TikTokRequestOptions } from '../../types'

${typeParts.join('\n\n')}

export class ${className} {
  constructor(private client: TikTokClient) {}

${methodParts.join('\n\n')}
}
`

  fs.mkdirSync(path.join(OUT_DIR, mod), { recursive: true })
  fs.writeFileSync(path.join(OUT_DIR, mod, 'index.ts'), fileContent)
  return mod
}

// ---------- Main ----------

function main() {
  fs.rmSync(OUT_DIR, { recursive: true, force: true })
  fs.mkdirSync(OUT_DIR, { recursive: true })

  const modules = cats.map((cat) => emitCategory(cat))
  const barrel = modules.map((mod) => `export { TikTok${mod}Api } from './${mod}'`).join('\n')
  fs.writeFileSync(path.join(OUT_DIR, 'index.ts'), `// AUTO-GENERATED barrel. Run \`npm run generate\`.\n${barrel}\n`)

  let apiCount = 0
  for (const cat of cats) apiCount += fs.readdirSync(path.join(API_ROOT, cat)).filter((f) => f.endsWith('.md')).length
  console.log(`Generated ${cats.length} category modules (${modules.length}) from ${cats.length} categories`)
  console.log(`APIs covered: ${apiCount}`)
}

module.exports = { parseTable, splitSections, mapBaseType, pascal, camel, colIdx, parseFrontmatter }

if (require.main === module) {
  main()
}
