---
title: GSFullServicePreviewGetBrands
category: gs_full_service_commodity
api_name: GSFullServicePreviewGetBrands
method: GET
path: /gs_full_service_commodity/202404/preview/brands
version: 202404
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_commodity
**API:** GSFullServicePreviewGetBrands

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_commodity/202404/preview/brands

## API Description
Use this API to retrieve all product brands n the system.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| supplier_id (query) | string | No | Supplier ID |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.brands | array<object> | No | The structure of the brand. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
