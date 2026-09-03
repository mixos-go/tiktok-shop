---
title: UploadMessageImage
category: affiliate_seller
api_name: UploadMessageImage
method: POST
path: /affiliate_seller/202511/images/upload
version: 202511
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** UploadMessageImage

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202511/images/upload

## API Description
You must use this API to upload the image first, before sending an image as a message using [Send IM Messsage](https://partner.tiktokshop.com/docv2/page/send-im-message-202412)

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
| data.height | integer | No | Image height (e.g. 720) |
| data.url | string | No | Image URL (e.g. https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/2ca53c34ad8443e6b39f4e0153d3aed4~tplv-o3syd03w52-origin-image.image?from=1320446476) |
| data.width | integer | No | Image width (e.g. 1280) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
