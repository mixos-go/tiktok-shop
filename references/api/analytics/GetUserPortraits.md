---
title: GetUserPortraits
category: analytics
api_name: GetUserPortraits
method: GET
path: /analytics/202309/live_rooms/{live_room_id}/user_portraits
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** analytics
**API:** GetUserPortraits

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/analytics/202309/live_rooms/{live_room_id}/user_portraits

## API Description
This API gets the user portrait of live room

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
| data.all_ads_age_indicators | array<object> | No | Age indicators for advertisement |
| data.all_ads_gender_indicators | array<object> | No | Gender indicators for advertisement |
| data.all_fan_indicators | array<object> | No | Fans indicators |
| data.paid_ads_age_indicators | array<object> | No | Paid advertisement age indicators for advertisement |
| data.paid_ads_gender_indicators | array<object> | No | Paid advertisement gender indicators for advertisement |
| data.paid_fan_indicators | array<object> | No | Paid fans indicators |
| data.region_indicators | array<object> | No | Region indicators |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
