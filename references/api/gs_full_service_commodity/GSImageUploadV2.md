---
title: GSImageUploadV2
category: gs_full_service_commodity
api_name: GSImageUploadV2
method: POST
path: /gs_full_service_commodity/202406/beta/images/upload
version: 202406
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_commodity
**API:** GSImageUploadV2

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_commodity/202406/beta/images/upload

## API Description
Upload local images to the GS fully managed platform and use them for product images, SKU images, etc. to publish products.

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
| data.length | integer | No |  |
| data.uri | string | No |  |
| data.url | string | No |  |
| data.width | integer | No |  |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
