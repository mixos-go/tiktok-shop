---
title: GetExternalOrderReferences
category: order
api_name: GetExternalOrderReferences
method: GET
path: /order/202406/orders/{order_id}/external_orders
version: 202406
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** order
**API:** GetExternalOrderReferences

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/order/202406/orders/{order_id}/external_orders

## API Description
If you have used the `Add External Order References` API to sync order information between your external order management system (OMS) and TikTok Shop, you may call this API to get information on the synced orders.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| order_id (path) | string | Yes | The unique identifier for a TikTok Shop order. |
| platform (query) | string | Yes | The alias of your external order management system (OMS). Possible values: - SHOPIFY - WOOCOMMERCE - BIGCOMMERCE - MAGENTO - SALESFORCE_COMMERCE_CLOUD - CHANNEL_ADVISOR - AMAZON - ORDER_MANAGEMENT_SYSTEM - WAREHOUSE_MANAGEMENT_SYSTEM - ERP_SYSTEM |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.external_orders | array<object> | No | A list of orders that have been synced between your OMS and TikTok Shop. Note: If you've synced order information between multiple OMSs to the same TikTok Shop order, you'll retrieve all external order information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
