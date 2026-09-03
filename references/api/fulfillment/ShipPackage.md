---
title: ShipPackage
category: fulfillment
api_name: ShipPackage
method: POST
path: /fulfillment/202309/packages/{package_id}/ship
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** ShipPackage

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202309/packages/{package_id}/ship

## API Description
Use this API to ship a package. There are two kinds of shipping options available: `TikTok Shipping` or `Seller Shipping`. - `TikTok Shipping`: Schedule a package handover time for TikTok Shipping carriers to pickup a package from seller. - `Seller Shipping`: Seller arranges their own shipping, and uploads a tracking number and `shipping_provider_id`. Package ID can be obtained from [Get Order Detail](https://partner.tiktokshop.com/docv2/page/650aa8ccc16ffe02b8f167a0?external_id=650aa8ccc16ffe02b8f167a0#Back%20To%20Top).

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| package_id (path) | string | Yes | TikTok Shop package ID. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| handover_method | string | No | Possible values: - `PICKUP`: A logistics carrier will pick up the package(s) from the seller's pickup address. - `DROP_OFF`: The seller will need to drop off the package(s) to a designated location. (e.g. PICKUP) |
| pickup_slot | object | No | Pickup time slot. |
| pickup_slot.end_time | integer | No | The end date and time of the package pickup time slot. Unix timestamp. (e.g. 1623812664) |
| pickup_slot.start_time | integer | No | The start date and time of the package pickup time slot. Unix timestamp. (e.g. 1623812664) |
| self_shipment | object | No | Only needed for merchant self-shipping packages. Check the `delivery_option` field of [Get Package Detail](https://partner.tiktokshop.com/docv2/page/650aa39fbace3e02b75d8617?external_id=650aa39fbace3e02b75d8617#Back%20To%20Top) to see how to differentiate platform-logistics and self-shipping. Use the `shipping_provider_id` retrieved from [Get Shipping Providers](https://partner.tiktokshop.com/docv2/page/650aa48d4a0bb702c06d85cd?external_id=650aa48d4a0bb702c06d85cd) and upload the corresponding `tracking_number`. |
| self_shipment.shipping_provider_id | string | No | For package with `SEND_BY_SELLER` as `delivery_option` (merchant self-shipping mode), you must input a `shipping_provider_id` to call this API. Please use [Get Shipping Providers](https://partner.tiktokshop.com/docv2/page/650aa48d4a0bb702c06d85cd?external_id=650aa48d4a0bb702c06d85cd) to obtain the `shipping_provider_id`. (e.g. 6617675021119438849) |
| self_shipment.tracking_number | string | No | For package with `SEND_BY_SELLER` as `delivery_option` (merchant self-shipping mode), you must input a `tracking_number` to call this API. (e.g. JX12345) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
