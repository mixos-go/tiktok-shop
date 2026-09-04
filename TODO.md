# TODO — TikTok Shop SDK (connector + OAuth)

Urutan fase wajib diikuti (fase N butuh fase N-1 selesai). Dalam satu fase, task boleh paralel
selama tidak menyentuh file yang sama. Setiap task = 1 PR.

Status: `[ ]` belum, `[~]` in progress, `[x]` selesai & merged.

> **Contract connector SERAGAM** (dipakai identik di SDK Shopee/TTS/Lazada/Blibli — hanya detail
> internal platform yang beda). Jangan ubah bentuk/struktur contract tanpa persetujuan bersama:
> folder, interface `TokenStore`, tipe `TokenSet`, dan kelas connector harus sama persis antar repo.

---

## Kontrak seragam connector (multi-seller)

Folder yang harus ada (bentuk sama di semua repo):

```
sdk/src/connector/
├── types.ts        <- TokenSet, ConnectorConfig, token + shop identifier
├── token-store.ts  <- interface TokenStore + InMemoryTokenStore
├── connector.ts    <- class TikTokConnector (multi-seller) + auto-refresh
└── index.ts        <- createTikTokConnector(config) factory
```

### `types.ts`

```ts
// Token pasangan + metadata masa berlaku, per shop/seller.
interface TokenSet {
  accessToken: string
  refreshToken?: string
  /** epoch ms saat token kedaluwarsa (dari expires_in platform saat diperoleh). */
  expiresAt?: number
  /** field tambahan spesifik platform (mis. shopId, shopCipher, region). */
  [key: string]: unknown
}

interface ConnectorConfig {
  credentials: /* tipe kredensial platform (mis. TikTokCredentials) */
  redirectUri: string
  store?: TokenStore
  /** environment/region default + pilihan tambahan sesuai platform. */
  environment?: unknown
  scope?: string
}
```

### `token-store.ts`

```ts
interface TokenStore {
  get(shopId: string): Promise<TokenSet | undefined> | TokenSet | undefined
  set(shopId: string, token: TokenSet): Promise<void> | void
  delete(shopId: string): Promise<void> | void
}

class InMemoryTokenStore implements TokenStore { /* Map<shopId, TokenSet> */ }
```

### `connector.ts`

Kelas `TikTokConnector` **multi-seller** (satu instance, banyak shop):

- `buildAuthUrl(shopId, state?): string` — URL OAuth yang harus dikunjungi seller (per shop).
- `handleCallback(shopId, code): Promise<TokenSet>` — exchange code → token, simpan ke store.
- `refresh(shopId): Promise<TokenSet>` — refresh token sebelum/ketika kedaluwarsa, update store.
- `getClient(shopId): TikTokClient` — client untuk shop tsb yang **auto-inject token** (header
  `x-tts-access-token`) dan `auto-refresh` saat `expiresAt` mendekat; kalau token belum ada →
  lempar error yang jelas.
- `listShopIds(): string[]`.

### `index.ts`

`createTikTokConnector(config: ConnectorConfig): TikTokConnector`

---

## Fase 1 — Connector core (struktur + contract)

- [x] `connector/types.ts` — `TokenSet`, `TikTokShopConnectorConfig` sesuai kontrak; field spesifik
      TikTok (`openId`, `shopCipher`, `sellerName` di `TokenSet`; `baseUrl`, `serviceIds`,
      `shopType`, `refreshThresholdMs` di config).
- [x] `connector/token-store.ts` — `interface TokenStore` + `InMemoryTokenStore` (dengan `keys()`).
- [x] `connector/connector.ts` — class `TikTokShopConnector` (multi-seller):
  - `buildAuthUrl(shopId, state?)` → pakai `buildAuthUrl()` yang ada di `src/auth.ts`; `shopId`
    disisipkan ke query redirect.
  - `handleCallback(shopId, code)` → panggil `exchangeAuthCode()` yang ada di `src/auth.ts`, parse
    response jadi `TokenSet` (akses di `data`, expiresAt dari `access_token_expire_in`), simpan.
  - `refresh(shopId)` → inline POST `/authorization/202309/token/refresh` (grant_type=refresh_token)
    karena primitif refresh belum ada; update store. (→ diformalkan di Fase 2.)
  - `getClient(shopId)` (async) → return `TikTokClient` ter-inject accessToken (`x-tts-access-token`)
    + shopCipher; auto-refresh saat `expiresAt` mendekat di Fase 2.
  - `listShopIds()` — union dari `keys()` store + Set internal connector.
