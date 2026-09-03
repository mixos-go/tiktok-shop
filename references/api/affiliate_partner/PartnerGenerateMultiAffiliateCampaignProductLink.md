---
title: PartnerGenerateMultiAffiliateCampaignProductLink
category: affiliate_partner
api_name: PartnerGenerateMultiAffiliateCampaignProductLink
method: POST
path: /affiliate_partner/202505/campaigns/{campaign_id}/products/promotion_links/generate_batch
version: 202505
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_partner
**API:** PartnerGenerateMultiAffiliateCampaignProductLink

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_partner/202505/campaigns/{campaign_id}/products/promotion_links/generate_batch

## API Description
This API offers the ability to generate promotion links for multiple products in a campaign.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| campaign_id (path) | string | Yes | The ID of the campaign |
| category_asset_cipher (query) | string | No | The partner identifier used in API requests. Retrieve this value by using the [Get Authorized Category Assets API] (https://partner.tiktokshop.com/docv2/page/666012dd609d4402cc3be995). |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_ids | array<string> | No | The list of product IDs. The max length is 50. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.failed_product_ids | array<string> | No | The list of products for which the promotion links failed to be generated. |
| data.product_promotion_links | array<object> | No | The list of products for which the promotion links are generated successfully. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
