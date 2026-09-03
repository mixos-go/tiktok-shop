---
title: GetCreatorApplicableSampleLabel
category: affiliate_creator
api_name: GetCreatorApplicableSampleLabel
method: GET
path: /affiliate_creator/202412/samples/labels
version: 202412
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_creator
**API:** GetCreatorApplicableSampleLabel

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_creator/202412/samples/labels

## API Description
Check if a creator can apply for a sample of a specific product.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_id (query) | string | Yes | The TikTok Shop product identifier. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.label | object | No | Creator applicable sample label information. |
| data.label.application_id | string | No | Sample Application ID. only appear when the creator has already applied this product. (e.g. 86427198341982134) |
| data.label.can_apply | boolean | No | Creator can apply this application or not. (e.g. True) |
| data.label.reach_limit | boolean | No | If the creator has reached the sample application upper limit. (e.g. True) |
| data.label.sample_product | object | No | The sample product information. |
| data.label.sample_product.sample_sku_list | array<object> | No | The sample product SKU information. |
| data.label.sample_product.sample_sku_list.price.amount | string | No | The price amount. (e.g. 7588986) |
| data.label.sample_product.sample_sku_list.price.currency | string | No | The price currency code. (e.g. USD) |
| data.label.status | string | No | Status to describe if the creator has already applied this product as a free sample. - TO_APPLY: creator has not applied this product as a free sample. - ONGOING: creator applied this product as a free sample while he/she has not finished sample fulfillment. - COMPLETE: creator applied this product as a free sample and finished sample fulfillment. (e.g. ONGOING) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
