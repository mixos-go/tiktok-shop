import { buildAuthUrl, exchangeAuthCode, refreshAccessToken, TokenResponse } from '../auth'
import { TikTokClient } from '../client'
import { TikTokCredentials, TikTokError } from '../types'
import { InMemoryTokenStore, TokenStore } from './token-store'
import { TikTokShopConnectorConfig, TokenSet } from './types'

const DEFAULT_BASE = 'https://open-api.tiktokglobalshop.com'

function pickExpiresIn(data: NonNullable<TokenResponse['data']>): number | undefined {
  const v: unknown = data.access_token_expire_in ?? data.expires_in ?? data.expire_in
  return typeof v === 'number' ? v : v === undefined ? undefined : Number(v)
}

function toTokenSet(data: NonNullable<TokenResponse['data']>, shopId: string): TokenSet {
  const accessToken = data.access_token
  if (accessToken === undefined) return {} as TokenSet
  return {
    accessToken,
    refreshToken: data.refresh_token,
    expiresAt:
      pickExpiresIn(data) === undefined ? undefined : Date.now() + pickExpiresIn(data)! * 1000,
    shopId,
    openId: data.open_id,
    sellerName: data.seller_name,
  }
}

function unwrap(json: TokenResponse | undefined): NonNullable<TokenResponse['data']> {
  return (json?.data ?? json ?? {}) as NonNullable<TokenResponse['data']>
}

/**
 * Multi-seller OAuth connector untuk TikTok Shop Open Platform.
 *
 * Satu instance, banyak shop: token disimpan per `shopId` di `TokenStore`.
 * Access token TTS dikirim lewat header `x-tts-access-token` oleh TikTokClient.
 * Access token expire ~7 hari → sebelum tiap request, `beforeRequest` cek
 * `expiresAt` dan auto-refresh (single-flight) bila mendekat `< refreshThresholdMs`.
 */
export class TikTokShopConnector {
  readonly credentials: TikTokCredentials
  readonly redirectUri: string
  readonly baseUrl: string
  readonly serviceIds?: string[]
  readonly shopType: number
  readonly category?: string
  readonly refreshThresholdMs: number

  private readonly store: TokenStore
  private readonly fetchImpl: typeof fetch
  private readonly shopIds = new Set<string>()
  /** Single-flight refresh per shop: beberapa request paralel tidak refresh dobel. */
  private readonly refreshing = new Map<string, Promise<TokenSet>>()

  constructor(config: TikTokShopConnectorConfig) {
    this.credentials = config.credentials
    this.redirectUri = config.redirectUri
    this.baseUrl = config.baseUrl ?? DEFAULT_BASE
    this.serviceIds = config.serviceIds
    this.shopType = config.shopType ?? 0
    this.category = config.category
    this.refreshThresholdMs = config.refreshThresholdMs ?? 5 * 60_000
    this.store = config.store ?? new InMemoryTokenStore()
    this.fetchImpl = config.fetch ?? globalThis.fetch
  }

  /**
   * URL OAuth yang harus dikunjungi seller untuk authorize shop-nya.
   * `shopId` disisipkan ke query redirect (caller tahu shop mana yang authorize);
   * `state` dipasang ke parameter `state` TikTok. `serviceIds` di-wire ke query
   * `service_ids` (join ';'), `shopType` ke `shop_type`.
   */
  buildAuthUrl(shopId: string, state?: string): string {
    const redirect = new URL(this.redirectUri)
    redirect.searchParams.set('shop_id', shopId)
    return buildAuthUrl(this.credentials, redirect.toString(), {
      baseUrl: this.baseUrl,
      state: state ?? '',
      shopType: this.shopType,
      serviceIds: this.serviceIds,
    })
  }

  /** Exchange `code` hasil callback → token, simpan ke store, return TokenSet. */
  async handleCallback(shopId: string, code: string): Promise<TokenSet> {
    const json = await exchangeAuthCode(this.credentials, code, {
      baseUrl: this.baseUrl,
      shopType: this.shopType,
      category: this.category ?? '',
      fetch: this.fetchImpl,
    })
    const data = unwrap(json)
    if (data.access_token === undefined) {
      throw new TikTokError('Token exchange gagal: response tidak berisi access_token', { body: json })
    }
    const token = toTokenSet(data, shopId)
    await this.store.set(shopId, token)
    this.shopIds.add(shopId)
    return token
  }

  /** Refresh token untuk shop tertentu, update store (pakai primitif auth.ts). */
  async refresh(shopId: string): Promise<TokenSet> {
    const current = await this.store.get(shopId)
    if (current === undefined || current.refreshToken === undefined) {
      throw new TikTokError(`Shop ${shopId} belum punya refresh_token. Panggil handleCallback(shopId, code) dulu.`)
    }
    const json = await refreshAccessToken(this.credentials, current.refreshToken, {
      baseUrl: this.baseUrl,
      fetch: this.fetchImpl,
    })
    const data = unwrap(json)
    if (data.access_token === undefined) {
      throw new TikTokError('Refresh gagal: response tidak berisi access_token', { body: json })
    }
    const token: TokenSet = {
      ...toTokenSet(data, shopId),
      refreshToken: data.refresh_token ?? current.refreshToken,
      openId: data.open_id ?? current.openId,
      sellerName: data.seller_name ?? current.sellerName,
    }
    await this.store.set(shopId, token)
    this.shopIds.add(shopId)
    return token
  }

  /**
   * Client untuk satu shop dengan access_token (header x-tts-access-token) +
   * shopCipher ter-inject. Sebelum tiap request, `beforeRequest` mengecek
   * `expiresAt`: bila mendekat token di-refresh dulu (single-flight) lalu
   * token baru di-inject ke client.
   */
  async getClient(shopId: string): Promise<TikTokClient> {
    const token = await this.store.get(shopId)
    if (token === undefined) {
      throw new TikTokError(`Shop ${shopId} belum connect. Panggil handleCallback(shopId, code) dulu.`)
    }
    const client = new TikTokClient({
      credentials: this.credentials,
      accessToken: typeof token.accessToken === 'string' ? token.accessToken : undefined,
      shopCipher: typeof token.shopCipher === 'string' ? token.shopCipher : undefined,
      fetch: this.fetchImpl,
      beforeRequest: () =>
        this.ensureFreshToken(shopId).then((fresh) => {
          client.updateToken(fresh.accessToken)
        }),
    })
    return client
  }

  /** Daftar shop yang sudah pernah connect (punya token di store). */
  listShopIds(): string[] {
    const store = this.store as { keys?: () => readonly string[] }
    const fromStore = store.keys ? store.keys() : []
    return Array.from(new Set([...fromStore, ...this.shopIds]))
  }

  /** Token saat ini dari store; bila tak ada → error jelas. */
  private async ensureFreshToken(shopId: string): Promise<TokenSet> {
    const token = await this.store.get(shopId)
    if (token === undefined) {
      throw new TikTokError(`Shop ${shopId} belum connect. Panggil handleCallback(shopId, code) dulu.`)
    }
    const expired =
      token.expiresAt !== undefined && token.expiresAt - Date.now() < this.refreshThresholdMs
    if (expired) return this.ensureFresh(shopId)
    return token
  }

  /** Auto-refresh single-flight per shop agar request paralel tak refresh dobel. */
  private ensureFresh(shopId: string): Promise<TokenSet> {
    const inFlight = this.refreshing.get(shopId)
    if (inFlight !== undefined) return inFlight
    const p = this.refresh(shopId).finally(() => {
      this.refreshing.delete(shopId)
    })
    this.refreshing.set(shopId, p)
    return p
  }
}