# @mixos-go/tiktok-shop-sdk

TypeScript SDK untuk **TikTok Shop Open Platform API** — mencakup **363 API**
dalam **25 kategori**, di-*generate* langsung dari doc reference repo ini
(`references/api/**`).

- HMAC-SHA256 signing otomatis (`app_secret + path + sortedQparams + body + app_secret`)
- Access token dikirim via header `x-tts-access-token` (version 202309+)
- Support `shop_cipher`, path param `{...}`, query/header/body per endpoint
- Request Body + Response typing (nested, dot-notation)
- Zero dependency runtime (hanya TypeScript/devDep)

## Instalasi

```bash
# build SDK (jalankan dari folder sdk/)
cd sdk
npm install
npm run build
```

## Quick start

```ts
import { TikTokShop } from './index'

const tiktok = new TikTokShop({
  credentials: { app_key: 'YOUR_APP_KEY', app_secret: 'YOUR_APP_SECRET' },
  accessToken: 'YOUR_ACCESS_TOKEN',
  shopCipher: 'ROW_...',          // untuk shop-scoped / cross-border
})

// GET-style API
const detail = await tiktok.order.getOrderDetail({ ids: ['ORDER_ID'] })
console.log(detail.data?.orders)

// POST-style API dengan Request Body
await tiktok.order.addExternalOrderReferences(
  {},                                  // params (query/header/path)
  { orders: [{ external_order: { id: 'OMS_ID', platform: 'SHOPIFY' } }] }, // body
)
```

## Otorisasi (access_token)

```ts
import { TikTokShop, buildAuthUrl, exchangeAuthCode } from './index'

const url = buildAuthUrl(
  { app_key: 'YOUR_APP_KEY', app_secret: 'YOUR_APP_SECRET' },
  'https://yourapp/callback',
)
// arahkan seller ke `url`; mereka redirect ke callback?code=...&state=...

const token = await exchangeAuthCode(
  { app_key: 'YOUR_APP_KEY', app_secret: 'YOUR_APP_SECRET' },
  'CODE_FROM_CALLBACK',
)
// token.data.access_token -> masukkan ke TikTokShop(accessToken)
```

## Connector multi-seller (OAuth + auto-refresh)

Untuk aplikasi multi-shop, pakai `TikTokShopConnector` (`src/connector/`). Satu
instance, token disimpan per `shopId` di `TokenStore`. Access token dikirim via
header `x-tts-access-token`; `refresh_token` single-use — connector selalu
menyimpan yang terbaru (refresh token TTS expire ~7 hari):

```ts
import { createTikTokShopConnector, InMemoryTokenStore } from './connector'

const connector = createTikTokShopConnector({
  credentials: { app_key: 'YOUR_APP_KEY', app_secret: 'YOUR_APP_SECRET' },
  redirectUri: 'https://yourapp/callback',
  shopType: 0,                 // 0 = seller (default)
  serviceIds: ['1003', ...],   // (opsional, cross-border) → query service_ids, join ';'
  category: 'cross_border',    // (opsional) dikirim saat token exchange
  store: new InMemoryTokenStore(), // ganti dgn persisten store utk production
})

// 1. URL authorize: shop_id & state di query redirect; service_ids/state di query oauth.
const url = connector.buildAuthUrl('S1', 'csrf-state')

// 2. Callback: exchange code → token (+ openId, sellerName, shopCipher) disimpan.
const token = await connector.handleCallback('S1', 'CODE_FROM_CALLBACK')

// 3. Panggil API: x-tts-access-token (+ shop_cipher bila ada) di-inject otomatis.
const client = await connector.getClient('S1')
const res = await client.request(
  { method: 'GET', path: '/product/202309/products', baseUrl: 'https://open-api.tiktokglobalshop.com',
    query: ['page_size'], headers: ['x-tts-access-token'], pathParams: [], body: [] },
  { page_size: 10 },
)

// 4. Auto-refresh: token expire ~7 hari → sebelum tiap request, bila expiresAt
//    mendekat (< refreshThresholdMs, default 5 mnt) di-refresh otomatis
//    (single-flight). Manual:  await connector.refresh('S1')
connector.listShopIds() // ['S1', ...]
```

## Struktur

```
src/
  index.ts        # entry: class TikTokShop + wiring 25 category sub-clients
  client.ts       # TikTokClient: signing (HMAC-SHA256), request, auth header
  auth.ts         # buildAuthUrl / exchangeAuthCode (OAuth)
  types.ts        # TikTokCredentials, TikTokError, envelope types
  generated/      # AUTO-GENERATED per-category typed clients
scripts/
  generate.cjs    # generator (parse references/api -> src/generated)
  smoke.cjs       # smoke test signing/request/envelope
```

Regenerate setelah update doc: `npm run generate`.

## Lisensi

MIT
