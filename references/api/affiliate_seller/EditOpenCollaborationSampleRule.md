---
title: EditOpenCollaborationSampleRule
category: affiliate_seller
api_name: EditOpenCollaborationSampleRule
method: POST
path: /affiliate_seller/202410/open_collaborations/sample_rules
version: 202410
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** EditOpenCollaborationSampleRule

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202410/open_collaborations/sample_rules

## API Description
Use this API to manage sample rules in open collaborations, like valid time periods, or thresholds for creators to request samples. You can create, update, or deactivate rules.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_id | string | No | The product ID to which the sample rule applies. You can only assign one sample rule for one `product_id`. Only the most recent API call will take effect. (e.g. 123456) |
| sample_rule | object | No | Sample rule |
| sample_rule.activate_status | string | No | To activate the sample rule, use `ACTIVATE`; to deactivate the sample rule, use `DEACTIVATE`. When using `ACTIVATE`, you must specify the details of the rule; when using `DEACTIVATE`, you just need to specify `product_id`. (e.g. ACTIVATE) |
| sample_rule.end_time | integer | No | The end time of the period during which a creator can apply for samples. You must specify `start_time` and `end_time` together. (e.g. 1728552553) |
| sample_rule.is_sample_time_unlimited | boolean | No | Whether the sample is always available for application: - If true, the sample can be requested at any time. - If false, the sample can only be requested during specified time periods. You must set start_time and end_time. (e.g. True) |
| sample_rule.sample_quota | integer | No | The total quantity of the samples provided by the seller that the creators can apply for. (e.g. 100) |
| sample_rule.start_time | integer | No | The start time of the period during which a creator can apply for samples. You must specify `start_time` and `end_time` together. (e.g. 1728552553) |
| sample_rule.thresholds | object | No | The threshold criteria that a creator must meet to be eligible to apply for the sample. |
| sample_rule.thresholds.avg_ec_video_views | integer | No | The creator must have the average views of e-commerce videos in the past 30 days greater than this value to be eligible to request the sample. (e.g. 5) |
| sample_rule.thresholds.category_ids | array<string> | No | A list of product first-level category IDs. Use this to limit participating creators: for each creator, sort their GMV over the past 30 days by first-level product category. If the GMV of one of the categories is among the top three, the creator is eligible to participate in the event. No restriction by default. For example, if a creator's top three categories are [{Cellphone_ID}, {Furniture_ID}, {Food_ID}], and the value of tehis parameter is `[{Food_ID}]`, the creator is qualified for open collaboration. |
| sample_rule.thresholds.minimum_follower_count | integer | No | The creator must have a follower count greater than this value to be eligible to request the sample. (e.g. 2000) |
| sample_rule.thresholds.minimum_gmv | integer | No | The creator must have the GMV in the past 30 days greater than this value to be eligible to request the sample. (e.g. 1000) |
| sample_rule.thresholds.predicted_fulfillment_rank | string | No | The creators whose predicted rate of posting a shoppable video or LIVE after receiving a sample. - ALL. All creators regardless of the rate. - LOW. The creators whose rate is above or equal to low. - MEDIUM. The creators whose rate is above or equal to medium. - HIGH. The creators whose rate is high. (e.g. LOW) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
