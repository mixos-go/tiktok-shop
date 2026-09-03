---
title: RemoveCreatorFromOpenCollaboration
category: affiliate_seller
api_name: RemoveCreatorFromOpenCollaboration
method: POST
path: /affiliate_seller/202508/open_collaborations/{open_collaboration_id}/remove_creator
version: 202508
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** RemoveCreatorFromOpenCollaboration

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202508/open_collaborations/{open_collaboration_id}/remove_creator

## API Description
This API is used to remove creators from open collaboration. Please note, due to current platform design, creators can still rejoin an open collaboration after removal. Partners/Sellers can call this API again to remove the creator again.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| open_collaboration_id (path) | string | Yes | Open collaboration ID. This API is only applicable to the seller removing creators from open collaboration. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| creator_user_open_id | string | No | Creator Open ID. [More details](https://partner.tiktokshop.com/docv2/page/3obfokj6) (e.g. uACafQAAAABmUU2qon4R0vUYvUVS3QC6CICP2m5A2-wd77j8R9G0yg) |
| product_id | string | No | The product identifier. (e.g. 789078671231) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
