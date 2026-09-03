---
title: GetSizeGroups
category: gs_full_service_commodity
api_name: GetSizeGroups
method: GET
path: /gs_full_service_commodity/202408/size_groups
version: 202408
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_commodity
**API:** GetSizeGroups

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_commodity/202408/size_groups

## API Description
Obtain size group and size chart information for different categories of products. When creating a new promotion, you need to synchronize the size group information

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| category_id (query) | string | Yes | leaf category id |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.size_grading_data | object | No | category size grading info |
| data.size_grading_data.size_grading_required | boolean | No | is it necessary to maintain a size chart for the category? If it is (true), please maintain a grading template in the promotion interface (e.g. True) |
| data.size_grading_data.size_groups | array<object> | No | 1. If the category includes size groups, please fill in the size group ID when promoting products 2. When filling in key_attributes for product promotion, it is necessary to fill in the corresponding size attribute values under the size group |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
