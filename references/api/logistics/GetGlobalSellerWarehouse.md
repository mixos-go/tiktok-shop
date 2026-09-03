---
title: GetGlobalSellerWarehouse
category: logistics
api_name: GetGlobalSellerWarehouse
method: GET
path: /logistics/202309/global_warehouses
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** logistics
**API:** GetGlobalSellerWarehouse

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/logistics/202309/global_warehouses

## API Description
This API retrieves all global warehouse information associated with the seller. Warehouse information includes global warehouse ID, warehouse name, and warehouse ownership.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.global_warehouses | array<object> | No | Global warehouse information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
