import * as crypto from 'crypto'
import { TikTokCredentials } from './types'
import { sign } from './client'

const DEFAULT_BASE = 'https://open-api.tiktokglobalshop.com'

export interface TikTokAuthUrlOptions {
  baseUrl?: string
  state?: string
  /** Authorized shop type: `0` = seller, `1` = authorized user. */
  shopType?: number
  /** Requested scopes (for cross-border). */
  serviceIds?: string[]
}

/**
 * Build a TikTok Shop seller authorization URL.
 *
 * After the seller grants access, TikTok redirects back to your app with a
 * `code` + `state`. Exchange the `code` via `exchangeAuthCode`.
 */
export function buildAuthUrl(
  credentials: TikTokCredentials,
  redirectUrl: string,
  opts: TikTokAuthUrlOptions = {},
): string {
  const base = opts.baseUrl ?? DEFAULT_BASE
  const path = '/authorization/202309/authorize'
  const timestamp = Math.floor(Date.now() / 1000)
  const query: Record<string, unknown> = {
    app_key: credentials.app_key,
    timestamp: String(timestamp),
    state: opts.state ?? '',
    path: redirectUrl,
    shop_type: opts.shopType ?? 0,
  }
  query.sign = sign(credentials.app_secret, path, query)
  const search = new URLSearchParams()
  for (const [k, v] of Object.entries(query)) search.set(k, String(v))
  return `${base}${path}?${search.toString()}`
}

/**
 * Exchange an authorization `code` (returned to your callback) for an
 * access_token + refresh_token via the TikTok Shop token endpoint.
 */
export async function exchangeAuthCode(
  credentials: TikTokCredentials,
  code: string,
  opts: { baseUrl?: string } = {},
): Promise<any> {
  const base = opts.baseUrl ?? DEFAULT_BASE
  const path = '/authorization/202309/token'
  const timestamp = Math.floor(Date.now() / 1000)
  const params: Record<string, unknown> = {
    app_key: credentials.app_key,
    timestamp: String(timestamp),
    shop_type: 0,
    code,
    category: '',
  }
  const query: Record<string, unknown> = { ...params }
  query.sign = sign(credentials.app_secret, path, query)
  const search = new URLSearchParams()
  for (const [k, v] of Object.entries(query)) search.set(k, String(v))
  const res = await fetch(`${base}${path}?${search.toString()}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
  const text = await res.text()
  let json: any
  try {
    json = text ? JSON.parse(text) : null
  } catch {
    json = { code: 'invalid_json', message: text }
  }
  return json
}
