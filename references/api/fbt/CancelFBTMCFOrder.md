---
title: CancelFBTMCFOrder
category: fbt
api_name: CancelFBTMCFOrder
method: POST
path: /fbt/202601/mcf_outbound_orders/cancel
version: 202601
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fbt
**API:** CancelFBTMCFOrder

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/fbt/202601/mcf_outbound_orders/cancel

## API Description
After an order is shipped via **FBT**, an **MCF Order** may be split into one or more `consign orders` for fulfillment. This API supports order cancellation at the level of individual `consign orders`, which can be done by providing the corresponding `mcf_order_id` and its associated `consign order` information. You can retrieve the information of `consign orders` associated with a `mcf_order_id` via the **Get FBF MCF Order Status** API.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| consign_orders | array<object> | No | The cancel list of consign order |
| mcf_order_id | string | No | A unique ID that identifies different MCF orders (e.g. 7136104329798256386) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.mcf_order | object | No | The mcf order information and related consign order status. |
| data.mcf_order.consign_orders | array<object> | No | Consign orders cancel results of this mcf order |
| data.mcf_order.external_order_id | string | No | The corresponding order ID in your OMS. (e.g. shopify7136104329798256386) |
| data.mcf_order.mcf_order_id | string | No | A unique ID that identifies different MCF orders (e.g. 7136104329798256386) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
