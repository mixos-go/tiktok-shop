---
title: DeleteGlobalProducts
category: product
api_name: DeleteGlobalProducts
method: DELETE
path: /product/202309/global_products
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** DeleteGlobalProducts

**Method:** DELETE
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/global_products

## API Description
Delete global products that you no longer need.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| global_product_ids | array<string> | No | The global product IDs to delete. Max number of IDs: 20 |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | The list of errors that occurred. |
| data.errors.detail.global_product_id | string | No | The ID of the global product that could not be deleted. (e.g. 1729715829872102020) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
