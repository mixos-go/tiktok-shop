---
title: CreateWarehouse
category: logistics
api_name: CreateWarehouse
method: POST
path: /logistics/202502/warehouses
version: 202502
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** logistics
**API:** CreateWarehouse

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/logistics/202502/warehouses

## API Description
Create seller's warehouse

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| warehouse | object | No | The warehouse needs to create |
| warehouse.address | object | No | Warehouse address. |
| warehouse.address.address_line_1 | string | No | The first line of the warehouse address.Such as street name、street number Note: For the Brazilian market, this represents the neighborhood or district. (e.g. Bairro/Distrito) |
| warehouse.address.address_line_2 | string | No | The second line of the warehouse address.Such as flat, apartment, suit. Note: For the Brazilian market, this represents the street name (e.g. Caminho Trinta e Três) |
| warehouse.address.address_line_3 | string | No | This represents street numbers, such as 3 or s/n(means null). Note: Only applicable in the Brazilian market, invalid in the other markets. (e.g. 3) |
| warehouse.address.address_line_4 | string | No | This represents supplement information, such as flat、apartment、suit. Note: Only applicable in the Brazilian market, invalid in the other markets. (e.g. 11 floor) |
| warehouse.address.city | string | No | Warehouse city. (e.g. Guangzhou) |
| warehouse.address.district | string | No | Warehouse district. (e.g. HuaDu) |
| warehouse.address.postcode | string | No | Warehouse address postal code (also known as zip code) (e.g. 510000) |
| warehouse.address.region | string | No | Warehouse region. (e.g. China) |
| warehouse.address.state | string | No | Warehouse state or province. (e.g. GuangDong) |
| warehouse.contact_person | string | No | Warehouse contact person's name. (e.g. Lee) |
| warehouse.cover_address_detail | array<object> | No | Details of the Address covered by this warehouse |
| warehouse.cover_region_code | string | No | Region code covered by this warehouse (e.g. CN) |
| warehouse.default_warehouse | boolean | No | Whether to set this warehouse as the default warehouse. (e.g. True) |
| warehouse.external_warehouse_id | string | No | The warehouse ID from the third party. (e.g. 7000714532876273410) |
| warehouse.first_name | string | No | Kanji first name Applicable only for the JP market. (e.g. 雪梅) |
| warehouse.first_name_local_script | string | No | Hiragana or Katakana first name Applicable only for the JP market. (e.g. ゆきうめ) |
| warehouse.last_name | string | No | Kanji last name Applicable only for the JP market. (e.g. 林) |
| warehouse.last_name_local_script | string | No | Hiragana or Katakana last name Applicable only for the JP market. (e.g. はやし) |
| warehouse.name | string | No | Warehouse name. This name is not unique across the TikTok Shop system. (e.g. Guangzhou Pickup) |
| warehouse.phone_number | string | No | Warehouse contact phone number. (e.g. 18812341234) |
| warehouse.type | string | No | Warehouse type. - SALES_WAREHOUSE: Warehouse for shipping products. - RETURN_WAREHOUSE: Warehouse for receiving returned products. (e.g. SALES_WAREHOUSE) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.error_list | array<object> | No | Error code list |
| data.warehouse_id | string | No | The warehouse ID, a unique and immutable primary key, used for all warehouse logistics. (e.g. 7469975631737423671) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
