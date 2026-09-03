---
title: GlobalSellingGetQualityDocuments
category: gs_full_service_shipment
api_name: GlobalSellingGetQualityDocuments
method: GET
path: /gs_full_service_shipment/202407/quality_documents
version: 202407
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_shipment
**API:** GlobalSellingGetQualityDocuments

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_shipment/202407/quality_documents

## API Description
This API is used to query quality documents by delivery order code or inspect order code.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| order_code (query) | string | Yes | The code of order. |
| order_type (query) | string | Yes | The type of order. Possible enumerations are: - `"DELIVERY_ORDER"` - `"INSPECT_ORDER"` |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.document_url | string | No | The url of a printable pdf document of quality check results. (e.g. https://example.com) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
