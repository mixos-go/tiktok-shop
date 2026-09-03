---
title: GetAuthorizedShops
category: authorization
api_name: GetAuthorizedShops
method: GET
path: /authorization/202309/shops
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** authorization
**API:** GetAuthorizedShops

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/authorization/202309/shops

## API Description
Retrieves the list of shops that a seller has authorized for an app. Seller authorization is required before an app can access the data of a shop. Use this API to check which shops are currently authorized for an app and obtain the corresponding shop cipher for use as an input parameter in shop related APIs. For more information about seller authorization, refer to [Seller authorization guide](https://partner.tiktokshop.com/docv2/page/678e3a344ddec3030b238fa0). Target seller: All

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
| data.shops | array<object> | No | The list of shops that a seller has authorized for the app. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
