---
title: GetTaskPerformances
category: customer_engagement
api_name: GetTaskPerformances
method: POST
path: /customer_engagement/202412/performances
version: 202412
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** customer_engagement
**API:** GetTaskPerformances

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/customer_engagement/202412/performances

## API Description
Retrieve detailed performance metrics for a customer engagement task, including message reads, order conversions, and other key engagement statistics.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | Yes | Shop_cipher is required for cross-border shops, and optional for local shops. It's unique for each shop. Get the this property from the Get Authorized Shop API dynamically. Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| task_ids | array<string> | No | The list of tasks for which you want to retrieve performance data. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.task_performances | array<object> | No | The requested list of task performance. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
