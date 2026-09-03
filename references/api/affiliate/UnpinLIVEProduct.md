---
title: UnpinLIVEProduct
category: affiliate
api_name: UnpinLIVEProduct
method: POST
path: /affiliate/202309/live_rooms/products/{product_id}/unpin
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate
**API:** UnpinLIVEProduct

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate/202309/live_rooms/products/{product_id}/unpin

## API Description
Use this API to unpin a specified product in the creator's TikTok LIVE. If the product is not currently pinned in the live stream, it will return an error. The platform will return the error code and error message if the unpin operation fails.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_id (path) | string | Yes | The product ID to unpin in a creator's TikTok LIVE. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
