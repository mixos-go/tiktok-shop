---
title: ReviewAffiliatePartnerCampaignProduct
category: affiliate_partner
api_name: ReviewAffiliatePartnerCampaignProduct
method: POST
path: /affiliate_partner/202405/campaigns/{campaign_id}/products/{product_id}/review
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_partner
**API:** ReviewAffiliatePartnerCampaignProduct

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_partner/202405/campaigns/{campaign_id}/products/{product_id}/review

## API Description
This API offers the ability for the TikTok Affiliate Partner to review the products submitted by the sellers. This API offers the ability for the TikTok Affiliate Partner to review the products submitted by the sellers.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| campaign_id (path) | string | Yes | The campaign identifier. |
| product_id (path) | string | Yes | The product identifier. |
| category_asset_cipher (query) | string | Yes | The partner identifier used in API requests. Retrieve this value by using the [Get Authorized Category Assets API] (https://partner.tiktokshop.com/docv2/page/666012dd609d4402cc3be995). |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| reject_reasons | array<string> | No | If the `review_result` property is set to `REJECT` or `REJECT_FOREVER`, this property is set to the enumerated reason that the TikTok Affiliate Partner rejected the product. This is an enumerated type with values: - COMMISSION_TOO_LOW - PRODUCT_HARD_TO_PROMOTE - PRODUCT_TOO_EXPENSIVE - NO_SUITABLE_CREATOR |
| review_result | string | No | The product review decision by the TikTok Affiliate Partner. This is an enumerated type with values: - APPROVE - REJECT - REJECT_FOREVER (e.g. APPROVE) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
