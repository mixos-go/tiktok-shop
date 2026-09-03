---
title: CreateConversation
category: customer_service
api_name: CreateConversation
method: POST
path: /customer_service/202309/conversations
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** customer_service
**API:** CreateConversation

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/customer_service/202309/conversations

## API Description
Use this API to create a conversation with the specified buyer, on behalf of a shop. When there's no prior conversation, calling this API creates a new conversation; when there's a prior conversation, no matter whether it's active, finished, or closed, calling this API reopens the conversation and returns the same conversation ID as the prior one.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| buyer_user_id | string | No | Buyer's user ID The value is the same as `data.orders.user_id` in the response data of [Get Order Detail](650aa8ccc16ffe02b8f167a0). (e.g. 7494560109732338459) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.conversation_id | string | No | Converstaion ID. The unique identifier for a conversation between the buyer and a shop. (e.g. 7106888323922608389) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
