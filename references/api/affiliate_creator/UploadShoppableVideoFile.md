---
title: UploadShoppableVideoFile
category: affiliate_creator
api_name: UploadShoppableVideoFile
method: POST
path: /affiliate_creator/202505/videos/video_files
version: 202505
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_creator
**API:** UploadShoppableVideoFile

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_creator/202505/videos/video_files

## API Description
Use this API to upload the video before posting to TikTok

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: multipart/form-data |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.video_file | object | No | Video file information. |
| data.video_file.id | string | No | The id from of the uploaded video file. (e.g. 123123123123) |
| data.video_file.md5 | string | No | Upload file md5 checksum (e.g. D41D8CD98F00B204E9800998ECF8427E) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
