---
title: GlobalSellingReserveShipment
category: gs_full_service_shipment
api_name: GlobalSellingReserveShipment
method: POST
path: /gs_full_service_shipment/202410/delivery_orders/reserve_ship
version: 202410
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_shipment
**API:** GlobalSellingReserveShipment

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_shipment/202410/delivery_orders/reserve_ship

## API Description
This API is used to reserve shipping for multi delivery-order.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| delivery_mode | string | No | The mode that merchant deliver goods to the warehouse of GS. Possible enumerations are: 1. PLATFORM_DELIVERY 2. SELF_DELIVERY (e.g. PLATFORM_DELIVERY) |
| delivery_order_codes | array<string> | No | The code list of delivery orders, less or equal to 50. |
| logistics | object | No | The information of logistics If delivery_mode == PLATFORM_DELIVERY, the field is required. |
| logistics.delivery_option | string | No | The type of the delivery service. The possible enumerations are: - `"SUPER_SPEEDY_EXPRESS"` - `"SPEEDY_EXPRESS"` - `"STANDARD_EXPRESS"` Notes: - `"SUPER_SPEEDY_EXPRESS"` is the only option for JIT orders. - `"SPEEDY_EXPRESS"` and `"STANDARD_EXPRESS"` are options for ordinary orders. (e.g. SUPER_SPEEDY_EXPRESS) |
| logistics.shipping_provider_code | string | No | The code of the logistic provider. If `delivery_mode == PLATFORM_DELIVERY`, the value is required. (e.g. 7350150641810933506) |
| logistics.shipping_provider_name | string | No | The name of logistics provider (e.g. 顺丰大网) |
| reserve | object | No | The reserve information for shipment |
| reserve.predicted_arrived_time | integer | No | The predicted arrival time is based on reservation shipment time (e.g. 1713456000) |
| reserve.predicted_pickup_ge | integer | No | The start time of Schedule delivery timeslot (e.g. 1713456000) |
| reserve.predicted_pickup_lt | integer | No | The end time of Schedule delivery timeslot (e.g. 1713456000) |
| reserve.predicted_pickup_time | integer | No | The predicted datetime of logistics pickup (e.g. 1713456000) |
| reserve.predicted_ship_time | integer | No | Schedule delivery datetime (e.g. 1713456000) |
| sender_contact_id | string | No | The ID of the sender. (e.g. "5765611508606562308") |
| shipping_box_quantity | integer | No | The quantity of shipping boxes (e.g. 2) |
| total_weight | object | No | Total weight |
| total_weight.unit | string | No | The unit. Possible enumerations are: - `"GRAM"` - `"KILOGRAM"` (e.g. GRAM) |
| total_weight.value | string | No | value (e.g. 1240) |
| warehouse_code | string | No | The code of warehouse that receives goods (e.g. HDJD03) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.logistics_order | string | No | Main logistics order belong to Delivery order (e.g. LOG20240423010565) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
