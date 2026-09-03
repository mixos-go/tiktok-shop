---
title: GlobalSellingSearchDeliveryOrders
category: gs_full_service_shipment
api_name: GlobalSellingSearchDeliveryOrders
method: POST
path: /gs_full_service_shipment/202407/delivery_orders/search
version: 202407
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_shipment
**API:** GlobalSellingSearchDeliveryOrders

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_shipment/202407/delivery_orders/search

## API Description
This API is used to list delivery orders by multi-dimensional search condition.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| arrived_time_ge | integer | No | Search delivery orders which the actual arrival time is greater or equal to arrived_time_ge. (e.g. 1713492000) |
| arrived_time_lt | integer | No | Search delivery orders that the actual arrival time is less than arrived_time_lt. (e.g. 1714442400) |
| delivery_order_codes | array<string> | No | Delivery order code, supports multiple selection. less or equal to 50. |
| delivery_types | array<string> | No | Delivery type, possible enumerations are: 1. DELIVERY_NORMAL: Delivery of normal stockup process. 2. DEFECTIVE_REPAIR: Redelivery of partial defective products returned for repair. 3. ALL_RETURN_REPAIR: Redelivery of all defective products returned for repair. 4. LESS_SUPPLEMENT: Redelivery of shortage of delivery quantity. 5. LOGISTICS_IN_BATCH: The logistics provider delivers the goods to the warehouse in multiple batches. 6. REPLENISH_IN_WAREHOUSE: The platform receives goods in multiple batches in the warehouse. |
| emergency_levels | array<string> | No | Delivery Order's Emergency level code. Possible enumerations are: 1. URGENT: the emergency level of stockup order is defined as urgent once created. 2. EXPEDITED: the emergency level of stockup order is defined as expedited in transit. 3. GENERAL: the emergency level of stockup order is defined as general. |
| external_skc_codes | array<string> | No | The SKC code of your OMS. less or equal to 50. |
| external_sku_codes | array<string> | No | The SKU code of your OMS. less or equal to 50. |
| is_sample_included | boolean | No | Whether sample product should be sent with bulk delivery. (e.g. True) |
| latest_status_update_ge | integer | No | Search delivery orders that the time of the latest status update is greater or equal to latest_status_update_ge. (e.g. 1713492000) |
| latest_status_update_lt | integer | No | Search delivery orders that the time of the latest status update is less than latest_status_update_lt. (e.g. 1714442400) |
| logistics_orders | array<string> | No | A main logistics order will be generated for logistics tracking when a delivery order is operated ship by logistics. less or equal to 50. |
| order_types | array<string> | No | The order type of delivery JIT: Stockup is determined by sales. NORMAL: Stockup is for sales. |
| page_size | integer | No | Page size, default 10, less or equal to 50. (e.g. 10) |
| page_token | string | No | Page offset, `1` by default. (e.g. 1) |
| platform_spu_codes | array<string> | No | The SPU code of TikTok Shop. less or equal to 50. |
| relative_codes | array<string> | No | The relative code of delivery order, such as stockup order code and abnormal order code. less or equal to 50. |
| require_arrived_time_ge | integer | No | Search delivery orders that the required arrival time is greater or equal to require_arrived_time_ge. (e.g. 1713492000) |
| require_arrived_time_lt | integer | No | Search delivery orders that the required arrival time is less than require_arrived_time_lt. (e.g. 1714442400) |
| ship_time_ge | integer | No | Search delivery orders that the required shipment time is greater or equal to ship_time_ge. (e.g. 1713492000) |
| ship_time_lt | integer | No | Search delivery orders that the required shipment time is less than ship_time_lt. (e.g. 1714442400) |
| warehouse_codes | array<string> | No | The code list of warehouse which receive goods. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.delivery_orders | array<object> | No | The information list of delivery-order. |
| data.delivery_orders.logistics.delivery_option | string | No | The type of the delivery service. The possible enumerations are: - `"SUPER_SPEEDY_EXPRESS"` - `"SPEEDY_EXPRESS"` - `"STANDARD_EXPRESS"` Notes: - `"SUPER_SPEEDY_EXPRESS"` is the only option for JIT orders. - `"SPEEDY_EXPRESS"` and `"STANDARD_EXPRESS"` are options for ordinary orders. (e.g. SUPER_SPEEDY_EXPRESS) |
| data.delivery_orders.logistics.logistics_order | string | No | The code of delivery batch (e.g. LOG20240423010565) |
| data.delivery_orders.logistics.shipping_provider_code | string | No | The name of logistics provider which transports merchant's goods to warehouse (e.g. 7233383779430041346) |
| data.delivery_orders.skc.external_skc_code | string | No | The SKC code of your OMS. (e.g. Skc-test0419) |
| data.delivery_orders.skc.first_key_attribute_name_en | string | No | The first key attribute English-Name of skc (e.g. Colour) |
| data.delivery_orders.skc.first_key_attribute_name_zh | string | No | The first key attribute Chinese-Name of skc (e.g. 颜色) |
| data.delivery_orders.skc.first_key_attribute_value_en | string | No | The first key attribute English-Value of skc (e.g. Yellow) |
| data.delivery_orders.skc.first_key_attribute_value_zh | string | No | The first key attribute Chinese-Value of skc (e.g. 沙黄色) |
| data.delivery_orders.skc.image_url | string | No | The SKC shapshot created along with the order. (e.g. https://example.image.xxxx) |
| data.delivery_orders.skc.platform_skc_code | string | No | The SKC code of TikTok Shop. (e.g. S231210000072001) |
| data.delivery_orders.warehouse_contact.address_detail | object | No | The detail address info of the warehouse |
| data.delivery_orders.warehouse_contact.address_detail.city_name | string | No | The city name of warehouse location (e.g. 广州) |
| data.delivery_orders.warehouse_contact.address_detail.country_name | string | No | The country name of the warehouse location (e.g. 中国) |
| data.delivery_orders.warehouse_contact.address_detail.detail | string | No | The detail address of warehouse location (e.g. 广东省广州市花都区花东镇华东2号门3号库) |
| data.delivery_orders.warehouse_contact.address_detail.district_name | string | No | The district name of warehouse location (e.g. 花都区) |
| data.delivery_orders.warehouse_contact.address_detail.province_name | string | No | The province name of warehouse location (e.g. 广东) |
| data.delivery_orders.warehouse_contact.address_detail.town_name | string | No | The town name of warehouse location (e.g. 花东镇) |
| data.delivery_orders.warehouse_contact.contact_name | string | No | Contacts name (e.g. 王五) |
| data.delivery_orders.warehouse_contact.email | string | No | The email address area of contact (e.g. someone@126.com) |
| data.delivery_orders.warehouse_contact.full_address | string | No | The multilevel address detail of warehouse location (e.g. 广州花都京东产业园东区2号门3号库) |
| data.delivery_orders.warehouse_contact.phone_number | string | No | The phone number of contact (e.g. +8618566000000) |
| data.delivery_orders.warehouse_contact.postal_code | string | No | The Postal code of the warehouse location (e.g. 510000) |
| data.next_page_token | string | No | The next page encode. (e.g. 1) |
| data.total_count | integer | No | The count of stockup order list which search by request conditions. (e.g. 100) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
