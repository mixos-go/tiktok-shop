---
title: PartialEditCandidateProducts
category: product
api_name: PartialEditCandidateProducts
method: POST
path: /product/202409/candidate_products/partial_edit/batch
version: 202409
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** PartialEditCandidateProducts

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202409/candidate_products/partial_edit/batch

## API Description
Edit a subset of candidate product properties. - Note: Updates are handled per top-level property under `product_candidates`, so all non-empty fields within an updated object must be supplied to prevent overwriting with blanks. - For top-level properties (e.g. `title`, `description`) that are not nested in an object, you can update them individually. Omitting these properties in the request will leave them unchanged. - If you need to edit any nested property within an object, you must provide values for all nested properties of that object. If any nested properties are omitted, they will be overwritten with blanks. For example, if you want to update `price.amount`, you must also include the `currency` property to avoid data loss for that property. When editing an array, all previously defined array entries will be cleared and replaced by the new values provided in the request.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| candidate_products | array<object> | No | Candidate product information, obtained from an existing product in an external e-commerce platform. Edit up to 10 candidate products at a time. |
| candidate_products.skus.price.amount | string | No | The SKU's selling price. Valid range: [0.01, 7,600] (e.g. 10.00) |
| candidate_products.skus.price.currency | string | No | The currency of the SKU price. Possible values: "USD" (e.g. USD) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | The list of errors that occurred. |
| data.errors.detail.external_product_id | string | No | The external product id of the candidate product where the error occurred. (e.g. abcde) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
