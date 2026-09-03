---
title: GenerateAffiliatePartnerCampaignProductLink
category: affiliate_partner
api_name: GenerateAffiliatePartnerCampaignProductLink
method: POST
path: /affiliate_partner/202405/campaigns/{campaign_id}/products/{product_id}/promotion_link/generate
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_partner
**API:** GenerateAffiliatePartnerCampaignProductLink

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_partner/202405/campaigns/{campaign_id}/products/{product_id}/promotion_link/generate

## API Description
This API offers the ability to generate campaign product promotion links.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| campaign_id (path) | string | Yes | The ID of the campaign. |
| product_id (path) | string | Yes | The ID of the product. |
| category_asset_cipher (query) | string | Yes | The partner identifier used in API requests. Retrieve this value by using the [Get Authorized Category Assets API] (https://partner.tiktokshop.com/docv2/page/666012dd609d4402cc3be995). |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| creator_commission_rate | integer | No | The commission rate paid to a creator in hundredths of a percent (0.01%). The commission rate must be lower than or equal to the total commission rate set by the seller. (e.g. 1000) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.product_promotion_link | string | No | A URL for product promotion content. This URL is provided to agencies for sharing with colloborating creators. Creators share this link with followers via the TikTok App. Note that creators control whether or not to add products to their showcase in the pop-up window. (e.g. https://affiliate.tiktok.com/api/v1/share/AIxvOHlaJoKO) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
