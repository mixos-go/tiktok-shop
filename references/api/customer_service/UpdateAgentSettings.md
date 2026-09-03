---
title: UpdateAgentSettings
category: customer_service
api_name: UpdateAgentSettings
method: PUT
path: /customer_service/202309/agents/settings
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** customer_service
**API:** UpdateAgentSettings

**Method:** PUT
**HTTP Path:** https://open-api.tiktokglobalshop.com/customer_service/202309/agents/settings

## API Description
Use this API to update agent status on behalf of the agent. Agents can set whether they can accept auto assigned chats. Before using API, we recommend setting can_accept_chat to true, in order to accept chats. Note: 1. The current API version can only update settings on behalf of the shop, or the owner account holder on Seller Center. The owner in this case is acting as the customer service agent. In the future, we plan to make this API available to subaccount holders (who has customer service role) in Seller Center. 2. This API is to allow the agent to update their own setting. See more information in API overview

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| can_accept_chat | boolean | No | If true, the agent will receive auto-assigned chats. The agent can manually select chats to respond. If false, the agent will receive manually assigned chats only. When using IM API, we recommend setting this field to true. (e.g. True) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
