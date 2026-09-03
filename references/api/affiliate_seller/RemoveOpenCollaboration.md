---
title: RemoveOpenCollaboration
category: affiliate_seller
api_name: RemoveOpenCollaboration
method: DELETE
path: /affiliate_seller/202409/open_collaborations/products/{product_id}
version: 202409
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** RemoveOpenCollaboration

**Method:** DELETE
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202409/open_collaborations/products/{product_id}

## API Description
Remove open collaboration for product. You can only remove open collaboration when `status==NORMAL`. When you call this API, the open collaborations will be terminated at `terminated_effective_time`, not immediately, to protect the interests of the creators. After `terminated_effective_time`, the open collaboration is officially terminated and can not be found in the response in [Search Open Collaboration].

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_id (path) | string | Yes | The product id of the open collaboration to be terminated |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.terminated_effective_time | integer | No | The effective time of open collaboration termination. Usually it's 00:00 tomorrow. (e.g. 1725334422) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
