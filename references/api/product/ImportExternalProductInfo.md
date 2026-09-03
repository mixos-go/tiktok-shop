---
title: ImportExternalProductInfo
category: product
api_name: ImportExternalProductInfo
method: POST
path: /product/202508/import_external
version: 202508
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** ImportExternalProductInfo

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202508/import_external

## API Description
Use this API to import external product(shopfy/amazon)raw data and directly connect to ISV

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
| data.import_result | object | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| data.import_result.code | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. (e.g. 0) |
| data.import_result.message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. (e.g. the file type is invalid) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
