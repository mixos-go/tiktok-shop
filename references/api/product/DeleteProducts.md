---
title: DeleteProducts
category: product
api_name: DeleteProducts
method: DELETE
path: /product/202309/products
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** DeleteProducts

**Method:** DELETE
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/products

## API Description
Delete non-frozen products that you no longer need. **For the Indonesia market**: You can only delete products that are not frozen on all listing platforms. If the product is frozen on any platform, it cannot be deleted.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_ids | array<string> | No | The product IDs to delete. Max number of IDs: 20. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | The list of errors that occurred. |
| data.errors.detail.product_id | string | No | The ID of the product that could not be deleted. (e.g. 1729382588639839583) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
