const assert = require('assert')
const crypto = require('crypto')
const { TikTokShop, sign } = require('../dist/index.js')

function refSign(secret, path, query, body) {
  const keys = Object.keys(query)
    .filter((k) => k !== 'sign' && k !== 'access_token')
    .sort()
  let str = path
  for (const k of keys) {
    const v = query[k]
    if (v === undefined || v === null) continue
    str += k + (typeof v === 'object' ? JSON.stringify(v) : String(v))
  }
  if (body) str += body
  return crypto.createHmac('sha256', secret).update(secret + str + secret).digest('hex')
}

async function main() {
  // 1. Signing matches the documented TikTok Shop reference value.
  {
    // From the official "Sign your API request" walkthrough:
    // path=/authorization/202309/shops, app_key=29a39d, timestamp=1623812664,
    // app_secret=e59af819cc -> sign=b596b73e0cc6de07ac26f036364178ab16b0a907af13d43f0a0cd2345f582dc8
    const s = sign(
      'e59af819cc',
      '/authorization/202309/shops',
      { app_key: '29a39d', timestamp: '1623812664' },
    )
    assert.strictEqual(s, 'b596b73e0cc6de07ac26f036364178ab16b0a907af13d43f0a0cd2345f582dc8')
    // with body
    const s2 = sign(
      'e59af819cc',
      '/event/202309/webhooks',
      { app_key: '68xu9ks5p4i8', shop_cipher: 'ROW_xkMbgAAAeVAQra0eZWebFQq5aIK', timestamp: '1696909648' },
      '{"address":"https://partner.tiktokshop.com","event_type":"PACKAGE_UPDATE"}',
    )
    assert.strictEqual(s2, refSign('e59af819cc', '/event/202309/webhooks', { app_key: '68xu9ks5p4i8', shop_cipher: 'ROW_xkMbgAAAeVAQra0eZWebFQq5aIK', timestamp: '1696909648' }, '{"address":"https://partner.tiktokshop.com","event_type":"PACKAGE_UPDATE"}'))
    console.log('✓ sign(): matches documented reference (no-body) and reference impl (with body)')
  }

  // 2. GET request construction: query params + shop_cipher + token header.
  {
    let captured = null
    const client = new TikTokShop({
      credentials: { app_key: 'abc', app_secret: 'secret' },
      accessToken: 'tok',
      shopCipher: 'ROW_xyz',
      fetch: async (url, init) => {
        captured = { url, init }
        return new Response(JSON.stringify({ code: 0, message: 'success', request_id: 'r', data: { orders: [] } }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        })
      },
    })
    const res = await client.order.getOrderDetail({ ids: ['123', '456'] })
    const u = new URL(captured.url)
    assert.strictEqual(u.pathname, '/order/202507/orders')
    assert.strictEqual(u.searchParams.get('app_key'), 'abc')
    assert.strictEqual(u.searchParams.get('ids'), '["123","456"]')
    assert.strictEqual(u.searchParams.get('shop_cipher'), 'ROW_xyz')
    assert.ok(u.searchParams.get('timestamp'))
    assert.ok(u.searchParams.get('sign'))
    assert.strictEqual(u.searchParams.get('access_token'), null) // not in query
    assert.strictEqual(captured.init.headers['x-tts-access-token'], 'tok')
    assert.strictEqual(captured.init.method, 'GET')
    assert.strictEqual(res.code, 0)
    assert.deepStrictEqual(res.data.orders, [])
    console.log('✓ GET: query params, shop_cipher, token header, signing ok')
  }

  // 3. POST with Request Body (signed + sent as JSON body).
  {
    let captured = null
    const client = new TikTokShop({
      credentials: { app_key: 'abc', app_secret: 'secret' },
      accessToken: 'tok',
      fetch: async (url, init) => {
        captured = { url, init }
        return new Response(JSON.stringify({ code: 0, message: 'success' }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        })
      },
    })
    await client.order.addExternalOrderReferences(
      {},
      { orders: [{ external_order: { id: '123', platform: 'SHOPIFY' } }] },
      { timestamp: 1696909648 },
    )
    assert.strictEqual(captured.init.method, 'POST')
    assert.strictEqual(captured.init.headers['Content-Type'], 'application/json')
    const body = JSON.parse(captured.init.body)
    assert.strictEqual(body.orders[0].external_order.platform, 'SHOPIFY')
    const u = new URL(captured.url)
    // body was included in signing -> sign must equal reference impl
    const s = sign(
      'secret',
      '/order/202406/orders/external_orders',
      { app_key: 'abc', timestamp: '1696909648' },
      captured.init.body,
    )
    assert.strictEqual(u.searchParams.get('sign'), s)
    console.log('✓ POST: JSON body sent + included in signature')
  }

  // 4. Path param substitution.
  {
    let captured = null
    const client = new TikTokShop({
      credentials: { app_key: 'abc', app_secret: 'secret' },
      fetch: async (url, init) => {
        captured = { url, init }
        return new Response(JSON.stringify({ code: 0, message: 'success' }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        })
      },
    })
    await client.affiliateCreator.getShoppableVideoStatus({ video_id: 'VID123' })
    const u = new URL(captured.url)
    assert.strictEqual(u.pathname, '/affiliate_creator/202509/videos/VID123/status')
    console.log('✓ Path param: {video_id} substituted into URL')
  }

  // 5. API error (non-zero code) surfaces as TikTokError.
  {
    const client = new TikTokShop({
      credentials: { app_key: 'a', app_secret: 's' },
      fetch: async () =>
        new Response(JSON.stringify({ code: 106001, message: 'signature is invalid', request_id: 'r' }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        }),
    })
    let err = null
    try {
      await client.order.getOrderDetail({ ids: ['x'] })
    } catch (e) {
      err = e
    }
    assert.ok(err)
    assert.strictEqual(err.name, 'TikTokError')
    assert.strictEqual(err.code, 106001)
    console.log('✓ API error thrown as TikTokError with code')
  }

  console.log('\nAll smoke tests passed.')
}

main().catch((e) => {
  console.error('SMOKE TEST FAILED:', e)
  process.exit(1)
})
