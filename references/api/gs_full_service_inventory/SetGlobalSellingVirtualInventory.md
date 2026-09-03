---
title: SetGlobalSellingVirtualInventory
category: gs_full_service_inventory
api_name: SetGlobalSellingVirtualInventory
method: POST
path: /gs_full_service_inventory/202404/preview/virtual_inventory/update
version: 202404
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_inventory
**API:** SetGlobalSellingVirtualInventory

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_inventory/202404/preview/virtual_inventory/update

## API Description
This API is used to set the JIT available inventory, for example, the total inventory is 80. If 20 are occupied, the available inventory is 80. If you modify the available inventory to 100, the total inventory is 120.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| skus | array<object> | No | update sku list, sku size<=10 |
| supplier_id | string | No | supplier_id (e.g. test576561151188) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | fail sku list |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
