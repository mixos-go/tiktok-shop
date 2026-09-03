---
title: ReplicateProduct
category: product
api_name: ReplicateProduct
method: POST
path: /product/202507/products/{product_id}/global_replicate
version: 202507
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** ReplicateProduct

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202507/products/{product_id}/global_replicate

## API Description
Description of [POST]/product/:version/Replicate_Product

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_id (path) | string | Yes | The product ID in TikTok Shop. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| replicate_target | array<object> | No | Target markets for replicating the local product. |
| replicate_target.skus.price.currency | string | No | The currency. You must specify the local currency in the target market. (e.g. EUR) |
| replicate_target.skus.price.sale_price | string | No | The SKU's local display price shown on the product page before any discounts. Refer to Product Pricing for the allowed price ranges in each market. (e.g. 100) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | The list of errors that occurred. |
| data.errors.detail.region | string | No | The target region where the error occurred. (e.g. US) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
