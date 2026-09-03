---
title: GetOpenCollaborationSampleRules
category: affiliate_seller
api_name: GetOpenCollaborationSampleRules
method: GET
path: /affiliate_seller/202410/open_collaborations/sample_rules
version: 202410
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** GetOpenCollaborationSampleRules

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202410/open_collaborations/sample_rules

## API Description
Use this API to get the status and the details of the sample rules for products under an open collaboration. With this API, you can efficiently review the sample distribution criteria for products within the open collaboration context.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_ids (query) | array<string> | Yes | The product IDs to which the sample rules apply. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.sample_rules | array<object> | No | Sample rules |
| data.sample_rules.thresholds.avg_ec_video_views | integer | No | The creator must have the average views of e-commerce videos in the past 30 days greater than this value to be eligible to request the sample. (e.g. 5) |
| data.sample_rules.thresholds.category_ids | array<string> | No | A list of product first-level category IDs. Use this to limit participating creators: for each creator, sort their GMV over the past 30 days by first-level product category. If the GMV of one of the categories is among the top three, the creator is eligible to participate in the event. No restriction by default. For example, if a creator's top three categories are [{Cellphone_ID}, {Furniture_ID}, {Food_ID}], and the value of tehis parameter is `[{Food_ID}]`, the creator is qualified for open collaboration. |
| data.sample_rules.thresholds.minimum_follower_count | integer | No | The creator must have a follower count greater than this value to be eligible to request the sample. (e.g. 200) |
| data.sample_rules.thresholds.minimum_gmv | integer | No | The creator must have the GMV in the past 30 days greater than this value to be eligible to request the sample. (e.g. 1000) |
| data.sample_rules.thresholds.predicted_fulfillment_rank | string | No | The creators whose predicted rate of posting a shoppable video or LIVE after receiving a sample. - ALL. All creators regardless of the rate. - LOW. The creators whose rate is above or equal to low. - MEDIUM. The creators whose rate is above or equal to medium. - HIGH. The creators whose rate is high. (e.g. ALL) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
