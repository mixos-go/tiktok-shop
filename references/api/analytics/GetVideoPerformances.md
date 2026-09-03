---
title: GetVideoPerformances
category: analytics
api_name: GetVideoPerformances
method: GET
path: /analytics/202403/videos/performances
version: 202403
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** analytics
**API:** GetVideoPerformances

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/analytics/202403/videos/performances

## API Description
This is a US-creator-only API for now. And it is for getting Tiktok E-commerce video metrics(incliding anchor_display_rate, ctr, orders, items_sold, gmv) to analysis.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| video_ids (query) | string | Yes | Collection of video IDs for retrieving the e-commerce metrics. Callers must ensure that all video IDs share the same author ID. Limit collection size 100. Use "," to separate array elements when send in the query. |
| start_time_ge (query) | integer | Yes | Start date for the metrics, set with a one-day delay from today due to latency in the data pipeline. The start_time parameter must be within the last 180 days from the current date. Only date value is processed, hour/mininute/second values will be ignored. For example, if the start_time value is: 17 |
| end_time_le (query) | integer | Yes | End date for the metrics, set with a one-day delay from today due to latency in the data pipeline. Only date value is processed, hour/mininute/second values will be ignored. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.videos | array<object> | No | Contains a list of video objects. The inner list of objects will be organized in ascending order based on the video_id field. |
| data.videos.performances.metrics.anchor_display_rate | string | No | Display rate for anchors, specified with two decimal numbers. (e.g. 0.64) |
| data.videos.performances.metrics.click_through_rate | string | No | Click through rate, specified with two decimal numbers. (e.g. 0.08) |
| data.videos.performances.metrics.gmv | object | No | GMV object |
| data.videos.performances.metrics.gmv.amount | string | No | GMV value for this date, specified with two decimal numbers. (e.g. 27.85) |
| data.videos.performances.metrics.gmv.currency | string | No | Currency of GMV value, three-letter code, ISO 4217 (e.g. USD) |
| data.videos.performances.metrics.item_sold_count | integer | No | Number of sold items in this date. (e.g. 3) |
| data.videos.performances.metrics.order_count | integer | No | Number of orders in this date. (e.g. 3) |
| data.videos.performances.time_range.end_time | integer | No | Date of the metrics. (e.g. 1704067200) |
| data.videos.performances.time_range.start_time | integer | No | Date of the metrics. (e.g. 1704067200) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
