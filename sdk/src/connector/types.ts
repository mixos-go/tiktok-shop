import type { TikTokCredentials } from '../types'
import type { TokenStore } from './token-store'

/**
 * Token pasangan + metadata masa berlaku untuk satu shop/seller.
 * Key store = `shopId` (string). Field tambahan spesifik TikTok Shop:
 * `openId`, `shopCipher`, `sellerName`.
 */
export interface TokenSet {
  accessToken: string
  refreshToken?: string
  /** epoch ms saat token kedaluwarsa (dari access_token_expire_in saat diperoleh). */
  expiresAt?: number
  [key: string]: unknown
}

export interface TikTokShopConnectorConfig {
  credentials: TikTokCredentials
  redirectUri: string
  store?: TokenStore
  /** Override base URL TikTok Shop OpenAPI. Default ke dokumen resmi. */
  baseUrl?: string
  /** Requested scopes/service ids (cross-border) → query `service_ids` (join ';'). */
  serviceIds?: string[]
  /** Authorized shop type: `0` = seller, `1` = authorized user. */
  shopType?: number
  /** Kategori token (opsional, default ''). Overridable lewat config. */
  category?: string
  fetch?: typeof fetch
  /** Sisa waktu (ms) sebelum expiry yang memicu auto-refresh saat getClient. Default 5 mnt. */
  refreshThresholdMs?: number
}