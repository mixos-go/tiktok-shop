---
title: SendEngagementMessage
category: customer_engagement
api_name: SendEngagementMessage
method: POST
path: /customer_engagement/202412/messages
version: 202412
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** customer_engagement
**API:** SendEngagementMessage

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/customer_engagement/202412/messages

## API Description
Send messages to specific customers for a particular engagement task.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| buyer_emails | array<string> | No | The anonymized email address of the buyer. Retrieve this value from the [Get Order Details API](650aa8ccc16ffe02b8f167a0). **Note**: You can only send messages to buyers who have placed at least one order with the shop in the past 365 days. |
| task_id | string | No | The ID of the associated customer engagement task. Use the value returned when you call the [Create Engagement Task API](67777e436b61b002f60f01da). **Note**: Ensure the task is still active. You cannot send messages to tasks that have ended. (e.g. [1381478460934]) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | The list of errors that occurred. |
| data.errors.detail.buyer_email | string | No | The list of buyer email addresses where message delivery failed. (e.g. v4b1232DOUSGKQQ7YLNEMPPEPBORFEQ2A@scs.tiktokw.us) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
