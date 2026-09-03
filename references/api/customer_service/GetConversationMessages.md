---
title: GetConversationMessages
category: customer_service
api_name: GetConversationMessages
method: GET
path: /customer_service/202309/conversations/{conversation_id}/messages
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** customer_service
**API:** GetConversationMessages

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/customer_service/202309/conversations/{conversation_id}/messages

## API Description
Use this API to get all messages in a conversation between a buyer and a shop. Calling this API does not mark the messages as read. You are suggested to call [Read Message](650a59f7c16ffe02b8e8db3f) to mark the messages read.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| conversation_id (path) | string | Yes | Conversation ID |
| page_token (query) | string | No | Paging cursor, this means where this query should start. For the next page, use "next_page_token" in response. |
| page_size (query) | integer | Yes | Number of conversations in one page Max 10. |
| locale (query) | string | No | System message's display language. The messages sent by System will be returned in the setting language; The messages sent by the buyer, the shop, the CS agent will not be affected. The default value is en (English). Possible enumerations: - de-DE (German, Germany) - en (English) - en-GB (English, U |
| sort_order (query) | string | No | Sort order. Possible enumerations: - DESC(default) - ASC |
| sort_field (query) | string | No | Sort messages by one of the following properties: - `create_time` (default) - `index` |
| need_data (query) | boolean | No | Need message.data |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.messages | array<object> | No | Messages in conversation. |
| data.messages.sender.avatar | string | No | Sender's avatar URL. (e.g. https://p16-oec-ttp.tiktokcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/566c497faaaf4491a84d3ce55d9cb095~tplv-omjb5zjo8w-origin-image.image?) |
| data.messages.sender.im_user_id | string | No | Sender's ID. These are IM IDs, and can not be used to query orders. (e.g. 7494560109732334261) |
| data.messages.sender.nickname | string | No | Sender's nickname. - For shops, the nickname is the shop's name. - For customer service, the nickname is the customer service's name. - For buyers, the nickname is the buyer's nickname on TikTok. You can set the nicknames for shops and customer service agents on Seller Center. (e.g. Albert) |
| data.messages.sender.role | string | No | Sender's role. Possible enumerations: - `BUYER` - `SHOP` - `CUSTOMER_SERVICE` - `SYSTEM` - `ROBOT` For `SYSTEM` and `ROBOT` role, the value of `im_user_id`, `nickname`, and `avatar` are the same as those of the `SHOP` role. (e.g. BUYER) |
| data.next_page_token | string | No | The index indicates where we should start on the next page. If there is no more record, this field will be ""(empty string). Put this value to request param "page_token" for the next page query. (e.g. 162312320) |
| data.unsupported_msg_tips | string | No | If your app encounters a message type it doesn't support, you can display the text to guide the user to check the message in TikTok Shop. The content of the message depends on the specific `locale`. (e.g. Please check this message in Seller Center. ) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
