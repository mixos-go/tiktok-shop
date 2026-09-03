---
title: GetShopPerformancePerHour
category: analytics
api_name: GetShopPerformancePerHour
method: GET
path: /analytics/202510/shop/performance/{date}/performance_per_hour
version: 202510
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** analytics
**API:** GetShopPerformancePerHour

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/analytics/202510/shop/performance/{date}/performance_per_hour

## API Description
Daily performance per hour detail, within 30 days. Including today.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| date (path) | string | Yes | (ISO 8601 YYYY-MM-DD format) in shop registered timezone. |
| currency (query) | string | No | Currency. Available values: USD, LOCAL Default value: LOCAL * USD: US dollars * LOCAL: local currency where the shop is located |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.performance | object | No | performance data |
| data.performance.intervals | array<object> | No | intervals data |
| data.performance.intervals.gmv.amount | string | No | GMV amount in the corresponding currency. (e.g. 2332.22) |
| data.performance.intervals.gmv.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. SGD) |
| data.performance.latest_available_timestamp | integer | No | The latest time where data is ready . UNIX timestamp. (e.g. 1623812664) |
| data.performance.overall | object | No | overall data |
| data.performance.overall.customers | integer | No | The number of individual customers who made a purchase. This metric counts each customer once, even if they made multiple purchases. (e.g. 2332) |
| data.performance.overall.gmv | object | No | The total amount paid by customers, including shipping fees, but subtracts platform co-funding and seller promotions. GMV does not subtract cancellations or refunds. |
| data.performance.overall.gmv.amount | string | No | GMV amount in the corresponding currency. (e.g. 2344.00) |
| data.performance.overall.gmv.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. SGD) |
| data.performance.overall.items_sold | integer | No | The total number of individual items sold. Example: If a customer buys 3 units of SKU A and 2 units of SKU B, the items sold would be 5. (e.g. 543) |
| data.performance.overall.visitors | integer | No | Number of unique users who visited your product detail pages before the most recent update time. (e.g. 234324) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
