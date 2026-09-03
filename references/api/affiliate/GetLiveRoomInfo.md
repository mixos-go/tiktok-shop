---
title: GetLiveRoomInfo
category: affiliate
api_name: GetLiveRoomInfo
method: GET
path: /affiliate/202309/live_rooms
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate
**API:** GetLiveRoomInfo

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate/202309/live_rooms

## API Description
Developer can utilize this API to get the creator`s last live room information

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.id | string | No | The live room's ID (e.g. 1762603552) |
| data.start_time | integer | No | The start time of broadcasting (e.g. 1692084773) |
| data.status | string | No | The live room's status (e.g. LIVE) |
| data.title | string | No | The live room's title (e.g. Black Friday 40% off) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
