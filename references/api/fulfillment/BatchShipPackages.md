---
title: BatchShipPackages
category: fulfillment
api_name: BatchShipPackages
method: POST
path: /fulfillment/202309/packages/ship
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** BatchShipPackages

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202309/packages/ship

## API Description
Use this API to batch ship packages by providing multiple package IDs. This API is available for TikTok shipping orders as well as seller shipping orders. - `TikTok Shipping`: Schedule a package handover time for TikTok Shipping carriers to pickup a package from the Seller. - `Seller Shipping`: Seller arranges their own shipping, and upload a `tracking_number` and `shipping_provider_id`. Package ID can be obtained from [Get Order Detail](https://partner.tiktokshop.com/docv2/page/650aa8ccc16ffe02b8f167a0?external_id=650aa8ccc16ffe02b8f167a0).

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| packages | array<object> | No | Input list of packages you would like to batch ship. |
| packages.pickup_slot.end_time | integer | No | The end date and time of the package pickup time slot. Unix timestamp. (e.g. 1623812664) |
| packages.pickup_slot.start_time | integer | No | The start date and time of the package pickup time slot. Unix timestamp. (e.g. 1623812664) |
| packages.self_shipment.shipping_provider_id | string | No | For packages with the `SEND_BY_SELLER` delivery option type (seller shipping), you must provide the shipping provider information. Please use the [Get Shipping Providers](https://partner.tiktokshop.com/docv2/page/650aa48d4a0bb702c06d85cd?external_id=650aa48d4a0bb702c06d85cd#Back%20To%20Top) API to obtain the `shipping_provider_id`. (e.g. 6617675021119438849) |
| packages.self_shipment.tracking_number | string | No | For packages with the `SEND_BY_SELLER` delivery option type (seller shipping), you must provide the package's tracking number. (e.g. JX12345) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | Return list of possible errors during package batch shipment attempt. |
| data.errors.detail.package_id | string | No | Package ID. (e.g. 123123123123131) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
