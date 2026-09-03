---
title: RemoveShowcaseProductsold
category: affiliate
api_name: RemoveShowcaseProductsold
method: DELETE
path: /affiliate/202309/showcases/products
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate
**API:** RemoveShowcaseProductsold

**Method:** DELETE
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate/202309/showcases/products

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
| product_ids | array<string> | No | The product IDs to delete from the creator's showcase. The maximum number of products to delete at once is 200. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
