---
title: GetLIVEProducts
category: affiliate
api_name: GetLIVEProducts
method: GET
path: /affiliate/202309/live_rooms/products
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate
**API:** GetLIVEProducts

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate/202309/live_rooms/products

## API Description
Use this API to retrieve the list of products for a creator's TikTok LIVE if the creator is live streaming. This API can also be used to retrieve the list of products that are prepared for an upcoming TikTok LIVE. There can be as many as 100 products in TikTok LIVE. Note: This API is generally used for when a creator would like to view the products in their TikTok LIVE.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.pinned_product_id | string | No | The product ID that is pinned to the live stream (e.g. 49734297241) |
| data.products | array<object> | No | The product's detailed info fields |
| data.products.commission.commission_rate | integer | No | The commission rate for this product is set by merchants for creators' public promotion. - The range of this value is [100, 8000]. - This value equals actual commission rate multi 10000. For example: 3000 means the actual commission rate is 30.00%, and 3555 means 35.55% (e.g. 2500) |
| data.products.commission.inclusive_reward_commission_rate | integer | No | The reward commission rate that has already been included in the total commission rate. - This value equals actual commission rate multi 10000. For example: 3000 means the actual commission rate is 30.00%, and 3555 means 35.55% (e.g. 500) |
| data.products.price.original_price | object | No | The original SPU prices of the product |
| data.products.price.original_price.currency | string | No | The price currency (e.g. USD) |
| data.products.price.original_price.highest_amount | string | No | The original highest SPU price of the product (e.g. 97500) |
| data.products.price.original_price.lowest_amount | string | No | The original lowest SPU price of the product (e.g. 97500) |
| data.products.price.platform_discount_price | object | No | The SPU prices with platform discount of the product |
| data.products.price.platform_discount_price.currency | string | No | The price currency (e.g. USD) |
| data.products.price.platform_discount_price.highest_amount | string | No | The highest SPU price with platform discount of the product (e.g. 97500) |
| data.products.price.platform_discount_price.lowest_amount | string | No | The lowest SPU price with platform discount of the product (e.g. 97500) |
| data.products.price.seller_discount_price | object | No | The SPU prices with seller discount of the product |
| data.products.price.seller_discount_price.currency | string | No | The price currency (e.g. USD) |
| data.products.price.seller_discount_price.highest_amount | string | No | The highest SPU price with seller discount of the product (e.g. 97500) |
| data.products.price.seller_discount_price.lowest_amount | string | No | The lowest SPU price with seller discount of the product (e.g. 97500) |
| data.products.status.added_status | string | No | The product's added status in the LIVE stream. Field values: NOT_ADDED: The product has not been added to showcase, or to the live stream if the origin field in the request is LIVE. ADDED: The product has been added to the showcase, or to the live stream if the origin field in the request is LIVE. REJECTED: The product is rejected and can not be added. (e.g. ADDED) |
| data.products.status.inventory_status | string | No | The inventory status of the product Field values: IN_STOCK: The product is in stock SOLD_OUT: The product has been sold out (e.g. IN_STOCK) |
| data.products.status.review_status | string | No | The review status represents whether the merchant approves the creator of promoting this product. Field values: APPROVED: The product is approved UNDER_REVIEW: The product is still under review CHANGES_UNDER_REVIEW: The updates to this product are still under review. UNAVAILABLE: The product is unavailable. REJECTED: The product is rejected. ZERO_COMMISSION: the product will not contribute to any commission. (e.g. APPROVED) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
