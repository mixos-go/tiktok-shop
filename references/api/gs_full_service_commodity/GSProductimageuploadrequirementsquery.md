---
title: GSProductimageuploadrequirementsquery
category: gs_full_service_commodity
api_name: GSProductimageuploadrequirementsquery
method: GET
path: /gs_full_service_commodity/202405/beta/categories/{category_id}/image_upload_requirements
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_commodity
**API:** GSProductimageuploadrequirementsquery

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_commodity/202405/beta/categories/{category_id}/image_upload_requirements

## API Description
Description of [POST]/gs_full_service_commodity/:version/GS:_Product_image_upload_requirements_query

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
| data.image_upload_requirements | array<object> | No |  |
| data.pic_upload_way_configs | array<string> | No |  |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
