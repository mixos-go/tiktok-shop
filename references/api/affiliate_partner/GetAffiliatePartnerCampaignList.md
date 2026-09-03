---
title: GetAffiliatePartnerCampaignList
category: affiliate_partner
api_name: GetAffiliatePartnerCampaignList
method: GET
path: /affiliate_partner/202405/campaigns
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_partner
**API:** GetAffiliatePartnerCampaignList

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_partner/202405/campaigns

## API Description
This API offers the ability to list campaigns created by the Affiliate Partner.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| category_asset_cipher (query) | string | Yes | The partner identifier used in API requests. Retrieve this value by using the [Get Authorized Category Assets API](https://partner.tiktokshop.com/docv2/page/666012dd609d4402cc3be995). |
| page_size (query) | integer | Yes | The number of results to be returned per page. Default: 10. Valid range: [1-100]. |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the `next_page_token` from a previous response. It is not needed for the first page. Maximum page size is `100` items. |
| status (query) | string | No | The campaign status. The status is an enumerated type with values: - `READY` - `UPCOMING` - `ONGOING` - `CLOSED` - `UNSPECIFIED` |
| type (query) | string | No | The campaign type. This is an enumerated type with values: - MY_CAMPAIGNS - GS_SELLING_CAMPAIGNS - SELLER_CAMPAIGNS - EXCLUSIVE_TIKTOK_SHOP Default value is MY_CAMPAIGNS. |
| query_type_filter (query) | string | No | An extended filter to be used when the campaign type property type is set to SELLER_CAMPAIGNS or EXCLUSIVE_TIKTOK_SHOP. If the type property is set to SELLER_CAMPAIGNS, the valid values for this property are: - MARKETPLACE: the response includes campaigns that the partner did not join. - JOINED : th |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.campaigns | array<object> | No | A list of campaigns. |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. (e.g. absdfV231as2V0PTAK) |
| data.total_count | integer | No | The total number of campaigns in the list. (e.g. 1570) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
