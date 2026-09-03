---
title: GetShopLIVEPerformancePerMinutes
category: analytics
api_name: GetShopLIVEPerformancePerMinutes
method: GET
path: /analytics/202510/shop_lives/{live_id}/performance_per_minutes
version: 202510
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** analytics
**API:** GetShopLIVEPerformancePerMinutes

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/analytics/202510/shop_lives/{live_id}/performance_per_minutes

## API Description
Get the Live session performance break down to every minutes, after the live session is finished. This API only returns data of live streams hosted by shop official account or marketing account.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| live_id (path) | string | Yes | TTS LIVE session ID |
| page_token (query) | string | No | Page token, indicating the current position. The page_token is empty by default, indicating first position. |
| currency (query) | string | No | USD or LOCAL |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | Page token for the next page request. (e.g. cGFnZV9udW1iZXI9MQ==) |
| data.performance | object | No | Performance |
| data.performance.intervals | array<object> | No | Intervals |
| data.performance.intervals.conversion.avg_price | object | No | Average direct GMV per main order. Also known as AOV (main order) |
| data.performance.intervals.conversion.avg_price.amount | string | No | GMV amount in the corresponding currency. (e.g. 7.29) |
| data.performance.intervals.conversion.avg_price.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. SGD) |
| data.performance.intervals.conversion.click_to_order_rate | object | No | Click to order rate |
| data.performance.intervals.conversion.click_to_order_rate.main_order_ctor | string | No | Percentage of times viewers who clicked LIVE product links also placed a main order. (e.g. 0.015757) |
| data.performance.intervals.conversion.click_to_order_rate.sku_order_ctor | string | No | The percentage of times viewers clicked product links in LIVE streams and placed a direct order. (e.g. 0.0187) |
| data.performance.intervals.conversion.created_sku_orders | integer | No | The number of SKU orders created by users from the LIVE (e.g. 12) |
| data.performance.intervals.conversion.gpm | object | No | GPM |
| data.performance.intervals.conversion.gpm.show_gpm | string | No | The average GMV generated from 1,000 impressions of the LIVE. (e.g. 20.75) |
| data.performance.intervals.conversion.gpm.watch_gpm | string | No | The Watch GPM is the average GMV generated from 1,000 views of the LIVE. (e.g. 158.18) |
| data.performance.intervals.conversion.sku_order_rate | string | No | Number of SKU orders from the LIVE divided by the impressions of the LIVE (e.g. 0.0057) |
| data.performance.intervals.interactions.comment_rate | string | No | Total number of comments during the LIVE divided by the number of views. (e.g. 0.0242) |
| data.performance.intervals.interactions.comments | integer | No | Total number of comments for a LIVE. (e.g. 42) |
| data.performance.intervals.interactions.follow_rate | string | No | Number of users that followed the creator during the LIVE divided by the number of views. (e.g. 0.0040) |
| data.performance.intervals.interactions.like_rate | string | No | Total number of likes during the LIVE divided by the number of views. (e.g. 0.8956) |
| data.performance.intervals.interactions.likes | integer | No | The number of likes in the LIVE room. (e.g. 1146) |
| data.performance.intervals.interactions.new_followers | integer | No | Number of viewers who followed creator from the LIVE video (e.g. 9) |
| data.performance.intervals.interactions.share_rate | string | No | Total number of times the LIVE was shared divided by the total number of views. (e.g. 0.0022) |
| data.performance.intervals.interactions.shares | integer | No | Total number of shares of a LIVE. (e.g. 4) |
| data.performance.intervals.sales.customers | integer | No | The total number of customers who placed orders within this interval, including customers who made returns or refunds. (e.g. 49) |
| data.performance.intervals.sales.gmv | object | No | The total amount paid for orders placed directly within this interval, including returns and refunds. |
| data.performance.intervals.sales.gmv.amount | string | No | GMV amount in the corresponding currency. (e.g. 39440.00) |
| data.performance.intervals.sales.gmv.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. USD) |
| data.performance.intervals.sales.items_sold | integer | No | The number of items sold directly within this interval. (e.g. 57) |
| data.performance.intervals.sales.main_orders | integer | No | Total number of paid main orders placed. Main orders refer to the single purchase transaction a customer makes. (e.g. 51) |
| data.performance.intervals.sales.sku_orders | integer | No | The total number of paid SKU orders placed within this interval. (e.g. 57) |
| data.performance.intervals.traffic.ctr | string | No | The number of clicks divided by numbers of views of the LIVE during selected time period including clicks on product lists and product cards (e.g. 0.3264) |
| data.performance.intervals.traffic.enter_room_rate | string | No | LIVE views per LIVE room impressions. (e.g. 0.1636) |
| data.performance.intervals.traffic.impressions | integer | No | The total number of times the LIVE was displayed to viewers. (e.g. 13862) |
| data.performance.intervals.traffic.product_clicks | integer | No | Total number of product link clicks from LIVE streams, including product list and product card clicks. (e.g. 595) |
| data.performance.intervals.traffic.product_impressions | integer | No | Total number of times a product was viewed in LIVE, including product list and product card clicks. (e.g. 8989) |
| data.performance.intervals.traffic.viewers | integer | No | The number of viewers within this interval. (e.g. 229) |
| data.performance.intervals.traffic.views | integer | No | The number of views or viewings in the LIVE room. (e.g. 2092) |
| data.performance.overall | object | No | Overall |
| data.performance.overall.duration | integer | No | LIVE session duration in seconds (e.g. 3600) |
| data.performance.overall.end_time | integer | No | End time of the LIVE, unix timestamp GMT (UTC+00:00). (e.g. 1623812664) |
| data.performance.overall.gmv | object | No | The total amount paid for orders placed directly from the LIVE, including returns and refunds. |
| data.performance.overall.gmv.amount | string | No | GMV amount in the corresponding currency. (e.g. 39440.00) |
| data.performance.overall.gmv.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. USD) |
| data.performance.overall.impressions | integer | No | The total number of times the LIVE was displayed to viewers. (e.g. 87939) |
| data.performance.overall.items_sold | integer | No | The number of items sold directly from the LIVE. (e.g. 432) |
| data.performance.overall.live_title | string | No | LIVE session title (e.g. BAJU BARU!!!) |
| data.performance.overall.start_time | integer | No | Start time of the LIVE, unix timestamp GMT (UTC+00:00). (e.g. 1623812664) |
| data.performance.overall.unique_viewers | integer | No | The number of unique viewers in the LIVE room. (e.g. 10230) |
| data.total_count | integer | No | Total number of intervals. (e.g. 20) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
