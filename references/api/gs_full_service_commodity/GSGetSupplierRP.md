---
title: GSGetSupplierRP
category: gs_full_service_commodity
api_name: GSGetSupplierRP
method: GET
path: /gs_full_service_commodity/202508/supplier_rps
version: 202508
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_commodity
**API:** GSGetSupplierRP

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_commodity/202508/supplier_rps

## API Description
Description of [get]/gs_full_service_commodity/:version/supplier_rps

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_token (query) | string | No | It is an identifier used to retrieve the next page of data, and there is no need to pass it when requesting the first page. |
| page_size (query) | integer | No | Indicates the number of data entries displayed per page, used to control the number of records returned in a single query. The default value is 10, and the page size must be less than or equal to 30. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | next page token (e.g. cGFnZV9udW1iZXI9NA==) |
| data.rp_infos | array<object> | No | rp infos |
| data.rp_infos.address.city | string | No | city (e.g. Vienna) |
| data.rp_infos.address.country | string | No | country (e.g. Republic of Austria) |
| data.rp_infos.address.province | string | No | province (e.g. Vienna) |
| data.rp_infos.address.street | string | No | street (e.g. test22) |
| data.rp_infos.address.street2 | string | No | street2 (e.g. test22) |
| data.rp_infos.name.first_name | string | No | first name (e.g. first) |
| data.rp_infos.name.last_name | string | No | last name (e.g. last) |
| data.rp_infos.name.middle_name | string | No | middle name (e.g. middle) |
| data.rp_infos.phone_number.phone_number | string | No | phone number (e.g. 12345678903) |
| data.rp_infos.phone_number.phone_number_region | string | No | phone number region (e.g. +49) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
