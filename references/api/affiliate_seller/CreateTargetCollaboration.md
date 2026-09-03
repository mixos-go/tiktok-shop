---
title: CreateTargetCollaboration
category: affiliate_seller
api_name: CreateTargetCollaboration
method: POST
path: /affiliate_seller/202508/target_collaborations
version: 202508
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** CreateTargetCollaboration

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202508/target_collaborations

## API Description
This API is used to create a target collaboration. A target collaboration is a collaboration between a seller selected set of products (including a commission payout) and a set of creators the seller has added (invited) to the collaboration. Target collaborations are private and not visible in the Creator Marketplace to all creators; they are only visible to those that have been added to the collaboration.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| creator_user_open_ids | array<string> | No | Maximum length of the list is `50` user open identifiers. Creator Open ID. [More details](https://partner.tiktokshop.com/docv2/page/3obfokj6) |
| end_time | string | No | The date at which the target collaboration ends, in Unix epoch time. (e.g. 1715654330) |
| free_sample_rule | object | No | A set of properties that control the free sample behavior for the product. |
| free_sample_rule.has_free_sample | boolean | No | If set to `true`, free samples are provided to creators invited to the target collaboration group. If set to `false`, free samples are not provided. (e.g. True) |
| free_sample_rule.is_sample_approval_exempt | boolean | No | If set to `true`, creators invited to the target collaboration are exempt from seller review and are automatically approved for a free product sample. Note that the `has_free_sample` property overrides the free sample behavior. (e.g. True) |
| message | string | No | The message sent to creators associated with the target collaboration. (e.g. this is a message) |
| name | string | No | The name of the target collaboration. (e.g. openapi_test) |
| products | array<object> | No | A list of metadata and data for the products provided by the seller for target collaboration. Maximum length of the list is `100` products. |
| seller_contact_info | object | No | Metadata and data associated with the seller contact information. |
| seller_contact_info.email | string | No | The seller's email address. (e.g. test@tiktokshop.com) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.target_collaboration | object | No | The target collaboration. |
| data.target_collaboration.id | string | No | The target collaboration identifier. (e.g. 7365861555575916210) |
| data.target_collaboration_conflicts | array<object> | No | A list of user and product identifiers with target collaboration conflicts that caused target collaboration failure. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
