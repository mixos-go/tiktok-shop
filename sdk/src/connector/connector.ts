import { buildAuthUrl, exchangeAuthCode } from '../auth'
import { sign, TikTokClient } from '../client'
import { TikTokApiResult, TikTokCredentials, TikTokError } from '../types'
import { InMemoryTokenStore, TokenStore } from './token-store'
import { TikTokShopConnectorConfig, TokenSet } from './types'

const DEFAULT_BASE = 'https://open-api.tiktokglobalshop.com'
const TOKEN_PATH = '/authorization/202309/token'
const REFRESH_PATH = '/authorization/202309/token/refresh'

interface TtsTokenData {
  access_token?: string
  refresh_token?: string
  access_token_expire_in?: number
  expires_in?: number
  expire_in?: number
  open_id?: string
  seller_name?: string
}

function pickExpiresIn(data: TtsTokenData): number | undefined {
  return data.access_token_expire_in ?? data.expires_in ?? data.expire_in
}

function toTokenSet(data: TtsTokenData, shopId: string): TokenSet {
  return {
    accessToken: data.access_token!,
    refreshToken: data.refresh_token,
    expiresAt: pickExpiresIn(data) === undefined ? undefined : Date.now() + pickExpiresIn(data)! * 1000,
    shopId,
    openId: data.open_id,
    sellerName: data.seller_name,
  }
}

/**
 * Multi-seller OAuth connector untuk TikTok Shop Open Platform.
 *
 * Satu instance, banyak shop: token disimpan per `shopId` di `TokenStore`.
 * Access token TTS dikirim lewat header `x-tts-access-token` oleh TikTokClient.
 *
 * Catatan Fase 1: endpoint refresh belum ada di auth.ts → diimplement di sini
 * (inline, POST /authorization/202309/token/refresh). Fase 2 connector akan
 * memformalkannya jadi primitif `refreshAccessToken` di auth.ts + perbaiki
 * `serviceIds`/`category`/`shop_type` yang masih hardcoded.
 */
export class TikTokShopConnector {
  readonly credentials: TikTokCredentials
  readonly redirectUri: string
  readonly baseUrl: string
  readonly serviceIds?: string[]
  readonly shopType: number
  readonly refreshThresholdMs: number

  private readonly store: TokenStore
  private readonly fetchImpl: typeof fetch
  private readonly shopIds = new Set<string>()

  constructor(config: TikTokShopConnectorConfig) {
    this.credentials = config.credentials
    this.redirectUri = config.redirectUri
    this.baseUrl = config.baseUrl ?? DEFAULT_BASE
    this.serviceIds = config.serviceIds
    this.shopType = config.shopType ?? 0
    this.refreshThresholdMs = config.refreshThresholdMs ?? 5 * 60_000
    this.store = config.store ?? new InMemoryTokenStore()
    this.fetchImpl = config.fetch ?? globalThis.fetch
  }

  /**
   * URL OAuth yang harus dikunjungi seller untuk authorize shop-nya.
   * `shopId` disisipkan ke query redirect (caller tahu shop mana yang authorize);
   * `state` dipasang ke parameter `state` TikTok.
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
    const json = await exchangeAuthCode(this.credentials, code, { baseUrl: this.baseUrl })
    const data = (json?.data ?? json) as TtsTokenData
    if (data.access_token === undefined) {
      throw new TikTokError('Token exchange gagal: response tidak berisi access_token', { body: json })
    }
    const token = toTokenSet(data, shopId)
    await this.store.set(shopId, token)
    this.shopIds.add(shopId)
    return token
  }

  /** Refresh token untuk shop tertentu, update store. */
  async refresh(shopId: string): Promise<TokenSet> {
    const current = await this.store.get(shopId)
    if (current === undefined || current.refreshToken === undefined) {
      throw new TikTokError(`Shop ${shopId} belum punya refresh_token. Panggil handleCallback(shopId, code) dulu.`)
    }
    const timestamp = Math.floor(Date.now() / 1000)
    const params: Record<string, unknown> = {
      app_key: this.credentials.app_key,
      timestamp: String(timestamp),
      grant_type: 'refresh_token',
      refresh_token: current.refreshToken,
    }
    const query: Record<string, unknown> = { ...params }
    query.sign = sign(this.credentials.app_secret, REFRESH_PATH, query)
    const search = new URLSearchParams()
    for (const [k, v] of Object.entries(query)) search.set(k, String(v))

    let json: TikTokApiResult<unknown> | unknown
    try {
      const res = await this.fetchImpl(`${this.baseUrl}${REFRESH_PATH}?${search.toString()}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      const text = await res.text()
      json = text ? JSON.parse(text) : null
    } catch (e) {
      throw new TikTokError(`Network error saat refresh: ${typeof e === 'object' && e !== null ? (e as Error).message : String(e)}`, {
        body: e,
      })
    }

    const data = ((json as { data?: TtsTokenData } | null)?.data ?? json) as TtsTokenData
    if (data.access_token === undefined) {
      throw new TikTokError('Refresh gagal: response tidak berisi access_token', { body: json })
    }
    const token: TokenSet = {
      accessToken: data.access_token,
      refreshToken: data.refresh_token ?? current.refreshToken,
      expiresAt: pickExpiresIn(data) === undefined ? undefined : Date.now() + pickExpiresIn(data)! * 1000,
      shopId,
      openId: data.open_id ?? current.openId,
      sellerName: data.seller_name ?? current.sellerName,
    }
    await this.store.set(shopId, token)
    this.shopIds.add(shopId)
    return token
  }

  /**
   * Client untuk satu shop dengan access_token (header x-tts-access-token) +
   * shopCipher ter-inject. Auto-refresh saat `expiresAt` mendekat dilakukan
   * pada Fase 2 connector.
   */
  async getClient(shopId: string): Promise<TikTokClient> {
    const token = await this.store.get(shopId)
    if (token === undefined) {
      throw new TikTokError(`Shop ${shopId} belum connect. Panggil handleCallback(shopId, code) dulu.`)
    }
    return new TikTokClient({
      credentials: this.credentials,
      accessToken: typeof token.accessToken === 'string' ? token.accessToken : undefined,
      shopCipher: typeof token.shopCipher === 'string' ? token.shopCipher : undefined,
      fetch: this.fetchImpl,
    })
  }

  /** Daftar shop yang sudah pernah connect (punya token di store). */
  listShopIds(): string[] {
    const store = this.store as { keys?: () => readonly string[] }
    const fromStore = store.keys ? store.keys() : []
    return Array.from(new Set([...fromStore, ...this.shopIds]))
  }
}