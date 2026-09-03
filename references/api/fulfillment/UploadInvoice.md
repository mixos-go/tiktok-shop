---
title: UploadInvoice
category: fulfillment
api_name: UploadInvoice
method: POST
path: /fulfillment/202502/invoice/upload
version: 202502
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** UploadInvoice

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202502/invoice/upload

## API Description
Upload the invoice document. **Note**: Applicable only for local sellers in the Brazil market.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| invoices | array<object> | No | The list of invoices to upload. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | The list of errors that occurred. |
| data.errors.detail.order_ids | array<string> | No | The order IDs where errors occurred. |
| data.errors.detail.package_id | string | No | The package ID where the error occurred. (e.g. 1231231231231) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
