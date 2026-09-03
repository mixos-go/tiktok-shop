---
title: GetCoupon
category: promotion
api_name: GetCoupon
method: GET
path: /promotion/202406/coupons/{coupon_id}
version: 202406
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** promotion
**API:** GetCoupon

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/promotion/202406/coupons/{coupon_id}

## API Description
Use this API to get the full details of a coupon matching the {coupon_id}.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| coupon_id (path) | string | Yes | Coupon id. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.coupon | object | No | Coupon. |
| data.coupon.claim_duration | object | No | Claimable period of the coupon. |
| data.coupon.claim_duration.end_time | integer | No | The UNIX timestamp after which a shopper can no longer claim the coupon. (e.g. 1709654340) |
| data.coupon.claim_duration.start_time | integer | No | The UNIX timestamp from which a shopper can claim the coupon. (e.g. 1709568000) |
| data.coupon.create_time | integer | No | The UNIX timestamp of when the coupon was created. (e.g. 1661756811000) |
| data.coupon.creation_source | string | No | The system where the coupon is created: - `SELLER_CENTER`: Created via the Promotions section of TikTok Seller Center. - `SELLER_APP`: Created via the TikTok Seller Mobile App. - `TTS_CRM`: Created via the TikTok Shop CRM. (e.g. SELLER_CENTER) |
| data.coupon.discount | object | No | Discount |
| data.coupon.discount.max_discount | object | No | Optional monetary upper limit of the total discount amount when `type == ""PERCENT_OFF""`. |
| data.coupon.discount.max_discount.amount | string | No | Monetary value of the `max_discount`. (e.g. 40) |
| data.coupon.discount.max_discount.currency | string | No | Currency of the `max_discount`. (e.g. USD) |
| data.coupon.discount.percentage | string | No | The discount offered by the coupon, in percentage points. Will appear when `type == PERCENT_OFF'`. (e.g. 30) |
| data.coupon.discount.reduction_amount | object | No | Will appear when `type == 'AMOUNT_OFF'`. |
| data.coupon.discount.reduction_amount.amount | string | No | Monetary value of an `AMOUNT_OFF` discount. (e.g. 30.5) |
| data.coupon.discount.reduction_amount.currency | string | No | Currency of the discount amount. (e.g. USD) |
| data.coupon.discount.type | string | No | The type of discount offered by the coupon. Possible enumerations are: - `AMOUNT_OFF`: Reduces the final price of the item by the specified `reduction_amount` - `PERCENT_OFF`: Reduces the final price by the specified `percentage`. (e.g. AMOUNT_OFF) |
| data.coupon.display_channels | array<string> | No | The channels in which the coupons can be displayed or distributed: - `ALL`: All channels. - `SHOPPING_CENTER`: Only in TikTok Shop shopping center. - `CHAT`: Only in TT chat. - `LIVE`: Only in TT live. - `PRIVATE`: For promotion code. TikTok users won't know the codes until you show them. - `VIDEO`: Only in short videos. - `SHOWCASE`: Only in showcases. |
| data.coupon.display_type | string | No | The display type of coupons. Values: - `REGULAR`: Regular coupons which are displayed to TikTok users across all display locations available in TTS, including PLPs, PDPs, TikTok Videos, LIVE Rooms, Creator Showcases, and may be shared via TTS Customer Support instant messages. Includes coupons which target select customer segments. - `LIVE`: Coupons which are only displayed to TikTok users in LIVE Rooms. - `CREATOR_EXCLUSIVE`: Coupons that can be claimed through the display channels of the specified creator, such as their LIVE Rooms, and their Creator Showcase. - `CHAT`: Exclusive coupons that may be sent to customers via TTS customer support chat messages, but are not displayed in other display locations. - `PROMO_CODE`: Promo codes do not have dedicated display locations on TikTok, but may be shared with customers in LIVEs, in TikTok videos, or other social media platforms. They can be claimed by customers entering a claim code at checkout or by customers that use a custom promo code landing page URL. (e.g. CHAT ) |
| data.coupon.id | string | No | A unique ID that identifies different coupons. (e.g. 7342461823095965461) |
| data.coupon.live_tasks | array<object> | No | The tasks which the shopper must fulfill before claiming the coupon distributed in TikTok live. Only exists for LIVE coupons in the US and the UK. |
| data.coupon.product_ids | array<string> | No | The IDs of the eligible products when `product_scope == 'SPECIFIC_PRODUCTS'`. |
| data.coupon.product_scope | string | No | The range of the products which the coupon applies to. The possible enumerations are: - `FULL_SHOP`: All products sold in the shop are eligible for the coupon. - `SPECIFIC_PRODUCTS`: Only specified products are eligible for the coupon. The list of specified products are returned in the response of the `get_coupon` API. (e.g. FULL_SHOP) |
| data.coupon.promo_code | string | No | Promotion code. The string contains only Unicode letters or digits. The length of the string is in the range of `[6, 12]`. (e.g. TTS12345) |
| data.coupon.redemption_duration | object | No | Period during which the coupon can be redeemed (i.e. applied to an order). |
| data.coupon.redemption_duration.end_time | integer | No | The UNIX timestamp at which the redemption period ends, if `type == 'ABSOLUTE'`. (e.g. 1709754340) |
| data.coupon.redemption_duration.relative_time | integer | No | The number of days after coupon claim time for which a coupon is valid to be redeemed, `type = 'RELATIVE'`. (e.g. 4) |
| data.coupon.redemption_duration.start_time | integer | No | The UNIX timestamp at which the redemption period starts, if `type == 'ABSOLUTE'`. (e.g. 1709768000) |
| data.coupon.redemption_duration.type | string | No | Values: - `ABSOLUTE`: the redemption period starts from `start_time` and ends at `end_time`. - `RELATIVE`: the redemption period starts from the time the coupon is claimed and lasts for `relative_time`. (e.g. ABSOLUTE) |
| data.coupon.seller_tnc | string | No | Custom terms & conditions optionally uploaded by the seller when configuring the coupon. (e.g. terms & conditions: xxx) |
| data.coupon.status | string | No | Coupon's promotion status. Values: - `NOT_START`: Not available to TikTok users until the coupon's configured start time. - `ONGOING`: Available to TikTok users. - `EXPIRED`: Not available to TikTok users because it has expired. - `DEACTIVATED`: Deactivated by the seller and is not available to TikTok users. (e.g. NOT_START ) |
| data.coupon.target_buyer_segment | string | No | The target buyer segment of the coupon. Possible enumerations are: - `ALL`: May be discovered and claimed by all TTS buyers. - `NEW`:Customers who have never purchased from your shop. - `REPEAT_CUSTOMERS`: People who have previously placed orders in your shop and made another purchase within certain days(30 days for non-US and 90 days for US). - `RECENT_CUSTOMERS`: People who have made their first purchase in your shop in the past certain days(30 days for non-US and 90 days for US). - `FREQUENT_CUSTOMERS`: Customers with more than 1 purchase within the last 90 days. - `LAPSED_CUSTOMERS`: Customers with at least 1 purchase in the past 365 days but no purchases within the last certain days(90 days for non-US and 30 days for US). - `NEW_FOLLOWERS`: People who started following the TikTok account of your shop in the past 30 days. - `EXISTING_ACTIVE_FOLLOWERS`: People who followed the TikTok account of your shop and engaged with your shop through LIVE, short videos or product cards in the past 30 days. (e.g. NEW ) |
| data.coupon.threshold | object | No | Optional minimum purchase criteria that must be met in order to receive the coupon's discount. |
| data.coupon.threshold.min_spend | object | No | When `threshold.type == 'MIN_SPEND'`, a customer must purchase products from the range defined by `product_scope` with a monetary amount greater than or equal to this value, or the customer cannot use the coupon. |
| data.coupon.threshold.min_spend.amount | string | No | Monetary value of the `min_spend`. (e.g. 30) |
| data.coupon.threshold.min_spend.currency | string | No | Currency of the `min_spend` threshold. (e.g. USD) |
| data.coupon.threshold.type | string | No | The type of purchase criteria. Possible enumerations are: - `NONE`: No minimum purchase criteria. - `MIN_SPEND`: Buyer must meet or exceed the minimum spend criteria with eligible products. (e.g. MIN_SPEND) |
| data.coupon.title | string | No | Seller-specified title of the coupon. (e.g. test coupon) |
| data.coupon.update_time | integer | No | The UNIX timestamp of when the coupon was updated. (e.g. 1661756811000) |
| data.coupon.usage_limits | object | No | Limitations for the use of the coupons. |
| data.coupon.usage_limits.redemption_limit | integer | No | The number of times that a claimed coupon can be redeemed across all buyers. (Only available in ID, MY, PH, TH, SG, VN regions.) (e.g. 1000) |
| data.coupon.usage_limits.single_buyer_claim_limit | integer | No | The number of times a single buyer can claim the coupon. (e.g. 30) |
| data.coupon.usage_limits.total_claim_limit | integer | No | The total number of claims allowed for the coupon across all buyers. (e.g. 1000) |
| data.coupon.usage_stats | object | No | Usage statistics |
| data.coupon.usage_stats.claimed_count | integer | No | The number of times that the coupon has been claimed. (e.g. 5) |
| data.coupon.usage_stats.redeemed_count | integer | No | The number of times that a coupon has been redeemed (i.e. applied to an order). (e.g. 0) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
