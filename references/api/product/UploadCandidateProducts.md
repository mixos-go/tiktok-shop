---
title: UploadCandidateProducts
category: product
api_name: UploadCandidateProducts
method: POST
path: /product/202409/candidate_products/batch
version: 202409
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** UploadCandidateProducts

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202409/candidate_products/batch

## API Description
Upload products from an external ecommerce platform as candidate products to evaluate if they match any available product opportunities. (A product opportunity refers to potential market demands or gaps where your products could succeed.) Run this API before creating an actual product in TikTok Shop to identify market potential and improve sales outcomes. After uploading candidate products, matching with opportunities will occur asynchronously. You can keep track of any updates through the [Opportunity Matching Status Change webhook] or the [Search Candidate Products API]. Opportunity matching will end on the day stated in `opportunity_matching_end_time`.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| candidate_products | array<object> | No | Candidate product information, obtained from an existing product in an external ecommerce platform. Upload up to 10 candidate products at a time. |
| candidate_products.skus.price.amount | string | No | The SKU's selling price. Valid range: [0.01, 7,600] (e.g. 10.00) |
| candidate_products.skus.price.currency | string | No | The currency of the SKU price. Possible values: "USD" (e.g. USD) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | The list of errors that occurred. |
| data.errors.detail.external_product_id | string | No | The external product id of the candidate product where the error occurred. (e.g. abcd1234) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
