---
title: SendMessage
category: customer_service
api_name: SendMessage
method: POST
path: /customer_service/202309/conversations/{conversation_id}/messages
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** customer_service
**API:** SendMessage

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/customer_service/202309/conversations/{conversation_id}/messages

## API Description
Use this API to send a message to the buyer in a conversation.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| conversation_id (path) | string | Yes | Conversation ID |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| content | string | No | Message content, in JSON serialized string. Examples of content for each type of message are listed below: ​ - TEXT: { "content": "hi, I want to get refunded." } (Note: Max 2000 characters. Do not use sensitive words that violate TikTok Shop terms & policies.) - VIDEO { "vid": "v10394g5000cd499vc7og65mqn3r3dg0" } - LOGISTICS_CARD { "order_id": "580874485811283206", "package_id": "123456" // Optional (recommended for one order with multiple packages; not required for one order with one package) } ​ - PRODUCT_CARD { "product_id": "7494560109732334265" } ​ - ORDER_CARD: { "order_id": "7494560109732334267" } - RETURN_REFUND_CARD: { "order_id": "7494560109732334267", "sku_id": "7494560109732363423" } Note: The order of the RETURN_REFUND_CARD to send must meet after-sale conditions. To check the eligibility, use [Get Aftersale Eligibility](650ab645c16ffe02b8f2e1c1). ​ - IMAGE: { "url":"https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/2ca53c34ad8443e6b39f4e0153d3aed4~tplv-o3syd03w52-origin-image.image?from=1320446476", "width": 1280, "height": 720 } Note: You can get the value of `url` by calling [Upload Buyer Messages Image](650a599d0fcef602bf2a1dc8). - COUPON_CARD: { "coupon_id": "7262992004278206762" } Note: Coupons that can be sent in a message must meet all the following conditions: 1. `display_type==CHAT` or `display_type==REGULAR` 2. `status==ONGOING` 3. `creation_source==SELLER_CENTER` 4. `target_buyer_segment!=REPEAT_CUSTOMERS` (e.g. {"content": "test"}) |
| type | string | No | Message type. Possible enumerations: - `TEXT` - `IMAGE` - `VIDEO` - `PRODUCT_CARD` - `ORDER_CARD` - `RETURN_REFUND_CARD` - `COUPON_CARD` - `LOGISTICS_CARD` (e.g. TEXT) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.message_id | string | No | Message ID (e.g. 7494560109732334261) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
