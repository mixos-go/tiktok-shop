---
title: StandardizeWarehouseAddress
category: logistics
api_name: StandardizeWarehouseAddress
method: POST
path: /logistics/202412/addresses/standardize
version: 202412
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** logistics
**API:** StandardizeWarehouseAddress

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/logistics/202412/addresses/standardize

## API Description
Returns the best standardized address for a given address, suggested calling this API before calling [create warehouse]. Only available in the US market.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | Yes | Shop_cipher is required for cross-border shops, and optional for local shops. It's unique for each shop. Get the this property from the Get Authorized Shop API dynamically. Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| address | object | No | Input address to be corrected by platform. |
| address.address_line1 | string | No | First line of the address (e.g. South Sea 11 floor) |
| address.address_line2 | string | No | Second line of the address (e.g. Xinhua Street) |
| address.city | string | No | City of the address (e.g. Guanzhou) |
| address.district | string | No | District of the address (e.g. HuaDu) |
| address.postal_code | string | No | postal code (also known as zip code) (e.g. 98804) |
| address.region_code | string | No | 2 letter region code, ISO 3166-1 international standard. (e.g. CN) |
| address.state | string | No | State or province (e.g. Guandong) |
| address.town | string | No | Town of the address (e.g. Huashan) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.standardization_result | object | No | Address standardization result |
| data.standardization_result.standardized_address | object | No | Address standardized by the platform |
| data.standardization_result.standardized_address.address_line1 | string | No | First line of the address (e.g. South Sea 11 floor) |
| data.standardization_result.standardized_address.address_line2 | string | No | Second line of the address (e.g. Xinhua Street) |
| data.standardization_result.standardized_address.city | string | No | City of the address (e.g. GuanZhou) |
| data.standardization_result.standardized_address.district | string | No | District of the address (e.g. HuaDu) |
| data.standardization_result.standardized_address.postal_code | string | No | postal code (also known as zip code) (e.g. 98804) |
| data.standardization_result.standardized_address.region_code | string | No | 2 letter country region code, ISO 3166-1 international standard. (e.g. CN) |
| data.standardization_result.standardized_address.state | string | No | State or province of the address (e.g. Guandong) |
| data.standardization_result.standardized_address.town | string | No | Town of the address (e.g. Huashan) |
| data.standardization_result.updated | boolean | No | Whether the address has been standardized by the platform (e.g. True) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
