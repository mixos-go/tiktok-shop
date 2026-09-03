---
title: GetOpenCollaborationProductListByProductIds
category: affiliate_creator
api_name: GetOpenCollaborationProductListByProductIds
method: POST
path: /affiliate_creator/202509/open_collaborations/products
version: 202509
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_creator
**API:** GetOpenCollaborationProductListByProductIds

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_creator/202509/open_collaborations/products

## API Description
Get Product OpenCollaboration Product List By Product Ids

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_ids (query) | array<string> | No | product id list |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.products | array<object> | No | These are the searched products. |
| data.products.commission.amount | string | No | The commission for this product is calculated by multiplying the promotional price with the commission rate for each promotional order. The currency symbol is same as the currency symbol in price (e.g. 123) |
| data.products.commission.currency | string | No | Currency symbol (e.g. USD) |
| data.products.commission.rate | integer | No | - The commission rate for this product is set by merchants for creators public promotion. - The range of this value is [100, 8000]. - This value equals actual commission rate multi 10000. For example: 3000 means the actual commission rate is 30.00%, and 3555 means 35.55% (e.g. 100) |
| data.products.original_price.currency | string | No | The currency in the sale region. (e.g. USD) |
| data.products.original_price.maximum_amount | string | No | The maximum original price of all skus of this product. (e.g. 100.00) |
| data.products.original_price.minimum_amount | string | No | The minimum original price of all skus of this product. (e.g. 12.21) |
| data.products.sales_price.currency | string | No | Currency symbol for sales area (e.g. USD) |
| data.products.sales_price.maximum_amount | string | No | The maximum promotion price of all skus of this product. (e.g. 55.7) |
| data.products.sales_price.minimum_amount | string | No | The minimum promotion price of all skus of this product. (e.g. 34.3) |
| data.products.shop.name | string | No | The name of the shop to which the product belongs. (e.g. Test shop) |
| data.products.shop_ads_commission.rate | integer | No | - The commission rate for this product is set by merchants for creators public promotion. - The range of this value is [100, 8000]. - This value equals actual commission rate multi 10000. For example: 3000 means the actual commission rate is 30.00%, and 3555 means 35.55% (e.g. 100) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
