---
title: GetGMVTrendPerformances
category: analytics
api_name: GetGMVTrendPerformances
method: GET
path: /analytics/202309/live_rooms/{live_room_id}/gmv_trend_performances
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** analytics
**API:** GetGMVTrendPerformances

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/analytics/202309/live_rooms/{live_room_id}/gmv_trend_performances

## API Description
This API gets the trend points of gmv related information

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| live_room_id (path) | string | Yes | live stream room id |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.gmv_trend_performances | array<object> | No | The trend of GMV chart |
| data.gmv_trend_performances.data_points.gmv.amount | string | No | The amount of GMV (e.g. 123) |
| data.gmv_trend_performances.data_points.gmv.currency | string | No | Currency Code (e.g. USD) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
