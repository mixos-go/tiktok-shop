---
title: GetShowcaseProductsold
category: affiliate
api_name: GetShowcaseProductsold
method: GET
path: /affiliate/202309/showcases/products
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate
**API:** GetShowcaseProductsold

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate/202309/showcases/products

## API Description
This API lists the products in the creator's showcase, paginated by specified page size and iterated through pages by page token for up to 2000 products in the showcase. This API is generally used when a creator would like to view the products in the showcase. The platform will return the product details in the showcase, as well as the products in the livebag if the creator is live streaming.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_size (query) | integer | No | The maximum number of products returned in the response. Default to be 50 if not set. |
| page_token (query) | string | No | The page token |
| origin (query) | string | No | Where the request is sent from. LIVE: sent from live room. The response will return the product IDs in the LIVE as well. The "add_status" field will be whether the product is in the live bag, or whether the product is in the prelive product preparation list if the creator is not live streaming. SHOW |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.live_product_ids | array<string> | No | The product IDs in the livebag among the products returned in this response. |
| data.next_page_token | string | No | Returns the token to get the next page of products if the response does not return all the products, otherwise returns an empty string. (e.g. absdfV231as2V0PTAK) |
| data.products | array<object> | No | The product's detailed info fields |
| data.products.addition.customized_main_image | array<object> | No | The product's customized main image |
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
| data.products.status.added_status | string | No | The product's added status in the showcase/livebag according to the provided origin in the request Field values: NOT_ADDED: The product has not been added to showcase, or to the live stream if the origin field in the request is LIVE. ADDED: The product has been added to the showcase, or to the live room if the origin field in the request is LIVE. REJECTED: The product is rejected and can not be added. (e.g. ADDED) |
| data.products.status.inventory_status | string | No | The inventory status of the product Field values: IN_STOCK: The product is in stock SOLD_OUT: The product has been sold out (e.g. IN_STOCK) |
| data.products.status.is_hidden | boolean | No | Whether the product has been hidden by the creator (e.g. False) |
| data.products.status.review_status | string | No | The review status represents whether the merchant approves the creator of promoting this product. Field values: APPROVED: The product is approved UNDER_REVIEW: The product is still under review CHANGES_UNDER_REVIEW: The updates to this product are still under review. UNAVAILABLE: The product is unavailable. REJECTED: The product is rejected. ZERO_COMMISSION: the product will not contribute to any commission. (e.g. APPROVED) |
| data.total_count | integer | No | Returns the total number of products in the showcase. (e.g. 1570) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
