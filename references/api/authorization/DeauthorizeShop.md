---
title: DeauthorizeShop
category: authorization
api_name: DeauthorizeShop
method: DELETE
path: /authorization/202403/shops
version: 202403
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** authorization
**API:** DeauthorizeShop

**Method:** DELETE
**HTTP Path:** https://open-api.tiktokglobalshop.com/authorization/202403/shops

## API Description
This API is used for developers to deauthorize a shop and notify the seller about this action by email

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | Yes | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=650 |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
