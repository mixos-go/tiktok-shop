---
title: GetAffiliatePartnerCampaignDetail
category: affiliate_partner
api_name: GetAffiliatePartnerCampaignDetail
method: GET
path: /affiliate_partner/202405/campaigns/{campaign_id}
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_partner
**API:** GetAffiliatePartnerCampaignDetail

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_partner/202405/campaigns/{campaign_id}

## API Description
This API offers the ability to get affiliate campaign details.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| campaign_id (path) | string | Yes | The ID of the campaign. |
| category_asset_cipher (query) | string | Yes | The partner identifier used in API requests. Retrieve this value by using the [Get Authorized Category Assets API] (https://partner.tiktokshop.com/docv2/page/666012dd609d4402cc3be995). |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.campaign_end_time | integer | No | The scheduled end time in Unix epoch time format for the campaign. Note that the end time must be less than 360 days from the start date. This field is no longer editable when the campaign status is set to `CLOSED`. (e.g. 1715878799) |
| data.campaign_start_time | integer | No | The scheduled start time in Unix epoch time format for the campaign. Note that this field can be updated when the campaign status is set to `READY` or `UPCOMING` only. (e.g. 1712941200) |
| data.commission_rate | integer | No | The total commission rate in hundredths of a percent (0.01%) units proposed by the affiliate partner for display to sellers. Commission rate must be greater than 100 and less than 8000. (e.g. 1000) |
| data.contact_info | object | No | The campaign creator's contact information. |
| data.contact_info.email | string | No | Email (e.g. 123456@gmail.com) |
| data.contact_info.line | string | No | Line account number (e.g. +14255550100) |
| data.contact_info.phone | string | No | Phone number (e.g. +14255550100) |
| data.contact_info.viber | string | No | Viber account number (e.g. +14255550100) |
| data.contact_info.whatsapp | string | No | WhatsApp account number (e.g. +14255550100) |
| data.contact_info.zalo | string | No | Zalo account number (e.g. +14255550100) |
| data.description | string | No | The campaign description. The campaign description must be less than 1000 characters. (e.g. Campaign for api test.) |
| data.id | string | No | The campaign identifier. (e.g. 7356876895365105455) |
| data.name | string | No | The campaign name. The campaign name must be less than 50 characters. (e.g. test_campaign) |
| data.region | string | No | The region to which the campaign is associated. (e.g. US) |
| data.registration_end_time | integer | No | The scheduled end time in Unix epoch time format for seller product registration. This field is no longer editable when the campaign status is set to `CLOSED`. (e.g. 1713891599) |
| data.registration_start_time | integer | No | The scheduled start time in Unix epoch format for seller product registration. Note that this field can be updated when the campaign status is set to `READY` or `UPCOMING` only. (e.g. 1712941200) |
| data.status | string | No | The campaign status. The status is an enumerated type with values: - READY - UPCOMING - ONGOING - CLOSED (e.g. READY) |
| data.target_seller_types | array<string> | No | A list of eligible seller types to allow to register for the campaign. Use this field to broadly target types of sellers instead of specific sellers in the `target_shop_codes` field. This is an enumerated type with possible values: - LOCAL - CROSS_BORDER |
| data.target_shops | array<object> | No | A list of TikTok Shop seller shop codes and names with permission to register for the campaign. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
