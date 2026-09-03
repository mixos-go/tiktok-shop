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
