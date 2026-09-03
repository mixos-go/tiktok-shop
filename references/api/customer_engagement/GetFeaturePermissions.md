---
title: GetFeaturePermissions
category: customer_engagement
api_name: GetFeaturePermissions
method: GET
path: /customer_engagement/202502/permissions
version: 202502
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** customer_engagement
**API:** GetFeaturePermissions

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/customer_engagement/202502/permissions

## API Description
Retrieve information about customer engagement features that the shop has permission to use.

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
| data.features | array<object> | No | The list of customer engagement features that has access control. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
