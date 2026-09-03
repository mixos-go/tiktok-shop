---
title: GetShopLIVEPerformanceOverview
category: analytics
api_name: GetShopLIVEPerformanceOverview
method: GET
path: /analytics/202509/shop_lives/overview_performance
version: 202509
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** analytics
**API:** GetShopLIVEPerformanceOverview

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/analytics/202509/shop_lives/overview_performance

## API Description
Returns overall performance metrics for all LIVE stream sessions under a certain shop.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| start_date_ge (query) | string | Yes | Start date (ISO 8601 YYYY-MM-DD format) in shop registered timezone. In the parameter name, "ge" refers to "greater than or equal to" (inclusive) |
| end_date_lt (query) | string | Yes | End date (ISO 8601 YYYY-MM-DD format) in shop registered timezone. In the parameter name, "lt" refers to "less than" (exclusive) |
| today (query) | boolean | No | If "today" is set to true, start_date_ge and end_date_lt will be overwritten. The response will contain real-time metrics of today (local time) |
| granularity (query) | string | No | Granularity of the data. Available values: ALL, 1D Default value: ALL |
| currency (query) | string | No | Currency. Available values: USD, LOCAL Default value: LOCAL |
| account_type (query) | string | No | Types of the accounts under which videos were created. Available values: ALL, OFFICIAL_ACCOUNTS, MARKETING_ACCOUNTS, AFFILIATE_ACCOUNTS Default value: ALL |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.latest_available_date | string | No | Latest date in local timezone where data is ready (ISO 8601 format). (e.g. 2024-09-07) |
| data.performance | object | No | Overall performance data for livestream. |
| data.performance.intervals | array<object> | No | Interval data for the requested time range. The time range of each interval is determined by the granularity. |
| data.performance.intervals.gmv.amount | string | No | GMV amount in the corresponding currency. (e.g. 11) |
| data.performance.intervals.gmv.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. USD) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
