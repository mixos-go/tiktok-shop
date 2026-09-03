---
title: GSGetDelivery-OrderPrintDocument
category: gs_full_service_shipment
api_name: GSGetDelivery-OrderPrintDocument
method: GET
path: /gs_full_service_shipment/202405/beta/delivery_orders/documents
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_shipment
**API:** GSGetDelivery-OrderPrintDocument

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_shipment/202405/beta/delivery_orders/documents

## API Description
The API is used to get delivery-order print document.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| delivery_order_codes (query) | array<string> | Yes | The list of delivery order code. Up to 50. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.document_url | string | No | The url of a printable pdf document for multiple delivery order. (e.g. https://example.com ) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
