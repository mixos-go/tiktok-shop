---
title: GetOrderSplitAttributes
category: fulfillment
api_name: GetOrderSplitAttributes
method: GET
path: /fulfillment/202309/orders/split_attributes
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** GetOrderSplitAttributes

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202309/orders/split_attributes

## API Description
Use this API to check whether an order(s) can be split into multiple packages or not.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| order_ids (query) | array<string> | Yes | Query list of TikTok Shop order IDs. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.split_attributes | array<object> | No | Specific return information (can return multiple TikTok Shop order IDs). |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
