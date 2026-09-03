---
title: GetPriceDetail
category: order
api_name: GetPriceDetail
method: GET
path: /order/202407/orders/{order_id}/price_detail
version: 202407
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** order
**API:** GetPriceDetail

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/order/202407/orders/{order_id}/price_detail

## API Description
Get the detailed pricing calculation information of an order or a line item, including vouchers, tax, etc.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| order_id (path) | string | Yes | Order ID |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.cod_fee | string | No | COD fee charged by shipping aggregators. For regions outside of Saudi Arabia, the value is `0.00`. (e.g. 0.00) |
| data.cod_fee_net_amount | string | No | COD fee charged by shipping aggregators including tax. For regions outside of Saudi Arabia, the value is `0.00`. (e.g. 0.00) |
| data.currency | string | No | Currency Type. Three-letter code, see [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html). (e.g. USD) |
| data.distance_fee | string | No | Total distance fee for Horizon+ Program. Only applicable for ID market (e.g. 2.00) |
| data.distance_shipping_fee | string | No | Distance shipping fee is fee that charged charged by our logistics partner and covers the separate distance-based cost for deliveries outside Java island as a part of Horizon+ Program. Only applicable in ID Market. (e.g. 1.00) |
| data.line_items | array<object> | No | Each object is the same as the "data" field (line 5) without "line_items" |
| data.net_price_amount | string | No | Price after tax (e.g. 97.00) |
| data.payment | string | No | Payment of the order from the buyer. Calculation: `sku_sale_price` + `shipping_sale_price` + `tax_amount` + `small_order_fee` (e.g. 101.00) |
| data.shipping_fee_deduction_platform | string | No | Shipping discount covered by the platform (e.g. 12.00) |
| data.shipping_fee_deduction_platform_voucher | string | No | Shipping discount covered by the platform voucher: `1010000`: PLATFORM_NEW_USER, `1020000`: SELLER_SKU_PRICE `1030000`: PLATFORM_FREE_SHIPPING (e.g. 1010000) |
| data.shipping_fee_deduction_seller | string | No | Shipping discount covered by the seller. (e.g. 10.00) |
| data.shipping_list_price | string | No | Original shipping price (e.g. 25.00) |
| data.shipping_sale_price | string | No | Promotional shipping price Calculation: shipping_list_price - shipping_fee_deduction -shipping_fee_deduction_platform (e.g. 3.00) |
| data.sku_gift_net_price | string | No | Original sku list price of the gift product from the seller including tax. (e.g. 2.02) |
| data.sku_gift_original_price | string | No | Original sku list price of the gift product from the seller. (e.g. 2.00) |
| data.sku_list_price | string | No | Total MSRP price of the products. (e.g. 97.00) |
| data.sku_sale_price | string | No | Total promotional sale price of the products. Calculation: `sku_list_price` - `subtotal_deduction_seller` - `subtotal_deduction_platform` (e.g. 96.00) |
| data.subtotal | string | No | Total promotional sale price of the products including tax. Calculation: `sku_sale_price` + `subtotal_tax_amount` (e.g. 98.00) |
| data.subtotal_deduction_platform | string | No | Platform provided price discount on the product (e.g. 0.50) |
| data.subtotal_deduction_seller | string | No | Seller provided price discount on the product (e.g. 0.50) |
| data.subtotal_tax_amount | string | No | Total tax amount on the product (e.g. 2.00) |
| data.tax_amount | string | No | Total tax amount. Calculation: subtotal_tax_amount + shipping_fee_tax（in TaxDetail） + cod_fee_tax（TaxDetail） (e.g. 2.00) |
| data.tax_rate | string | No | Tax rate (e.g. 0.021) |
| data.total | string | No | Total number of the original price of the order. Calculation: `sku_list_price` + `shipping_list_price` (e.g. 122.00) |
| data.voucher_deduction_platform | string | No | Type of the platform-providing discount on the product. Possible values: `1010000`: PLATFORM_NEW_USER, `1020000`: SELLER_SKU_PRICE`, `1030000`: PLATFORM_FREE_SHIPPING (e.g. 1010000) |
| data.voucher_deduction_seller | string | No | Type of the seller-providing discount on the product. Possible values: `1010000`: PLATFORM_NEW_USER, `1020000`: SELLER_SKU_PRICE, `1030000`: PLATFORM_FREE_SHIPPING` (e.g. 1020000) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
