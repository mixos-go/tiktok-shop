---
title: SearchCoupons
category: promotion
api_name: SearchCoupons
method: POST
path: /promotion/202406/coupons/search
version: 202406
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** promotion
**API:** SearchCoupons

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/promotion/202406/coupons/search

## API Description
Use this API to get a list of coupons, narrowed down further based on search parameters. The coupons are created in Seller Center or Seller App. For further details of the specific coupon, use `GET Coupon`.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_token (query) | string | No | Page cursor. Omitting this parameter will return the first page of results. |
| page_size (query) | integer | No | The number of coupons returned in one page of results. The range is `[1, 100]`, with a default value of `50`. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| display_type | array<string> | No | The display type of coupons. Values: - `REGULAR`: Regular coupons which are displayed to TikTok users across all display locations available in TTS, including PLPs, PDPs, TikTok Videos, LIVE Rooms, Creator Showcases, and may be shared via TTS Customer Support instant messages. Includes coupons which target select customer segments. - `LIVE`: Coupons which are only displayed to TikTok users in LIVE Rooms. - `CREATOR_EXCLUSIVE`: Coupons that can be claimed through the display channels of the specified creator, such as their LIVE Rooms, and their Creator Showcase. - `CHAT`: Exclusive coupons that may be sent to customers via TTS customer support chat messages, but are not displayed in other display locations. - `PROMO_CODE`: Promo codes do not have dedicated display locations on TikTok, but may be shared with customers in LIVEs, in TikTok videos, or other social media platforms. They can be claimed by customers entering a claim code at checkout or by customers that use a custom promo code landing page URL. |
| status | array<string> | No | Coupon's promotion status. Values: - `NOT_START`: Not available to TikTok users until the coupon's configured start time. - `ONGOING`: Available to TikTok users. - `EXPIRED`: Not available to TikTok users because it has expired. - `DEACTIVATED`: Deactivated by the seller and is not available to TikTok users. |
| title_keyword | string | No | Keywords in the coupon titles to search for. The range of the length is `(0, 100]`. Fuzzy matching not supported. (e.g. Coupon123) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.coupons | array<object> | No | Coupons. |
| data.coupons.claim_duration.end_time | integer | No | The UNIX timestamp from which a shopper can claim the coupon. (e.g. 1709654340) |
| data.coupons.claim_duration.start_time | integer | No | The UNIX timestamp from which a shopper can claim the coupon. (e.g. 1709568000) |
| data.coupons.discount.max_discount | object | No | Optional monetary upper limit of the total discount amount when `type == ""PERCENT_OFF""`. |
| data.coupons.discount.max_discount.amount | string | No | Monetary value of the `max_discount`. (e.g. 40) |
| data.coupons.discount.max_discount.currency | string | No | Currency of the `max_discount`. (e.g. USD) |
| data.coupons.discount.percentage | string | No | The discount offered by the coupon, in percentage points. Will appear when `type == PERCENT_OFF'`. (e.g. 30) |
| data.coupons.discount.reduction_amount | object | No | Will appear when `type == 'AMOUNT_OFF'`. |
| data.coupons.discount.reduction_amount.amount | string | No | Monetary value of an `AMOUNT_OFF` discount. (e.g. 30.5) |
| data.coupons.discount.reduction_amount.currency | string | No | Currency of the discount amount. (e.g. USD) |
| data.coupons.discount.type | string | No | The type of discount offered by the coupon. Possible enumerations are: - `AMOUNT_OFF`: Reduces the final price of the item by the specified `reduction_amount` - `PERCENT_OFF`: Reduces the final price by the specified `percentage`. (e.g. AMOUNT_OFF) |
| data.coupons.redemption_duration.end_time | integer | No | The UNIX timestamp at which the redemption period ends, if `type == 'ABSOLUTE'`. (e.g. 1709754340) |
| data.coupons.redemption_duration.relative_time | integer | No | The number of days after coupon claim time for which a coupon is valid to be redeemed, `type = 'RELATIVE'`. (e.g. 4) |
| data.coupons.redemption_duration.start_time | integer | No | The UNIX timestamp at which the redemption period starts, if `type == 'ABSOLUTE'`. (e.g. 1709768000) |
| data.coupons.redemption_duration.type | string | No | Values: - `ABSOLUTE`: the redemption period starts from `start_time` and ends at `end_time`. - `RELATIVE`: the redemption period starts from the time the coupon is claimed and lasts for `relative_time`. (e.g. ABSOLUTE) |
| data.coupons.threshold.min_spend | object | No | When `threshold.type == 'MIN_SPEND'`, a customer must purchase products from the range defined by `product_scope` with a monetary amount greater than or equal to this value, or the customer cannot use the coupon. |
| data.coupons.threshold.min_spend.amount | string | No | Monetary value of the `min_spend`. (e.g. 30) |
| data.coupons.threshold.min_spend.currency | string | No | Currency of the `min_spend` threshold. (e.g. USD) |
| data.coupons.threshold.type | string | No | The type of purchase criteria. Possible enumerations are: - `NONE`: No minimum purchase criteria. - `MIN_SPEND`: Buyer must meet or exceed the minimum spend criteria with eligible products. (e.g. MIN_SPEND) |
| data.coupons.usage_limits.redemption_limit | integer | No | The number of times that a claimed coupon can be redeemed across all buyers. (Only available in ID, MY, PH, TH, SG, VN regions.) (e.g. 1000) |
| data.coupons.usage_limits.single_buyer_claim_limit | integer | No | The number of times a single buyer can claim the coupon. (e.g. 30) |
| data.coupons.usage_limits.total_claim_limit | integer | No | The total number of claims allowed for the coupon across all buyers. (e.g. 1000) |
| data.next_page_token | string | No | Page cursor for next request. The last page returns "". (e.g. 1661756811000) |
| data.total_count | integer | No | Total coupon count. (e.g. 20) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
