---
title: GSGetsizegroupsconfigV2
category: gs_full_service_commodity
api_name: GSGetsizegroupsconfigV2
method: GET
path: /gs_full_service_commodity/202406/beta/size_groups
version: 202406
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_commodity
**API:** GSGetsizegroupsconfigV2

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_commodity/202406/beta/size_groups

## API Description
Obtain size group and size chart information for different categories of products. When creating a new promotion, you need to synchronize the size group information.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| category_id (query) | string | Yes |  |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.size_grading_required | boolean | No |  |
| data.size_groups | array<object> | No |  |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
