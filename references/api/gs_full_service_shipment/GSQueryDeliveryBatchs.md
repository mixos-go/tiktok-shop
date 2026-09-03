---
title: GSQueryDeliveryBatchs
category: gs_full_service_shipment
api_name: GSQueryDeliveryBatchs
method: GET
path: /gs_full_service_shipment/202405/beta/delivery_orders/delivery_batchs
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_shipment
**API:** GSQueryDeliveryBatchs

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_shipment/202405/beta/delivery_orders/delivery_batchs

## API Description
This API is used to query delivery batch information by multi delivery batch codes.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| delivery_batch_codes (query) | array<string> | Yes | A delivery batch code will be generated for logistics tracking when delivery-order is operated ship by logistics. Up to 50 |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.delivery_batchs | array<object> | No | The information list of delivery batch |
| data.delivery_batchs.logistics.delivery_option | string | No | The type of logistics express 1. SUPER_SPEEDY_EXPRESS 2. SPEEDY_EXPRESS 3. STANDARD_EXPRESS (e.g. SUPER_SPEEDY_EXPRESS) |
| data.delivery_batchs.logistics.shipping_provider_code | string | No | The code of logistics provider which transports merchant's goods to warehouse (e.g. 7233383779430041346) |
| data.delivery_batchs.logistics.shipping_provider_name | string | No | The name of logistics provider which transports merchant's goods to warehouse (e.g. 顺丰速运) |
| data.delivery_batchs.logistics_orders.package_weight.unit | string | No | The unit of logistics package weight, like GRAM/KILOGRAM (e.g. GRAM) |
| data.delivery_batchs.logistics_orders.package_weight.value | string | No | The number of logistics package weight (e.g. 1000) |
| data.delivery_batchs.predicted_pick_info.end_time | integer | No | Predict pick-up end time (e.g. 1714107600) |
| data.delivery_batchs.predicted_pick_info.start_time | integer | No | Predict pick-up start time (e.g. 1714100400) |
| data.delivery_batchs.receiver_contact.address_detail | object | No | The multilevel address info of receiver contact |
| data.delivery_batchs.receiver_contact.address_detail.city_id | integer | No | The city ID (e.g. 1809858) |
| data.delivery_batchs.receiver_contact.address_detail.city_name | string | No | The city name (e.g. 广州市) |
| data.delivery_batchs.receiver_contact.address_detail.country_id | integer | No | Country ID (e.g. 1814991) |
| data.delivery_batchs.receiver_contact.address_detail.country_name | string | No | Country Name (e.g. 中华人民共和国) |
| data.delivery_batchs.receiver_contact.address_detail.detail | string | No | The detail address under town (e.g. A工业园B栋二楼) |
| data.delivery_batchs.receiver_contact.address_detail.district_id | integer | No | The district ID (e.g. 6571346) |
| data.delivery_batchs.receiver_contact.address_detail.district_name | string | No | The district name (e.g. 白云区) |
| data.delivery_batchs.receiver_contact.address_detail.province_id | integer | No | The province ID (e.g. 1809935) |
| data.delivery_batchs.receiver_contact.address_detail.province_name | string | No | The province name (e.g. 广东省) |
| data.delivery_batchs.receiver_contact.address_detail.town_id | integer | No | The town ID (e.g. 440111018) |
| data.delivery_batchs.receiver_contact.address_detail.town_name | string | No | The town name (e.g. XX街道) |
| data.delivery_batchs.receiver_contact.contact_name | string | No | Contacts name (e.g. 王五) |
| data.delivery_batchs.receiver_contact.email | string | No | The email address (e.g. someone@126.com) |
| data.delivery_batchs.receiver_contact.full_address | string | No | The detail address (e.g. 广东省广州市白云区XX街道A工业园B栋二楼) |
| data.delivery_batchs.receiver_contact.phone_number | string | No | The phone number (e.g. +8618566000000) |
| data.delivery_batchs.receiver_contact.postal_code | string | No | The postal code (e.g. 510000) |
| data.delivery_batchs.sender_contact.address_detail | object | No | The multilevel address info of sender contact |
| data.delivery_batchs.sender_contact.address_detail.city_id | integer | No | The city ID (e.g. 1809858) |
| data.delivery_batchs.sender_contact.address_detail.city_name | string | No | The city name (e.g. 广州) |
| data.delivery_batchs.sender_contact.address_detail.country_id | integer | No | The country ID (e.g. 1814991) |
| data.delivery_batchs.sender_contact.address_detail.country_name | string | No | The country name (e.g. 中华人民共和国) |
| data.delivery_batchs.sender_contact.address_detail.detail | string | No | The detail address under town (e.g. XX大道A工业区B栋二楼) |
| data.delivery_batchs.sender_contact.address_detail.district_id | integer | No | The district ID (e.g. 440114105) |
| data.delivery_batchs.sender_contact.address_detail.district_name | string | No | The district name (e.g. 白云区) |
| data.delivery_batchs.sender_contact.address_detail.province_id | integer | No | The province ID (e.g. 1809935) |
| data.delivery_batchs.sender_contact.address_detail.province_name | string | No | The name of province (e.g. 广东) |
| data.delivery_batchs.sender_contact.address_detail.town_id | integer | No | The town ID (e.g. 440114105) |
| data.delivery_batchs.sender_contact.address_detail.town_name | string | No | The town name (e.g. XX街道) |
| data.delivery_batchs.sender_contact.contact_name | string | No | Contact name (e.g. 王五) |
| data.delivery_batchs.sender_contact.email | string | No | The email address area of contact (e.g. someone@126.com) |
| data.delivery_batchs.sender_contact.full_address | string | No | The detail address of contact (e.g. 中国广东省广州市白云区XX街道A工业区B栋二楼) |
| data.delivery_batchs.sender_contact.phone_number | string | No | The phone number (e.g. +8618566000000) |
| data.delivery_batchs.sender_contact.postal_code | string | No | The Postal code (e.g. 510000) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
