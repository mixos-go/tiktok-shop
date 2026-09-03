---
title: GetGlobalReplicatedProducts
category: product
api_name: GetGlobalReplicatedProducts
method: GET
path: /product/202507/products/{product_id}/replicated_products
version: 202507
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** GetGlobalReplicatedProducts

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202507/products/{product_id}/replicated_products

## API Description
Retrieves the globally associated replicas in other markets if the product has been replicated through local replication. Applicable only for global sellers.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_id (path) | string | Yes | The ID of the product. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.replicated_products | array<object> | No | The globally associated replicas in other markets if the product has been replicated through local replication. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
