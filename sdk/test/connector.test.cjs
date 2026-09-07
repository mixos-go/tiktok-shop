'use strict'
const { describe, it } = require('node:test')
const assert = require('node:assert/strict')
const { createTikTokShopConnector, InMemoryTokenStore } = require('../dist/connector/index')
const { TikTokError } = require('../dist/types')
const { sign } = require('../dist/client')
const { buildAuthUrl } = require('../dist/auth')

const credentials = { app_key: 'appKeyX', app_secret: 'secret' }
const redirectUri = 'https://app.example/cb'

function makeFetch(log) {
  return async (url, init) => {
    log.urls.push(String(url))
    log.headers.push(init && init.headers ? init.headers : {})
    if (String(url).includes('/api/v2/token/refresh')) {
      return { ok: true, status: 200, text: async () =>
        JSON.stringify({ code: 0, data: { access_token: 'at2', refresh_token: 'rt2', access_token_expire_in: 604800 } }) }
    }
    if (String(url).includes('/api/v2/token/get')) {
      const isB = String(url).includes('auth_code=codeY')
      return { ok: true, status: 200, text: async () =>
        JSON.stringify({ code: 0, data: { access_token: isB ? 'atB' : 'atA', refresh_token: isB ? 'rtB' : 'rtA', access_token_expire_in: 604800, open_id: isB ? 'o2' : 'o1', seller_name: isB ? 'tokongB' : 'tokong', shop_cipher: isB ? 'cipher-B' : 'cipher-A' } }) }
    }
    if (String(url).includes('/authorization/202309/shops')) {
      return { ok: true, status: 200, text: async () =>
        JSON.stringify({ code: 0, data: { shops: [{ id: 'S1', cipher: 'cipher-via-shops' }] } }) }
    }
    return { ok: true, status: 200, text: async () => JSON.stringify({ code: 0, data: { success: true } }) }
  }
}

function mkSpec(path) {
  return { method: 'GET', path, baseUrl: 'https://open-api.tiktokglobalshop.com', query: [], headers: ['x-tts-access-token'], pathParams: [], body: [], bodyType: undefined }
}

describe('auth buildAuthUrl', () => {
  it('services host authorize + service_ids join ; + shop_type/state/path, tanpa sign', () => {
    const url = buildAuthUrl(credentials, redirectUri, { state: 'st1', shopType: 0, serviceIds: ['1001', '1002'] })
    assert.ok(url.startsWith('https://services.tiktokshop.com/open/authorize?'), url)
    assert.ok(url.includes('service_ids=1001%3B1002'), url)
    assert.ok(url.includes('shop_type=0'), url)
    assert.ok(url.includes('state=st1'), url)
    assert.ok(url.includes('path='), url)
    assert.ok(!url.includes('sign='), 'authorize tidak di-sign (host authorize berbeda dari business API)')
  })
  it('tanpa serviceIds → tidak ada param service_ids', () => {
    const url = buildAuthUrl(credentials, redirectUri)
    assert.ok(!url.includes('service_ids'), url)
  })
})

describe('token endpoint v2 (auth.tiktok-shops.com)', () => {
  it('exchange memakai app_secret + auth_code + grant_type=authorized_code, metode GET', async () => {
    const log = { urls: [], headers: [] }
    const { exchangeAuthCode } = require('../dist/auth')
    await exchangeAuthCode(credentials, 'codeZ', { fetch: makeFetch(log) })
    const url = log.urls[0]
    assert.ok(url.startsWith('https://auth.tiktok-shops.com/api/v2/token/get?'), url)
    assert.ok(url.includes('app_key=appKeyX'), url)
    assert.ok(url.includes('app_secret=secret'), url)
    assert.ok(url.includes('auth_code=codeZ'), url)
    assert.ok(url.includes('grant_type=authorized_code'), url)
    assert.ok(!url.includes('sign='), url)
  })

  it('refresh memakai app_secret + refresh_token + grant_type=refresh_token', async () => {
    const log = { urls: [], headers: [] }
    const { refreshAccessToken } = require('../dist/auth')
    await refreshAccessToken(credentials, 'rtZ', { fetch: makeFetch(log) })
    const url = log.urls[0]
    assert.ok(url.startsWith('https://auth.tiktok-shops.com/api/v2/token/refresh?'), url)
    assert.ok(url.includes('app_secret=secret'), url)
    assert.ok(url.includes('refresh_token=rtZ'), url)
    assert.ok(url.includes('grant_type=refresh_token'), url)
  })

  it('access_token_expire_in epoch absolut (v2) → expiresAt = epoch ms', async () => {
    const log = { urls: [], headers: [] }
    const fetchAbs = async (url) => {
      log.urls.push(String(url))
      return { ok: true, status: 200, text: async () =>
        JSON.stringify({ code: 0, data: { access_token: 'atAbs', refresh_token: 'rtAbs', access_token_expire_in: 1798764736 } }) }
    }
    const c = createTikTokShopConnector({ credentials, redirectUri, fetch: fetchAbs })
    const token = await c.handleCallback('S1', 'codeAbs')
    assert.equal(token.accessToken, 'atAbs')
    assert.equal(token.expiresAt, 1798764736 * 1000)
  })

  it('handleCallback tanpa shop_cipher di token → resolve via Get Authorized Shops', async () => {
    const fetchNoCipher = async (url) => {
      if (String(url).includes('/api/v2/token/get'))
        return { ok: true, status: 200, text: async () =>
          JSON.stringify({ code: 0, data: { access_token: 'atX', refresh_token: 'rtX', access_token_expire_in: 604800 } }) }
      if (String(url).includes('/authorization/202309/shops'))
        return { ok: true, status: 200, text: async () =>
          JSON.stringify({ code: 0, data: { shops: [{ id: 'S1', cipher: 'cipher-via-shops' }] } }) }
      return { ok: true, status: 200, text: async () => JSON.stringify({ code: 0, data: {} }) }
    }
    const c = createTikTokShopConnector({ credentials, redirectUri, fetch: fetchNoCipher })
    const token = await c.handleCallback('S1', 'codeX')
    assert.equal(token.shopCipher, 'cipher-via-shops')
  })
})

