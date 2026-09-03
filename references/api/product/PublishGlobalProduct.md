---
title: PublishGlobalProduct
category: product
api_name: PublishGlobalProduct
method: POST
path: /product/202309/global_products/{global_product_id}/publish
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** PublishGlobalProduct

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/global_products/{global_product_id}/publish

## API Description
Publish and convert a global product to local products in one or multiple shops in supported markets. After publishing, the product is sent for review by TikTok Shop in the respective markets. For sellers in the EU market, the provided information will also be automatically translated into all EU languages supported by TikTok Shop. **Note**: - You can only publish in each market once. To change product information, edit the global product by using the [Edit Global Product API](6509e1bcc16ffe02b8dc3cd7). The changes will be automatically synchronized to all markets where the product is published - Use the [Get Product API](6509d85b4a0bb702c057fdda) to obtain the converted local product information in the target market's language. - Use the [Edit Product API](6509da7d0fcef602bf1caddf) or [Partial Edit Product API](650a98d74a0bb702c06c3289) to edit the local product information, if necessary.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| global_product_id (path) | string | Yes | The global product id. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| publish_target | array<object> | No | Target markets for publishing global products. |
| publish_target.skus.inventory.quantity | integer | No | The SKU quantity available in the warehouse. Valid range: [1, 99,999] **Note**: If the local SKU inventory quantity exceeds the global SKU quantity, the global SKU quantity will be updated to be the sum of all local inventories. (e.g. 999) |
| publish_target.skus.inventory.warehouse_id | string | No | The warehouse ID. Retrieve this value from the [Get Warehouse List API](https://partner.tiktokshop.com/docv2/page/650aa418defece02be6e66b6). Default: - Sellers without multiple warehouses: The available warehouses will be used, prioritizing local warehouses in the specified market over warehouses in the seller's base country. - Sellers with multiple warehouses: The global warehouse ID (e.g. 7068517275539719942) |
| publish_target.skus.price.amount | string | No | The SKU's **local pre-tax price**. This excludes any applicable charges such as cross-border shipping costs, taxes, and other fees, and therefore does not appear on the product page. Refer to [Product Pricing](https://partner.tiktokshop.com/docv2/page/67e1288d76cfee049d9af858) for the allowed price ranges in each market. **Note**: Not applicable for JP and US shops using China warehouses, please use `price.sale_price` instead. (e.g. 10.01) |
| publish_target.skus.price.currency | string | No | The currency. You can use the local currency or USD. Possible values: - EUR: France, Germany, Ireland, Italy, Spain - GBP: United Kingdom - IDR: Indonesia - JPY: Japanese - MYR: Malaysia - PHP: Philippines - SGD: Singapore - THB: Thailand - USD: United States - VND: Vietnam - MXN: Mexico (e.g. MYR) |
| publish_target.skus.price.sale_price | string | No | The SKU's **local display price** shown on the product page before any discounts. Refer to [Product Pricing](https://partner.tiktokshop.com/docv2/page/67e1288d76cfee049d9af858) for the allowed price ranges in each market. **Note**: - Required for JP and US shops using China warehouses, optional for others. - This is the definitive final price shown on the product page, all other prices will be ignored. (e.g. 100.00) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.products | array<object> | No | The local products converted from the global product. |
| data.publish_result | array<object> | No | Results of publishing the global product. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
