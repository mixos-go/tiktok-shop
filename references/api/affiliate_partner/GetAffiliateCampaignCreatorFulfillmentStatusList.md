---
title: GetAffiliateCampaignCreatorFulfillmentStatusList
category: affiliate_partner
api_name: GetAffiliateCampaignCreatorFulfillmentStatusList
method: GET
path: /affiliate_partner/202501/campaigns/{campaign_id}/products/performance
version: 202501
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_partner
**API:** GetAffiliateCampaignCreatorFulfillmentStatusList

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_partner/202501/campaigns/{campaign_id}/products/performance

## API Description
This API offers the ability to get the product of the campaign fulfillment status for creators who added partner campaign products to their showcase. For details of a specified product involved in an affiliated campaign, use Get Affiliate Campaign Creator Fulfillment Status Info gateway.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| campaign_id (path) | string | Yes | the unique id of a campaign |
| page_size (query) | integer | No | The number of results to be returned per page. Valid range: 1-50. |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the `next_page_token` from a previous response. It is not needed for the first page. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.campaign_product_statistics | array<object> | No | A list of objects representing campaign product statistics. |
| data.campaign_product_statistics.campaign_product_detail.creator_commission_percent | string | No | The commission rate for the creator in the partner plan. The value is in hundredths of a percent. For example, a value of 1000 means 10.00%. (e.g. 1000) |
| data.campaign_product_statistics.campaign_product_detail.indicator_data | object | No | Key performance indicators for the product. |
| data.campaign_product_statistics.campaign_product_detail.indicator_data.actual_amount | string | No | GMV, the total payment amount corresponding to `actual_order_num`. (e.g. 0) |
| data.campaign_product_statistics.campaign_product_detail.indicator_data.actual_order_num | string | No | The actual number of paid orders. (e.g. 0) |
| data.campaign_product_statistics.campaign_product_detail.indicator_data.actual_partner_commission | string | No | The partner commission amount corresponding to actual_order_num. (e.g. 0) |
| data.campaign_product_statistics.campaign_product_detail.indicator_data.collaborated_creators_num | string | No | The total number of creators collaborating on the campaign. (e.g. 0) |
| data.campaign_product_statistics.campaign_product_detail.indicator_data.creator_sales_num | string | No | The number of creators credited with at least one product sale. (e.g. 0) |
| data.campaign_product_statistics.campaign_product_detail.indicator_data.estimated_amount | string | No | The total payment amount corresponding to `paid_order_num`. (e.g. 0) |
| data.campaign_product_statistics.campaign_product_detail.indicator_data.estimated_partner_commission | string | No | The partner commission amount corresponding to paid_order_num. (e.g. 0) |
| data.campaign_product_statistics.campaign_product_detail.indicator_data.paid_order_num | string | No | The total number of paid orders. `paid_order_num` = `actual_order_num` + {number of paid but returned orders} (e.g. 3) |
| data.campaign_product_statistics.campaign_product_detail.indicator_data.promoted_creator_num | string | No | The number of creators involved in the partner plan. (e.g. 0) |
| data.campaign_product_statistics.campaign_product_detail.indicator_data.sample_requested_creator_num | string | No | The total number of creators that applied for a sample. (e.g. 0) |
| data.campaign_product_statistics.campaign_product_detail.partner_commission_percent | string | No | The commission rate for the partner in the partner plan. The value is in hundredths of a percent. For example, a value of 1000 means 10.00%. (e.g. 5000) |
| data.campaign_product_statistics.campaign_product_detail.plan_commission_percent | string | No | The commission rate for open collaboration. The value is in hundredths of a percent. For example, a value of 1000 means 10.00%. (e.g. 1400) |
| data.campaign_product_statistics.campaign_product_detail.product_id | string | No | The product identifier. (e.g. 12344) |
| data.campaign_product_statistics.campaign_product_detail.product_name | string | No | The product name. (e.g. summer underwear soft dress summer underwear-001) |
| data.campaign_product_statistics.campaign_product_detail.product_price | object | No | The product price. |
| data.campaign_product_statistics.campaign_product_detail.product_price.currency | string | No | The currency code for the maximum and minimum offered price for the product. (e.g. USD) |
| data.campaign_product_statistics.campaign_product_detail.product_price.max_price | string | No | The maximum offered price of the product. (e.g. 3.00) |
| data.campaign_product_statistics.campaign_product_detail.product_price.min_price | string | No | The minimum offered price of the product. (e.g. 1.00) |
| data.campaign_product_statistics.campaign_product_detail.product_status | string | No | The product status. This is an enumerated type with values: - PRODUCT_UNSPECIFIED - PRODUCT_PENDING - PRODUCT_APPROVED - PRODUCT_REJECTED - PRODUCT_PENDING_CLOSED - PRODUCT_CLOSED (e.g. PRODUCT_UNSPECIFIED) |
| data.campaign_product_statistics.campaign_product_detail.product_stock_count | string | No | The total number of products in stock. (e.g. 100) |
| data.campaign_product_statistics.campaign_product_detail.product_thumbnail | object | No | An object representing the product thumbnail. |
| data.campaign_product_statistics.campaign_product_detail.product_thumbnail.uri | string | No | The base URI of the product. (e.g. tos-useast5-i-omjb5zjo8w-tx/178e97ee3b254f9ab237ea7516828266) |
| data.campaign_product_statistics.campaign_product_detail.product_thumbnail.url_list | array<string> | No | A list of URLs for each image associated with the product. |
| data.campaign_product_statistics.campaign_product_detail.total_commission_percent | string | No | The commission rate of the partner plan. It is the sum of the `creator_commission_rate` and `partner_commission_rate`. The value is in hundredths of a percent. For example, a value of 1000 means 10.00%. (e.g. 6000) |
| data.next_page_token | string | No | next page query token (e.g. 0) |
| data.total_count | integer | No | The total count of products included in the specified campaign. (e.g. 10) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
