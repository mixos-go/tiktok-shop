---
title: GetTracking
category: fulfillment
api_name: GetTracking
method: GET
path: /fulfillment/202309/orders/{order_id}/tracking
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** GetTracking

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202309/orders/{order_id}/tracking

## API Description
This API can use the order number to obtain the corresponding logistics tracking information.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| order_id (path) | string | Yes | TikTok Shop order ID. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.tracking | array<object> | No | The return list of tracking information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
