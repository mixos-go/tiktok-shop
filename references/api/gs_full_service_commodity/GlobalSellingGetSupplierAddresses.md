---
title: GlobalSellingGetSupplierAddresses
category: gs_full_service_commodity
api_name: GlobalSellingGetSupplierAddresses
method: GET
path: /gs_full_service_commodity/202407/supplier_addresses
version: 202407
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_commodity
**API:** GlobalSellingGetSupplierAddresses

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_commodity/202407/supplier_addresses

## API Description
This API is used to query supplier addresses

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_token (query) | string | No | Page offset |
| page_size (query) | integer | No | Page size, default 10, less or equal to 50 |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.addresses | array<object> | No | Address Information |
| data.addresses.detail.building | string | No | The detailed address under town (e.g. A工业园B栋二楼) |
| data.addresses.detail.city_name | string | No | City (e.g. 广州市) |
| data.addresses.detail.country_name | string | No | Country (e.g. 中华人民共和国) |
| data.addresses.detail.district_name | string | No | District (e.g. 白云区) |
| data.addresses.detail.province_name | string | No | Province (e.g. 广东省) |
| data.addresses.detail.town_name | string | No | Town (e.g. 白云湖街道) |
| data.next_page_token | string | No | The next page encode (e.g. 2) |
| data.total_count | integer | No | The count of addresses (e.g. 100) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
