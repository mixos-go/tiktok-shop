---
title: SchedulePackageHandover
category: fulfillment
api_name: SchedulePackageHandover
method: POST
path: /fulfillment/202309/packages/schedule
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** SchedulePackageHandover

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202309/packages/schedule

## API Description
Use this API to schedule a platform shipping package pickup or drop off. After scheduling the package pickup or drop off, the API will return relevant package pickup/ drop off info. Note: Please use order id to schedule a package pickup or drop off.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| handover_method | string | No | Schedule the package as a pickup or drop off. - PICKUP (A shipping provider will pickup the package(s) from the seller's pickup address) - DROP_OFF (Seller will need to drop off the package(s) to a designated location) (e.g. PICKUP) |
| order_id | string | No | TikTok Shop order ID (e.g. 288233559425886) |
| order_line_item_ids | array<string> | No | Line item ID list |
| pickup_slot | object | No | Shipping provider pickup times. |
| pickup_slot.end_time | integer | No | The end date and time of the package pickup time slot. (e.g. 1623812664) |
| pickup_slot.start_time | integer | No | The start date and time of the package pickup time slot. (e.g. 1623812664) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.create_time | integer | No | Unix timestamp (e.g. 1635338186) |
| data.dimension | object | No | The dimensions of the scheduled package. The dimensions calculated by TikTok Shop based on the product's dimensions. |
| data.dimension.height | string | No | The height of package. (e.g. 1.2) |
| data.dimension.length | string | No | The length of package. (e.g. 1.2) |
| data.dimension.unit | string | No | The unit of measurement is used to measure the length. - CM - INCH (e.g. INCH) |
| data.dimension.width | string | No | The width of package. (e.g. 1.2) |
| data.handover_method | string | No | Schedule the package as a pickup or drop off. - PICKUP (A shipping provider will pickup the package(s) from the seller's pickup address) - DROP_OFF (Seller will need to drop off the package(s) to a designated location) (e.g. PICKUP) |
| data.order_id | string | No | TikTok Shop order ID (e.g. 2882335594258) |
| data.order_line_item_ids | array<string> | No | Order line item IDs that belong to the package. |
| data.package_id | string | No | Package ID. (e.g. 2882335594258) |
| data.shipping_provider_id | string | No | Package shipping provider id (e.g. 6617675021119438849) |
| data.shipping_provider_name | string | No | Package shipping provider (e.g. TT Virtual express) |
| data.tracking_number | string | No | Package tracking number (e.g. 6617675021119438849) |
| data.update_time | integer | No | Unix timestamp (e.g. 1635338186) |
| data.weight | object | No | The weight of the scheduled package. The weight calculated by TikTok Shop based on the product's weight. |
| data.weight.unit | string | No | The unit of measurement is used to measure the weight. - GRAM - POUND (e.g. GRAM) |
| data.weight.value | string | No | The value of the weight of the scheduled package. (e.g. 1.2) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
