---
title: GetProductStats
category: analytics
api_name: GetProductStats
method: GET
path: /analytics/202309/live_rooms/{live_room_id}/product_stats
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** analytics
**API:** GetProductStats

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/analytics/202309/live_rooms/{live_room_id}/product_stats

## API Description
This API gets the product list of live room

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| live_room_id (path) | string | Yes | live stream room id |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.product_stats | array<object> | No | The stats of the live streaming room, e.g. GMV |
| data.product_stats.local_gmv.amount | string | No | The amount of GMV (e.g. 123) |
| data.product_stats.local_gmv.currency | string | No | Currency Code (e.g. USD) |
| data.product_stats.local_unit_price.amount | string | No | The amount of unit price (e.g. 123) |
| data.product_stats.local_unit_price.currency | string | No | Currency Code (e.g. USD) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
