---
title: RecoverProducts
category: product
api_name: RecoverProducts
method: POST
path: /product/202309/products/recover
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** RecoverProducts

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/products/recover

## API Description
Recover products that are in the `Deleted` status. The status changes to `Seller_deactivated` after recovery.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_ids | array<string> | No | The product IDs to recover. Max number of IDs: 20. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | The list of errors that occurred. |
| data.errors.detail.product_id | string | No | The ID of the product that could not be recovered. (e.g. 1729382588639839583) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
