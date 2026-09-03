---
title: GetCreatorProfileold
category: affiliate
api_name: GetCreatorProfileold
method: GET
path: /affiliate/202309/profiles
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate
**API:** GetCreatorProfileold

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate/202309/profiles

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
| data.avatar | object | No | The avatar image |
| data.avatar.height | integer | No | The image height in pixels (e.g. 100) |
| data.avatar.url | string | No | The image's URL (e.g. https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/d76b8cc1b598de90ad5048df46e672b3~c5_100x100.webp?x-expires=1691895600&x-signature=oAT9KOL7aCN3Did9U%2FoKEsbBDj0%3D) |
| data.avatar.width | integer | No | The image width in pixels (e.g. 100) |
| data.partner_id | string | No | The creator's bound partner's ID (e.g. 789078671231) |
| data.partner_name | string | No | The creator's bound partner's name (e.g. Gift store) |
| data.permissions | array<string> | No | The creator's granted permissions |
| data.register_region | string | No | The creator's register region (e.g. US) |
| data.selection_region | string | No | Represents the regions in which creators can promote products in their showcases, videos, and live streams. (e.g. US) |
| data.seller_type | string | No | The creator's seller type if a creator has linked to a TikTok seller (e.g. LOCAL) |
| data.user_name | string | No | The creator's username in TikTok App Profile page, like creator_abc123 (e.g. abc123) |
| data.user_type | string | No | The creator's user type (e.g. MERCHANT_ACCOUNT) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
