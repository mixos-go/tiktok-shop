---
title: RemoveTargetCollaboration
category: affiliate_seller
api_name: RemoveTargetCollaboration
method: DELETE
path: /affiliate_seller/202409/target_collaborations/{target_collaboration_id}
version: 202409
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** RemoveTargetCollaboration

**Method:** DELETE
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202409/target_collaborations/{target_collaboration_id}

## API Description
This API is used by Seller to remove affiliate target collaboration.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| target_collaboration_id (path) | string | Yes | The unique id of the specified target collaboration. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
