---
title: GetShoppableVideoStatus
category: affiliate_creator
api_name: GetShoppableVideoStatus
method: GET
path: /affiliate_creator/202509/videos/{video_id}/status
version: 202509
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_creator
**API:** GetShoppableVideoStatus

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_creator/202509/videos/{video_id}/status

## API Description
Use this API to get shoppable video posting results.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| video_id (path) | string | Yes | The video id from [Publish Shoppable Video] |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.video | object | No | returned video info |
| data.video.id | string | No | Video id (e.g. 7493990579714164574) |
| data.video.post_status | string | No | Video posting status, possible values: - SUCCESS - FAIL - PROCESSING (e.g. FAIL) |
| data.video.post_time | integer | No | Returned if the video has been successfully posted, i.e. `posting_status = SUCCESS`. Represented in seconds. (e.g. 1685548800) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
