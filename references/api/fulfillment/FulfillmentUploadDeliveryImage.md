---
title: FulfillmentUploadDeliveryImage
category: fulfillment
api_name: FulfillmentUploadDeliveryImage
method: POST
path: /fulfillment/202309/images/upload
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** FulfillmentUploadDeliveryImage

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202309/images/upload

## API Description
This API is used for the seller to upload the proof of delivery image for a package, and to generate the URL of the corresponding file. The generated URL is used in the [Update Package Delivery Status API](https://partner.tiktokshop.com/docv2/page/650aa332c16ffe02b8f0ba82?external_id=650aa332c16ffe02b8f0ba82) to indicate that the parcel has been delivered. Usage requirements: - The image format must be `JPEG`, `PNG`, or `JPG`. - The image size can not exceed 5MB.

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
| data.height | integer | No | The image height returned from uploading the image. This height refers to the processed image height, not the original image height. Units: pixels. (e.g. 256) |
| data.url | string | No | The URL returned from uploading the image that can be directly opened in a browser. (e.g. https://p-pbe38.byted.org/tos-ppdi18n-i-0euhj0x6u9/0a119a90d90b41e3838608bc384) |
| data.width | integer | No | The image width returned from uploading the image. This width refers to the processed image width, not the original image width. Units: pixels. (e.g. 256) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
