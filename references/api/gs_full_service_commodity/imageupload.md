---
title: imageupload
category: gs_full_service_commodity
api_name: imageupload
method: POST
path: /gs_full_service_commodity/202405/preview/images/upload
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_commodity
**API:** imageupload

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_commodity/202405/preview/images/upload

## API Description
Upload local images to the GS fully managed platform and use them for product images, SKU images, etc. to publish products.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| supplier_id (query) | string | Yes | identity ID of supplier |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: multipart/form-data |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.height | integer | No | Height dimension of the image which is determined on upload. This is the height post processing. (e.g. 720) |
| data.uri | string | No | The URI returned from uploading the image, which can be used for product main image, SKU image, size chart image, qualification image, etc. when listing a product. (e.g. tos-maliva-i-o3syd03w52-us/c668cdf70b7f483c94dbe) |
| data.url | string | No | The URL returned from uploading the image can be directly opened in a browser. It can be used in product description when creating a product. (e.g. https://p-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c668cdf70b7f483c94dbe) |
| data.width | integer | No | Width dimension of the image which is determined on upload. This is the width of post processing. (e.g. 720) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
