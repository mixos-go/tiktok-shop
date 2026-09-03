---
title: GSFullServiceSearchCategories
category: gs_full_service_commodity
api_name: GSFullServiceSearchCategories
method: POST
path: /gs_full_service_commodity/202405/beta/categories/search
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_commodity
**API:** GSFullServiceSearchCategories

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_commodity/202405/beta/categories/search

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
| page_offset | integer | No | The offset of page. (e.g. 1) |
| page_size | integer | No | The number of results to be returned per page. Range: 1-100. (e.g. 10) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.categories | array<object> | No | List |
| data.page_offset | integer | No | The offset of page. (e.g. 1) |
| data.page_size | integer | No | The number of results to be returned per page. Range: 1-100. (e.g. 10) |
| data.total_count | integer | No | The number of categories returned. (e.g. 10) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
