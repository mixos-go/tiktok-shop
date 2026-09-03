---
title: GetTrafficPerformances
category: analytics
api_name: GetTrafficPerformances
method: GET
path: /analytics/202309/live_rooms/{live_room_id}/traffic_performances
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** analytics
**API:** GetTrafficPerformances

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/analytics/202309/live_rooms/{live_room_id}/traffic_performances

## API Description
This API gets the traffic performances of live streaming for distribution analysis

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
| data.traffic_performances | array<object> | No | The traffic performances within the livestream room |
| data.traffic_performances.source.name | string | No | The name of the live source (e.g. card_click) |
| data.traffic_performances.source.watch_pv | integer | No | Watch page value, e.g. Watch count (e.g. 123) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
