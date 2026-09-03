---
title: UpdateTheBlindBoxOpeningResults
category: order
api_name: UpdateTheBlindBoxOpeningResults
method: POST
path: /order/202511/orders/blind_box_result/callback
version: 202511
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** order
**API:** UpdateTheBlindBoxOpeningResults

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/order/202511/orders/blind_box_result/callback

## API Description
After the merchant completes the blind box opening in the live room, then the blind box results are transmitted back to the platform, after which the user can view the unboxing results in the order details

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| blind_box_results | array<object> | No | Unboxing results for line items under orders. |
| main_order_id | string | No | The unique identifier for a TikTok Shop order. (e.g. 576461413038785752) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
