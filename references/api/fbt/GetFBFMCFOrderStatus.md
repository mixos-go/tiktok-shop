---
title: GetFBFMCFOrderStatus
category: fbt
api_name: GetFBFMCFOrderStatus
method: GET
path: /fbt/202601/mcf_outbound_orders
version: 202601
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fbt
**API:** GetFBFMCFOrderStatus

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/fbt/202601/mcf_outbound_orders

## API Description
This API allows you to query the status of **MCF Orders**. When an order has not been shipped, the `consign_orders` field will contain no data; once the order has been shipped, the `consign_orders` field will display the consignment details of the order. If a single package cannot accommodate the entire order (due to carrier restrictions or packaging size limitations), the **FBT** system will split the order into multiple packages for fulfillment, in which case the `consign_orders` field will contain multiple entries corresponding to the respective packages.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| mcf_order_id (query) | string | Yes | A unique ID that identifies different MCF orders |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.mcf_order | object | No | MCF order information |
| data.mcf_order.consign_orders | array<object> | No | Once the order has been shipped, the `consign_orders` field will display the consignment details of the order. |
| data.mcf_order.consign_orders.shipping_provider.id | string | No | The shipping carrier unique id. (e.g. 7345645330412603141) |
| data.mcf_order.consign_orders.shipping_provider.name | string | No | The shipping carrier name. (e.g. UPS) |
| data.mcf_order.create_time | integer | No | The time when the mcf order is created (e.g. 1661756811) |
| data.mcf_order.external_order_id | string | No | The corresponding order ID in your OMS. (e.g. shopify202208291503530001100220033) |
| data.mcf_order.mcf_order_id | string | No | A unique ID that identifies different MCF orders (e.g. 7136104329798256386) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
