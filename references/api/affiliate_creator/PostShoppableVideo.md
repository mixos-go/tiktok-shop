---
title: PostShoppableVideo
category: affiliate_creator
api_name: PostShoppableVideo
method: POST
path: /affiliate_creator/202505/videos
version: 202505
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_creator
**API:** PostShoppableVideo

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_creator/202505/videos

## API Description
Use this API to post the shoppable video.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_link_info | object | No | Product link information |
| product_link_info.product_id | string | No | Use product_id to bind the product with the video. The product_id from [Get Shop Products] or [Get Showcase Products] (e.g. 17294069642063424) |
| product_link_info.title | string | No | The title to be shown on the product anchor. Anchor title should be shorter than 30 characters. (e.g. Sample product anchor title) |
| video_info | object | No | Video information |
| video_info.file_id | string | No | Video file_id from [Upload Shoppable Video File] (e.g. v12d00gd0024d3nfqr7og65) |
| video_info.title | string | No | The video caption. The maximum length is 2200 in UTF-16 runes. If not specified, the ticket post will not have any captions. (e.g. Sample video title) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.video | object | No | Published video information |
| data.video.id | string | No | The video id, use this id to query video publish status. (e.g. 7548431509997292816) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
