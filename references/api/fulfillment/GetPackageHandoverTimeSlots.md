---
title: GetPackageHandoverTimeSlots
category: fulfillment
api_name: GetPackageHandoverTimeSlots
method: GET
path: /fulfillment/202309/packages/{package_id}/handover_time_slots
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** GetPackageHandoverTimeSlots

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202309/packages/{package_id}/handover_time_slots

## API Description
Use this API to retrieve the time slots available for pickup, drop-off, or van collection for the seller's specified package by using package ID.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| package_id (path) | string | Yes | TikTok Shop package ID. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.can_drop_off | boolean | No | Whether this package be dropped off at a drop-off location (e.g. True) |
| data.can_pickup | boolean | No | Whether this package supports door-to-door collection. (e.g. True) |
| data.can_van_collection | boolean | No | Specific to UK. Use this field to determine whether van collection is available. (e.g. True) |
| data.drop_off_point_url | string | No | View package drop-off locations via provided URL. (e.g. true) |
| data.pickup_slots | array<object> | No | Time slot for door-to-door collection. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
