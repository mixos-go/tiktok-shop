---
title: GSGetSKUPrintDocument
category: gs_full_service_shipment
api_name: GSGetSKUPrintDocument
method: POST
path: /gs_full_service_shipment/202405/beta/delivery_orders/sku_documents/generate
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_shipment
**API:** GSGetSKUPrintDocument

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_shipment/202405/beta/delivery_orders/sku_documents/generate

## API Description
The API is used to generate a printable pdf document for multiple SKUs.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| dimension | object | No | The dimension info of sku barcord. |
| dimension.height | string | No | The number of height. (e.g. 2) |
| dimension.unit | string | No | The unit of dimension, CENTIMETER. (e.g. CENTIMETER) |
| dimension.width | string | No | The number of width. (e.g. 7) |
| platform_sku_items | array<object> | No | The information list of platform-defined sku. |
| print_sku_code | boolean | No | Whether to print the supplier-defined sku code. (e.g. True) |
| stockup_order_code | string | No | The code of stockup order. (e.g. POCYT2404190001013) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.document_url | string | No | The url of a printable pdf document for multiple sku. (e.g. https://example.com) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
