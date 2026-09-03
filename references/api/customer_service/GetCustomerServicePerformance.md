---
title: GetCustomerServicePerformance
category: customer_service
api_name: GetCustomerServicePerformance
method: GET
path: /customer_service/202407/performance
version: 202407
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** customer_service
**API:** GetCustomerServicePerformance

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/customer_service/202407/performance

## API Description
Get the average customer service performance of a shop for a selected time period

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| support_date_ge (query) | string | Yes | The start date (YYYY-MM-DD) of the period for selecting chat support sessions to be included in the performance evaluation. |
| support_date_lt (query) | string | Yes | The end date (YYYY-MM-DD) of the period for selecting chat support sessions to be included in the performance evaluation. |
| shop_cipher (query) | string | Yes | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=650 |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.performance | object | No | The customer service performance metrics for the shop based on chat support sessions within the selected evaluation period. |
| data.performance.response_percentage | string | No | The percentage of chat support sessions of which the first response happens within 24 hours. The sessions which started in the specified time slot are included in calculation. - Automated responses such as FAQ cards are regarded as responses within 24 hours. - Sessions initiated during vacation mode are excluded from this calculation. (e.g. 93.4) |
| data.performance.response_time_mins | string | No | The average first response time in minutes for chat support sessions. The sessions which started in the specified time slot are included in calculation. (e.g. 3.4) |
| data.performance.satisfaction_percentage | string | No | The percentage of chat support sessions rated 'Satisfied' (4 or 5 stars). The sessions of which the rating occurred in the specified time slot are included in the calculation; the sessions without rate are not included in the calculation. (e.g. 95.2) |
| data.performance.support_session_count | integer | No | The total number of chat support sessions initiated by customers. A session starts when a customer first clicks an FAQ card or sends a message (text, image, video, emoji, product card, order card, etc.) in chat. The sessions which started in the specified time slot are included in calculation. (e.g. 15) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
