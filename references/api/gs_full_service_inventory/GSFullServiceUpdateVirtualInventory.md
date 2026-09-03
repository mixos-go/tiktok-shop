---
title: GSFullServiceUpdateVirtualInventory
category: gs_full_service_inventory
api_name: GSFullServiceUpdateVirtualInventory
method: POST
path: /gs_full_service_inventory/202405/beta/virtual_inventory/update
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_inventory
**API:** GSFullServiceUpdateVirtualInventory

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_inventory/202405/beta/virtual_inventory/update

## API Description
Description of [POST]/gs_full_service_inventory/:version/GS_FullService_Update_Virtual_Inventory

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| skus | array<object> | No | update sku list, sku size<=10 |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | fail sku list |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
