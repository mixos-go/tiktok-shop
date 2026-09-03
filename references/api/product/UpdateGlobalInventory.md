---
title: UpdateGlobalInventory
category: product
api_name: UpdateGlobalInventory
method: POST
path: /product/202309/global_products/{global_product_id}/inventory/update
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** UpdateGlobalInventory

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/global_products/{global_product_id}/inventory/update

## API Description
Update the inventory of unpublished global products if you have access to the Multi-Warehouse feature. The inventory of published global products will not be affected by this update operation.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| global_product_id (path) | string | Yes | The global product ID to be updated. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| global_skus | array<object> | No | The list of global SKUs that need to be updated. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
