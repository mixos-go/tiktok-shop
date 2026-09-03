---
title: GetShopWebhooks
category: event
api_name: GetShopWebhooks
method: GET
path: /event/202309/webhooks
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** event
**API:** GetShopWebhooks

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/event/202309/webhooks

## API Description
Retrieves a shop's webhooks and the corresponding webhook URLs.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.total_count | integer | No | The total number of webhooks returned. (e.g. 1) |
| data.webhooks | array<object> | No | The list of webhooks configured for the shop. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
