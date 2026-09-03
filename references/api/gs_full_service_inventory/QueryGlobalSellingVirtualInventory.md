---
title: QueryGlobalSellingVirtualInventory
category: gs_full_service_inventory
api_name: QueryGlobalSellingVirtualInventory
method: POST
path: /gs_full_service_inventory/202404/preview/virtual_inventory/query
version: 202404
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_inventory
**API:** QueryGlobalSellingVirtualInventory

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_inventory/202404/preview/virtual_inventory/query

## API Description
Use this Api to query JIT virtual inventory

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| skus | array<string> | No | sku code list |
| supplier_id | string | No | supplier id (e.g. test001) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.inventory | array<object> | No | inventory list |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
