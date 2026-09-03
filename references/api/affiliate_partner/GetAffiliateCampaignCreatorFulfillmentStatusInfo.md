---
title: GetAffiliateCampaignCreatorFulfillmentStatusInfo
category: affiliate_partner
api_name: GetAffiliateCampaignCreatorFulfillmentStatusInfo
method: GET
path: /affiliate_partner/202501/campaigns/{campaign_id}/products/{product_id}/performance
version: 202501
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_partner
**API:** GetAffiliateCampaignCreatorFulfillmentStatusInfo

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_partner/202501/campaigns/{campaign_id}/products/{product_id}/performance

## API Description
This API offers the ability to get the product fulfillment status for creators who added partner campaign products to their showcase

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| campaign_id (path) | string | Yes | The campaign identifier. |
| product_id (path) | string | Yes | The product identifier. |
| page_size (query) | integer | No | The number of results to be returned per page. Valid range: 1-50. |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the `next_page_token` from a previous response. It is not needed for the first page. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | Querying next page need this token. (e.g. tk811a4455s2) |
| data.promotion_creators | array<object> | No | A list of objects representing information about the Affiliate Creator associated with the product promotion. |
| data.promotion_creators.creator.avatar_url | string | No | A URL for the creator's avatar image in the TikTok CDN. (e.g. https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c614d3b6ba4d93b31fbda5add0802dd7~c5_1080x1080.webp?lk3s=a5d48078\u0026nonce=6796\u0026refresh_token=634d776ec39c2291053675f60c576515\u0026x-expires=1736478000\u0026x-signature=0G6NmM8H8nDRYYVN7e8QazDMRb0%3D\u0026shp=a5d48078\u0026shcp=9f007bb8) |
| data.promotion_creators.creator.creator_temp_id | string | No | A time-limited identifier associated with the creator that is valid for one hour. This identifier is valid to retrieve content performance data associated with the creator. (e.g. d785d63511a645a2) |
| data.promotion_creators.creator.follower_num | integer | No | The total count of TikTok followers for the creator. (e.g. 19) |
| data.promotion_creators.creator.nick_name | string | No | The TikTok nickname of the creator. (e.g. Test_Creator_E) |
| data.promotion_creators.creator.user_name | string | No | user name (e.g. us_lxq6213) |
| data.promotion_creators.paid_amount.amount | string | No | The total amount paid for this product. (e.g. 3.00) |
| data.promotion_creators.paid_amount.currency | string | No | The currency code for the amount field. (e.g. USD) |
| data.total_creator_count | integer | No | The total number of creators involved in the campaign. (e.g. 1) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
