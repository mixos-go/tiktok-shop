---
title: RemoveLIVEProducts
category: affiliate
api_name: RemoveLIVEProducts
method: DELETE
path: /affiliate/202309/live_rooms/products
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate
**API:** RemoveLIVEProducts

**Method:** DELETE
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate/202309/live_rooms/products

## API Description
Use this API to remove products from a creator's TikTok LIVE if the creator is live streaming. This API can also be used to remove products prepared for an upcoming TikTok LIVE. The platform will return the error code and error message if the product removal fails.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_ids | array<string> | No | The product IDs to remove from the creator's TikTok LIVE. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
