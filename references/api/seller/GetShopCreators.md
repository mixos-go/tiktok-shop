---
title: GetShopCreators
category: seller
api_name: GetShopCreators
method: GET
path: /seller/202407/shop_creators
version: 202407
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** seller
**API:** GetShopCreators

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/seller/202407/shop_creators

## API Description
Retrieve creators that are bound to a shop. Currently, you can only retrieve the binding status of the official creator.

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
| data.shop_creators | array<object> | No | The list of creators that is bound to the shop. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
