---
title: UploadShippingDocumentAndTrackingInfo
category: return_refund
api_name: UploadShippingDocumentAndTrackingInfo
method: POST
path: /return_refund/202405/returns/shipping_documents
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** return_refund
**API:** UploadShippingDocumentAndTrackingInfo

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/return_refund/202405/returns/shipping_documents

## API Description
Use this API to upload return shipping documents, tracking numbers, and carriers for buyers.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| return_ids (query) | array<string> | Yes | The identifier of a specific return. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: multipart/form-data |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
