---
title: GetActivity
category: promotion
api_name: GetActivity
method: GET
path: /promotion/202309/activities/{activity_id}
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** promotion
**API:** GetActivity

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/promotion/202309/activities/{activity_id}

## API Description
Get the details of a product discount or flash deal promotion activity. Product information for `FIXED_PRICE`, `DIRECT_DISCOUNT` and `FLASHSALE` activity that ended more than 180 days will not be returned.For coupon activities, use [Get Coupon](6699dce0de15e502ed219e37).

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| activity_id (path) | string | Yes | Activity ID |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.activity_commands | array<string> | No | Applicable commands to the activity: - IMMUTABLE: The activity cann't be editable or deactivated |
| data.activity_id | string | No | A unique ID that identifies different activities. (e.g. 7136104329798256386) |
| data.activity_type | string | No | The type of activities. Possible enumerations: - `FIXED_PRICE`: product discount activity with fixed price. - `DIRECT_DISCOUNT`: product discount activities with percentage off. - `FLASHSALE`: flash sale activity. - `SHIPPING_DISCOUNT`: shipping fee discount. - `BUY_MORE_SAVE_MORE`: Buy more save more discount. (e.g. FIXED_PRICE) |
| data.begin_time | integer | No | Activity start time. UNIX timestamp. The value must be greater than the value of the current time. (e.g. 1661756811) |
| data.create_time | integer | No | Activity creation time. UNIX timestamp. (e.g. 1661750811) |
| data.discount | object | No | Discount information. |
| data.discount.bmsm_discount | object | No | Configurations related to Buy More Save More (BMSM) promotions. |
| data.discount.bmsm_discount.details | array<object> | No | Configurations regarding BMSM promotions. A maximum of two `tier`s are permitted. `details.threshold_type` and `details.discount_type` must be the same across all `tier`s. |
| data.discount.gift_discount | object | No | Configurations related to Gift With Purchase (GWP) promotions. Only needs to be configured for GWP promotions. |
| data.discount.gift_discount.gift_infos | array<object> | No | Configurations regarding Gift With Purchase (GWP) promotions. A maximum of two `tier`s are permitted in SEA and UK. Only one `tier` is permitted in US. And `threshold_type` must be the same across all `tier`s. |
| data.discount.gift_discount.gift_receiving_type | string | No | The receiving type of gift. Currently only supports one type: `ALL_RECEIVE` (e.g. ALL_RECEIVE) |
| data.discount.shipping_discount | object | No | Shipping discount |
| data.discount.shipping_discount.area_scope | object | No | The (buyer's) geographical areas to which the promotion activity applies. |
| data.discount.shipping_discount.area_scope.specific_areas | array<string> | No | The list of areas for which the promotion activity applies. The valid values that may be included in this list are dependent on the region of the shop. The list of valid values for each shop region are available here: [link](https://partner.tiktokshop.com/docv2/page/67e3b059e7dc4f04a4ff9e09) |
| data.discount.shipping_discount.area_scope.type | string | No | The (buyer's) geographical area to which the promotion activity applies. ​- `WHOLE`: Promotion activity applies to all areas to which the seller offers fulfillment. - `SPECIFIC_AREAS`: Only applies to specific fulfillment areas, as defined in `area_scope.specific_areas`. (e.g. WHOLE) |
| data.discount.shipping_discount.inventory_type | string | No | The inventory types to which the promotion activity applies: - `SELF_FULFILLED`: Only applies to Inventory fulfilled from seller warehouses - `FULFILLED_BY_TIKTOK`: Only applies to Inventory fulfilled by TikTok from FBT (Fulfilled by TikTok) warehouses. - `ALL`: Applies to all inventory of eligible products. Default: `SELF_FULFILLED` `FULFILLED_BY_TIKTOK` and `ALL` can only be set when `product_level`==`SHOP` and `threshold_type=NO_THRESHOLD`. (e.g. SELF_FULFILLED) |
| data.discount.shipping_discount.shipping_method | string | No | The shipping methods to which this promotion applies. - When `STANDARD_SHIPPING`: Only applies to Standard Shipping methods, including Economy. - `EXPRESS_SHIPPING`: Only applies to Express Shipping methods. - `ALL_SHIPPING_METHOD`: Applies to all shipping methods that the shop offers. Default: `STANDARD_SHIPPING` (e.g. STANDARD_SHIPPING) |
| data.discount.shipping_discount.threshold_type | string | No | The type of purchase criteria. Possible enumerations are: - `NO_THRESHOLD`: No minimum purchase criteria. - `MINIMAL_ITEM_QUANTITY`: Buyer must meet or exceed the minimum spend criteria with eligible products. - `MINIMAL_ORDER_AMOUNT`: Buyer must meet or exceed the minimum spend criteria with eligible order. `MINIMAL_ITEM_QUANTITY` and `MINIMAL_ORDER_AMOUNT` can only be set when `product_level==SHOP`. (e.g. MINIMAL_ITEM_QUANTITY) |
| data.discount.shipping_discount.threshold_value | string | No | The purchase threshold of the discount, based on the threshold type, e.g., "3". Determined by user. - When `threshold_type==NO_THRESHOLD`, this value is not required. - When `threshold_type==MINIMAL_ITEM_QUANTITY`, buyer must purchase at least the specified number of eligible products (e.g. must purchase 3 or more eligible products to receive the benefit). If it represents a quantity, it must be an integer. - When `threshold_type==MINIMAL_ORDER_AMOUNT`, the eligible product subtotal for the buyer's order must meet or exceed the specified order value in local currency (e.g. buyer's order subtotal must be at least $3 to receive the benefit). If it represents an order value, it must be limited to two decimal places. (e.g. 3) |
| data.discount.shipping_discount.type | string | No | The type of benefit awarded by the promotion activity. - `FREE_SHIPPING`, the buyer's cost of shipping is reduced to zero. ​- `DISCOUNT_SHIPPING_FEE`, the discount is reduced by the value specified in `shipping_discount.value`. (e.g. DISCOUNT_SHIPPING_FEE) |
| data.discount.shipping_discount.value | string | No | Value of the discount. - When `discount_type==FREE_SHIPPING`, this value is not required. - `discount_type==DISCOUNT_SHIPPING_FEE`, this value is the maximum amount deducted from the buyer's price of shipping in local currency. The value should be limited to two decimal places. (e.g. 10.5) |
| data.duration_type | string | No | The effective time type of the current activity - NORMAL: `begin_time` and `end_time` must be filled - INDEFINITE: `begin_time` and `end_time` aren't required, and the promotion will be a long-term activity which runs indefinitely. 1. `INDEFINITE` is only valid when `activity_type` is `SHIPPING_DISCOUNT`, 2. If `duration_type` is `INDEFINITE`, `start_time` and `end_time` should be 0 Default: NORMAL (e.g. INDEFINITE) |
| data.end_time | integer | No | Activity end time. UNIX timestamp. (e.g. 1661856811) |
| data.participation_limit | array<object> | No | The number of times a buyer can participate in the promotion. |
| data.product_level | string | No | Activity product dimension, values are: - PRODUCT: Product level promotion activity. - VARIATION: SKU level promotion activity. - SHOP: Shop level promotion activity. (e.g. PRODUCT) |
| data.products | array<object> | No | Product List. Note:If `FIXED_PRICE`, `DIRECT_DISCOUNT` and `FLASHSALE` activity that ended more than 180 days,this field is empty. |
| data.products.activity_price.amount | string | No | Activity price amount. (e.g. 70500) |
| data.products.activity_price.currency | string | No | Currency unit of an activity price. (e.g. IDR) |
| data.products.skus.activity_price.amount | string | No | Activity price amount. (e.g. 70500) |
| data.products.skus.activity_price.currency | string | No | Currency unit of an activity price. (e.g. IDR) |
| data.status | string | No | Activity status. Possible values: - DRAFT: Promotion activities with this status are not available to TikTok users. - NOT_START: Promotion activities with this status are not available to TikTok users until the set activity start time. - ONGOING: Promotion activities with this status are available to TikTok users. - EXPIRED: Promotion activities with this status are not available to TikTok users because it has expired. - DEACTIVATED: The activity has been deactivated by the seller and is not available to TikTok users. - NOT_EFFECTIVE: The activity is terminated by the platform and is not available to TikTok users. (e.g. ONGOING) |
| data.target_user_info | object | No | The targeted user type of the promotion. |
| data.target_user_info.user_type | string | No | Possible enumerations are: `ALL_USER` `SHOP_NEW_CUSTOMER` `SHOP_EXISTING_CUSTOMER` `SHOP_REPEAT_CUSTOMER` (e.g. ALL_USER) |
| data.title | string | No | Activity name (50 characters max.) The name must be unique. (e.g. FlashSale 20230707) |
| data.update_time | integer | No | Activity update time. UNIX timestamp. (e.g. 1661750811) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
