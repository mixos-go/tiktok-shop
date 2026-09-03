---
title: BindLocalProducts
category: product
api_name: BindLocalProducts
method: POST
path: /product/202503/global_products/{global_product_id}/bind_local_products
version: 202503
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** BindLocalProducts

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202503/global_products/{global_product_id}/bind_local_products

## API Description
Manually bind a [global product](65854fa5a46cdd02bcbd0a18) to [local products](65854ffb8f559302d8a6acda) in different EU countries. Use this API if you already have existing local products in different countries and would like to manage them centrally through a global product. **Note**: - You can only bind a global product to one product per EU country. - Once binding is completed, you will not be able to change or remove the binding, therefore please exercise caution during binding. - The values of the following fields must be the same in both the global product and local product for binding to be successful: Category, Brand, Product images, SKU details, Number of SKUs, Dimensions, Weight, Seller SKU, GTIN, Size chart, Unit price, Video, Warehouse setup, Sale mode. Target seller: Sellers operating in multiple EU countries

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| global_product_id (path) | string | Yes | The global product ID. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| local_products | array<object> | No | The list of local products that you want to bind to the global product. Max count: Equivalent to the number of EU countries supported by TikTok Shop **Note**: You can only bind a global product to one local product per EU country. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.bind_results | array<object> | No | The binding result for each requested local product. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
