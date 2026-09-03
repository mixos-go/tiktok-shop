---
title: GSFullServicePreviewGetcategoryinformation
category: gs_full_service_commodity
api_name: GSFullServicePreviewGetcategoryinformation
method: GET
path: /gs_full_service_commodity/202404/preview/categories/{category_id}
version: 202404
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_commodity
**API:** GSFullServicePreviewGetcategoryinformation

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_commodity/202404/preview/categories/{category_id}

## API Description
Get category information

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
| data.first_key_attribute_id | string | No | The first key attribute is used for publishing a product. (e.g. 7110491141870454529) |
| data.id | string | No | ID of the category (e.g. 7303372181458093832) |
| data.is_allowed_jit | boolean | No | Whether the category is allowed to publish the product in JIT mode (e.g. True) |
| data.is_custom_key_attribute | boolean | No | This category doesn't have key attributes if is_custom is true and users can select any attributes as key attributes when publishing a product. This category has two key attributes if is_custom is false and users must use these two key attributes when publishing a product. (e.g. True) |
| data.is_enabled | boolean | No | Whether this category is enabled. If the status is enabled, this category can be used to publish the product. If the status is not enabled, this category can't be used to publish the product. (e.g. True) |
| data.is_garment | boolean | No | Whether the category is garment (e.g. True) |
| data.is_leaf | boolean | No | Whether it is a leaf category node (e.g. True) |
| data.level | integer | No | Category level (e.g. 3) |
| data.name_en | string | No | Category name in English (e.g. Plus Size Women's Traditional Dresses) |
| data.name_zh | string | No | Category name in Chinese (e.g. 大码女士传统连衣裙) |
| data.parent_id | string | No | Parent category id (e.g. 7303372181458093832) |
| data.second_key_attribute_id | string | No | The second key attribute is used for publishing a product. (e.g. 7110464130469611265) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
