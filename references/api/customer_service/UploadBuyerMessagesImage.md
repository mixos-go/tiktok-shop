---
title: UploadBuyerMessagesImage
category: customer_service
api_name: UploadBuyerMessagesImage
method: POST
path: /customer_service/202309/images/upload
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** customer_service
**API:** UploadBuyerMessagesImage

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/customer_service/202309/images/upload

## API Description
You must use this API to upload the image first, before sending an image as a message using [Send Message](650a58bbbace3e02b7556286).

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
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
