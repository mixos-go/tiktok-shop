---
title: GlobalSellingCancelShipment
category: gs_full_service_shipment
api_name: GlobalSellingCancelShipment
method: POST
path: /gs_full_service_shipment/202407/logistics_orders/cancel_ship
version: 202407
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_shipment
**API:** GlobalSellingCancelShipment

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_shipment/202407/logistics_orders/cancel_ship

## API Description
This API is used to cancel the shipment for the logistics order.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| logistics_order | string | No | The code of delivery batch. (e.g. LOG20240423010565) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
