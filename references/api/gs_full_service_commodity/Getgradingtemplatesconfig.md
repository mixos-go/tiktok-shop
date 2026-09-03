---
title: Getgradingtemplatesconfig
category: gs_full_service_commodity
api_name: Getgradingtemplatesconfig
method: GET
path: /gs_full_service_commodity/202405/preview/grading_templates
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_commodity
**API:** Getgradingtemplatesconfig

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_commodity/202405/preview/grading_templates

## API Description
Obtain size groups and size chart information for different categories of products, and synchronize size group information when creating a new promotion

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| supplier_id (query) | string | Yes | identity ID of supplier |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.grading_templates | array<object> | No | Struct List of grading templates , including id and name information |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
