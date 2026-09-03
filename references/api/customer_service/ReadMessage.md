---
title: ReadMessage
category: customer_service
api_name: ReadMessage
method: POST
path: /customer_service/202309/conversations/{conversation_id}/messages/read
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** customer_service
**API:** ReadMessage

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/customer_service/202309/conversations/{conversation_id}/messages/read

## API Description
Use this API to mark all messages sent by the buyer as read. You are suggested to call this API before replying to their messages.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| conversation_id (path) | string | Yes |  |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
