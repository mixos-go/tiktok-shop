---
title: GetShopProductPerformanceDetail
category: analytics
api_name: GetShopProductPerformanceDetail
method: GET
path: /analytics/202509/shop_products/{product_id}/performance
version: 202509
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** analytics
**API:** GetShopProductPerformanceDetail

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/analytics/202509/shop_products/{product_id}/performance

## API Description
Return performance detailed metrics for a product.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_id (path) | string | Yes | product id |
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
| data.performance | object | No | Overall performance data for the product. |
| data.performance.intervals | array<object> | No | Interval data for the requested time range. The time range of each interval is determined by the granularity. |
| data.performance.intervals.cancel_and_refunds.canceled | integer | No | Canceled refers to units included in orders that were either "Unpaid" or "Awaiting Shipment." (e.g. 23) |
| data.performance.intervals.cancel_and_refunds.refunded | integer | No | Refunded refers to units that were refunded but not returned. (e.g. 3) |
| data.performance.intervals.cancel_and_refunds.replacements | integer | No | Replacements refers to units that were returned and replaced. (e.g. 3) |
| data.performance.intervals.cancel_and_refunds.returned | integer | No | Returned refers to units that were returned and refunded. (e.g. 2) |
| data.performance.intervals.sales.breakdowns | array<object> | No | Sales breakdowns. |
| data.performance.intervals.sales.breakdowns.sales.avg_customers | integer | No | Daily average count of customers. (e.g. 34) |
| data.performance.intervals.sales.breakdowns.sales.gmv | object | No | Gross merchandise value. |
| data.performance.intervals.sales.breakdowns.sales.gmv.amount | string | No | GMV amount in the corresponding currency. (e.g. 43) |
| data.performance.intervals.sales.breakdowns.sales.gmv.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. USD) |
| data.performance.intervals.sales.breakdowns.sales.items_sold | integer | No | Number of items sold in the corresponding content type. (e.g. 454) |
| data.performance.intervals.sales.gmv | object | No | Gross merchandise value: Total amount paid for orders during the selected period, including canceled and refunded orders. |
| data.performance.intervals.sales.gmv.amount | string | No | GMV amount in the corresponding currency. (e.g. 233) |
| data.performance.intervals.sales.gmv.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. USD) |
| data.performance.intervals.sales.items_sold | integer | No | Number of items sold for the product. (e.g. 23) |
| data.performance.intervals.sales.orders | integer | No | Total (sum of all) orders for the product. (e.g. 23) |
| data.performance.intervals.traffic.breakdowns | array<object> | No | Traffic breakdowns. |
| data.performance.intervals.traffic.breakdowns.traffic.avg_conversion_rate | string | No | Average percentage of unique page views that result in sales. (e.g. 0.033) |
| data.performance.intervals.traffic.breakdowns.traffic.avg_unique_page_views | integer | No | Daily average unique views visitors to your product details pages. (e.g. 34) |
| data.performance.intervals.traffic.breakdowns.traffic.ctr | string | No | The percentage of viewers who clicked on product links after seeing them in the Shop tab. Number of clicks divided by the number of views. (e.g. 0.034) |
| data.performance.intervals.traffic.breakdowns.traffic.impressions | integer | No | Each time a link to your listing appears in the shop tab, it's counted as one impression. Users can tap links to visit your listings page directly. (e.g. 34) |
| data.performance.intervals.traffic.breakdowns.traffic.page_views | integer | No | Total number of product details page views during the selected period, including multiple views from unique users. (e.g. 43) |
| data.performance.ratings | array<object> | No | ratings within the choosen start_date_ge and end_date_ge |
| data.performance.top_contents | array<object> | No | brief report of product related content within the choosen start_date_ge and end_date_ge. sorted by gmv, only return the top 100. |
| data.performance.top_contents.contents.gmv.amount | string | No | GMV amount in the corresponding currency. (e.g. 323) |
| data.performance.top_contents.contents.gmv.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. GBP) |
| data.performance.top_creators | array<object> | No | brief report of product related creator within the choosen start_date_ge and end_date_ge. sorted by gmv, only return the top 100. |
| data.performance.top_creators.gmv.amount | string | No | GMV amount in the corresponding currency. (e.g. 2365) |
| data.performance.top_creators.gmv.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. GBP) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
