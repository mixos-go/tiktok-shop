---
title: GetHandoverTimeslots
category: fulfillment
api_name: GetHandoverTimeslots
method: GET
path: /fulfillment/202309/orders/{order_id}/handover_time_slots
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** GetHandoverTimeslots

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202309/orders/{order_id}/handover_time_slots

## API Description
Use this API to retrieve the time slots available for pickup, drop off or van collection for the seller's specified package by using order ID and order line item ID.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| order_id (path) | string | Yes | TikTok shop order ID. |
| order_line_item_ids (query) | array<string> | No | Order line item ID list |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.can_drop_off | boolean | No | Does this package support point delivery (e.g. True) |
| data.can_pickup | boolean | No | Does this package support door-to-door collection (e.g. True) |
| data.can_van_collection | boolean | No | Only for UK. Use this field to determine wheather van collection is available (e.g. True) |
| data.drop_off_point_url | string | No | View deliverable logistics outlets via URL (e.g. www.j&t.com) |
| data.pickup_slots | array<object> | No | Package pickup time slots for door-to-door collection |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
