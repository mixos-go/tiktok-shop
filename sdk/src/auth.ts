import * as crypto from 'crypto'
import { TikTokCredentials } from './types'
import { sign } from './client'

const DEFAULT_BASE = 'https://open-api.tiktokglobalshop.com'

export interface TikTokAuthUrlOptions {
  baseUrl?: string
  state?: string
  /** Authorized shop type: `0` = seller, `1` = authorized user. */
  shopType?: number
  /** Requested service/scopes ids (cross-border), joined by `;` in `service_ids`. */
  serviceIds?: string[]
}

export interface TokenExchangeOptions {
  baseUrl?: string
  /** Override `shop_type` (default `0` = seller). */
  shopType?: number
  /** Override `category` (default '' — seller biasa). */
  category?: string
  /** Custom fetch impl (defaults to globalThis.fetch). */
  fetch?: typeof fetch
}

/**
 * Response token ter-struktur dari endpoint TikTok Shop authorization
 * (`/authorization/202309/token` & `/token/refresh`). Payload di `data`;
 * bila `code !== 0` artinya gagal.
 */
export interface TokenResponse {
  code?: number | string
  message?: string
  data?: {
    access_token?: string
    refresh_token?: string
    /** Sisa umur access token (detik). */
    access_token_expire_in?: number
    /** Sisa umur refresh token (detik). */
    refresh_token_expire_in?: number
    open_id?: string
    seller_name?: string
    shop_cipher?: unknown
    [key: string]: unknown
  }
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
  if (opts.serviceIds !== undefined && opts.serviceIds.length > 0) {
    query.service_ids = opts.serviceIds.join(';')
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
  opts: TokenExchangeOptions = {},
): Promise<TokenResponse> {
  const base = opts.baseUrl ?? DEFAULT_BASE
  const path = '/authorization/202309/token'
  const timestamp = Math.floor(Date.now() / 1000)
  const params: Record<string, unknown> = {
    app_key: credentials.app_key,
    timestamp: String(timestamp),
    shop_type: opts.shopType ?? 0,
    code,
    category: opts.category ?? '',
  }
  return postTokenRequest(base, path, credentials, params, opts.fetch)
}

/**
 * Refresh the access token via `grant_type=refresh_token`.
 * Access token TTS expire ~7 hari — refresh sebelum/ketika menjakati kedaluwarsa.
 */
export async function refreshAccessToken(
  credentials: TikTokCredentials,
  refreshToken: string,
  opts: TokenExchangeOptions = {},
): Promise<TokenResponse> {
  const base = opts.baseUrl ?? DEFAULT_BASE
  const path = '/authorization/202309/token/refresh'
  const timestamp = Math.floor(Date.now() / 1000)
  const params: Record<string, unknown> = {
    app_key: credentials.app_key,
    timestamp: String(timestamp),
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  }
  return postTokenRequest(base, path, credentials, params, opts.fetch)
}

async function postTokenRequest(
  base: string,
  path: string,
  credentials: TikTokCredentials,
  params: Record<string, unknown>,
  fetchImpl?: typeof fetch,
): Promise<TokenResponse> {
  const query: Record<string, unknown> = { ...params }
  query.sign = sign(credentials.app_secret, path, query)
  const search = new URLSearchParams()
  for (const [k, v] of Object.entries(query)) search.set(k, String(v))

  const fn = fetchImpl ?? (globalThis as any).fetch
  const res = await fn(`${base}${path}?${search.toString()}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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