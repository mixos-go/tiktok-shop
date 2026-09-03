---
title: GetShopVideoPerformanceDetails
category: analytics
api_name: GetShopVideoPerformanceDetails
method: GET
path: /analytics/202509/shop_videos/{video_id}/performance
version: 202509
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** analytics
**API:** GetShopVideoPerformanceDetails

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/analytics/202509/shop_videos/{video_id}/performance

## API Description
Returns detailed performance metrics for a (requested) video.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| video_id (path) | string | Yes | Video ID |
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
| data.latest_available_date | string | No | Latest date in local timezone where data is ready (ISO 8601 format). (e.g. 2024-09-07) |
| data.performance | object | No | Overall performance data for the video. |
| data.performance.intervals | array<object> | No | Interval data for the requested time range. The time range of each interval is determined by the granularity. |
| data.performance.intervals.sales.breakdowns | array<object> | No | bradkdown data |
| data.performance.intervals.sales.breakdowns.gmv.amount | string | No | GMV amount in the corresponding currency. (e.g. 230.02) |
| data.performance.intervals.sales.breakdowns.gmv.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. USD) |
| data.performance.intervals.sales.breakdowns.gpm.amount | string | No | GPM amount in the corresponding currency. (e.g. 1.02) |
| data.performance.intervals.sales.breakdowns.gpm.currency | string | No | GPM currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. USD) |
| data.performance.intervals.sales.overall | object | No | Overall performance |
| data.performance.intervals.sales.overall.ctr | string | No | The number of product clicks from the video / The number of impressions of all video products (e.g. 0.029) |
| data.performance.intervals.sales.overall.customers | integer | No | The total number of customers who placed orders directly from the shoppable video. (e.g. 12) |
| data.performance.intervals.sales.overall.gmv | object | No | The total amount paid for orders placed directly from the shoppable video, including returns and refunds. |
| data.performance.intervals.sales.overall.gmv.amount | string | No | GMV amount in the corresponding currency. (e.g. 230.02) |
| data.performance.intervals.sales.overall.gmv.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. USD) |
| data.performance.intervals.sales.overall.gpm | object | No | The avg. video GPM is the average GMV generated from 1,000 impressions of the Video. |
| data.performance.intervals.sales.overall.gpm.amount | string | No | GPM amount in the corresponding currency. (e.g. 1.02) |
| data.performance.intervals.sales.overall.gpm.currency | string | No | GPM currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. USD) |
| data.performance.intervals.sales.overall.items_sold | integer | No | The total number of items sold directly from the shoppable video. (e.g. 22) |
| data.performance.intervals.sales.overall.product_clicks | integer | No | The number of product clicks from the video (e.g. 21232) |
| data.performance.intervals.sales.overall.product_impressions | integer | No | The number of impressions of all video products (e.g. 32092) |
| data.performance.intervals.traffic.comments | integer | No | The cumulative number of times users left comments on the video (e.g. 8) |
| data.performance.intervals.traffic.likes | integer | No | The cumulative number of times users liked the video (e.g. 2) |
| data.performance.intervals.traffic.new_followers | integer | No | The number of times a user followed you after watching a video (e.g. 11) |
| data.performance.intervals.traffic.shares | integer | No | The cumulative number of times users shared the video (e.g. 23) |
| data.performance.intervals.traffic.views | integer | No | The number of times your videos have been watched (if the same user watches a video multiple times, each time is counted) (e.g. 76649) |
| data.performance.viewer_profile | array<object> | No | Viewer profile of the video |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
