---
title: GetShopSKUPerformance
category: analytics
api_name: GetShopSKUPerformance
method: GET
path: /analytics/202509/shop_skus/{sku_id}/performance
version: 202509
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** analytics
**API:** GetShopSKUPerformance

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/analytics/202509/shop_skus/{sku_id}/performance

## API Description
Return SKU performance metrics.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| sku_id (path) | string | Yes | SKU ID |
| start_date_ge (query) | string | Yes | Start time (ISO 8601 YYYY-MM-DD format) in shop registered timezone, inclusive. |
| end_date_lt (query) | string | Yes | End time (ISO 8601 YYYY-MM-DD format) in shop registered timezone, exclusive. |
| granularity (query) | string | No | Granularity of the data. Available values: ALL, 1D Default value: ALL * ALL: aggregate * 1D: daily |
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
| data.performance | object | No | Overall performance data for the product. |
| data.performance.intervals | array<object> | No | Interval data for the requested time range. The time range of each interval is determined by the granularity. |
| data.performance.intervals.gmv.amount | string | No | GMV amount in the corresponding currency. (e.g. 0) |
| data.performance.intervals.gmv.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. USD) |
| data.performance.product_id | integer | No | Product ID (e.g. 123456789) |
| data.performance.sku_id | string | No | SKU ID (e.g. 123456789) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
