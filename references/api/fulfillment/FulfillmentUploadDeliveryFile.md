---
title: FulfillmentUploadDeliveryFile
category: fulfillment
api_name: FulfillmentUploadDeliveryFile
method: POST
path: /fulfillment/202309/files/upload
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** FulfillmentUploadDeliveryFile

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202309/files/upload

## API Description
This API is used for the seller to upload the proof of delivery file for a package, and to generate the URL of the corresponding file. The generated URL is used for the [Update Package Delivery Status API](https://partner.tiktokshop.com/docv2/page/650aa332c16ffe02b8f0ba82?external_id=650aa332c16ffe02b8f0ba82). This API only supports uploading qualification files in `PDF` format. The file size can not exceed 10MB. Note: Only sellers utilizing the SOF (Seller Own Fleet) capability can use this API.

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
| data.name | string | No | The name of the file. (e.g. attachment_file.pdf) |
| data.url | string | No | The URL returned from uploading the file that can be directly opened in a browser. (e.g. https://maellane.bytedance.net/wsos_v2/oec_fulfillment_doc_tts/o) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
