---
title: GetConversations
category: customer_service
api_name: GetConversations
method: GET
path: /customer_service/202309/conversations
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** customer_service
**API:** GetConversations

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/customer_service/202309/conversations

## API Description
Use this API to retrieve a shop's conversations with buyers.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_token (query) | string | No | Paging cursor, this means where this query should start. For the next page, use "next_page_token" in response. |
| page_size (query) | integer | Yes | Number of conversations on one page Max 20. |
| locale (query) | string | No | System message's display language. The messages sent by System will be returned in the setting language; The messages sent by the buyer, the shop, the CS agent will not be affected. The default value is en (English). Possible enumerations: - de-DE (German, Germany) - en (English) - en-GB (English, U |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.conversations | array<object> | No | Conversation info. |
| data.conversations.latest_message.content | string | No | Message content, in JSON serialized string. Examples of content for each type of message are listed below: - TEXT: ``` { "content": "simple text" } ``` - IMAGE: ``` { "height": "290", "url": "https://tosv.boei18n.byted.org/obj/temai-im/FszkJ53nSapYG6KDaJQmqR3jjoZGwww304-290", "width": "304" } ``` - PRODUCT_CARD, BUYER_ENTER_FROM_PRODUCT: ``` { "product_id": "12345" } ``` - ORDER_CARD, BUYER_ENTER_FROM_ORDER : ``` { "order_id": "12345" } ``` - RETURN_REFUND_CARD: ``` { "order_id": "12345", "sku_id": "45678" } ``` - VIDEO: ``` { "url": "https://video-boei18n.byted.org/storage/v1/tos-boei18n-v-c72c01/e8240f35244646428df9c3244d1a7408?x-tos-algorithm=v2&x-tos-authkey=5bf25627da095a5cba28ace592de46cc&x-tos-expires=1681980481&x-tos-signature=r_bRxtrvGhXAuZgMmNhlZ_Upqzg", "cover": "https://p-boei18n.byted.org/tos-boei18n-v-c72c01/o8keEOhzTcNCcJyAbkWZwpLIyTfkJxcGbRBvLP~tplv-jvtte31kaf-origin-jpeg.jpeg?", "width": 640, "height": 360, "duration": "20.504", "vid": "v0e30cg700f7cgcmu8jc77u9e2bdp95g", "expire_time": "1681980481", "format": "mp4", "size": 400000, "bit_rate": 156067, "quality": "original", "codec_type": "h264" } ``` - ALLOCATED_SERVICE, NOTIFICATION, BUYER_ENTER_FROM_TRANSFER, OTHER: ``` { "content": "simple text" } ``` - COUPON_CARD: ``` { "coupon_id": "7262992004278206762" } ``` Note: Use [Get Coupon](6699dce0de15e502ed219e37) for the details of the coupon. (e.g. {"content": "simple text message"}) |
| data.conversations.latest_message.create_time | integer | No | Unix timestamp for creating the message in seconds. (e.g. 1691411573) |
| data.conversations.latest_message.id | string | No | Message ID. (e.g. 7494560109732334263) |
| data.conversations.latest_message.index | string | No | Message index. This field can be used to sort messages. "index" means the order of the message in the conversation. This value is unique for every message in a conversation. This value is time-related, meaning a newer message will get a larger "index". But it is not strictly increasing. (e.g. 7494560109732334274) |
| data.conversations.latest_message.is_visible | boolean | No | Whether this message should be displayed to customer service. For example, the buyer will receive a rating request message at the end of the conversation from the system. You should not present this type of message to the seller or the customer support agents. (e.g. True) |
| data.conversations.latest_message.sender | object | No | Sender of the message. |
| data.conversations.latest_message.sender.avatar | string | No | Sender's avatar URL. (e.g. https://p16-oec-ttp.tiktokcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/566c497faaaf4491a84d3ce55d9cb095~tplv-omjb5zjo8w-origin-image.image?) |
| data.conversations.latest_message.sender.im_user_id | string | No | Sender's IM ID. Sender's unique identifier in TikTok Shop's IM system. (e.g. 7494560109732334261) |
| data.conversations.latest_message.sender.nickname | string | No | Sender's nickname. - For shops, the nickname is the shop's name. - For customer service, the nickname is the customer service's name. - For buyers, the nickname is the buyer's nickname on TikTok. You can set the nicknames for shops and customer service agents on Seller Center. (e.g. Albert) |
| data.conversations.latest_message.sender.role | string | No | Sender's role. Possible enumerations: - `BUYER` - `SHOP` - `CUSTOMER_SERVICE` - `SYSTEM` - `ROBOT` For `SYSTEM` and `ROBOT` role, the value of `im_user_id`, `nickname`, and `avatar` are the same as those of the `SHOP` role. (e.g. BUYER) |
| data.conversations.latest_message.type | string | No | Message type. Possible enumerations: - TEXT - IMAGE - ALLOCATED_SERVICE - A customer service agent joins the conversation. - NOTIFICATION - Notification from the system. - BUYER_ENTER_FROM_TRANSFER : The conversation is transferred to another customer service agent. - BUYER_ENTER_FROM_PRODUCT : The buyer is viewing a product before sending this message. - BUYER_ENTER_FROM_ORDER : The buyer is viewing an order before sending this message. - PRODUCT_CARD - EMOTICONS - ORDER_CARD - VIDEO - RETURN_REFUND_CARD: Return/refund card. - COUPON_CARD - OTHER: Messages of types not supported in this API. (e.g. TEXT) |
| data.next_page_token | string | No | The index indicates where we should start on the next page. If there is no more record, this field will be ""(empty string). Put this value to request param "page_token" for the next page query. (e.g. 1612353423) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
