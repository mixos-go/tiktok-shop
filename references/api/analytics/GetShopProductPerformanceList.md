---
title: GetShopProductPerformanceList
category: analytics
api_name: GetShopProductPerformanceList
method: GET
path: /analytics/202509/shop_products/performance
version: 202509
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** analytics
**API:** GetShopProductPerformanceList

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/analytics/202509/shop_products/performance

## API Description
Returns a list of product performance overview metrics.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| start_date_ge (query) | string | Yes | Start date (ISO 8601 YYYY-MM-DD format) in shop registered timezone. In the parameter name, "ge" refers to "greater than or equal to" (inclusive) |
| end_date_lt (query) | string | Yes | End date (ISO 8601 YYYY-MM-DD format) in shop registered timezone. In the parameter name, "lt" refers to "less than" (exclusive) |
| page_size (query) | integer | No | Number of products per page. Max value: 100 Default value: 10 |
| page_token (query) | string | No | Page token, indicating the current position. Used for requesting next page data. Leave this field empty for first time queries. |
| sort_field (query) | string | No | Field to sort on. Default: gmv Available values: - gmv - items_sold - orders |
| sort_order (query) | string | No | Sort direction. Available values: ASC, DESC Default value: DESC * ASC: ascending * DESC: descending |
| currency (query) | string | No | Currency. Available values: USD, LOCAL Default value: LOCAL * USD: US dollars * LOCAL: local currency where the shop is located |
| category_filter (query) | array<string> | No | Category id array |
| product_status_filter (query) | string | No | LIVE INACTIVE ALL (default) |
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
| data.products | array<object> | No | List of product performance metrics. |
| data.products.overall_performance.gmv | object | No | Gross merchandise value: Total amount paid for orders during the selected period, including canceled and refunded orders. |
| data.products.overall_performance.gmv.amount | string | No | GMV amount in the corresponding currency. (e.g. 395.03) |
| data.products.overall_performance.gmv.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. GBP) |
| data.products.overall_performance.items_sold | integer | No | Number of items sold. (e.g. 12) |
| data.products.overall_performance.orders | integer | No | Number of orders. (e.g. 12) |
| data.total_count | integer | No | Total number of products. (e.g. 10) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
