import { TikTokCredentials } from './types'

/**
 * Host alur OAuth TikTok Shop (2024+):
 * - authorize  → browser di `services.tiktokshop.com` (ROW) / `services.us.tiktokshop.com` (US)
 * - token      → GET `auth.tiktok-shops.com/api/v2/token/get`
 * - refresh    → GET `auth.tiktok-shops.com/api/v2/token/refresh`
 * - business API → `open-api.tiktokglobalshop.com` (di-sign; lihat `client.sign`).
 *
 * Host authorize/token TIDAK menerima signature; token memakai app_secret + auth_code
 * langsung (grant_type=authorized_code / refresh_token).
 */
export const DEFAULT_AUTHORIZE_BASE = 'https://services.tiktokshop.com'
export const DEFAULT_TOKEN_BASE = 'https://auth.tiktok-shops.com'
export const AUTHORIZE_PATH = '/open/authorize'
export const TOKEN_PATH = '/api/v2/token/get'
export const TOKEN_REFRESH_PATH = '/api/v2/token/refresh'

export interface TikTokAuthUrlOptions {
  /** Override host authorize (default ROW `services.tiktokshop.com`). */
  baseUrl?: string
  state?: string
  /** Authorized shop type: `0` = seller. */
  shopType?: number
  /** Requested service/scopes ids (cross-border), joined by `;` di `service_ids`. */
  serviceIds?: string[]
  /** `service_id` (OAuth client id) bila app Anda memakai model service_id. */
  serviceId?: string
}

export interface TokenExchangeOptions {
  /** Override host token (default `auth.tiktok-shops.com`). */
  baseUrl?: string
  /** Deprecated: v2 token/get tidak lagi pakai shop_type/category. Diabaikan. */
  shopType?: number
  /** Deprecated: v2 token/get tidak lagi pakai category. Diabaikan. */
  category?: string
  /** Custom fetch impl (defaults to globalThis.fetch). */
  fetch?: typeof fetch
}

/**
 * Response token ter-struktur dari endpoint TikTok Shop authorization
 * (`auth.tiktok-shops.com/api/v2/token/get` & `/token/refresh`). Payload di `data`;
 * `access_token_expire_in` di v2 berupa unix timestamp ABSOLUT (detik) — parser
 * `expiresAt` membedakan bolak: nilai > nowSec dianggap epoch, < nowSec = detik tersisa.
 */
export interface TokenResponse {
  code?: number | string
  message?: string
  data?: {
    access_token?: string
    refresh_token?: string
    /** v2: unix timestamp absolut saat access token kedaluwarsa. */
    access_token_expire_in?: number
    /** v2: unix timestamp absolut saat refresh token kedaluwarsa. */
    refresh_token_expire_in?: number
    open_id?: string
    seller_name?: string
    seller_base_region?: string
    user_type?: number | string
    shop_cipher?: unknown
    scopes?: unknown
    granted_scopes?: unknown
    [key: string]: unknown
  }
}

/**
 * Build URL authorize seller TikTok Shop (host `services.tiktokshop.com`).
 *
 * Setelah seller approve, TikTok redirect ke `path` (redirect URL) membawa `code` + `state`.
 * Tukar `code` via `exchangeAuthCode` (beri `auth_code`).
 */
export function buildAuthUrl(
  credentials: TikTokCredentials,
  redirectUrl: string,
  opts: TikTokAuthUrlOptions = {},
): string {
  const base = opts.baseUrl ?? DEFAULT_AUTHORIZE_BASE
  const timestamp = Math.floor(Date.now() / 1000)
  const query: Record<string, unknown> = {
    app_key: credentials.app_key,
    timestamp: String(timestamp),
    state: opts.state ?? '',
    path: redirectUrl,
    shop_type: opts.shopType ?? 0,
  }
  if (opts.serviceId !== undefined) query.service_id = opts.serviceId
  if (opts.serviceIds !== undefined && opts.serviceIds.length > 0) {
    query.service_ids = opts.serviceIds.join(';')
  }
  const search = new URLSearchParams()
  for (const [k, v] of Object.entries(query)) search.set(k, String(v))
  return `${base}${AUTHORIZE_PATH}?${search.toString()}`
}

/**
 * Exchange authorization `code` → access_token + refresh_token.
 *
 * GET `auth.tiktok-shops.com/api/v2/token/get` dengan query:
 * `app_key`, `app_secret`, `auth_code` (= code callback), `grant_type=authorized_code`.
 * Tanpa signature/timestamp (spesial: token endpoint berbeda dari business API).
 */
export async function exchangeAuthCode(
  credentials: TikTokCredentials,
  code: string,
  opts: TokenExchangeOptions = {},
): Promise<TokenResponse> {
  const params: Record<string, unknown> = {
    app_key: credentials.app_key,
    app_secret: credentials.app_secret,
    auth_code: code,
    grant_type: 'authorized_code',
  }
  return getTokenRequest(DEFAULT_TOKEN_BASE, TOKEN_PATH, params, opts.baseUrl, opts.fetch)
}

/**
 * Refresh access token → GET `auth.tiktok-shops.com/api/v2/token/refresh`.
 * Access token expire ~7 hari; refresh sebelum kedaluwarsa (token refresh single-use).
 */
export async function refreshAccessToken(
  credentials: TikTokCredentials,
  refreshToken: string,
  opts: TokenExchangeOptions = {},
): Promise<TokenResponse> {
  const params: Record<string, unknown> = {
    app_key: credentials.app_key,
    app_secret: credentials.app_secret,
    refresh_token: refreshToken,
    grant_type: 'refresh_token',
  }
  return getTokenRequest(DEFAULT_TOKEN_BASE, TOKEN_REFRESH_PATH, params, opts.baseUrl, opts.fetch)
}

async function getTokenRequest(
  defaultBase: string,
  path: string,
  params: Record<string, unknown>,
  overriddenBase: string | undefined,
  fetchImpl?: typeof fetch,
): Promise<TokenResponse> {
  const base = overriddenBase ?? defaultBase
  const search = new URLSearchParams()
  for (const [k, v] of Object.entries(params)) search.set(k, String(v))

  const fn = fetchImpl ?? (globalThis as any).fetch
  const res = await fn(`${base}${path}?${search.toString()}`, {
    method: 'GET',
    headers: { Accept: 'application/json' },
  })
  const text = await res.text()
  let json: TokenResponse | null
  try {
    json = text ? (JSON.parse(text) as TokenResponse) : null
  } catch {
    json = { code: 'invalid_json', message: text } as TokenResponse
  }
  return json ?? {}
}