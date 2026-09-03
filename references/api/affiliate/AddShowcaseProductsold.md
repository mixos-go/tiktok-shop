---
title: AddShowcaseProductsold
category: affiliate
api_name: AddShowcaseProductsold
method: POST
path: /affiliate/202309/showcases/products
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate
**API:** AddShowcaseProductsold

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate/202309/showcases/products

## API Description
This API adds the products to the creator's showcase. The platform will return the add status of the products, and error code and error message if the deletion fails.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_ids | array<string> | No | The product IDs to add to the creator's showcase. The products can be added from my bound shop. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | The errors when adding products to showcase |
| data.errors.detail.product_id | string | No | The failing product ID when the product is added to the creator's showcase (e.g. 12390753231) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
