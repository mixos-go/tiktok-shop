---
title: GetLatestUnreadMessages
category: affiliate_seller
api_name: GetLatestUnreadMessages
method: GET
path: /affiliate_seller/202412/conversations/messages/list/newest
version: 202412
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** GetLatestUnreadMessages

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202412/conversations/messages/list/newest

## API Description
Get the unread messages from the last minute. You are recommended to use the Webhook, New Message Listener, for the message notification.

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
| data.newest_message_list | array<object> | No | The list of unread messages from the last minute. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
