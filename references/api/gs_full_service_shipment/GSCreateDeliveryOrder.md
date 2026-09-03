---
title: GSCreateDeliveryOrder
category: gs_full_service_shipment
api_name: GSCreateDeliveryOrder
method: POST
path: /gs_full_service_shipment/202405/beta/delivery_orders
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_shipment
**API:** GSCreateDeliveryOrder

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_shipment/202405/beta/delivery_orders

## API Description
This API is used to create a delivery-order for stockup-order.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| delivery_order | object | No | The information list for batch delivery order creation |
| delivery_order.package_quantity | integer | No | The quantity of delivery package (e.g. 2) |
| delivery_order.packages | array<object> | No | The list of delivery package |
| delivery_order.stockup_order_code | string | No | The code of stockup order (e.g. POCYT2404190001013) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.delivery_order_code | string | No | Delivery order code (e.g. POCYT2404190001013S01) |
| data.stockup_order_code | string | No | Stockup order code (e.g. POCYT2404190001013) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
