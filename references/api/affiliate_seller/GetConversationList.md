---
title: GetConversationList
category: affiliate_seller
api_name: GetConversationList
method: GET
path: /affiliate_seller/202505/conversations
version: 202505
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** GetConversationList

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202505/conversations

## API Description
Get User's Conversation list.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_size (query) | integer | Yes | The maximum number of queries. The maximum number is 50. |
| page_token (query) | string | No | Pagination offset determines where you begin to query. It's empty when you raise your first request. |
| only_need_conversation_id (query) | boolean | No | - If `true`, only `conversation_id` in `conversation` is returned. - If `false`, all fields in conversation` are returned. `true` by default. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| only_need_conversation_id | boolean | No | - If `true`, only `conversation_id` in `data.conversation` is returned. - If `false`, all fields in `data.conversation` are returned. `true` by default. (e.g. True) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.conversations | array<object> | No | The conversation list. |
| data.has_more | boolean | No | Whether there are more conversations. (e.g. True) |
| data.next_page_token | string | No | Cursor for the next page request. (e.g. b2Zmc2V0PTAK) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
