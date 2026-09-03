---
title: GetAuthorizedCategoryAssets
category: authorization
api_name: GetAuthorizedCategoryAssets
method: GET
path: /authorization/202405/category_assets
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** authorization
**API:** GetAuthorizedCategoryAssets

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/authorization/202405/category_assets

## API Description
Retrieves the list of business category assets authorized by a partner for an app. Partner authorization is required before an app can access the data of a partner, and this access is granted based on business categories. Use this API to check which business category assets are currently authorized for an app and obtain the corresponding category asset cipher for use as an input parameter in affiliate partner related APIs. For more information about partner authorization, refer to [Partner authorization guide](678e3a3978f4c20311b8b555). Target partner: All

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
| data.category_assets | array<object> | No | The list of business category assets that a partner has authorized for the app. |
| data.category_assets.category.id | integer | No | The ID of the business category. Use this field to verify if the partner has authorized the correct category. Otherwise, request re-authorization from the partner by referring to the [Partner authorization guide](https://partner.tiktokshop.com/docv2/page/669a301bd92cd602fd403ff9). (e.g. 3) |
| data.category_assets.category.name | string | No | The name of the business category. This name may change. (e.g. Customer Support) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
