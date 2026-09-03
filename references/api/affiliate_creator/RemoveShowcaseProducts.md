---
title: RemoveShowcaseProducts
category: affiliate_creator
api_name: RemoveShowcaseProducts
method: DELETE
path: /affiliate_creator/202409/showcases/products
version: 202409
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_creator
**API:** RemoveShowcaseProducts

**Method:** DELETE
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_creator/202409/showcases/products

## API Description
This API removes the products in the creator's showcase. The platform will return error code and error message if the deletion fails.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_ids | array<string> | No | The product IDs to remove from the creator's showcase. The maximum number of products to delete at once is 200. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.code | integer | No | The success or failure status code returned in API response. (e.g. 0) |
| data.message | string | No | The success or failure messages are returned in API response. Reasons of failure will be described in the message. (e.g. Success) |
| data.request_id | string | No | Every request generates a unique request_id for logging purposes. (e.g. 202203070749000101890810281E8C70B7) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
