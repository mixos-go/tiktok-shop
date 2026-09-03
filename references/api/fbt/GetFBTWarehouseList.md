---
title: GetFBTWarehouseList
category: fbt
api_name: GetFBTWarehouseList
method: GET
path: /fbt/202408/warehouses
version: 202408
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fbt
**API:** GetFBTWarehouseList

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/fbt/202408/warehouses

## API Description
This API is used to retrieve all Fulfilled by TikTok warehouse information including the warehouse name, warehouse address information, etc. The IDs of subscribed warehouses can be used to query inventory-related information.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.warehouses | array<object> | No | A list of Fulfilled by TikTok warehouses information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
