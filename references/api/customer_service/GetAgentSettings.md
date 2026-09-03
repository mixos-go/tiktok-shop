---
title: GetAgentSettings
category: customer_service
api_name: GetAgentSettings
method: GET
path: /customer_service/202309/agents/settings
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** customer_service
**API:** GetAgentSettings

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/customer_service/202309/agents/settings

## API Description
This API is used to get agent settings. This API allows the agent to see whether the agent can accept chats from buyers. This API is a read-only endpoint. There will be no side effects, and can be retried safely. Note: 1. The current API version can only get settings on behalf of the shop, or the owner account holder on Seller Center. The owner in this case is acting as the customer service agent. In the future, we plan to make this API available to subaccount holders (who has customer service role) in Seller Center. 2. This API is to allow the agent to get his/her own setting. See more information in API overview

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
| data.can_accept_chat | boolean | No | Whether the current agent can accept chat. If true, the agent will receive auto-assigned chats. The agent can manually select chats to respond. If false, the agent will receive manually assigned chats only. (e.g. True) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
