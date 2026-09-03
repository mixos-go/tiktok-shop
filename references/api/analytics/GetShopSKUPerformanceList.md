---
title: GetShopSKUPerformanceList
category: analytics
api_name: GetShopSKUPerformanceList
method: GET
path: /analytics/202509/shop_skus/performance
version: 202509
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** analytics
**API:** GetShopSKUPerformanceList

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/analytics/202509/shop_skus/performance

## API Description
Returns a list of SKU performance metrics.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| start_date_ge (query) | string | Yes | Start time (ISO 8601 YYYY-MM-DD format) in shop registered timezone, inclusive. |
| end_date_lt (query) | string | Yes | End time (ISO 8601 YYYY-MM-DD format) in shop registered timezone, exclusive. |
| page_size (query) | integer | No | Number of records per page. The maximum page_size value is 100 |
| page_token (query) | string | No | Page token, indicating the current position. The page_token is empty by default, indicating first position. |
| sort_field (query) | string | No | Sort field, possible values: - gmv (default) - sku_orders - units_sold |
| sort_order (query) | string | No | Sort direction, possible values: - DESC (default) - ASC |
| category_filter (query) | array<string> | No | Category id array |
| product_status_filter (query) | string | No | LIVE INACTIVE ALL (default) |
| product_ids (query) | array<string> | No | Filter SKUs by product IDs. If product_ids are provided, the API will only return SKUs for the given product IDs, otherwise it will return all SKUs for the shop |
| currency (query) | string | No | Currency: - USD: US dollars - LOCAL (default): Local currency where the shop is located |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.latest_available_date | string | No | Latest date in local timezone where data is ready (ISO 8601 format). (e.g. 2024-04-07) |
| data.next_page_token | string | No | Page token for the next page request. (e.g. cGFnZV9udW1iZXI9MQ==) |
| data.skus | array<object> | No | List of SKU performance metrics. |
| data.skus.gmv.amount | string | No | GMV amount in the corresponding currency. (e.g. 0) |
| data.skus.gmv.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. USD) |
| data.total_count | integer | No | Total number of SKUs. (e.g. 20) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
