---
title: AddLIVEProducts
category: affiliate
api_name: AddLIVEProducts
method: POST
path: /affiliate/202309/live_rooms/products
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate
**API:** AddLIVEProducts

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate/202309/live_rooms/products

## API Description
Use this API to add products to a creator's TikTok LIVE if the creator is live streaming. This API can also be used to add products to an upcoming TikTok LIVE. The platform will return the status of the added products as well as the error code and error message if the operation fails.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_ids | array<string> | No | The product IDs to add to the creator's livebag. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | The errors when adding products to showcase |
| data.errors.detail.product_id | string | No | The failing product ID when adding to the creator's showcase (e.g. 12390753231) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
