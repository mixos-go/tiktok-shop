---
title: GlobalSellingConfirmStockupOrder
category: gs_full_service_shipment
api_name: GlobalSellingConfirmStockupOrder
method: POST
path: /gs_full_service_shipment/202409/stockup_orders/confirm
version: 202409
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_shipment
**API:** GlobalSellingConfirmStockupOrder

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_shipment/202409/stockup_orders/confirm

## API Description
This API is used to confirm the stock-up order

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| is_order_confirmed | boolean | No | Whether the stock-up order is confirmed. To confirm the order, use `true`; to reject the order, use `false`. (e.g. True) |
| reject_note | string | No | The detailed reasons for rejecting the stockup order. The length must not exceed `200`. (e.g. note) |
| reject_reason | string | No | The reason you reject the stockup order. Possible enumerations: - PICTURE_NOT_MATCH - RAW_MATERIAL_OR_PROCESS_CHANGES - NOT_MEET_MINIMUM_LIMIT - STOP_PRODUCTION - SALES_STRATEGY_ADJUSTMENT_REDUCES_INVENTORY - ORDER_DEMAND_ADJUSTMENT - ORDER_SENT_INCORRECTLY - CF: Duplicated orders. - TC: Quality issues leading to production discontinuation. - QQXJ: Remove infringing/unauthorized products from listing. - CT: Product information is incorrect and needs correction. - REPAIR_ORDER_TERMINATED - TERMINATION_OF_OVERDUE_ORDERS - SELF_STOCKING_BASED_ON_SALES_VOLUME - HIGH_TURNOVER_DAYS_IN_THE_WAREHOUSE - INSUFFICIENT_INVENTORY - `OTHER_REASONS`. (e.g. PICTURENOTMATCH ) |
| skus | array<object> | No | The information list of SKU. |
| stockup_order_code | string | No | Stockup order code. (e.g. "POCY2404160000531") |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
