---
title: GlobalSellingSearchStockupOrders
category: gs_full_service_shipment
api_name: GlobalSellingSearchStockupOrders
method: POST
path: /gs_full_service_shipment/202407/stockup_orders/search
version: 202407
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_shipment
**API:** GlobalSellingSearchStockupOrders

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_shipment/202407/stockup_orders/search

## API Description
This API is used to search stockup-order information by multi-dimensional search condition.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| can_deliver | boolean | No | Whether the merchant can begin to deliver goods to GS，exist some precondition，such as photography approved for skc. (e.g. True) |
| emergency_levels | array<string> | No | The emergency level of stockup order. Possible enumerations are: 1. URGENT: the emergency level of stockup order is defined as urgent once created. 2. EXPEDITED: the emergency level of stockup order is defined as expedited in transit. 3. GENERAL: the emergency level of stockup order is defined as general. |
| external_skc_codes | array<string> | No | The SKC code list of your OMS. less or equal to 50. |
| external_sku_codes | array<string> | No | The SKU code list of your OMS. less or equal to 50. |
| is_delivery_completed | boolean | No | whether all the require delivery goods had been delivered completely (e.g. True) |
| is_first_order | boolean | No | Whether first stockup order for merchant. less or equal to 50. (e.g. True) |
| is_normal | boolean | No | Whether is normal when deliver goods to GS (e.g. True) |
| latest_status_update_ge | integer | No | Search stockup orders that the time of the latest status update is greater or equal to latest_status_update_ge. (e.g. 1713293316) |
| latest_status_update_lt | integer | No | Search stockup orders that the time of the latest status update is less than latest_status_update_lt. (e.g. 1713593316) |
| order_create_time_ge | integer | No | Search delivery order that create time greater or equal to order_create_time_ge. (e.g. 1713293316) |
| order_create_time_lt | integer | No | Search stockup order that create time less than order_create_time_lt. (e.g. 1713593316) |
| order_sources | array<string> | No | The source of stockup order creation. Possible enumerations are: 1. PLATFORM: Stockup orders are initiated by the platform. 2. MERCHANT: Stockup orders are initiated by the merchant. 3. ABNORMAL_REDELIVERY: Stockup orders are initiated by the abnormal situation. |
| order_status | array<string> | No | The status of stockup order. Possible enumerations are: 1. WAIT_CONFIRM: The stockup order needs to be confirmed or rejected. 2. WAIT_SEND: the goods haven't been shipped by merchant. 3. SENDED: the goods have been shipped by merchant. 4. SIGNED: The logistics track shows that it has been signed by the warehouse 5. RECEIVED: The goods have been received and unpacked in the warehouse. 6. IN_QUALITY_CHECK: The goods will be quality inspected in the warehouse. 7. QUALITY_CHECK_COMPLETED: The goods completed quality inspected in the warehouse. 8. RETURN_COMPLETED: The goods have returned and shipped to merchant. 9. INBOUND: The goods have been inbound and on shelves in the warehouse. 10. INVAILD: The stockup order was invalid, the merchant doesn't need to prepare goods. |
| order_types | array<string> | No | The type of stockup order. Possible enumerations are: 1. JIT: Stockup is determined by sales. 2. NORMAL: Stockup is for sales. |
| page_size | integer | No | Page size, default 10, less or equal to 50. (e.g. 10) |
| page_token | string | No | Page offset, `1` by default. (e.g. 1) |
| platform_sku_codes | array<string> | No | The code list of sku. less or equal to 50. |
| platform_spu_codes | array<string> | No | The code list of spu. less or equal to 50. |
| require_arrived_time_ge | integer | No | Search stockup orders that require arrival time greater or equal to require_arrive_time_ge. (e.g. 1713293316) |
| require_arrived_time_lt | integer | No | Search stockup orders that require arrival time less than require_arrive_time_lt. (e.g. 1713593316) |
| require_ship_time_ge | integer | No | Search stockup orders that require shipment time greater or equal to require_ship_time_ge. (e.g. 1713293316) |
| require_ship_time_lt | integer | No | Search stockup orders that require shipment time less than require_ship_time_lt. (e.g. 1713593316) |
| stockup_order_codes | array<string> | No | The code list of stockup orders. less or equal to 50. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | The next page encode. (e.g. 1) |
| data.stockup_orders | array<object> | No | The information of the stockup order list |
| data.stockup_orders.skc.external_skc_code | string | No | The SKC code of your OMS. (e.g. Test0419) |
| data.stockup_orders.skc.first_key_attribute_name_en | string | No | The English name of the first key attribute for SKC of TikTok Shop (e.g. Colour) |
| data.stockup_orders.skc.first_key_attribute_name_zh | string | No | The Chinese name of the first key attribute for SKC of TikTok Shop (e.g. 颜色) |
| data.stockup_orders.skc.first_key_attribute_value_en | string | No | The English value of the first key attribute for SKC of TikTok Shop (e.g. Yellow) |
| data.stockup_orders.skc.first_key_attribute_value_zh | string | No | The Chinese value of the first key attribute for SKC of TikTok Shop (e.g. 沙黄色) |
| data.stockup_orders.skc.image_url | string | No | The SKC shapshot created along with the order. (e.g. www.example.com/image/xxx) |
| data.stockup_orders.skc.platform_skc_code | string | No | The SKC code of TikTok Shop. (e.g. S231210000072001) |
| data.total_count | integer | No | The count of return order list which search by request conditions. (e.g. 100) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
