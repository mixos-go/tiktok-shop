---
title: GetAffiliateCampaignCreatorProductSampleStatus
category: affiliate_partner
api_name: GetAffiliateCampaignCreatorProductSampleStatus
method: GET
path: /affiliate_partner/202508/campaigns/{campaign_id}/products/{product_id}/creator/{creator_temp_id}/content/statistics/sample/status
version: 202508
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_partner
**API:** GetAffiliateCampaignCreatorProductSampleStatus

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_partner/202508/campaigns/{campaign_id}/products/{product_id}/creator/{creator_temp_id}/content/statistics/sample/status

## API Description
Get progress on creator's sample status

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| campaign_id (path) | string | Yes | The campaign identifier. |
| product_id (path) | string | Yes | The product identifier. |
| creator_temp_id (path) | string | Yes | Creator Open ID. [More details](https://partner.tiktokshop.com/docv2/page/3obfokj6) |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.sample_status | object | No | The creator's sample status |
| data.sample_status.delivery_option | string | No | The delivery option: - ECONOMY_SHIPPING - PREMIUM_SHIPPING (e.g. PREMIUM_SHIPPING) |
| data.sample_status.estimated_earliest_delivery_date | string | No | The earliest estimated delivery date in Unix epoch format. (e.g. 1712941200) |
| data.sample_status.estimated_latest_delivery_date | string | No | The longest estimated delivery date in Unix epoch format. (e.g. 1712941200) |
| data.sample_status.quantity | integer | No | The quantity of products delivered. (e.g. 1) |
| data.sample_status.shipping_provider_name | string | No | The name of the shipping provider (e.g. USPS) |
| data.sample_status.tracking_results | array<object> | No | A list of objects representing tracking events. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
