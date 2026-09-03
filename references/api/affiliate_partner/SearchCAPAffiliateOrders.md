---
title: SearchCAPAffiliateOrders
category: affiliate_partner
api_name: SearchCAPAffiliateOrders
method: POST
path: /affiliate_partner/202504/cap_order/search
version: 202504
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_partner
**API:** SearchCAPAffiliateOrders

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_partner/202504/cap_order/search

## API Description
Search the list of affiliate orders of the specified date range from a MCN or known as CAP - Creator Agency partner

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
| create_time_ge | integer | No | Unix timestamp representing the start of transactions time range one wants to request (e.g. 1623812664) |
| create_time_lt | integer | No | Unix timestamp representing the end of transactions time range one wants to request (e.g. 1623812664) |
| order_id | string | No | Transaction main order ID (e.g. 576962796354307765) |
| order_status | integer | No | Status order for product sales (e.g. 1) |
| product_id | string | No | Unique identifier for Product (e.g. 1729435310697057093) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | Cursor used for searching for more information (e.g. 6AsPQsUMvH3RkchNUPPh22NROHkE0D8pmq/N5M1kHYcZmtRyv9aVrNv65W7Q6tFA+7D1ud64MPNz5OaT) |
| data.orders | array<object> | No | Order list |
| data.orders.skus.actual_bonus_commission | object | No | Actual commission on sales that a creator will receive from seller/advertisers purchasing a specific creative |
| data.orders.skus.actual_bonus_commission.amount | string | No | Price amount for product, such as Rp 1000 (e.g. 100) |
| data.orders.skus.actual_bonus_commission.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.actual_commission | object | No | Commission given to well-performed creators by TTS |
| data.orders.skus.actual_commission.amount | string | No | Price amount for product, such as Rp 1000 (e.g. 100) |
| data.orders.skus.actual_commission.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.actual_commission_base | object | No | The actual commission base is the product sale price multiplied by the number of products sold, excluding returned and refunded orders. |
| data.orders.skus.actual_commission_base.amount | string | No | Price amount for product, such as Rp 1000 (e.g. 100) |
| data.orders.skus.actual_commission_base.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.actual_shop_ads_commission | object | No | actual commission on sales that a creator will receive from seller/advertisers purchasing a specific creative |
| data.orders.skus.actual_shop_ads_commission.amount | string | No | Price amount for product, such as Rp 1000 (e.g. 100) |
| data.orders.skus.actual_shop_ads_commission.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.agency_bonus_commission | object | No | actual total bonus commission on sales that agency will receive after commission split |
| data.orders.skus.agency_bonus_commission.amount | string | No | Price amount for product, such as Rp 1000 (e.g. 99) |
| data.orders.skus.agency_bonus_commission.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.agency_commission | object | No | actual total standard commission on sales that agency will receive after commission split |
| data.orders.skus.agency_commission.amount | string | No | Price amount for product, such as Rp 1000 (e.g. 100) |
| data.orders.skus.agency_commission.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.agency_commission_rate | string | No | Percentage of agency commission (e.g. 10.0) |
| data.orders.skus.agency_shop_ads_commission | object | No | actual total shop ads commission on sales that agency will receive after commission split |
| data.orders.skus.agency_shop_ads_commission.amount | string | No | Price amount for product, such as Rp 1000 (e.g. 99) |
| data.orders.skus.agency_shop_ads_commission.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.attribution_type | string | No | Direct: Orders placed when customers click on links creators shared and buy from the shop. The commission rate is higher than indirect attribution. Indirect: Orders placed from the Recommendations page through links creators shared. The commission rate is lower than direct attribution. (e.g. Direct) |
| data.orders.skus.commission_bonus_rate | string | No | TTS to creator percentage commission bonus (e.g. 3.0) |
| data.orders.skus.commission_model | string | No | Determine order commission be calculated based on fixed commission model or tiering model (e.g. Tiered commission) |
| data.orders.skus.commission_rate | string | No | Between Seller & Creator percentage commission (e.g. 3.0) |
| data.orders.skus.commission_tier_setting | string | No | Between Seller & Creator percentagecommission. When tiering commission model applied, will return each tier's commission rate seller set. (e.g. 3.0 OR 5.0) |
| data.orders.skus.content_id | string | No | Unique identifier for content (e.g. 7494337156519332665 ) |
| data.orders.skus.content_type | string | No | The content format of the creator content through which the order was created. Possible values: - SHOP - VIDEO - LIVE - PRE_LIVE - PROMOTION_PAGE - LINKSHARE (e.g. VIDEO) |
| data.orders.skus.creator_username | string | No | Creator username (e.g. liuyi_id_creator1jigo) |
| data.orders.skus.estimated_bonus_commission | object | No | Estimated commission TTS pays well-performed creators |
| data.orders.skus.estimated_bonus_commission.amount | string | No | Price amount for product, such as Rp 1000 (e.g. 100) |
| data.orders.skus.estimated_bonus_commission.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.estimated_commission | object | No | Estimated commission on sales that a creator will obtain |
| data.orders.skus.estimated_commission.amount | string | No | Price amount for product, such as Rp 1000 (e.g. 99) |
| data.orders.skus.estimated_commission.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.estimated_commission_base | object | No | The estimated commission base is the product sale price multiplied by the number of products sold when the order is created. |
| data.orders.skus.estimated_commission_base.amount | string | No | Price amount for product, such as Rp 1000 (e.g. 99) |
| data.orders.skus.estimated_commission_base.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.estimated_shop_ads_commission | object | No | Estimated commission on sales that a creator will receive from seller/advertisers purchasing a specific creative |
| data.orders.skus.estimated_shop_ads_commission.amount | string | No | Price amount for product, such as Rp 1000 (e.g. 100) |
| data.orders.skus.estimated_shop_ads_commission.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.id | string | No | The SKU identifier. (e.g. 1729478689395213981) |
| data.orders.skus.isr | string | No | Tax amount be charged on behalf the agency by platform, which only used in MX (e.g. 10.0) |
| data.orders.skus.iva | string | No | Tax amount be charged on behalf the agency by platform, which only used in MX (e.g. 10.0) |
| data.orders.skus.open_collaboration_id | string | No | The open collaboration identifier associated with the order. (e.g. 7324371012170024705) |
| data.orders.skus.price | object | No | The SKU selling price information |
| data.orders.skus.price.amount | string | No | Price amount for product, such as USD 1000 (e.g. 99) |
| data.orders.skus.price.currency | string | No | Type of currency use (e.g. USD) |
| data.orders.skus.product_id | string | No | Unique identifier for Product (e.g. 1729435310697057093) |
| data.orders.skus.product_name | string | No | Product name / description (e.g. Black Hoodie) |
| data.orders.skus.quantity | integer | No | Total sku quantity per order (e.g. 1) |
| data.orders.skus.refunded_quantity | integer | No | Number of sku returned per order (e.g. 1) |
| data.orders.skus.returned_quantity | integer | No | Number of sku refunded per order (e.g. 1) |
| data.orders.skus.shop_ads_commission_rate | string | No | Commission on sales that a creator will receive from seller/advertisers purchasing a specific creative (e.g. 5.0) |
| data.orders.skus.shop_name | string | No | Shop / Seller name (e.g. xuyann aaaaa) |
| data.orders.skus.target_collaboration_id | string | No | The target collaboration identifier associated with the order. (e.g. 7324371012170024705) |
| data.orders.skus.total_agency_commission | object | No | Total actual agency commission earned from this order. |
| data.orders.skus.total_agency_commission.amount | string | No | Price amount for product, such as Rp 1000 (e.g. 99) |
| data.orders.skus.total_agency_commission.currency | string | No | Type of currency use (e.g. USD) |
| data.total_count | integer | No | The total number of orders (e.g. 100) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
