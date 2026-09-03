---
title: GetShopLIVEProductsPerformanceList
category: analytics
api_name: GetShopLIVEProductsPerformanceList
method: GET
path: /analytics/202512/shop/{live_id}/products_performance
version: 202512
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** analytics
**API:** GetShopLIVEProductsPerformanceList

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/analytics/202512/shop/{live_id}/products_performance

## API Description
Shop related LIVE session (official account & marketing accounts） Sale performance of each product

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| live_id (path) | string | Yes | TTS LIVE session ID |
| sort_order (query) | string | No | Sort direction. Available values: ASC, DESC Default value: DESC |
| sort_field (query) | string | No | Field to sort on. Default: gmv Available values: - direct_gmv - items_sold - customers - created_sku_orders - sku_orders - main_orders - product_impressions - produt_clicks |
| currency (query) | string | No | USD or LOCAL |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.products | array<object> | No | Overall performance data for the video. |
| data.products.sales.avg_price | object | No | Average direct GMV per main order. Also known as AOV (main order) |
| data.products.sales.avg_price.amount | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. 30.75) |
| data.products.sales.avg_price.currency | string | No | GMV amount in the corresponding currency. (e.g. SGD) |
| data.products.sales.created_sku_orders | integer | No | The total number of SKU orders created directly from the LIVE for this product. (e.g. 27) |
| data.products.sales.customers | integer | No | The total numbers of customers who ordered this product directly from the LIVE, including customers who made returns or refunds. (e.g. 24) |
| data.products.sales.direct_gmv | object | No | The total amount paid for orders of this product directly from the LIVE, including returns and refunds. |
| data.products.sales.direct_gmv.amount | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. 737.97) |
| data.products.sales.direct_gmv.currency | string | No | GMV amount in the corresponding currency. (e.g. SGD) |
| data.products.sales.items_sold | integer | No | The number of product items sold (e.g. 24) |
| data.products.sales.main_orders | integer | No | Total number of paid main orders placed. Main orders refer to the single purchase transaction a customer makes. (e.g. 24) |
| data.products.sales.payment_rate | string | No | Main order paid / Main order created of this product (e.g. 0.8888) |
| data.products.sales.sku_orders | integer | No | The total number of paid SKU orders placed directly from the LIVE for this product. (e.g. 24) |
| data.products.traffic.add_to_cart_count | integer | No | The number of times viewers add the product to their cart. (e.g. 102) |
| data.products.traffic.click_to_order_rate | object | No | Click to order rate |
| data.products.traffic.click_to_order_rate.main_order_ctor | string | No | Percentage of times viewers who clicked LIVE product links also placed a main order. (e.g. 0.0178) |
| data.products.traffic.click_to_order_rate.sku_order_ctor | string | No | The percentage of times viewers clicked product links in LIVE streams and placed a direct order. (e.g. 0.0178) |
| data.products.traffic.ctr | string | No | Click-through rate: The number of product clicks for this product from the LIVE video, divided by the number of product impressions for this product from the LIVE video, including product clicks and product impressions for product lists and product cards (e.g. 0.0908) |
| data.products.traffic.gpm | object | No | GPM |
| data.products.traffic.gpm.watch_gpm | string | No | The Watch GPM is the average GMV generated from 1,000 views of the LIVE. (e.g. 49.81) |
| data.products.traffic.product_impressions | integer | No | Number of product impressions for this product during the LIVE video, including for product lists and product cards (e.g. 14815) |
| data.products.traffic.produt_clicks | integer | No | The total number of times the product was clicked from this LIVE, including from the product list and product card (e.g. 1346) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
