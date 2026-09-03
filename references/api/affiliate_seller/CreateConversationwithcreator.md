---
title: CreateConversationwithcreator
category: affiliate_seller
api_name: CreateConversationwithcreator
method: POST
path: /affiliate_seller/202508/conversations
version: 202508
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** CreateConversationwithcreator

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202508/conversations

## API Description
Get the existing conversation or create a new conversation with the specified TikTok creator for later communication.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| creator_open_id | string | No | Creator Open ID. [More details](https://partner.tiktokshop.com/docv2/page/3obfokj6) (e.g. uACafQAAAABmUU2qon4R0vUYvUVS3QC6CICP2m5A2-wd77j8R9G0yg) |
| only_need_conversation_id | boolean | No | - If `true`, only `conversation_id` in `data.conversation` is returned. - If `false`, all fields in `data.conversation` are returned. `true` by default. (e.g. True) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.avatar | string | No | The URL for the TikTok creator's avatar image file. (e.g. https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/2bf6a2485ec8bf93483e4a6ed907e6fd~c5_720x720.webp) |
| data.conversation_id | string | No | Conversion unique id. (e.g. 1234567890) |
| data.creator_im_id | string | No | Creators' IM User ID. (e.g. 12345678) |
| data.is_new | boolean | No | Is it a new conversion or not. (e.g. True) |
| data.unread_count | integer | No | Number of messages unread by the shop. (e.g. 2) |
| data.username | string | No | The TikTok creator's name. (e.g. test_creator_name) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
