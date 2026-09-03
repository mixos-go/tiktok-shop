---
title: GSFullServiceGetCategoryinformation
category: gs_full_service_commodity
api_name: GSFullServiceGetCategoryinformation
method: GET
path: /gs_full_service_commodity/202405/beta/categories/{category_id}
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_commodity
**API:** GSFullServiceGetCategoryinformation

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_commodity/202405/beta/categories/{category_id}

## API Description
Get category information

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| category_id (path) | string | Yes |  |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.first_key_attribute_id | string | No |  |
| data.id | string | No |  |
| data.is_allowed_jit | boolean | No |  |
| data.is_custom_key_attribute | boolean | No |  |
| data.is_enabled | boolean | No |  |
| data.is_garment | boolean | No |  |
| data.is_leaf | boolean | No |  |
| data.level | integer | No |  |
| data.name_en | string | No |  |
| data.name_zh | string | No |  |
| data.parent_id | string | No |  |
| data.second_key_attribute_id | string | No |  |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
