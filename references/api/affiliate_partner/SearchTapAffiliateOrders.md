---
title: SearchTapAffiliateOrders
category: affiliate_partner
api_name: SearchTapAffiliateOrders
method: POST
path: /affiliate_partner/202411/orders/search
version: 202411
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_partner
**API:** SearchTapAffiliateOrders

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_partner/202411/orders/search

## API Description
TAP can use this API to retrieve a list of affiliate orders and track the affiliate conversions.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_token (query) | string | No | The next page token |
| page_size (query) | integer | Yes | The default is 20, it must be positive integer, the range is 1-100 |
| category_asset_cipher (query) | string | Yes | The partner identifier used in API requests. Retrieve this value by using the [Get Authorized Category Assets API] (https://partner.tiktokshop.com/docv2/page/666012dd609d4402cc3be995). |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| campaign_id | string | No | Filter orders by a TAP campaign using its identifier. (e.g. 7324371012170024705) |
| create_time_ge | integer | No | Filter orders to show only those that are created on or after the specified date and time. Unix timestamp. Note: `create_time_ge` and `create_time_lt` together constitute the creation time filter condition. - If `create_time_ge` is filled but `create_time_lt` is empty, `create_time_lt` will default to the current time. - If `create_time_lt` is filled but `create_time_ge` is empty, `create_time_ge` will default to the earliest shop time. (e.g. 1623812664) |
| create_time_lt | integer | No | Filter orders to show only those that are created before the specified date and time. Unix timestamp. Refer to notes in `create_time_ge` for more usage information. (e.g. 1623812664) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | Cursor used for searching for more information (e.g. 6AsPQsUMvH3RkchNUPPh22NROHkE0D8pmq/N5M1kHYcZmtRyv9aVrNv65W7Q6tFA+7D1ud64MPNz5OaT) |
| data.orders | array<object> | No | Order list |
| data.orders.skus.actual_commission_base | object | No | The actual commission base is the item price multiplied by the number of items ordered minus returns at the time the order is completed. |
| data.orders.skus.actual_commission_base.amount | string | No | Price amount for product, such as Rp 1000 (e.g. 200) |
| data.orders.skus.actual_commission_base.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.actual_creator_commission | object | No | Actual TAP commission x creator commission rate |
| data.orders.skus.actual_creator_commission.amount | string | No | Price amount for product, such as Rp 1000 (e.g. 100) |
| data.orders.skus.actual_creator_commission.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.actual_creator_commission_reward_fee | object | No | Actual creator commission reward fee |
| data.orders.skus.actual_creator_commission_reward_fee.amount | string | No | The actual fee creators receive from affiliate partners through commission rewards (e.g. 100) |
| data.orders.skus.actual_creator_commission_reward_fee.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.actual_partner_commission_reward_fee | object | No | Actual partner commission reward fee |
| data.orders.skus.actual_partner_commission_reward_fee.amount | string | No | The actual fee affiliate partners earn from commission rewards (e.g. 200) |
| data.orders.skus.actual_partner_commission_reward_fee.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.actual_tap_commission | object | No | Actual commission base x TAP commission rate |
| data.orders.skus.actual_tap_commission.amount | string | No | Price amount for product, such as Rp 1000 (e.g. 99) |
| data.orders.skus.actual_tap_commission.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.campaign_id | string | No | New seller campaign (e.g. 7324371012170024705) |
| data.orders.skus.content_id | string | No | Unique identifier for content (e.g. 7494337156519332665) |
| data.orders.skus.content_type | string | No | The content format of the creator content through which the order was created. Possible values: - SHOP - VIDEO - LIVE - PRE_LIVE - PROMOTION_PAGE - LINKSHARE (e.g. VIDEO) |
| data.orders.skus.creator_commission_rate | integer | No | Between TAP & creator percentage commission (e.g. 3000) |
| data.orders.skus.creator_commission_reward_rate | integer | No | The commission reward rate affiliate partners allocate to creators (e.g. 2000) |
| data.orders.skus.creator_username | string | No | Creator username (e.g. liuyi_id_creator1jigo) |
| data.orders.skus.estimated_commission_base | object | No | The estimated commission base is the item price multiplied by the number of items ordered at the time the order is created. |
| data.orders.skus.estimated_commission_base.amount | string | No | Price amount for product, such as Rp 1000 (e.g. 99) |
| data.orders.skus.estimated_commission_base.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.estimated_creator_commission | object | No | Estimated TAP commission x creator commission rate |
| data.orders.skus.estimated_creator_commission.amount | string | No | Price amount for product, such as Rp 1000 (e.g. 100) |
| data.orders.skus.estimated_creator_commission.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.estimated_creator_commission_reward_fee | object | No | Estimated creator commission reward fee |
| data.orders.skus.estimated_creator_commission_reward_fee.amount | string | No | The estimated fee creators receive from affiliate partners through commission rewards (e.g. 300) |
| data.orders.skus.estimated_creator_commission_reward_fee.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.estimated_partner_commission_reward_fee | object | No | Estimated partner commission reward fee |
| data.orders.skus.estimated_partner_commission_reward_fee.amount | string | No | The estimated fee affiliate partners earn from commission rewards (e.g. 90) |
| data.orders.skus.estimated_partner_commission_reward_fee.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.estimated_tap_commission | object | No | Estimated commission base x TAP commission rate |
| data.orders.skus.estimated_tap_commission.amount | string | No | Price amount for product, such as Rp 1000 (e.g. 500) |
| data.orders.skus.estimated_tap_commission.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.id | string | No | sku ID (e.g. 1729793769377925388) |
| data.orders.skus.partner_commission_reward_rate | integer | No | The additional commission rate TikTok Shop offers to affiliate partners for driving product sales in specific campaigns (e.g. 1000) |
| data.orders.skus.price | object | No | Price |
| data.orders.skus.price.amount | string | No | Price amount for product, such as USD 1000 (e.g. 99) |
| data.orders.skus.price.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.product_id | string | No | Unique identifier for Product (e.g. 1729435310697057093) |
| data.orders.skus.product_name | string | No | Product name / description (e.g. Black Hoodie) |
| data.orders.skus.quantity | integer | No | Total sku quantity per order (e.g. 1) |
| data.orders.skus.refunded_quantity | integer | No | Number of sku refunded per order (e.g. 1) |
| data.orders.skus.returned_quantity | integer | No | Number of sku returned per order (e.g. 1) |
| data.orders.skus.tap_commission_rate | integer | No | Between seller & TAP percentage commission (e.g. 4000) |
| data.total_count | integer | No | The total number of orders (e.g. 100) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
