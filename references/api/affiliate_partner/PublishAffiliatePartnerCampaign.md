---
title: PublishAffiliatePartnerCampaign
category: affiliate_partner
api_name: PublishAffiliatePartnerCampaign
method: POST
path: /affiliate_partner/202405/campaigns/{campaign_id}/publish
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_partner
**API:** PublishAffiliatePartnerCampaign

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_partner/202405/campaigns/{campaign_id}/publish

## API Description
This API offers the ability to publish an Affiliate Partner campaign. The campaign will be displayed to sellers after publishing.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| campaign_id (path) | string | Yes | The campaign identifier. |
| category_asset_cipher (query) | string | Yes | The partner identifier used in API requests. Retrieve this value by using the [Get Authorized Category Assets API] (https://partner.tiktokshop.com/docv2/page/666012dd609d4402cc3be995). |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
