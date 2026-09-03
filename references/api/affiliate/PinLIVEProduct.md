---
title: PinLIVEProduct
category: affiliate
api_name: PinLIVEProduct
method: POST
path: /affiliate/202309/live_rooms/products/{product_id}/pin
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate
**API:** PinLIVEProduct

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate/202309/live_rooms/products/{product_id}/pin

## API Description
Use this API to pin a specified product in the creator's TikTok LIVE. The product will be highlighted in the form of a card in the live stream. If a new product is pinned in TikTok LIVE, it will replace the existing pinned product. The platform will return the error code and error message if the pinning operation fails.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_id (path) | string | Yes | The product IDs to move to the top in a creator's TikTok LIVE. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
