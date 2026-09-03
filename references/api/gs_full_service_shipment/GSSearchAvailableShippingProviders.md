---
title: GSSearchAvailableShippingProviders
category: gs_full_service_shipment
api_name: GSSearchAvailableShippingProviders
method: POST
path: /gs_full_service_shipment/202405/beta/shipping_providers/search
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_shipment
**API:** GSSearchAvailableShippingProviders

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_shipment/202405/beta/shipping_providers/search

## API Description
This API is used to search the available shipping providers.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| delivery_mode | string | No | The mode of delivery goods to GS. 1. SELF_DELIVERY 2. PLATFORM_DELIVERY (e.g. PLATFORM_DELIVERY) |
| delivery_option | string | No | The type of logistics express 1. SUPER_SPEEDY_EXPRESS 2. SPEEDY_EXPRESS 3. STANDARD_EXPRESS (e.g. SUPER_SPEEDY_EXPRESS) |
| delivery_order_codes | array<string> | No | The list of delivery order, up to 50. |
| sender_contact | object | No | The contact info of sender for logistics |
| sender_contact.address_detail | object | No | The multilevel address of contact |
| sender_contact.address_detail.city_id | integer | No | City ID (e.g. 1809858) |
| sender_contact.address_detail.city_name | string | No | City Name (e.g. 广州市) |
| sender_contact.address_detail.country_id | integer | No | Country ID (e.g. 1814991) |
| sender_contact.address_detail.country_name | string | No | Country Name (e.g. 中华人民共和国) |
| sender_contact.address_detail.detail | string | No | The detail address under town (e.g. A工业园B栋二楼) |
| sender_contact.address_detail.district_id | integer | No | District ID (e.g. 6571346) |
| sender_contact.address_detail.district_name | string | No | District Name (e.g. 白云区) |
| sender_contact.address_detail.province_id | integer | No | Province ID (e.g. 1809935) |
| sender_contact.address_detail.province_name | string | No | Province Name (e.g. 广东省) |
| sender_contact.address_detail.town_id | integer | No | Town ID (e.g. 440111018) |
| sender_contact.address_detail.town_name | string | No | Town Name (e.g. 白云湖街道) |
| sender_contact.contact_name | string | No | Contact name (e.g. 王五) |
| sender_contact.email | string | No | The email address for contact (e.g. someone@126.com) |
| sender_contact.full_address | string | No | The detail address text of contact location (e.g. 广东省广州市白云区白云湖街道A工业园B栋二楼) |
| sender_contact.phone_number | string | No | Contact phone NO. (e.g. +8618566000000) |
| sender_contact.postal_code | string | No | The postal code of address (e.g. 510000) |
| total_weight | object | No | Enquiry available logistics service provider based on total weight |
| total_weight.unit | string | No | The unit of weight, only support GRAM/KILOGRAM (e.g. GRAM) |
| total_weight.value | string | No | The number of weight (e.g. 1000) |
| warehouse_code | string | No | The code of warehouse that merchant deliver goods wants to arrive (e.g. JD01) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.reserve_arrived_times | array<object> | No | The information about whether the capacity of warehouse can be reserved at specific time |
| data.shipping_providers | array<object> | No | The list of logistics provider |
| data.shipping_providers.max_charge_fee.amount | string | No | The amount of charge fee (e.g. 20.00) |
| data.shipping_providers.max_charge_fee.currency | string | No | The currency of charge fee, CNY. (e.g. CNY) |
| data.shipping_providers.min_charge_fee.amount | string | No | The amount of charge fee (e.g. 12.00) |
| data.shipping_providers.min_charge_fee.currency | string | No | The currency of charge fee, CNY. (e.g. CNY) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
