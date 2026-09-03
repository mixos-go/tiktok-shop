---
title: GetShopVideoPerformanceList
category: analytics
api_name: GetShopVideoPerformanceList
method: GET
path: /analytics/202509/shop_videos/performance
version: 202509
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** analytics
**API:** GetShopVideoPerformanceList

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/analytics/202509/shop_videos/performance

## API Description
Returns a list of videos and associated metrics for a shop.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| start_date_ge (query) | string | Yes | Start date (ISO 8601 YYYY-MM-DD format) in shop registered timezone. In the parameter name, "ge" refers to "greater than or equal to" (inclusive) |
| end_date_lt (query) | string | Yes | End date (ISO 8601 YYYY-MM-DD format) in shop registered timezone. In the parameter name, "lt" refers to "less than" (exclusive) |
| page_size (query) | integer | No | Number of products per page. Max value: 100 Default value: 10 |
| sort_field (query) | string | No | Sort on. Default value: gmv Available values: - gmv - gpm - avg_customers - sku_orders - items_sold - views - click_through_rate |
| sort_order (query) | string | No | Sort direction. Available values: ASC, DESC Default value: DESC * ASC: ascending * DESC: descending |
| currency (query) | string | No | Currency. Available values: USD, LOCAL Default value: LOCAL * USD: US dollars * LOCAL: local currency where the shop is located |
| page_token (query) | string | No | Page token, indicating the current position. Used for requesting next page data. Leave this field empty for first time queries. |
| account_type (query) | string | No | Types of the accounts under which videos were created. Available values: ALL, OFFICIAL_ACCOUNTS, MARKETING_ACCOUNTS, AFFILIATE_ACCOUNTS Default value: ALL - ALL: all account types - OFFICIAL_ACCOUNTS, - MARKETING_ACCOUNTS, - AFFILIATE_ACCOUNTS |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.latest_available_date | string | No | Latest date in local timezone where data is ready (ISO 8601 format). (e.g. 2024-09-07) |
| data.next_page_token | string | No | Page token for the next page request. (e.g. cGFnZV9udW1iZXI9MQ==) |
| data.total_count | integer | No | Total number of videos. (e.g. 10) |
| data.videos | array<object> | No | List of video performance metrics. |
| data.videos.gmv.amount | string | No | GMV amount in the corresponding currency. (e.g. 0) |
| data.videos.gmv.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. USD) |
| data.videos.gpm.amount | string | No | GMV amount in the corresponding currency. (e.g. 0) |
| data.videos.gpm.currency | string | No | GMV currency code (ISO 4217 standard). If LOCAL currency is requested, the value will be the local currency code of where the shop is registered (e.g. GBP). (e.g. USD) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
