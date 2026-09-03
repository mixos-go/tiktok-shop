---
title: GetShopProductslegacy
category: affiliate
api_name: GetShopProductslegacy
method: GET
path: /affiliate/202309/shop_products
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate
**API:** GetShopProductslegacy

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate/202309/shop_products

## API Description
Developer can utilize this API to search and retrieve products information of shop which is bound by a specific creator with specific keywords.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_token (query) | string | No | The pagination offset that determines where you begin your search. If you are making your first request, this will be empty. |
| page_size (query) | integer | Yes | Pagination count determines how many products you'll get after sending the request. 20 is a recommended number. |
| title_keyword (query) | string | No | The title keyword of the product you wish to search by. |
| sort_field (query) | string | No | Sort fields include PRODUCT_ID, PRICE and SALE. If sort_field is empty or invalid, PRODUCT_ID will be set as default. |
| sort_order (query) | string | No | Sort orders include 0:DESC and 1:ASC. If sort order is empty or invalid, DESC will be set as default. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | The pagination token is a cursor used for pagination. The token is returned in the previous pagination query to determine the current position. It will be empty when there aren't any products to search for. (e.g. b2Zmc2V0PTAK) |
| data.products | array<object> | No | The searched product list. It will be empty when there are no search results. |
| data.products.price.amount | string | No | Product price with two decimal places. (e.g. 56.00) |
| data.products.price.currency | string | No | Product price currency, based on region where creators can sell. (e.g. USD) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
