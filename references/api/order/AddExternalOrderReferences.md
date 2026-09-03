---
title: AddExternalOrderReferences
category: order
api_name: AddExternalOrderReferences
method: POST
path: /order/202406/orders/external_orders
version: 202406
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** order
**API:** AddExternalOrderReferences

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/order/202406/orders/external_orders

## API Description
If you are using your own external OMS (order management system) to manage TikTok Shop orders, the corresponding order IDs between your OMS and TikTok Shop may be different. Use this endpoint to attach the information in your OMS to the correct order(s) in TikTok Shop for further reference.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| orders | array<object> | No | Max count: 100. |
| orders.external_order.id | string | No | The corresponding order ID in your OMS. (e.g. 676461413038785752) |
| orders.external_order.line_items | array<object> | No | Max count: 100. |
| orders.external_order.platform | string | No | The alias of your OMS. Possible values: - SHOPIFY - WOOCOMMERCE - BIGCOMMERCE - MAGENTO - SALESFORCE_COMMERCE_CLOUD - CHANNEL_ADVISOR - AMAZON - ORDER_MANAGEMENT_SYSTEM - WAREHOUSE_MANAGEMENT_SYSTEM - ERP_SYSTEM Notes: - To attach information from multiple OMSs to the same order in TikTok Shop, call this API multiple times, each with the same TikTok Shop order and a different OMS. - To edit the attached information for a TikTok Shop order, call the API with the same OMS. (e.g. SHOPIFY) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | A list of error codes and their corresponding messages. |
| data.errors.detail.external_order | object | No | The order information in your OMS. |
| data.errors.detail.external_order.id | string | No | The corresponding order ID in your OMS. (e.g. 676461413038785752) |
| data.errors.detail.external_order.platform | string | No | The alias of your OMS. (e.g. SHOPIFY) |
| data.errors.detail.order_id | string | No | The unique identifier for a TikTok Shop order. (e.g. 576461413038785752) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
