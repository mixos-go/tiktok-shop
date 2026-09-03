---
title: GetConversation
category: customer_service
api_name: GetConversation
method: GET
path: /customer_service/202601/conversations/{conversation_id}
version: 202601
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** customer_service
**API:** GetConversation

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/customer_service/202601/conversations/{conversation_id}

## API Description
Use this API to retrieve information about a conversation by ID.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| conversation_id (path) | string | Yes | Conversation ID |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.conversation | object | No | Conversation info. |
| data.conversation.create_time | integer | No | Unix timestamp when the conversation was created. In seconds. (e.g. 1691411573) |
| data.conversation.id | string | No | Conversation ID (e.g. 7494560109732334261) |
| data.conversation.participant_count | integer | No | Number of participants in the conversation. - If there has been no customer service agent in the conversation, the value is `2`: the shop and the buyer; - Otherwise, the value is `3`: the shop, the buyer, and the customer service agent. (e.g. 3) |
| data.conversation.participants | array<object> | No | Conversation participants. |
| data.conversation.unread_count | integer | No | Number of messages unread by the customer service agent. (e.g. 0) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
