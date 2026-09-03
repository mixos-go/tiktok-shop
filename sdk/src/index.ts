import { TikTokClient } from './client'
import { TikTokCredentials, TikTokError, TikTokRequestOptions } from './types'
import * as generated from './generated'

export * from './types'
export * from './client'
export * from './auth'
export { TikTokClient } from './client'
export { generated }

// Re-export every category client class.
export {
  TikTokAffiliateApi,
  TikTokAffiliateCreatorApi,
  TikTokAffiliatePartnerApi,
  TikTokAffiliateSellerApi,
  TikTokAnalyticsApi,
  TikTokAuthorizationApi,
  TikTokCustomerEngagementApi,
  TikTokCustomerServiceApi,
  TikTokDataReconciliationApi,
  TikTokEpharmacyApi,
  TikTokEventApi,
  TikTokFbtApi,
  TikTokFinanceApi,
  TikTokFulfillmentApi,
  TikTokGsFullServiceCommodityApi,
  TikTokGsFullServiceInventoryApi,
  TikTokGsFullServiceShipmentApi,
  TikTokLogisticsApi,
  TikTokOrderApi,
  TikTokProductApi,
  TikTokPromotionApi,
  TikTokReturnRefundApi,
  TikTokReviewRatingApi,
  TikTokSellerApi,
  TikTokSupplyChainApi,
} from './generated'
import {
  TikTokAffiliateApi,
  TikTokAffiliateCreatorApi,
  TikTokAffiliatePartnerApi,
  TikTokAffiliateSellerApi,
  TikTokAnalyticsApi,
  TikTokAuthorizationApi,
  TikTokCustomerEngagementApi,
  TikTokCustomerServiceApi,
  TikTokDataReconciliationApi,
  TikTokEpharmacyApi,
  TikTokEventApi,
  TikTokFbtApi,
  TikTokFinanceApi,
  TikTokFulfillmentApi,
  TikTokGsFullServiceCommodityApi,
  TikTokGsFullServiceInventoryApi,
  TikTokGsFullServiceShipmentApi,
  TikTokLogisticsApi,
  TikTokOrderApi,
  TikTokProductApi,
  TikTokPromotionApi,
  TikTokReturnRefundApi,
  TikTokReviewRatingApi,
  TikTokSellerApi,
  TikTokSupplyChainApi,
} from './generated'

export interface TikTokOptions {
  credentials: TikTokCredentials
  /** Default seller access_token (sent as `x-tts-access-token`). */
  accessToken?: string
  /** Default shop_cipher for shop-scoped calls. */
  shopCipher?: string
  /** Node 18+ native fetch is used by default; override for custom transport. */
  fetch?: typeof fetch
}

/**
 * `TikTokShop` is the main entry point. It wires a low-level `TikTokClient` to
 * all 25 generated category APIs under typed sub-clients.
 *
 * @example
 * import { TikTokShop } from './index'
 *
 * const tiktok = new TikTokShop({
 *   credentials: { app_key: 'YOUR_APP_KEY', app_secret: 'YOUR_APP_SECRET' },
 *   accessToken: 'YOUR_ACCESS_TOKEN',
 *   shopCipher: 'ROW_...',
 * })
 *
 * const res = await tiktok.order.getOrderList({ page_size: 20 })
 */
export class TikTokShop {
  /** Low-level client (signing, endpoint resolution, request). */
  readonly client: TikTokClient
  readonly options: TikTokOptions

  readonly affiliate: TikTokAffiliateApi
  readonly affiliateCreator: TikTokAffiliateCreatorApi
  readonly affiliatePartner: TikTokAffiliatePartnerApi
  readonly affiliateSeller: TikTokAffiliateSellerApi
  readonly analytics: TikTokAnalyticsApi
  readonly authorization: TikTokAuthorizationApi
  readonly customerEngagement: TikTokCustomerEngagementApi
  readonly customerService: TikTokCustomerServiceApi
  readonly dataReconciliation: TikTokDataReconciliationApi
  readonly epharmacy: TikTokEpharmacyApi
  readonly event: TikTokEventApi
  readonly fbt: TikTokFbtApi
  readonly finance: TikTokFinanceApi
  readonly fulfillment: TikTokFulfillmentApi
  readonly gsFullServiceCommodity: TikTokGsFullServiceCommodityApi
  readonly gsFullServiceInventory: TikTokGsFullServiceInventoryApi
  readonly gsFullServiceShipment: TikTokGsFullServiceShipmentApi
  readonly logistics: TikTokLogisticsApi
  readonly order: TikTokOrderApi
  readonly product: TikTokProductApi
  readonly promotion: TikTokPromotionApi
  readonly returnRefund: TikTokReturnRefundApi
  readonly reviewRating: TikTokReviewRatingApi
  readonly seller: TikTokSellerApi
  readonly supplyChain: TikTokSupplyChainApi

  constructor(options: TikTokOptions) {
    this.options = options
    const client = new TikTokClient({
      credentials: options.credentials,
      accessToken: options.accessToken,
      shopCipher: options.shopCipher,
      fetch: options.fetch,
    })
    this.client = client

    this.affiliate = new TikTokAffiliateApi(client)
    this.affiliateCreator = new TikTokAffiliateCreatorApi(client)
    this.affiliatePartner = new TikTokAffiliatePartnerApi(client)
    this.affiliateSeller = new TikTokAffiliateSellerApi(client)
    this.analytics = new TikTokAnalyticsApi(client)
    this.authorization = new TikTokAuthorizationApi(client)
    this.customerEngagement = new TikTokCustomerEngagementApi(client)
    this.customerService = new TikTokCustomerServiceApi(client)
    this.dataReconciliation = new TikTokDataReconciliationApi(client)
    this.epharmacy = new TikTokEpharmacyApi(client)
    this.event = new TikTokEventApi(client)
    this.fbt = new TikTokFbtApi(client)
    this.finance = new TikTokFinanceApi(client)
    this.fulfillment = new TikTokFulfillmentApi(client)
    this.gsFullServiceCommodity = new TikTokGsFullServiceCommodityApi(client)
    this.gsFullServiceInventory = new TikTokGsFullServiceInventoryApi(client)
    this.gsFullServiceShipment = new TikTokGsFullServiceShipmentApi(client)
    this.logistics = new TikTokLogisticsApi(client)
    this.order = new TikTokOrderApi(client)
    this.product = new TikTokProductApi(client)
    this.promotion = new TikTokPromotionApi(client)
    this.returnRefund = new TikTokReturnRefundApi(client)
    this.reviewRating = new TikTokReviewRatingApi(client)
    this.seller = new TikTokSellerApi(client)
    this.supplyChain = new TikTokSupplyChainApi(client)
  }
}

export { TikTokError }

// Re-export request options type name for convenience.
export type { TikTokRequestOptions }
