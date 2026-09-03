---
title: GetLiveCoreStats
category: analytics
api_name: GetLiveCoreStats
method: GET
path: /analytics/202309/live_rooms/{live_room_id}/core_stats
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** analytics
**API:** GetLiveCoreStats

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/analytics/202309/live_rooms/{live_room_id}/core_stats

## API Description
This API returns the core stats of live detail, e.g. GMV.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| live_room_id (path) | string | Yes | the live stream room id |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.stats | object | No | The stats of the live room |
| data.stats.accumulated_comment_count | integer | No | The cumulative number of times users left comments on the livestream (e.g. 123) |
| data.stats.accumulated_new_follower_count | integer | No | The number of times users clicked to follow the creator (e.g. 123) |
| data.stats.accumulated_sharing_count | integer | No | The cumulative number of times users shared the livestream (e.g. 123) |
| data.stats.avg_watching_duration | integer | No | The average length of time each unique viewer watches the livestream. (e.g. 123) |
| data.stats.buyer_count | integer | No | The number of unique users who paid for orders made from livestream, including returned/refunded orders (e.g. 123) |
| data.stats.click_order_rate | string | No | Click to order，paid sku orders/ product clicks (e.g. 0.11) |
| data.stats.click_through_rate | string | No | Click through rate，product clicks / views (e.g. 0.11) |
| data.stats.created_order_count | integer | No | The number of SKU orders created by users from the livestream (e.g. 123) |
| data.stats.current_visitor_count | integer | No | Viewers (e.g. 123) |
| data.stats.local_gmv | object | No | Revenue |
| data.stats.local_gmv.amount | string | No | The amount of GMV (e.g. 123) |
| data.stats.local_gmv.currency | string | No | Currency Code (e.g. USD) |
| data.stats.local_unit_price | object | No | The average price of the units sold |
| data.stats.local_unit_price.amount | string | No | The amount of unit price (e.g. 123) |
| data.stats.local_unit_price.currency | string | No | Currency Code (e.g. USD) |
| data.stats.paid_order_count | integer | No | The number of SKU orders created and paid by users from the livestream (e.g. 123) |
| data.stats.peak_concurrent_user_count | integer | No | The peak number of concurrent viewers of the livestream (e.g. 123) |
| data.stats.product_reach_count | integer | No | The number of product clicks from the livestream, including product list and product card clicks (e.g. 123) |
| data.stats.product_view_count | integer | No | The number of impressions of all livestream products, including product list and product card impressions (e.g. 123) |
| data.stats.sales | integer | No | The number of product units sold from the livestream (e.g. 123) |
| data.stats.watch_pv | integer | No | The number of views of the livestream (e.g. 123) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
