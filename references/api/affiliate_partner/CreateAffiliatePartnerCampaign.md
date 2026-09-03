---
title: CreateAffiliatePartnerCampaign
category: affiliate_partner
api_name: CreateAffiliatePartnerCampaign
method: POST
path: /affiliate_partner/202405/campaigns
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_partner
**API:** CreateAffiliatePartnerCampaign

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_partner/202405/campaigns

## API Description
This API offers the ability to create a campaign for targeted sellers/public sellers, including campaign period, campaign registration period and commission requirements. Note: The campaign will not be displayed to sellers after creation

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| category_asset_cipher (query) | string | Yes | The partner identifier used in API requests. Retrieve this value by using the [Get Authorized Category Assets API] (https://partner.tiktokshop.com/docv2/page/666012dd609d4402cc3be995). |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| campaign_end_time | integer | No | The scheduled end time in Unix epoch time format for the campaign. Note that the end time must be less than 360 days from the start date. This field is no longer editable when the campaign status is set to `CLOSED`. (e.g. 1715878799) |
| campaign_start_time | integer | No | The scheduled start time in Unix epoch time format for the campaign. Note that this field can be updated when the campaign status is set to `READY` or `UPCOMING` only. (e.g. 1712941200) |
| commission_rate | integer | No | The total commission rate in hundredths of a percent (0.01%) units proposed by the affiliate partner for display to sellers. Commission rate must be greater than 100 and less than 8000. (e.g. 1000) |
| contact_info | object | No | The partner's contact information. |
| contact_info.email | string | No | The partner's email address. (e.g. 123456@gmail.com) |
| contact_info.line | string | No | The partner's phone number registered in LINE. Required if the target market is TH; otherwise, not applicable. (e.g. +14255550100) |
| contact_info.phone | string | No | The partner's phone number. (e.g. +14255550100) |
| contact_info.viber | string | No | The partner's phone number registered in Viber. Required if the target market is PH; otherwise, not applicable. (e.g. +14255550100) |
| contact_info.whatsapp | string | No | The partner's phone number registered in WhatsApp. Required if the target market is MY, SG, GB, or ID, optional if the target market is US; otherwise, not applicable. (e.g. +14255550100) |
| contact_info.zalo | string | No | The partner's phone number registered in Zalo. Required if the target market is VN; otherwise, not applicable. (e.g. +14255550100) |
| description | string | No | The campaign description. The campaign description must be less than 1000 characters. (e.g. campaign for test) |
| name | string | No | The campaign name. The campaign name must be less than 50 characters. (e.g. my first campaign) |
| registration_end_time | integer | No | The scheduled end time in Unix epoch time format for seller product registration. This field is no longer editable when the campaign status is set to `CLOSED`. (e.g. 1713891599) |
| registration_start_time | integer | No | The scheduled start time in Unix epoch format for seller product registration. Note that this field can be updated when the campaign status is set to `READY` or `UPCOMING` only. (e.g. 1712941200) |
| target_seller_types | array<string> | No | A list of eligible seller types to allow to register for the campaign. Use this field to broadly target types of sellers instead of specific sellers in the `target_shop_codes` field. This is an enumerated type with possible values: - LOCAL - CROSS_BORDER |
| target_shop_codes | array<string> | No | A list of TikTok Shop seller shop codes to allow to register for the campaign. The seller shop code in available in TikTok Shop Seller Central by clicking on the Seller Profile icon in the top right of the user interface. The list must be less than 100 items in length. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.campaign_id | string | No | The campaign identifier. (e.g. 7356411663443183367) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
