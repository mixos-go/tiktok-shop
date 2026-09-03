---
title: SearchProducts
category: product
api_name: SearchProducts
method: POST
path: /product/202502/products/search
version: 202502
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** SearchProducts

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202502/products/search

## API Description
Retrieve a list of products that meet the specified conditions. This API will only return the key product properties. You can pass a returned product ID to the [Get Product API](https://partner.tiktokshop.com/docv2/page/6509d85b4a0bb702c057fdda) to obtain more details about the product.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_size (query) | integer | Yes | The number of results to be returned per page. Valid range: [1-100] |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the `next_page_token` from a previous response. It is not needed for the first page. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| audit_status | array<string> | No | Filter products by their audit status for TikTok Shop. Possible values: - AUDITING: Returns products where the base version or a post-live edit is currently being audited. - FAILED: Returns products where the base version or a post-live edit has failed audit, or had the audit cancelled. - APPROVED: Returns products that passed the audit and has been listed on the platform. |
| category_version | string | No | Filter products by the category tree version. Possible values based on region: - US: `v2`, represents the 7-level category tree. - Other regions: `v1`, represents the 3-level category tree. Default: Return all products from both `v1` and `v2` category trees. (e.g. v1) |
| create_time_ge | integer | No | Filter products to show only those that are created on or after the specified date and time. Unix timestamp. **Note**: `create_time_ge` and `create_time_le` together constitute the creation time filter condition. - If `create_time_ge` is filled but `create_time_le` is empty, `create_time_le` will default to the current time. - If `create_time_le` is filled but `create_time_ge` is empty, `create_time_ge` will default to the earliest shop time. (e.g. 1694309208) |
| create_time_le | integer | No | Filter products to show only those that are created on or before the specified date and time. Unix timestamp. Refer to notes in `create_time_ge` for more usage information. (e.g. 1694319208) |
| listing_platforms | array<string> | No | Filter products by the listing platforms. Possible values: - TOKOPEDIA - TIKTOK_SHOP Default: Return all products regardless of their listing platform. Applicable only for sellers that migrated from Tokopedia. **Note**: - You must also specify a `status` value other than `ALL` when filtering by listing platforms. Returning all statuses is not supported. - If you pass in one platform, the search will return products that are listed on that platform, including those that are listed on both platforms. - If you pass in `["TIKTOK_SHOP", "TOKOPEDIA"]`, only products listed on both platforms will be returned, not those listed on just one. |
| listing_quality_tiers | array<string> | No | Filter products by their listing quality tier. Possible values: - POOR - FAIR - GOOD Default: Returns all **Note**: Available only for the US market. |
| return_draft_version | boolean | No | Filter products to show only those that have a draft. - true: Returns products in their draft version only. Excludes those without a draft. - false: Returns all products regardless of whether they have a draft. Default: false **Note**: Applicable only if the product status filter is `ALL`, `DRAFT`, `ACTIVATE`, `SELLER_DEACTIVATED`, or `PLATFORM_DEACTIVATED`. (e.g. True) |
| seller_skus | array<string> | No | Filter products by these seller SKU codes. |
| sku_ids | array<string> | No | Filter products by SKU IDs. Max count: 10 |
| sns_filter | string | No | Filter products by their Subscribe and Save (SNS) status. Possible values: - CONFIGURED - ELIGIBLE (e.g. CONFIGURED) |
| status | string | No | Filter products based on the product's base version. In other words, this filter does not apply to post-live drafts or edits. For example, `status=DRAFT` returns only unpublished products in the DRAFT state, not live products with an active draft. Possible values: - ALL - DRAFT - PENDING - FAILED - ACTIVATE - SELLER_DEACTIVATED - PLATFORM_DEACTIVATED - FREEZE - DELETED Default: ALL (e.g. ALL) |
| update_time_ge | integer | No | Filter products to show only those that are updated on or after the specified date and time. Unix timestamp. **Note**: `update_time_ge` and `update_time_le` together define the update time filter condition. - If `update_time_ge` is filled but `update_time_le` is empty, `update_time_le` will default to the current time. - If `update_time_le` is filled but `update_time_ge` is empty, `update_time_ge` will default to the earliest shop time. (e.g. 1694319208) |
| update_time_le | integer | No | Filter products to show only those that are updated on or before the specified date and time. Unix timestamp. Refer to notes in `update_time_ge` for more usage information. (e.g. 1694319208) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. Provide this value in the `page_token` parameter of your request if the current response does not return all the results. (e.g. b2Zmc2V0PTAK) |
| data.products | array<object> | No | The list of products that meet the query conditions. |
| data.products.audit.pre_approved_reasons | array<string> | No | The reason why the product is pre-approved. Applicable only if `audit.status=PRE_APPROVED`, otherwise returns an empty array. Possible values: - KYC_PENDING: The seller's onboarding (KYC - Know Your Customer information) is incomplete or awaiting processing. - RESTRICTED_CATEGORY_PENDING: The product is in a restricted category, and category approval is still pending. To request access, submit an application through the Qualification Center on TikTok Shop Seller Center. Applicable only for the US market. |
| data.products.audit.status | string | No | The product audit status. Possible values: - NONE: The product is not applicable for audit as it is still in a draft, frozen, or deactivated state. - AUDITING: The product is currently being audited. - FAILED: The product failed the audit, or the audit was cancelled. - PRE_APPROVED: The product has passed the audit but is not yet listed due to pending prerequisites. - APPROVED: The product passed the audit and has been listed on the platform. (e.g. AUDITING) |
| data.products.skus.list_price.amount | string | No | The price amount. (e.g. 1) |
| data.products.skus.list_price.currency | string | No | The currency. Possible values: USD (e.g. USD) |
| data.products.skus.pre_sale.fulfillment_type | object | No | Information about the type of pre-sale order fulfillment and the corresponding timeframe. - `handling_duration_days` is for fulfillment with an extended duration. - `release_date` is for starting fulfillment on a fixed date. |
| data.products.skus.pre_sale.fulfillment_type.handling_duration_days | integer | No | The desired duration for handling a pre-sale order and handing it over to a shipping carrier. Applicable only for the following regions and pre-sale type: **US** - `MADE_TO_ORDER`: Business days - `CUSTOM`: Business days **UK, EU, SEA, JP, and LATAM** - `PRE_ORDER`: Calendar days (e.g. 7) |
| data.products.skus.pre_sale.fulfillment_type.release_date | integer | No | The date on which the product gets converted into a regular product and becomes available for general purchase. On this date, order handling will also start, changing the status of the order to [`AWAITING_SHIPMENT`](https://partner.tiktokshop.com/docv2/page/650b1b4bbace3e02b76d1011). Applicable only for `PRE_ORDER` in the US. **Note**: This date is a unix timestamp (seconds) based on the seller-selected timezone in Seller Center. (e.g. 1619611761) |
| data.products.skus.pre_sale.type | string | No | The type of pre-sale. Possible values based on the region: **US** - `PRE_ORDER`: The product is not yet available or released. Fulfillment can be extended by specifying a release date. - `MADE_TO_ORDER`: The product is produced only after the order is received. Fulfillment can be extended by specifying a duration. - `CUSTOM`: The product requires a fulfillment timeline that exceeds the standard due to other factors. Fulfillment can be extended by specifying a duration. **UK, EU, SEA, JP, and LATAM** - `PRE_ORDER`: The product is not yet available or released. Fulfillment can be extended by specifying a duration. (e.g. PRE_ORDER) |
| data.products.skus.price.currency | string | No | The currency. Possible values: - BRL: Brazil - EUR: France, Germany, Ireland, Italy, Spain - GBP: United Kingdom - IDR: Indonesia - JPY: Japan - MXN: Mexico - MYR: Malaysia - PHP: Philippines - SGD: Singapore - THB: Thailand - USD: United States - VND: Vietnam (e.g. USD) |
| data.products.skus.price.sale_price | string | No | **Global sellers** The SKU's **local display price** shown on the product page before any discounts. (e.g. 121.11) |
| data.products.skus.price.tax_exclusive_price | string | No | **Local sellers/Intra-EU sellers** The SKU's **local display price** shown on the product page before any discounts. **Global sellers** The SKU's **local pre-tax price**. This excludes any applicable charges such as cross-border shipping costs, taxes, and other fees, and therefore does not appear on the product page. **Note**: Tax-exclusive pricing does not apply to the JP market, therefore this value is the same as `sale_price`. (e.g. 111.01) |
| data.products.skus.status_info.deactivation_source | string | No | The deactivation source of the SKU with `DEACTIVATED` status. Possible values: - SELLER: Indicates that the seller deactivated the SKU - PLATFORM: Indicates that the platform de-activated the SKU due to violation reasons - COMBO_RELATION: Indicates that the platform de-activated the combined-SKU due to the deactivation of sub-SKU. (e.g. PLATFORM) |
| data.products.skus.status_info.status | string | No | The SKU status in TikTok Shop. Possible values: - NORMAL - DEACTIVATED (e.g. DEACTIVATED) |
| data.total_count | integer | No | The total number of products that meet the query conditions. (e.g. 200) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
