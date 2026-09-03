---
title: GetShopLIVEPerformanceOverviewOLD
category: analytics
api_name: GetShopLIVEPerformanceOverviewOLD
method: POST
path: /analytics/202503/shop_lives/overview_performance
version: 202503
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** analytics
**API:** GetShopLIVEPerformanceOverviewOLD

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/analytics/202503/shop_lives/overview_performance

## API Description
Returns overall performance metrics for all LIVE stream sessions under a certain shop.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| start_date_ge (query) | string | Yes | Start date (ISO 8601 YYYY-MM-DD format) in shop registered timezone. In the parameter name, "ge" refers to "greater than or equal to" (inclusive) |
| end_date_lt (query) | string | Yes | End date (ISO 8601 YYYY-MM-DD format) in shop registered timezone. In the parameter name, "lt" refers to "less than" (exclusive) |
| with_comparison (query) | boolean | No | Whether previous period data is returned for comparison. Available values: true, false Default value: false The previous period has the same length and granularity as the current period with end time being the same as the start time of the current period. Example: If start_time_ge = 2024-04-01 and e |
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
| data.performance.comparison_intervals | array<object> | No | Same structure as "intervals." It contains data for the previous time range with the same range length and granularity of the current time range. For example, if the current time range (represented in start_time_ge and end_time_lt) is from 2024-09-01 to 2024-09-08, with granularity "ALL", the comparison_intervals will contain data from 2024-08-25 to 2024-09-01 with granularity "ALL" |
| data.performance.comparison_intervals.gmv.amount | string | No | GMV amount in the corresponding currency. (e.g. 11) |
| data.performance.comparison_intervals.gmv.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. USD) |
| data.performance.intervals | array<object> | No | Interval data for the requested time range. The time range of each interval is determined by the granularity. |
| data.performance.intervals.gmv.amount | string | No | GMV amount in the corresponding currency. (e.g. 11) |
| data.performance.intervals.gmv.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. USD) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
