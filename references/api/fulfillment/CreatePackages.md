---
title: CreatePackages
category: fulfillment
api_name: CreatePackages
method: POST
path: /fulfillment/202512/packages
version: 202512
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** CreatePackages

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202512/packages

## API Description
Use this API to ship orders (purchase labels). This API is region specific to the US. The shipping fee and delivery time is an estimate only and is based on the package dimensions and weight you provided. Based on the package attributes, options listed below may differ from your shipping subscriptions.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| dimension | object | No | Package dimensions. |
| dimension.height | string | No | Package height. The length, width, and height must be passed together. (e.g. 0.03) |
| dimension.length | string | No | Package length. The length, width, and height must be passed together. (e.g. 1.2) |
| dimension.unit | string | No | The unit of measurement for the package dimensions. Available values: - `CM` - `INCH` (e.g. CM) |
| dimension.width | string | No | Package width. The length, width, and height must be passed together. (e.g. 0.2) |
| order_id | string | No | TikTok Shop order ID. If ship_type=0&1,This is a required field;If ship_type=2,we will not use (e.g. 2882335594258860015) |
| order_line_item | array<object> | No | List of order line item IDs. If ship_type=2,This is a required field;If ship_type=1&3,we will not use this field |
| order_list_ids | array<string> | No | List of order line item IDs. If ship_type=3,This is a required field;If ship_type=1&2,we will not use this field |
| ship_type | string | No | 1:All the products in one order are shipped in one package with one tracking number 2:Partical products in one parent order are shipped in multiple packages with multiple tracking numbers 3:All the products in multiple orders are shipped in one package with one tracking number. (e.g. 2) |
| shipping_service_id | string | No | Specify the shipping service used. If not specified, use the default service obtained from [Get Eligible Shipping Service](https://partner.tiktokshop.com/docv2/page/650aa6b2bace3e02b75dda4e). (e.g. 288233559123860015) |
| weight | object | No | Package weight. |
| weight.unit | string | No | The unit of measurement for the package weight. Available values: - `GRAM` - `POUND` (e.g. GRAM) |
| weight.value | string | No | The numerical value of the package weight. (e.g. 1.2) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.create_time | integer | No | The time when the product was created. Unix timestamp. (e.g. 1623812664) |
| data.dimension | object | No | Package dimensions. |
| data.dimension.height | string | No | Package height. (e.g. 0.03) |
| data.dimension.length | string | No | Package length. (e.g. 1.2) |
| data.dimension.unit | string | No | The unit of measurement for the package dimensions. Available values: - `CM` - `INCH` (e.g. CM) |
| data.dimension.width | string | No | Package width. (e.g. 0.2) |
| data.package_id | string | No | Package ID. (e.g. 2882335594258860015) |
| data.shipping_service_info | object | No | The available shipping service's information. |
| data.shipping_service_info.currency | string | No | Currency of the price. (e.g. dollar) |
| data.shipping_service_info.earliest_delivery_days | integer | No | The minimum estimated duration required for package delivery. (e.g. 3) |
| data.shipping_service_info.id | string | No | Shipping service ID. (e.g. 288233559123860015) |
| data.shipping_service_info.latest_delivery_days | integer | No | The maximum estimated duration required for package delivery. (e.g. 5) |
| data.shipping_service_info.name | string | No | Shipping service name. (e.g. UPS-first class) |
| data.shipping_service_info.price | string | No | Estimated price for this service. (e.g. 10) |
| data.shipping_service_info.shipping_provider_id | string | No | Shipping provider ID. (e.g. 2882322591238) |
| data.shipping_service_info.shipping_provider_name | string | No | Shipping provider name. (e.g. UPS) |
| data.weight | object | No | Package weight. |
| data.weight.unit | string | No | The unit of measurement for the package weight. Available values: - `GRAM` - `POUND` (e.g. GRAM) |
| data.weight.value | string | No | The numerical value of the package weight. (e.g. 1.2) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
