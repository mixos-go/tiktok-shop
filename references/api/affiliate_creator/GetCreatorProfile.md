---
title: GetCreatorProfile
category: affiliate_creator
api_name: GetCreatorProfile
method: GET
path: /affiliate_creator/202508/profiles
version: 202508
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_creator
**API:** GetCreatorProfile

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_creator/202508/profiles

## API Description
This API gets the creator profile information.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.avatar | object | No | Data associated with the TikTok creator's profile avatar. |
| data.avatar.height | integer | No | The avatar image height in pixels. (e.g. 100) |
| data.avatar.url | string | No | The URL for the TikTok creator's avatar image file. (e.g. https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d76b8cc1b598de90ad5048df46e672b3~c5_100x100.webp?x-expires=1691895600&x-signature=oAT9KOL7aCN3Did9U%2FoKEsbBDj0%3D) |
| data.avatar.width | integer | No | The avatar image width in pixels. (e.g. 100) |
| data.creator_user_open_id | string | No | Creator Open ID. [More details](https://partner.tiktokshop.com/docv2/page/3obfokj6) (e.g. uACafQAAAABmUU2qon4R0vUYvUVS3QC6CICP2m5A2-wd77j8R9G0yg) |
| data.permissions | array<string> | No | A list of product promotion permissions for the creator. The list can include zero or more of the following permissions: - LIVE_STREAM_PERMISSION - SELF_SALE_PERMISSION - ADD_AFFILIATE_PERMISSION |
| data.register_region | string | No | The region in which the creator's TikTok account is registered. (e.g. US) |
| data.selection_region | string | No | The regions in which the creator is eligible to promote products in showcases, videos, and live streams. (e.g. US) |
| data.seller_type | string | No | If the creator is also also has a TikTok Shop seller account, the seller type of the creator. This is an enumerated type with values: - CROSS_BORDER - LOCAL (e.g. LOCAL) |
| data.user_type | string | No | The creator's user type. This is an enumerated type with values: - TIKTOK_SHOP_OFFICIAL_ACCOUNT - TIKTOK_MARKETING_ACCOUNT - TIKTOK_SHOP_CREATOR (e.g. TIKTOK_SHOP_OFFICIAL_ACCOUNT) |
| data.username | string | No | The TikTok user name. (e.g. abc123) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
