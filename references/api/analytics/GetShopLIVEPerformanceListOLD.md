---
title: GetShopLIVEPerformanceListOLD
category: analytics
api_name: GetShopLIVEPerformanceListOLD
method: POST
path: /analytics/202505/shop_lives/performance
version: 202505
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** analytics
**API:** GetShopLIVEPerformanceListOLD

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/analytics/202505/shop_lives/performance

## API Description
Returns a list of LIVE stream sessions and associated metrics for a shop.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| start_date_ge (query) | string | Yes | Start date (ISO 8601 YYYY-MM-DD format) in shop registered timezone. In the parameter name, "ge" refers to "greater than or equal to" (inclusive) |
| end_date_lt (query) | string | Yes | End date (ISO 8601 YYYY-MM-DD format) in shop registered timezone. In the parameter name, "lt" refers to "less than" (exclusive) |
| page_size (query) | string | No | Number of products per page. Max value: 100 Default value: 10 |
| sort_field (query) | string | No | Field to sort on. Default: gmv Available values: |
| sort_order (query) | string | No | Sort direction. Available values: ASC, DESC Default value: DESC |
| currency (query) | string | No | Currency. Available values: USD, LOCAL Default value: LOCAL |
| page_token (query) | string | No | Page token, indicating the current position. Used for requesting next page data. Leave this field empty for first time queries. |
| account_type (query) | string | No | Types of the accounts under which videos were created. Available values: ALL, OFFICIAL_ACCOUNTS, MARKETING_ACCOUNTS, MARKETING_ACCOUNTS Default value: ALL |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.latest_available_date | string | No | Latest date in local timezone where data is ready (ISO 8601 format). (e.g. 2024-09-07) |
| data.live_stream_sessions | array<object> | No | List of live performance metrics. |
| data.live_stream_sessions.interaction_performance.acu | integer | No | Average concurrent users (e.g. 123) |
| data.live_stream_sessions.interaction_performance.avg_viewing_duration | string | No | The average time each user spent watching LIVEs. Total viewing time divided by number of views, in seconds. (e.g. 46) |
| data.live_stream_sessions.interaction_performance.click_through_rate | string | No | The percentage of viewers who clicked on product links after seeing them in this LIVE. Number of clicks divided by the number of views, multiplied by 100. (e.g. 13.99%) |
| data.live_stream_sessions.interaction_performance.comments | integer | No | Number of comments on the LIVE video posted during the selected period. (e.g. 534) |
| data.live_stream_sessions.interaction_performance.likes | integer | No | The number of likes a LIVE video received during the selected time period. (e.g. 2442) |
| data.live_stream_sessions.interaction_performance.new_followers | integer | No | The number of viewers who followed creators from the video during the selected period. (e.g. 12) |
| data.live_stream_sessions.interaction_performance.pcu | integer | No | Peak concurrent users (e.g. 1332) |
| data.live_stream_sessions.interaction_performance.product_clicks | integer | No | Number of product clicks during the LIVE video posted during the selected period, including clicks on product lists and product cards. (e.g. 3882) |
| data.live_stream_sessions.interaction_performance.product_impressions | integer | No | Number of product impressions during the LIVE video posted during the selected period, including product lists and product cards (e.g. 12) |
| data.live_stream_sessions.interaction_performance.shares | integer | No | Number of times the LIVE video posted during the selected period were shared. (e.g. 156) |
| data.live_stream_sessions.interaction_performance.viewers | integer | No | Number of unique viewers of the LIVE video posted during the selected period. (e.g. 18323) |
| data.live_stream_sessions.interaction_performance.views | integer | No | Number of views for the LIVE video posted during the selected period. (e.g. 112993) |
| data.live_stream_sessions.sales_performance.24h_live_gmv | object | No | The total amount paid for orders within 24 hours of viewing this LIVE, including returns and refunds. |
| data.live_stream_sessions.sales_performance.24h_live_gmv.amount | string | No | GMV amount in the corresponding currency. (e.g. 340) |
| data.live_stream_sessions.sales_performance.24h_live_gmv.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. USD) |
| data.live_stream_sessions.sales_performance.avg_price | object | No | The total price paid for all items divided by the number of items sold. |
| data.live_stream_sessions.sales_performance.avg_price.amount | string | No | The average price paid for all items divided by the number of items sold. (e.g. 9) |
| data.live_stream_sessions.sales_performance.avg_price.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. USD) |
| data.live_stream_sessions.sales_performance.click_to_order_rate | string | No | The percentage of customers who clicked product links from this LIVE and purchased those products. Number of purchases divided by the number of product clicks, multiplied by 100. (e.g. 18%) |
| data.live_stream_sessions.sales_performance.created_sku_orders | integer | No | The total number of orders created during the selected period, including those with pending payment for cash-on-delivery or PayLater. Example: If a customer orders 3 units of SKU A and 2 units of SKU B, the SKU orders would be 2. (e.g. 100) |
| data.live_stream_sessions.sales_performance.customers | integer | No | The total number of customers who placed orders directly from this LIVE. (e.g. 50) |
| data.live_stream_sessions.sales_performance.different_products_sold | integer | No | The number of products for which sales were generated from the livestream (e.g. 5) |
| data.live_stream_sessions.sales_performance.gmv | object | No | Overall Gross Merchandise Value (GMV) for the live. |
| data.live_stream_sessions.sales_performance.gmv.amount | string | No | GMV amount in the corresponding currency. (e.g. 99) |
| data.live_stream_sessions.sales_performance.gmv.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. USD) |
| data.live_stream_sessions.sales_performance.products_added | integer | No | The number of products added to the LIVE. (e.g. 12) |
| data.live_stream_sessions.sales_performance.sku_orders | integer | No | The total number of paid orders from this LIVE during the selected period. This includes SKUs that represent unique product variations like size, colour or model. Example: If a customer orders 3 units of SKU A and 2 units of SKU B, the SKU orders would be 2. (e.g. 80) |
| data.live_stream_sessions.sales_performance.unit_sold | integer | No | The total number of individual items sold from all LIVEs. Example: If a customer buys 3 units of SKU A and 2 units of SKU B, the items sold would be 5. (e.g. 122) |
| data.next_page_token | string | No | Page token for the next page request. (e.g. cGFnZV9udW1iZXI9MQ==) |
| data.total_count | integer | No | Total number of LIVE stream sessions. (e.g. 233) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
