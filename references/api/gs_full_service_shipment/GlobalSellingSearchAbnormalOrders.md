---
title: GlobalSellingSearchAbnormalOrders
category: gs_full_service_shipment
api_name: GlobalSellingSearchAbnormalOrders
method: POST
path: /gs_full_service_shipment/202407/abnormal_orders/search
version: 202407
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_shipment
**API:** GlobalSellingSearchAbnormalOrders

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_shipment/202407/abnormal_orders/search

## API Description
This API is used to search abnormal-order information by multi-dimensional search condition.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| abnormal_order_codes | array<string> | No | The abnormal order codes. The length is no more than 50. |
| abnormal_types | array<string> | No | The list of abnormal type. Possible enumerations are: 1. AT_PLATFORM_DELIVERY_TRANS_TIMEOUT：Shipping timeout of platform logistics 2. AT_SELF_DELIVERY_TRANS_TIMEOUT：Shipping timeout of self delivery 3. AT_LOGISTICS_DAMAGE：Shipment damage 4. AT_LOGISTICS_PKG_ATTACH_MULTI_DELIVERY_ORDER：Multiple delivery orders are attached to the logistics package 5. AT_DELIVERY_PKG_BOX_MARK_NO_RECOGNIZED：The logistics parcel mark can not be recognized 6. AT_DELIVERY_PACKAGE_NO_BOX_MARK：The delivery package is not labeled 7. AT_DELIVERY_ORDER_NO_DELIVERYED：The delivery order isn't confirmed. 8. AT_DELIVERY_ORDER_CANCELED：The delivery order has been cancelled 9. AT_QUANTITY_ABNORMAL_MORE：The quantity of goods exceeds expectation 10. AT_MISPLACED_GOODS：Wrong goods 11. AT_WRONG_BARCODE：The barcode is wrong labelled 12. AT_BARCODE_DAMAGED_DIRTY：The barcode is damaged or dirty 13. AT_PRODUCT_EXPANSION_BAG：The package of product is bulging 14. AT_PRODUCT_DAMAGED_DIRTY：The product is damaged or soiled 15. AT_MISSING_PACKAGE：The goods exceed the size limit 16. AT_ABNORMAL_QUANTITY：Shortage of goods 17. AT_DELIVERY_PKG_NO_ARRIVE_WAREHOUSE：The delivery package has not arrived 18. AT_ABNORMAL_QUALITY：Failed in the quality check during inbound. 19. AT_INSPECT_QUALITY：Failed in the quality check during inspection. |
| delivery_order_codes | array<string> | No | The delivery order codes. The length is no more than 50. |
| external_skc_codes | array<string> | No | The SKC code list of your OMS. The length is no more than 50. |
| external_sku_codes | array<string> | No | The SPU code of your OMS. The length is no more than 50. |
| latest_update_time_ge | integer | No | The latest update time is greater than or equal to the UNIX timestamp. (e.g. 1713492000) |
| latest_update_time_lt | integer | No | The latest update time is less than or equal to the UNIX timestamp. (e.g. 1714442400) |
| order_create_time_ge | integer | No | The creation time is greater than or equal to the UNIX timestamp. (e.g. 1713492000) |
| order_create_time_lt | integer | No | The creation time is greater than or equal to the UNIX timestamp. (e.g. 1714442400) |
| page_size | integer | No | Page size. The range is `[0, 50]`. 10 by default. (e.g. 10) |
| page_token | string | No | Page offset. `1` by default. (e.g. 1) |
| platform_sku_codes | array<string> | No | The SKU code of TikTok Shop. The length is no more than 50. |
| platform_spu_codes | array<string> | No | The SPU code of TikTok Shop. less or equal to 50. |
| relative_return_status | array<string> | No | The list of status of return order. Possible enumerations are: 1. OPERATER_CONFIRMING：Merchants have initiated the return order. The order is yet to be confirmed by the platform. 2. MERCHANT_CONFIRMING：Platform has initiated the return order. The order is yet to be confirmed by the merchants. 3. TO_TRANSIT: Waiting for transit in the warehouse. 4. IN_TRANSIT: transiting in the warehouse. 5. OUTBOUND：Transit finished in the warehouse. Ready for pick up. 6. SHIPPED： Return packages have been collected by logistics. 7. COMPLETED：The return process has been completed. 8. CANCELED：The return process has been cancelled. |
| stockup_order_codes | array<string> | No | The stockup order codes. The length is no more than 50. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.abnormal_orders | array<object> | No | The information of abnormal order list |
| data.abnormal_orders.skc.external_skc_code | string | No | The SKC code of your OMS. (e.g. TESTZ24070296075000101) |
| data.abnormal_orders.skc.first_key_attribute_name_en | string | No | The first key attribute is the English name of skc (e.g. Colour) |
| data.abnormal_orders.skc.first_key_attribute_name_zh | string | No | The first key attribute Chinese Name of skc (e.g. 颜色) |
| data.abnormal_orders.skc.first_key_attribute_value_en | string | No | The first key attribute English value of skc (e.g. Yellow) |
| data.abnormal_orders.skc.first_key_attribute_value_zh | string | No | The first key attribute Chinese value of skc (e.g. 沙黄色) |
| data.abnormal_orders.skc.image_url | string | No | The snapshot of the SKC when creating the order. (e.g. www.example.com/image/xxx ) |
| data.abnormal_orders.skc.platform_skc_code | string | No | The SKC code of TikTok Shop (e.g. TESTS240701000009) |
| data.next_page_token | string | No | The next page encode (e.g. 2) |
| data.total_count | integer | No | The count of abnormal orders. (e.g. 100) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
