---
title: GetWarehouseList
category: logistics
api_name: GetWarehouseList
method: GET
path: /logistics/202309/warehouses
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** logistics
**API:** GetWarehouseList

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/logistics/202309/warehouses

## API Description
This API retrieves all warehouse information associated with the seller. Warehouse information includes name, status, address, and other details.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.warehouses | array<object> | No | All the warehouses associated with the seller. |
| data.warehouses.address.address_line1 | string | No | The first line of the warehouse address, like street name and street number. Note: - For Brazilian market, this represents the neighborhood or district. - For the JP market, this represents the district (Chome), block (Banchi), building number (Go). (e.g. Bairro/Distrito) |
| data.warehouses.address.address_line2 | string | No | The second line of the warehouse address, like flat, apartment, or suit. Note: For the Brazilian market, this represents the street name. (e.g. Caminho Trinta e Três) |
| data.warehouses.address.address_line3 | string | No | This represents the street number. If it's `s/n`, it means null. Note: Available only in the Brazilian market. (e.g. 3) |
| data.warehouses.address.address_line4 | string | No | This represents supplement information, like flat, apartment, or suit (optional). Note: Available only in the Brazilian market. (e.g. 11 floor) |
| data.warehouses.address.city | string | No | Warehouse city. (e.g. GuanZhou) |
| data.warehouses.address.contact_person | string | No | Warehouse contact person name. (e.g. Lee) |
| data.warehouses.address.distict | string | No | Warehouse district. (e.g. HuaDu) |
| data.warehouses.address.first_name | string | No | Kanji first name Applicable only for the JP market. (e.g. 新一) |
| data.warehouses.address.first_name_local_script | string | No | Hiragana or Katakana first name Applicable only for the JP market. (e.g. くどう) |
| data.warehouses.address.full_address | string | No | The combined warehouse address, including the street address and other address information such as apartment number, building, floor..etc (optional) (e.g. South Sea 11 floor) |
| data.warehouses.address.geolocation | object | No | The geographical location of the address. |
| data.warehouses.address.geolocation.latitude | string | No | The latitude of the address. (e.g. 45.41634) |
| data.warehouses.address.geolocation.longitude | string | No | The longitude of the address. (e.g. -75.6868) |
| data.warehouses.address.last_name | string | No | Kanji last name Applicable only for the JP market. (e.g. 工藤) |
| data.warehouses.address.last_name_local_script | string | No | Hiragana or Katakana last name Applicable only for the JP market. (e.g. しんいち) |
| data.warehouses.address.phone_number | string | No | Warehouse phone number. (e.g. 188****2234) |
| data.warehouses.address.postal_code | string | No | Warehouse address postal code (also known as zip code) (e.g. 510000) |
| data.warehouses.address.region | string | No | Warehouse region. (e.g. China) |
| data.warehouses.address.region_code | string | No | Warehouse region code. (e.g. CN) |
| data.warehouses.address.state | string | No | Warehouse state or province. (e.g. GuangDong) |
| data.warehouses.address.town | string | No | Warehouse town. (e.g. town) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
