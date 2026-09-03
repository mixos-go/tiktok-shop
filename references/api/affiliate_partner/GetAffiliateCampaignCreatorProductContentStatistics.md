---
title: GetAffiliateCampaignCreatorProductContentStatistics
category: affiliate_partner
api_name: GetAffiliateCampaignCreatorProductContentStatistics
method: GET
path: /affiliate_partner/202508/campaigns/{campaign_id}/products/{product_id}/creator/{creator_temp_id}/content/statistics
version: 202508
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_partner
**API:** GetAffiliateCampaignCreatorProductContentStatistics

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_partner/202508/campaigns/{campaign_id}/products/{product_id}/creator/{creator_temp_id}/content/statistics

## API Description
Get statistics on creator's marketing video content

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| campaign_id (path) | string | Yes | The campaign identifier. |
| product_id (path) | string | Yes | The product identifier. |
| creator_temp_id (path) | string | Yes | Creator Open ID. [More details](https://partner.tiktokshop.com/docv2/page/3obfokj6) |
| affiliate_product_id (query) | string | Yes | The affiliate product identifier to be included in the response. Refer to `promotion_creators.affiliate_product_id` in the response of Get Affiliate Campaign Creator Fulfillment Status Info gateway. |
| content_type (query) | string | No | Content type.Identify content as video or live. - 1: VIDEO - 2: LIVE_ROOM |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.creator_content_statistics | array<object> | No | A list of objects that represent content statistics for the associated creator. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
