---
title: PrecheckVideoContent
category: affiliate_creator
api_name: PrecheckVideoContent
method: POST
path: /affiliate_creator/202511/videos/precheck_task
version: 202511
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_creator
**API:** PrecheckVideoContent

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_creator/202511/videos/precheck_task

## API Description
Use this API to pre-check if there's any violation in the video and the shoppable content anchor

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_link_info | object | No | Product link information |
| product_link_info.product_id | string | No | Use product_id to bind the product with the video. The product_id from [Get Shop Products](https://api/affiliate_creator/202509/shop_products) or [Get Showcase Products](https://api/affiliate_creator/202405/showcases/products) (e.g. 17294069642063424) |
| product_link_info.title | string | No | The title to be shown on the product anchor. Anchor title should be shorter than 30 characters. (e.g. Sample product anchor title) |
| video_info | object | No | Video information |
| video_info.file_id | string | No | Video file_id from [Upload Shoppable Video File](https://api/affiliate_creator/202505/videos/video_files) (e.g. v12d00gd0024d3nfqr7og65) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.precheck | object | No | Video content pre-check task result |
| data.precheck.task_id | string | No | pre-check task id (e.g. 1123123123) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
