---
title: GetMessageintheConversation
category: affiliate_seller
api_name: GetMessageintheConversation
method: GET
path: /affiliate_seller/202412/conversation/{conversation_id}/messages
version: 202412
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** GetMessageintheConversation

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202412/conversation/{conversation_id}/messages

## API Description
Get chat history in one conversation.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| conversation_id (path) | string | Yes | The conversation identifier. |
| page_size (query) | integer | Yes | The maximum number of queries. The maximum number is 20. |
| page_token (query) | string | No | Pagination offset determines where you begin to query. It's empty when you raise your first request. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.has_more | boolean | No | Whether there are any more messages. (e.g. True) |
| data.messages | array<object> | No |  |
| data.messages.message_body.content | string | No | Message content, in JSON serialized string. - TEXT: {"content": "simple text"} - PRODUCT_CARD: {"product_id": "12345"} - TARGET_INVITATION_CARD {"invitation_group_id": "1234"} - FREE_SAMPLE_CARD {"apply_id": "1234"} - IMAGE: { "height": "290", "url": "https://tosv.boei18n.byted.org/obj/temai-im/FszkJ53nSapYG6KDaJQmqR3jjoZGwww304-290", "width": "304" } - CRM_TEXT_WITH_IMAGE_CARD { "title":"abc", "content":"efg", "url":"https://tosv.boei18n.byted.org/obj/temai-im/FszkJ53nSapYG6KDaJQmqR3jjoZGwww304-290" } - CRM_TEXT_WITH_PRODUCTS_CARD { "title":"abc", "content":"efg", "productIds":[123,456,789,222] } - NOTIFICATION,SYSTEM {"content": "notification/system message"} - EMOTICONS { "height": "110", "url": "https://tosv.boei18n.byted.org/obj/temai-im/FszkJ53nSapYG6KDaJQmqR3jjoZGwww304-290", "width": "110" } (e.g. {"content": "simple text message"}) |
| data.messages.message_body.conversation_id | string | No | Conversation ID to which the message belongs. (e.g. 7451873679308620048) |
| data.messages.message_body.create_time | integer | No | Message creation time, represented as a Unix timestamp (seconds). (e.g. 1691411573) |
| data.messages.message_body.id | string | No | Message ID. (e.g. 7451907556216407553) |
| data.messages.message_body.sender_id | string | No | The message sender im id (e.g. 2368694990397660924) |
| data.messages.message_body.type | string | No | Message type, with possible values: - TEXT - PRODUCT_CARD - TARGET_COLLABORATION_CARD - FREE_SAMPLE_CARD - IMAGE - CRM_TEXT_WITH_IMAGE_CARD - CRM_TEXT_WITH_PRODUCTS_CARD - NOTIFICATION - EMOTICONS - SYSTEM The response's message type support more type.Especially image, crm card,notification,emoticons and system. (e.g. TEXT) |
| data.next_page_token | string | No | Cursor for the next page request. (e.g. b2Zmc2V0PTAK) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
