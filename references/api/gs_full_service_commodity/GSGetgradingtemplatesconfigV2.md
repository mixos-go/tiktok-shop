---
title: GSGetgradingtemplatesconfigV2
category: gs_full_service_commodity
api_name: GSGetgradingtemplatesconfigV2
method: GET
path: /gs_full_service_commodity/202406/beta/grading_templates
version: 202406
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_commodity
**API:** GSGetgradingtemplatesconfigV2

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_commodity/202406/beta/grading_templates

## API Description
Obtain size groups and size chart information for different categories of products, and synchronize size group information when creating a new promotion

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
| data.grading_templates | array<object> | No |  |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
