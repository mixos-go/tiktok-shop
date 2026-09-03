---
title: SearchCandidateProducts
category: product
api_name: SearchCandidateProducts
method: POST
path: /product/202409/candidate_products/search
version: 202409
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** SearchCandidateProducts

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202409/candidate_products/search

## API Description
Retrieve a list of candidate products and the corresponding matched opportunity IDs.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_size (query) | integer | Yes | The number of results to be returned per page. Valid range: [1-100] |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the `next_page_token` from a previous response. It is not needed for the first page. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| external_product_ids | array<string> | No | Filter candidate products by the external_product_id. Max IDs: 10 |
| opportunity_matching_statuses | array<string> | No | Filter candidate products by the opportunity matching statuses. Possible values: - PENDING: Waiting for opportunity matching. - MATCHED: There are one or more matched opportunities. - NOT_MATCHED: There are no matches. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.candidate_products | array<object> | No | Candidate product information. |
| data.candidate_products.skus.price.amount | string | No | The SKU's selling price. (e.g. 10.00) |
| data.candidate_products.skus.price.currency | string | No | The currency of the SKU price. (e.g. USD) |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. Provide this value in the `page_token` parameter of your request if the current response does not return all the results. (e.g. abcd1234) |
| data.total_count | integer | No | The number of candidate products that meet the query conditions. (e.g. 100) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
