---
title: TopLIVEProducts
category: affiliate
api_name: TopLIVEProducts
method: POST
path: /affiliate/202309/live_rooms/products/top
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate
**API:** TopLIVEProducts

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate/202309/live_rooms/products/top

## API Description
Use this API to move products to the top in a creator's TikTok LIVE. This API can also be used to move products to the top for an upcoming TikTok LIVE. The platform will return the error code and error message if the pinning operation fails.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_ids | array<string> | No | The product IDs to move to the top in a creator's TikTok LIVE. If multiple products are provided, they will display according to the order passed in this parameter. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
