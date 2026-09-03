---
title: SearchOrderByExternalOrderReference
category: order
api_name: SearchOrderByExternalOrderReference
method: POST
path: /order/202406/orders/external_order_search
version: 202406
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** order
**API:** SearchOrderByExternalOrderReference

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/order/202406/orders/external_order_search

## API Description
If you have used the `Add External Order References` API to sync information from your external order management system (OMS) to corresponding orders in TikTok Shop, you may call this API to search for order information in TikTok Shop based on information in your OMS.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| platform (query) | string | Yes | The alias of your external order management system (OMS). Possible values: - SHOPIFY - WOOCOMMERCE - BIGCOMMERCE - MAGENTO - SALESFORCE_COMMERCE_CLOUD - CHANNEL_ADVISOR - AMAZON - ORDER_MANAGEMENT_SYSTEM - WAREHOUSE_MANAGEMENT_SYSTEM - ERP_SYSTEM |
| external_order_id (query) | string | Yes | Order ID in your OMS. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.orders | array<object> | No | A list of returned orders. |
| data.orders.external_order.id | string | No | Order ID in your OMS. (e.g. 676461413038785752) |
| data.orders.external_order.line_items | array<object> | No | Line items in the order. |
| data.orders.external_order.platform | string | No | The alias of your OMS. (e.g. SHOPIFY) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