describe('sign (smoke TTS)', () => {
  it('deterministic & hex 64', () => {
    const q = { app_key: 'k', timestamp: '1', code: 'c' }
    const a = sign(credentials.app_secret, '/authorization/202309/token', q)
    const b = sign(credentials.app_secret, '/authorization/202309/token', q)
    assert.equal(a, b)
    assert.match(a, /^[0-9a-f]{64}$/)
  })
})

describe('TikTokShopConnector', () => {
  it('buildAuthUrl: shop_id & state disisipkan ke query redirect', () => {
    const c = createTikTokShopConnector({ credentials, redirectUri, fetch: makeFetch({ urls: [], headers: [] }) })
    const url = c.buildAuthUrl('S1', 'st1')
    assert.ok(url.startsWith('https://services.tiktokshop.com/open/authorize?'), url)
    assert.ok(url.includes('shop_id%3DS1'), url)
    assert.ok(url.includes('state=st1'), url)
  })

  it('handleCallback: simpan TokenSet + openId/shopCipher, expiresAt = now + expire_in', async () => {
    const c = createTikTokShopConnector({ credentials, redirectUri, fetch: makeFetch({ urls: [], headers: [] }) })
    const token = await c.handleCallback('S1', 'codeX')
    assert.equal(token.accessToken, 'atA')
    assert.equal(token.refreshToken, 'rtA')
    assert.equal(token.openId, 'o1')
    assert.equal(token.shopCipher, 'cipher-A')
    const expect = Date.now() + 604800 * 1000
    assert.ok(Math.abs((token.expiresAt || 0) - expect) < 10000, `expiresAt ${token.expiresAt} ≈ ${expect}`)
  })

  it('refresh: simpan refresh_token terbaru, store ter-update', async () => {
    const log = { urls: [], headers: [] }
    const c = createTikTokShopConnector({ credentials, redirectUri, fetch: makeFetch(log) })
    await c.handleCallback('S1', 'codeX')
    const fresh = await c.refresh('S1')
    assert.equal(fresh.accessToken, 'at2')
    assert.equal(fresh.refreshToken, 'rt2')
    const again = await c.refresh('S1')
    assert.equal(again.accessToken, 'at2')
  })

  it('auto-refresh single-flight: 3 request paralel saat expiry mendekat → 1 refresh', async () => {
    const log = { urls: [], headers: [] }
    const store = new InMemoryTokenStore()
    const c = createTikTokShopConnector({ credentials, redirectUri, store, fetch: makeFetch(log) })
    await c.handleCallback('S1', 'codeX')
    store.set('S1', { accessToken: 'atA', refreshToken: 'rtA', expiresAt: Date.now() + 60000 })
    log.urls.length = 0
    const client = await c.getClient('S1')
    const results = await Promise.all([
      client.request(mkSpec('/product/202309/products'), {}),
      client.request(mkSpec('/product/202309/products'), {}),
      client.request(mkSpec('/product/202309/products'), {}),
    ])
    const refreshes = log.urls.filter((u) => u.includes('/api/v2/token/refresh')).length
    const calls = log.urls.filter((u) => u.includes('/product/202309/products')).length
    assert.equal(refreshes, 1)
    assert.equal(calls, 3)
    assert.equal(results.length, 3)
  })

  it('getClient untuk shop belum connect → TikTokError jelas', async () => {
    const c = createTikTokShopConnector({ credentials, redirectUri, fetch: makeFetch({ urls: [], headers: [] }) })
    await assert.rejects(() => c.getClient('NOPE'), (e) => e instanceof TikTokError && /belum connect/.test(e.message))
  })

  it('refresh tanpa token → error jelas', async () => {
    const c = createTikTokShopConnector({ credentials, redirectUri, fetch: makeFetch({ urls: [], headers: [] }) })
    await assert.rejects(() => c.refresh('NOPE'), (e) => e instanceof TikTokError && /refresh_token/.test(e.message))
  })

  it('multi-seller isolation: x-tts-access-token + shopCipher per shop tidak tercampur', async () => {
    const log = { urls: [], headers: [] }
    const c = createTikTokShopConnector({ credentials, redirectUri, fetch: makeFetch(log) })
    await c.handleCallback('S1', 'codeX')
    await c.handleCallback('S2', 'codeY')
    log.urls.length = 0
    log.headers.length = 0
    const c1 = await c.getClient('S1')
    const c2 = await c.getClient('S2')
    await c1.request(mkSpec('/product/202309/products'), {})
    await c2.request(mkSpec('/product/202309/products'), {})
    assert.ok(log.headers[0]['x-tts-access-token'] === 'atA', JSON.stringify(log.headers[0]))
    assert.ok(log.headers[1]['x-tts-access-token'] === 'atB', JSON.stringify(log.headers[1]))
    assert.deepEqual(c.listShopIds().sort(), ['S1', 'S2'])
  })
})