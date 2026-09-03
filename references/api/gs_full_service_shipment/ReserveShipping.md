---
title: ReserveShipping
category: gs_full_service_shipment
api_name: ReserveShipping
method: POST
path: /gs_full_service_shipment/202405/preview/delivery_orders/reserve_ship
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_shipment
**API:** ReserveShipping

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_shipment/202405/preview/delivery_orders/reserve_ship

## API Description
This API is used to reserve shipping for multi delivery-order.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| supplier_id (query) | string | Yes | Platform-defined ID of supplier |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| delivery_mode | string | No | The mode that supplier deliver goods to warehouse of GS. (e.g. PLATFORM_DELIVERY) |
| delivery_order_codes | array<string> | No | The code list of delivery order，Up to 50. |
| logistics | object | No | The information of logistics |
| logistics.delivery_option | string | No | The type of logistics express 1. SUPER_SPEEDY_EXPRESS 2. SPEEDY_EXPRESS 3. STANDARD_EXPRESS (e.g. SUPER_SPEEDY_EXPRESS) |
| logistics.shipping_provider_code | string | No | The name of shipping provider (e.g. 顺丰大网) |
| logistics.shipping_provider_name | string | No | The code of shipping provider (e.g. 7350150641810933506) |
| reserve | object | No | The reserve information for shipment |
| reserve.predicted_arrived_time | integer | No | The predicted arrival date is based on reservation shipment time (e.g. 1713600000) |
| reserve.predicted_pickup_ge | integer | No | The start time of Schedule delivery timeslot (e.g. 1713492000) |
| reserve.predicted_pickup_lt | integer | No | The end time of Schedule delivery timeslot (e.g. 1713499200) |
| reserve.predicted_pickup_time | integer | No | The predicted date of logistics pickup (e.g. 1713456000) |
| reserve.predicted_ship_time | integer | No | Schedule delivery date (e.g. 1713456000) |
| sender_contact | object | No | The unit of weight, like GRAM/KILOGRAM |
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
| sender_contact.address_detail.town_name | string | No | Town Name (e.g. 白云街道) |
| sender_contact.contact_name | string | No | Contact name (e.g. 王五) |
| sender_contact.email | string | No | The email address for contact (e.g. someone@126.com) |
| sender_contact.full_address | string | No | The detail address text of contact location (e.g. 中国广东省广州市白云区白云街道A工业园B栋二楼) |
| sender_contact.phone_number | string | No | Contact phone NO. (e.g. +8618566000000) |
| sender_contact.postal_code | string | No | The postal code of address (e.g. 510000) |
| total_weight | object | No | The weight of goods which are reserved for shipping. |
| total_weight.unit | string | No | The unit of weight, like GRAM/KILOGRAM. (e.g. GRAM) |
| total_weight.value | string | No | The number of weight. (e.g. 1240) |
| warehouse_code | string | No | The code of warehouse that receives goods. (e.g. JD01) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.delivery_batch_code | string | No | Main logistics order belong to Delivery order (e.g. LOG20240423010565) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
