---
title: GlobalSellingQueryLogisticsOrders
category: gs_full_service_shipment
api_name: GlobalSellingQueryLogisticsOrders
method: GET
path: /gs_full_service_shipment/202407/logistics_orders
version: 202407
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_shipment
**API:** GlobalSellingQueryLogisticsOrders

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_shipment/202407/logistics_orders

## API Description
This API is used to query logistics information by multi logistics order codes.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| logistics_orders (query) | array<string> | Yes | A delivery batch code will be generated for logistics tracking when delivery-order is operated ship by logistics. less or equal to 50. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.logistics_orders | array<object> | No | The information list of delivery batch. |
| data.logistics_orders.logistics.delivery_option | string | No | The type of delivery service. The possible enumerations are: - `"SUPER_SPEEDY_EXPRESS"` - `"SPEEDY_EXPRESS"` - `"STANDARD_EXPRESS"` Notes: - `"SUPER_SPEEDY_EXPRESS"` is the only option for JIT orders. - `"SPEEDY_EXPRESS"` and `"STANDARD_EXPRESS"` are options for ordinary orders. (e.g. SUPER_SPEEDY_EXPRESS) |
| data.logistics_orders.logistics.shipping_provider_code | string | No | The name of logistics provider which transports merchant's goods to warehouse (e.g. 7233383779430041346) |
| data.logistics_orders.logistics.shipping_provider_name | string | No | The code of logistics provider which transports merchant's goods to warehouse (e.g. 顺丰速运) |
| data.logistics_orders.logistics_sub_orders.package_weight.unit | string | No | The unit. Possible enumerations are: - `"GRAM"` - `"KILOGRAM"` (e.g. GRAM) |
| data.logistics_orders.logistics_sub_orders.package_weight.value | string | No | The number of logistics package weight (e.g. 1000) |
| data.logistics_orders.predicted_pick_info.end_time | integer | No | Predict pickup end time (e.g. 1714100400) |
| data.logistics_orders.predicted_pick_info.start_time | integer | No | Predict pickup start time (e.g. 1714100400) |
| data.logistics_orders.receiver_contact.address_detail | object | No | The detail address info of the warehouse |
| data.logistics_orders.receiver_contact.address_detail.city_name | string | No | The city name of warehouse location (e.g. 广州) |
| data.logistics_orders.receiver_contact.address_detail.country_name | string | No | The country name of the warehouse location (e.g. 中国) |
| data.logistics_orders.receiver_contact.address_detail.detail | string | No | The detail address of warehouse location (e.g. 京东产业园东区2号门3号库) |
| data.logistics_orders.receiver_contact.address_detail.district_name | string | No | The district name of warehouse location (e.g. 花都区) |
| data.logistics_orders.receiver_contact.address_detail.province_name | string | No | The province name of warehouse location (e.g. 广东) |
| data.logistics_orders.receiver_contact.address_detail.town_name | string | No | The town name of warehouse location (e.g. 花东镇) |
| data.logistics_orders.receiver_contact.contact_name | string | No | Contacts name (e.g. 张三) |
| data.logistics_orders.receiver_contact.email | string | No | The email address area of contacts (e.g. someone@126.com) |
| data.logistics_orders.receiver_contact.full_address | string | No | The multilevel address detail of warehouse location (e.g. 中国广东广州花都区花东镇京东产业园东区2号门3号库) |
| data.logistics_orders.receiver_contact.phone_number | string | No | The phone number of contacts (e.g. +8618566000000) |
| data.logistics_orders.receiver_contact.postal_code | string | No | The Postal code of the warehouse location (e.g. 510000) |
| data.logistics_orders.sender_contact.address_detail | object | No | The detail address info of the warehouse |
| data.logistics_orders.sender_contact.address_detail.city_name | string | No | The city name of warehouse location (e.g. 广州) |
| data.logistics_orders.sender_contact.address_detail.country_name | string | No | The country name of the warehouse location (e.g. 中国) |
| data.logistics_orders.sender_contact.address_detail.detail | string | No | The detail address of warehouse location (e.g. 环窖龙口大道华富工业区B栋二楼) |
| data.logistics_orders.sender_contact.address_detail.district_name | string | No | The district name of warehouse location (e.g. 白云区) |
| data.logistics_orders.sender_contact.address_detail.province_name | string | No | The province name of warehouse location (e.g. 广东) |
| data.logistics_orders.sender_contact.address_detail.town_name | string | No | The town name of warehouse location (e.g. 白云湖街道) |
| data.logistics_orders.sender_contact.contact_name | string | No | Contacts name (e.g. 王五) |
| data.logistics_orders.sender_contact.email | string | No | The email address area of contacts (e.g. someone@126.com) |
| data.logistics_orders.sender_contact.full_address | string | No | The multilevel address detail of warehouse location (e.g. 中国广东省广州市白云区白云湖街道环窖龙口大道华富工业区B栋二楼) |
| data.logistics_orders.sender_contact.phone_number | string | No | The phone number of contacts (e.g. +8618566000000) |
| data.logistics_orders.sender_contact.postal_code | string | No | The Postal code of the warehouse location (e.g. 510000) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
