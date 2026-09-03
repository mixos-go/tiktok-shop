---
title: QueryDeliveryBatchs
category: gs_full_service_shipment
api_name: QueryDeliveryBatchs
method: GET
path: /gs_full_service_shipment/202405/preview/delivery_orders/delivery_batchs
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_shipment
**API:** QueryDeliveryBatchs

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_shipment/202405/preview/delivery_orders/delivery_batchs

## API Description
This API is used to query delivery batch information by multi delivery batch codes.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| supplier_id (query) | string | Yes | The platform-defined ID for supplier. |
| delivery_batch_codes (query) | array<string> | Yes | The list of logistics order codes. Up to 50 |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.delivery_batchs | array<object> | No | The information of delivery batch |
| data.delivery_batchs.logistics.delivery_option | string | No | The type of logistics express, all values are listed below: 1. SUPER_SPEEDY_EXPRESS 2. SPEEDY_EXPRESS 3. STANDARD_EXPRESS (e.g. SUPER_SPEEDY_EXPRESS) |
| data.delivery_batchs.logistics.shipping_provider_code | string | No | The name of logistics provider which transports merchant's goods to warehouse (e.g. 7233383779430041346) |
| data.delivery_batchs.logistics.shipping_provider_name | string | No | The code of logistics provider which transports merchant's goods to warehouse (e.g. 顺丰速运) |
| data.delivery_batchs.logistics_orders.package_weight.unit | string | No | The unit of logistics package weight, like GRAM/KILOGRAM (e.g. GRAM) |
| data.delivery_batchs.logistics_orders.package_weight.value | integer | No | The number of logistics package weight (e.g. 1000) |
| data.delivery_batchs.predicted_pick_info.end_time | integer | No | Predict pick-up end time (e.g. 1714100400) |
| data.delivery_batchs.predicted_pick_info.start_time | integer | No | Predict pick-up start time (e.g. 1714100400) |
| data.delivery_batchs.receiver_contact.address_detail | object | No | The multilevel address info of contact |
| data.delivery_batchs.receiver_contact.address_detail.city_id | integer | No | City ID (e.g. 1809858) |
| data.delivery_batchs.receiver_contact.address_detail.city_name | string | No | City Name (e.g. 广州市) |
| data.delivery_batchs.receiver_contact.address_detail.country_id | integer | No | Country ID (e.g. 1814991) |
| data.delivery_batchs.receiver_contact.address_detail.country_name | string | No | Country name (e.g. 中华人民共和国) |
| data.delivery_batchs.receiver_contact.address_detail.detail | string | No | The detail address under town (e.g. 京东产业园东区2号门3号库) |
| data.delivery_batchs.receiver_contact.address_detail.district_id | integer | No | District ID (e.g. 440114105) |
| data.delivery_batchs.receiver_contact.address_detail.district_name | string | No | District name (e.g. 花都区) |
| data.delivery_batchs.receiver_contact.address_detail.province_id | integer | No | Province ID (e.g. 1809935) |
| data.delivery_batchs.receiver_contact.address_detail.province_name | string | No | Province Name (e.g. 1809935) |
| data.delivery_batchs.receiver_contact.address_detail.town_id | integer | No | Town ID (e.g. 440114105) |
| data.delivery_batchs.receiver_contact.address_detail.town_name | string | No | Town name (e.g. 花东镇) |
| data.delivery_batchs.receiver_contact.contact_name | string | No | Contact name (e.g. 张三) |
| data.delivery_batchs.receiver_contact.email | string | No | Email address area (e.g. someone@126.com) |
| data.delivery_batchs.receiver_contact.full_address | string | No | Detail address of contact (e.g. 中国广东广州花都区花东镇京东产业园东区2号门3号库) |
| data.delivery_batchs.receiver_contact.phone_number | string | No | Phone number (e.g. +8618566000000) |
| data.delivery_batchs.receiver_contact.postal_code | string | No | Postal code (e.g. 510000) |
| data.delivery_batchs.sender_contact.address_detail | object | No | The multilevel address info of contact |
| data.delivery_batchs.sender_contact.address_detail.city_id | integer | No | City ID (e.g. 1809858) |
| data.delivery_batchs.sender_contact.address_detail.city_name | string | No | City name (e.g. 广州市) |
| data.delivery_batchs.sender_contact.address_detail.country_id | integer | No | Country ID (e.g. 1814991) |
| data.delivery_batchs.sender_contact.address_detail.country_name | string | No | Country Name (e.g. 中华人民共和国) |
| data.delivery_batchs.sender_contact.address_detail.detail | string | No | The detail address under town (e.g. A工业区B栋二楼) |
| data.delivery_batchs.sender_contact.address_detail.district_id | integer | No | District ID (e.g. 6571346) |
| data.delivery_batchs.sender_contact.address_detail.district_name | string | No | District name (e.g. 白云区) |
| data.delivery_batchs.sender_contact.address_detail.province_id | integer | No | Province ID (e.g. 1809935) |
| data.delivery_batchs.sender_contact.address_detail.province_name | string | No | Province Name (e.g. 广东省) |
| data.delivery_batchs.sender_contact.address_detail.town_id | integer | No | Town ID (e.g. 440111018) |
| data.delivery_batchs.sender_contact.address_detail.town_name | string | No | Town name (e.g. 白云湖街道) |
| data.delivery_batchs.sender_contact.contact_name | string | No | Contact name (e.g. 王五) |
| data.delivery_batchs.sender_contact.email | string | No | Email address area (e.g. someone@126.com) |
| data.delivery_batchs.sender_contact.full_address | string | No | Detail address of contact (e.g. 中国广东省广州市白云区白云湖街道A工业区B栋二楼) |
| data.delivery_batchs.sender_contact.phone_number | string | No | Phone number (e.g. +8618566000000) |
| data.delivery_batchs.sender_contact.postal_code | string | No | Postal code (e.g. 510000) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
