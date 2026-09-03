---
title: GetEligibleShippingService
category: fulfillment
api_name: GetEligibleShippingService
method: POST
path: /fulfillment/202309/orders/{order_id}/shipping_services/query
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** GetEligibleShippingService

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202309/orders/{order_id}/shipping_services/query

## API Description
Use this API ( for US ) to query the list of available shipping services when specifying packages' size or weight. The shipping fee and delivery time is an estimate only and is based on the package dimensions and weight you provided. Options listed may differ if you change the package attributes at the time of shipping.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| order_id (path) | string | Yes | TikTok Shop order ID |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| dimension | object | No | The dimensions of the scheduled package. |
| dimension.height | string | No | The height of the package. The length, width, height must be passed together. (e.g. CM) |
| dimension.length | string | No | The length of the package. The length, width, height must be passed together. (e.g. 0.3) |
| dimension.unit | string | No | The unit of measurement is used to measure the length. - CM - INCH (e.g. INCH) |
| dimension.width | string | No | The width of the package. The length, width, height must be passed together. (e.g. 0.2) |
| order_line_item_ids | array<string> | No | Order line item ID list |
| weight | object | No | The weight of the scheduled package. |
| weight.unit | string | No | The unit of measurement is used to measure the weight. - GRAM - POUND (e.g. GRAM) |
| weight.value | string | No | The weight of the scheduled package. (e.g. 0.4) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.dimension | object | No | The dimension of the scheduled package. |
| data.dimension.height | string | No | The height of the package. The length, width, height must be passed together. (e.g. 0.04) |
| data.dimension.length | string | No | The length of the package. The length, width, height must be passed together. (e.g. 0.3) |
| data.dimension.unit | string | No | The unit of measurement is used to measure the length. - CM - INCH (e.g. INCH) |
| data.dimension.width | string | No | The width of the package. The length, width, height must be passed together. (e.g. 0.2) |
| data.order_id | string | No | TikTok Shop order ID (e.g. 28823355942588) |
| data.order_line_id | array<string> | No | Line item ID list |
| data.shipping_services | array<object> | No | Shipping services info. |
| data.weight | object | No | The weight of the scheduled package. |
| data.weight.unit | string | No | The unit of measurement is used to measure the weight. - GRAM - POUND (e.g. GRAM) |
| data.weight.value | string | No | The weight of the scheduled package. (e.g. 1.2) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
