---
title: GetWarehouseDeliveryOptions
category: logistics
api_name: GetWarehouseDeliveryOptions
method: GET
path: /logistics/202309/warehouses/{warehouse_id}/delivery_options
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** logistics
**API:** GetWarehouseDeliveryOptions

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/logistics/202309/warehouses/{warehouse_id}/delivery_options

## API Description
This API is used to obtain a list of delivery options available through the seller's designated warehouse.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| warehouse_id (path) | string | Yes | The warehouse ID. |
| scope (query) | string | No | Specify the scope of delivery options to retrieve. - `WAREHOUSE`: Returns all delivery options currently active for the warehouse. By default, orders will be shipped based on these options. - `PRODUCT`: Returns the delivery options that can be assigned directly to a product. Use this if you want to |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.delivery_options | array<object> | No | List of deliver options available through the seller's warehouse, and the respective carriers and attribute restrictions depending on the commodity. |
| data.delivery_options.dimension_limit.max_height | integer | No | Maximum height limit. (e.g. 100) |
| data.delivery_options.dimension_limit.max_length | integer | No | Maximum length limit. (e.g. 100) |
| data.delivery_options.dimension_limit.max_width | integer | No | Maximum width limit. (e.g. 100) |
| data.delivery_options.dimension_limit.unit | string | No | The unit of measurement for the dimensions, with possible values: - CM - INCH (e.g. INCH) |
| data.delivery_options.weight_limit.max_weight | integer | No | Maximum weight limit. (e.g. 100) |
| data.delivery_options.weight_limit.min_weight | integer | No | Minimum weight limit. (e.g. 100) |
| data.delivery_options.weight_limit.unit | string | No | The unit of measurement for the weight, with possible values: - GRAM - POUND (e.g. GRAM) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
