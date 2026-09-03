---
title: GSFullServiceGetattributes
category: gs_full_service_commodity
api_name: GSFullServiceGetattributes
method: GET
path: /gs_full_service_commodity/202507/beta/categories/{category_id}/attributes
version: 202507
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_commodity
**API:** GSFullServiceGetattributes

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_commodity/202507/beta/categories/{category_id}/attributes

## API Description
GS Full Service Get attributes

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| category_id (path) | string | Yes | ID of the category |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.attributes | array<object> | No | Attribute relations of category |
| data.region_attributes | array<object> | No | A list of product attributes config in different regions |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
