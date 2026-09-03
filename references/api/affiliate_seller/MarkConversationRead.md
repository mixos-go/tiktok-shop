---
title: MarkConversationRead
category: affiliate_seller
api_name: MarkConversationRead
method: POST
path: /affiliate_seller/202412/conversatons/read
version: 202412
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** MarkConversationRead

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202412/conversatons/read

## API Description
Mark the messages in the specified conversations to be read.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| conversation_ids | array<string> | No | The array of conversations to read. After the API is called, all the messages in the specified conversations will be read, and the read timestamp is set to the time when the API is called. The length of the array must not exceed `20`. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.failed_conversation_ids | array<string> | No | The ID list of conversations failed to be set to read. You are suggested to retry the API. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
