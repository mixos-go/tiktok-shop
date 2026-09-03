---
title: GSFullServiceGetCertifications
category: gs_full_service_commodity
api_name: GSFullServiceGetCertifications
method: GET
path: /gs_full_service_commodity/202507/beta/categories/{category_id}/certifications
version: 202507
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_commodity
**API:** GSFullServiceGetCertifications

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_commodity/202507/beta/categories/{category_id}/certifications

## API Description
Get Global Selling certifications by categories

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| category_id (path) | string | Yes | Category id of Global Sellling. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.certifications | array<object> | No | The list of certifications |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
