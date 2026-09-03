---
title: GetGlobalSellingFullServiceCategories
category: gs_full_service_commodity
api_name: GetGlobalSellingFullServiceCategories
method: POST
path: /gs_full_service_commodity/202404/preview/categories/search
version: 202404
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_commodity
**API:** GetGlobalSellingFullServiceCategories

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_commodity/202404/preview/categories/search

## API Description
Use this API to get category list. Note: Product categories change frequently. It is recommended not to cache data locally. Please call the API in real time to obtain the latest category data. When using the outdated category data to create products, the API will return an error. In order to create products for invite-only categories, sellers need to contact account managers and apply for these categories

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_offset | integer | No | Page number of page query. Start with 1 (e.g. 1) |
| page_size | integer | No | Number of categories per request, [1,50] The categories of page_size and page_size must not exceed 10,000 (e.g. 50) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.categories | array<object> | No | result list |
| data.page_offset | integer | No | Page number of page query. Start with 1 (e.g. 1) |
| data.page_size | integer | No | Number of categories per request, [1,50] The categories of page_size and page_size must not exceed 10,000 (e.g. 50) |
| data.total_count | integer | No | Total count of the result (e.g. 1000) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
