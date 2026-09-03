---
title: GetActiveShops
category: seller
api_name: GetActiveShops
method: GET
path: /seller/202309/shops
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** seller
**API:** GetActiveShops

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/seller/202309/shops

## API Description
Retrieves all active shops that belong to a seller. You can use this API to check the activation status of shops. Target seller: All

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
| data.shops | array<object> | No | The list of active shops that belong to the seller. Note: Local sellers only have 1 shop. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