- [x] `connector/index.ts` — `createTikTokShopConnector(config)`.
- [x] Ekspor connector dari `src/index.ts` (`export * from './connector'`).

> Pilihan nama: `TikTokShopConnector` (bukan `TikTokConnector`) — menyesuaikan nama package
> `@mixos-go/tiktok-shop-sdk`.

## Fase 2 — Fix OAuth primitif + token injection runtime

Sebelum connector bisa dipakai penuh, perbaiki primitif OAuth yang ada:

- [x] **Bug `serviceIds`**: `buildAuthUrl` (`src/auth.ts`) kini menulis `service_ids` ke query,
      di-join `;` (`[a,b]` → `service_ids=a;b`). Diverifikasi: URL authorize memuat
      `service_ids=1001%3B1002`.
- [x] **`category` & `shop_type` hardcoded**: `exchangeAuthCode` & `refreshAccessToken` kini terima
      opsi `shopType` (default `0`) & `category` (default `''`) lewat `TokenExchangeOptions`;
      connector meneruskan `shopType`/`category` dari config. Diverifikasi: token call memuat
      `shop_type` & `category` sesuai override.
- [x] `exchangeAuthCode` & `refreshAccessToken` kini mengembalikan `TokenResponse` ter-struktur
      (`code`/`message`/`data{...}`), bukan `any`. Connector memakai helper `unwrap` (`data ?? body`)
      + `pickExpiresIn` (access_token_expire_in → expires_in → expire_in, dengan narrowing safe).
- [x] **Keputusan injection (b)**: `TikTokClient` (src/client.ts) ditambah optional hook
      `beforeRequest` (dipanggil di awal tiap `request`) + `updateToken(accessToken?, shopCipher?)`
      (field `defaults` diubah mutable). Additif, non-breaking.
- [x] Implement auto-refresh: `beforeRequest` cek `expiresAt` di store; bila
      `expiresAt - now < refreshThresholdMs` → `refresh(shopId)` lalu `client.updateToken(...)`.
      Terverifikasi manual: 3 request paralel saat expiry mendekat → refresh 1x, 3 sukses, store update.
- [x] Race / single-flight: `Map<shopId, Promise<TokenSet>>` `refreshing` + `.finally()` cleanup.

## Fase 3 — Multi-seller switch

- [x] `getClient(shopId)` utk shop berbeda menghasilkan client dgn token (dan `shopCipher`) sendiri.
      Terverifikasi manual: shop S1 & S2 → header `x-tts-access-token=atA/atB` (tidak tercampur).
      **Bonus bug fix**: `updateToken` kini tidak menimpa `shopCipher` default, lihat `src/client.ts`.
- [x] Test isolasi antar shop (token + shop_cipher tidak tercampur) — verifikasi manual di atas.

## Fase 4 — Testing (connector)

- [ ] Unit test `TokenStore` (in-memory get/set/delete).
- [ ] Unit test `buildAuthUrl` termasuk opsi `serviceIds` (regresi bug) & `category`/`shop_type`
      override.
- [ ] Unit test `TikTokConnector` pakai mock (tanpa hit API asli): buildAuthUrl, handleCallback
      (parse token + expire), refresh, auto-refresh, error path (token habis/belum ada).
- [ ] Unit test isolasi multi-seller (2 shop).
- [ ] Smoke test signing tetap hijau (jangan rusak `sign()`).

## Fase 5 — Docs & release

- [ ] Update `sdk/README.md`: contoh OAuth flow multi-seller (+ header `x-tts-access-token`,
      `shop_cipher`, refresh).
- [ ] Bump version + publish ke GitHub Packages.

---

## Catatan platform (mulai implement dari sini)

- Kredensial: `TikTokCredentials { app_key, app_secret }` (`src/types.ts`).
- Signing: `src/client.ts sign()` — HMAC-SHA256, `app_secret + path + sorted(query)+body + app_secret`;
  `access_token` TIDAK di query, dikirim via header `x-tts-access-token`.
- OAuth sudah ada: `buildAuthUrl` + `exchangeAuthCode` (`src/auth.ts`). **Belum ada refresh**.
- `TikTokClient.request()` terima `opts.access_token`/`opts.shop_cipher` per-call → jalur bagus
  untuk auto-inject. Field client `readonly` (perlu keputusan injeksi di Fase 2).
- Gap connector yang dilengkapi: refreshAccessToken, TokenStore, expiry tracking, auto-refresh,
  multi-seller, tipe token ter-struktur, + fix bug primitif OAuth.
