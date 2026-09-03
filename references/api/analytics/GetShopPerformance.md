---
title: GetShopPerformance
category: analytics
api_name: GetShopPerformance
method: GET
path: /analytics/202509/shop/performance
version: 202509
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** analytics
**API:** GetShopPerformance

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/analytics/202509/shop/performance

## API Description
Returns performance metrics at shop/seller level.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| start_date_ge (query) | string | Yes | Start date (ISO 8601 YYYY-MM-DD format) in shop registered timezone. In the parameter name, "ge" refers to "greater than or equal to" (inclusive) |
| end_date_lt (query) | string | Yes | End date (ISO 8601 YYYY-MM-DD format) in shop registered timezone. In the parameter name, "lt" refers to "less than" (exclusive) |
| granularity (query) | string | No | Granularity of the data. Available values: ALL, 1D Default value: ALL * ALL: aggregate * 1D: daily |
| currency (query) | string | No | Currency. Available values: USD, LOCAL Default value: LOCAL * USD: US dollars * LOCAL: local currency where the shop is located |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.latest_available_date | string | No | Latest date in local timezone where data is ready (ISO 8601 format). (e.g. 2024-04-07) |
| data.performance | object | No | Overall performance data for the shop. |
| data.performance.intervals | array<object> | No | Interval data for the requested time range. The time range of each interval is determined by the granularity. |
| data.performance.intervals.sales.avg_customers_count | integer | No | Daily average number of unique users who paid for orders during the selected period. (e.g. 14322) |
| data.performance.intervals.sales.gmv | object | No | Gross merchandise value: Total amount paid for orders during the selected period, including canceled and refunded orders. |
| data.performance.intervals.sales.gmv.breakdowns | array<object> | No | GMV breakdowns. |
| data.performance.intervals.sales.gmv.breakdowns.gmv.amount | string | No | GMV amount in the corresponding currency. (e.g. 111) |
| data.performance.intervals.sales.gmv.breakdowns.gmv.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. USD) |
| data.performance.intervals.sales.gmv.overall | object | No | Overall gmv. |
| data.performance.intervals.sales.gmv.overall.amount | string | No | GMV amount in the corresponding currency. (e.g. 335.02) |
| data.performance.intervals.sales.gmv.overall.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. GBP) |
| data.performance.intervals.sales.gross_revenue | object | No | Gross revenue includes customer payments and platform product subsidies, minus any applicable taxes. Formula: Gross revenue = (Customer payment + Platform product subsidies) − Taxes |
| data.performance.intervals.sales.gross_revenue.breakdowns | array<object> | No | Revenue breakdowns. |
| data.performance.intervals.sales.gross_revenue.overall | object | No | Overall gross revenue. |
| data.performance.intervals.sales.gross_revenue.overall.amount | string | No | GMV amount in the corresponding currency. (e.g. 239.04) |
| data.performance.intervals.sales.gross_revenue.overall.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. GBP) |
| data.performance.intervals.sales.items_sold | integer | No | The total number of individual items sold. Example: If a customer buys 3 units of SKU A and 2 units of SKU B, the items sold would be 5. (e.g. 32422) |
| data.performance.intervals.sales.orders_count | integer | No | The number of paid orders during the selected period. (e.g. 21234) |
| data.performance.intervals.sales.refunds | object | No | The amount of order refunds generated. |
| data.performance.intervals.sales.refunds.amount | string | No | Refunds amount in the corresponding currency. (e.g. 2323) |
| data.performance.intervals.sales.refunds.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. USD) |
| data.performance.intervals.sales.sku_orders_count | integer | No | A total count of distinct SKUs sold. (e.g. 23214) |
| data.performance.intervals.traffic.avg_conversation_rate | string | No | The daily average percentage of unique users who paid for orders after viewing product detail pages during the selected period. (e.g. 0.3342) |
| data.performance.intervals.traffic.avg_page_views | integer | No | Daily average number of page views for all of your product detail pages during the selected period. (e.g. 56234) |
| data.performance.intervals.traffic.avg_visitors | integer | No | Daily average number of unique users who visited your product detail pages during the selected period (e.g. 3433) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
