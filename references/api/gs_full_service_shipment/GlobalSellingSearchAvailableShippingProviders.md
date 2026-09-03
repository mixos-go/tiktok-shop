---
title: GlobalSellingSearchAvailableShippingProviders
category: gs_full_service_shipment
api_name: GlobalSellingSearchAvailableShippingProviders
method: POST
path: /gs_full_service_shipment/202410/shipping_providers/search
version: 202410
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_shipment
**API:** GlobalSellingSearchAvailableShippingProviders

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_shipment/202410/shipping_providers/search

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
| delivery_mode | string | No | The mode of delivery goods to GS. 1. SELF_DELIVERY 2. PLATFORM_DELIVERY (e.g. SELF_DELIVERY) |
| delivery_option | string | No | The type of delivery service. The possible enumerations are: - `"SUPER_SPEEDY_EXPRESS"` - `"SPEEDY_EXPRESS"` - `"STANDARD_EXPRESS"` Notes: - `"SUPER_SPEEDY_EXPRESS"` is the only option for JIT orders. - `"SPEEDY_EXPRESS"` and `"STANDARD_EXPRESS"` are options for ordinary orders. (e.g. SUPER_SPEEDY_EXPRESS) |
| delivery_order_codes | array<string> | No | The list of delivery order, less or equal to 50. |
| sender_contact_id | string | No | The ID of the sender. (e.g. 5765611508606562308) |
| shipping_box_quantity | integer | No | The quantity of shipping boxes. (e.g. 2) |
| total_weight | object | No | Total weight |
| total_weight.unit | string | No | The unit. Possible enumerations are: - `"GRAM"` - `"KILOGRAM"` (e.g. GRAM) |
| total_weight.value | string | No | Value (e.g. 1000) |
| warehouse_code | string | No | The code of warehouse that merchant deliver goods wants to arrive (e.g. JD01) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.reserve_arrived_times | array<object> | No | The information about whether the capacity of warehouse can be reserved at specific time |
| data.reserve_arrived_times.max_charge_fee.amount | string | No | The amount of charge fee (e.g. 12) |
| data.reserve_arrived_times.max_charge_fee.currency | string | No | The unit. Possible enumerations are: - `"CNY"` (e.g. CNY（元）) |
| data.reserve_arrived_times.min_charge_fee.amount | string | No | The amount of charge fee (e.g. 12) |
| data.reserve_arrived_times.min_charge_fee.currency | string | No | The unit. Possible enumerations are: - `"CNY"` (e.g. CNY（元）) |
| data.shipping_providers | array<object> | No | The list of logistics provider |
| data.shipping_providers.max_charge_fee.amount | string | No | The amount of charge fee (e.g. 12.00) |
| data.shipping_providers.max_charge_fee.currency | string | No | The amount of charge fee (e.g. CNY（元）) |
| data.shipping_providers.min_charge_fee.amount | string | No | The amount of charge fee (e.g. 12.00) |
| data.shipping_providers.min_charge_fee.currency | string | No | The unit. Possible enumerations are: - `"CNY"` (e.g. CNY（元）) |
| data.warehouse_list | array<object> | No | The contact info of warehouse which is precisely assigned |
| data.warehouse_list.warehouse_contact.address_detail | object | No | The detail address info of the warehouse |
| data.warehouse_list.warehouse_contact.address_detail.city_name | string | No | The city name of warehouse location (e.g. 广州) |
| data.warehouse_list.warehouse_contact.address_detail.country_name | string | No | The country name of the warehouse location (e.g. 中国) |
| data.warehouse_list.warehouse_contact.address_detail.detail | string | No | The detail address of warehouse location (e.g. S381(山前旅游大道东)--广州花都京东产业园(东区2号门) 3号库房) |
| data.warehouse_list.warehouse_contact.address_detail.district_name | string | No | The district name of warehouse location (e.g. 花都区) |
| data.warehouse_list.warehouse_contact.address_detail.province_name | string | No | The province name of warehouse location (e.g. 广东) |
| data.warehouse_list.warehouse_contact.address_detail.town_name | string | No | The town name of warehouse location (e.g. 花东镇) |
| data.warehouse_list.warehouse_contact.contact_name | string | No | Contacts name (e.g. 王五) |
| data.warehouse_list.warehouse_contact.email | string | No | The email address area of contact (e.g. someone@126.com ) |
| data.warehouse_list.warehouse_contact.full_address | string | No | The multilevel address detail of warehouse location (e.g. 中国广东广州番禺区花东镇S381(山前旅游大道东)--广州花都京东产业园(东区2号门) 3号库房) |
| data.warehouse_list.warehouse_contact.phone_number | string | No | The phone number of contact (e.g. +8618566000000) |
| data.warehouse_list.warehouse_contact.postal_code | string | No | The Postal code of the warehouse location (e.g. 510000) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
