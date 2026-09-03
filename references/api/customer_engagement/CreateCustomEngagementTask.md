---
title: CreateCustomEngagementTask
category: customer_engagement
api_name: CreateCustomEngagementTask
method: POST
path: /customer_engagement/202502/engagement_tasks/custom
version: 202502
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** customer_engagement
**API:** CreateCustomEngagementTask

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/customer_engagement/202502/engagement_tasks/custom

## API Description
Create an engagement task that uses a self-defined custom message instead of predefined message templates from TikTok Shop. The task acts as a container for grouping messages with similar content and rules, allowing sellers to track and compare task performance across different types of content. Note that each task has a mandatory end time, and once expired, it cannot be used to send additional messages.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| idempotency_key (query) | string | Yes | A unique key to recognize a request and prevent duplicate processing of the same request, especially in cases of connection issues. Ensure this key is unique for each request to avoid accidental duplicates. Note: We recommend that you generate v4 UUIDs for use as keys. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| channel | string | No | The engagement channel. Only `TIKTOK_IM` is supported. (e.g. TIKTOK_IM) |
| coupon_ids | array<string> | No | The coupon IDs that you want to include as interactive cards in the message. Max count: 1 You can only add coupons that have one of these sets of property: - `coupons.display_type=REGULAR` and `coupons.target_buyer_segment=ALL` - `coupons.display_type=REGULAR` and `coupons.target_buyer_segment=REPEAT_CUSTOMERS`. Find out the coupon ID and properties from the [Search Coupons API](https://partner.tiktokshop.com/docv2/page/6699dcdf115ebe02f841e4cd). |
| custom_message | object | No | The custom message to send to customers. |
| custom_message.body | string | No | The message body. - Valid format: plain text, unicode emoji (UTF-8) - Valid length: [1, 500] (e.g. Message body) |
| custom_message.title | string | No | The message title. - Valid format: plain text, unicode emoji (UTF-8) - Valid length: [1, 70] (e.g. Message title ) |
| end_time | integer | No | The time at which the task ends, and messages will no longer be sent. Unix timestamp (seconds). (e.g. 1744344885) |
| product_ids | array<string> | No | The product IDs that you want to include as interactive cards in the message. Retrieve this value from the [Search Products API](https://partner.tiktokshop.com/docv2/page/65854ffb8f559302d8a6acda). Max count: 4 |
| task_name | string | No | The name of the task. (e.g. Task1 for mega sale ) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.task_id | string | No | The unique identifier for the customer engagement task. Pass this value in the [Send Engagement Message API](67777e448e882e030d29676e) to associate the task with the message sending operation. (e.g. 475910475643) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
