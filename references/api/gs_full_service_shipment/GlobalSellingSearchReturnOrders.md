---
title: GlobalSellingSearchReturnOrders
category: gs_full_service_shipment
api_name: GlobalSellingSearchReturnOrders
method: POST
path: /gs_full_service_shipment/202407/return_orders/search
version: 202407
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_shipment
**API:** GlobalSellingSearchReturnOrders

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_shipment/202407/return_orders/search

## API Description
This API is used to list return orders by multi-dimensional search condition.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| external_skc_codes | array<string> | No | The SKC code list of your OMS. The length is no more than `50`. |
| external_sku_codes | array<string> | No | The SKU code list of your OMS. The length is no more than `50`. |
| order_create_time_ge | integer | No | The creation time of the return order is greater than or equal to the value. (e.g. 1719763200) |
| order_create_time_lt | integer | No | The creation time of the return order is less than the value. (e.g. 1720540800) |
| page_size | integer | No | Page size, default 10, less or equal to 50. (e.g. 10) |
| page_token | string | No | Page offset, `1` by default. (e.g. 1) |
| platform_sku_codes | array<string> | No | The SKU code list of TikTok Shop. The length is no more than `50`. |
| platform_spu_codes | array<string> | No | The SPU code list of TikTok Shop. The length is no more than `50`. |
| return_methods | array<string> | No | The method of returning goods to the merchant. Possible enumerations are: 1. SELF_PICKUP 2. EXPRESS_DELIVERY 3. PLATFORM_DELIVERY 4. ABANDON_GOODS |
| return_order_codes | array<string> | No | The code list of return orders. The length is no more than `50`. |
| return_source | string | No | The source that triggers return goods to the merchant. Possible enumerations are: 1. MERCHANT 2. PLATFORM 3. INVENTORY_HEALTH 4. PRODUCT_DISUSE (e.g. MERCHATN) |
| return_status | array<string> | No | The list of status of return order. Possible enumerations are: 1. OPERATER_CONFIRMING：Merchants have initiated the return order. The order is yet to be confirmed by the platform. 2. MERCHANT_CONFIRMING：Platform has initiated the return order. The order is yet to be confirmed by the merchants. 3. TO_TRANSIT: Waiting for transit in the warehouse. 4. IN_TRANSIT: transiting in the warehouse. 5. OUTBOUND：Transit finished in the warehouse. Ready for pick up. 6. SHIPPED： Return packages have been collected by logistics. 7. COMPLETED：The return process has been completed. 8. CANCELED：The return process has been cancelled. |
| return_types | array<string> | No | The type of return goods to merchant. Possible enumerations are: 1. ABNORMAL_INVENTORY：Inventory returns are caused by problems such as slow sales. 2. ABNORMAL_QUALITY：Quality problems are identified by quality check. 3. INSPECT_ABNORMAL：Quality problems are identified by inspection in the warehouse. 4. RECEIVE_ABNORMAL：The labels of delivery packages identified in the receiving process are not clear. 5. PRODUCT_ABNORMAL：Products are damaged, with bulging bags or with abnormal barcodes. 6. QUANTITY_ABNORMAL_MORE：The goods are in excessive quantity and need to be returned. 7. MISPLACED_GOODS：Incorrect goods need to be returned. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | The next page encode. (e.g. 1) |
| data.return_orders | array<object> | No | The information of the return order list. |
| data.return_orders.logistics.actual_quantity | integer | No | The SKC actual quantity of returning goods. (e.g. 10) |
| data.return_orders.logistics.category_id | string | No | The category ID of product which has been defined by platform. (e.g. 7075264658340611845) |
| data.return_orders.logistics.confirm_quantity | integer | No | The SKC quantity that confirms returning goods. (e.g. 10) |
| data.return_orders.logistics.logistics_order | string | No | A delivery batch order will be generated for logistics tracking when returning goods to merchat by logistics. (e.g. POCYPT2407020000016S01) |
| data.return_orders.logistics.platform_spu_code | string | No | The SPU code list of TikTok Shop. (e.g. TESTS230819000025) |
| data.return_orders.logistics.request_quantity | integer | No | The SKC quantity of requests for returning goods. (e.g. 10) |
| data.return_orders.logistics.shipping_provider_code | string | No | The name of logistics provider which transports merchant's goods to warehouse. (e.g. 1) |
| data.return_orders.logistics.skus | array<object> | No | The information list for SKU of TikTok Shop. |
| data.total_count | integer | No | The count of return order list which search by request conditions. (e.g. 100) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
