---
title: GetOpenCollaborationCreatorContentDetail
category: affiliate_seller
api_name: GetOpenCollaborationCreatorContentDetail
method: GET
path: /affiliate_seller/202508/open_collaborations/creator_content_details
version: 202508
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** GetOpenCollaborationCreatorContentDetail

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202508/open_collaborations/creator_content_details

## API Description
This API allows the seller to get the creator content details of specified open collaboration.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_token (query) | string | No | Pagination offset determines where you begin to search for. It's empty when you raise your first request. |
| page_size (query) | integer | Yes | The value of "page_size" must be greater than 0 and less than or equal to 100. |
| product_id (query) | string | Yes | The product ID that needs to be queried. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.creator_content_details | array<object> | No | Creators' posting content details. |
| data.creator_content_details.creator_profile.avatar | object | No | The creator's avatar details. |
| data.creator_content_details.creator_profile.avatar.url | string | No | The url of the creator's avatar. (e.g. https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/fa0387fa5a204dcfa44d5be75877a163~tplv-o3syd03w52-origin-webp.webp?from=3478900499) |
| data.creator_content_details.creator_profile.creator_open_id | string | No | Creator Open ID. [More details](https://partner.tiktokshop.com/docv2/page/3obfokj6) (e.g. uACafQAAAABmUU2qon4R0vUYvUVS3QC6CICP2m5A2-wd77j8R9G0yg) |
| data.creator_content_details.creator_profile.follower_count | integer | No | Number of followers of the creator. (e.g. 10023) |
| data.creator_content_details.creator_profile.nickname | string | No | The creator's nickname. (e.g. nickname) |
| data.creator_content_details.creator_profile.username | string | No | The creator's username. (e.g. example_creator) |
| data.next_page_token | string | No | Next page token (e.g. b2Zmc2V0PTEw) |
| data.product | object | No | Product details. |
| data.product.id | string | No | Product's unique id. (e.g. 1734823553672710512) |
| data.product.image_url | string | No | The product image url. (e.g. https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/fa0387fa5a204dcfa44d5be75877a163~tplv-o3syd03w52-origin-webp.webp?from=3478900499) |
| data.total_count | integer | No | Total count of creators that satisfy all the input search conditions. (e.g. 1) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
