---
title: SearchOpportunities
category: product
api_name: SearchOpportunities
method: POST
path: /product/202409/opportunities/search
version: 202409
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** SearchOpportunities

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202409/opportunities/search

## API Description
Retrieve details of product opportunities based on the `opportunity_ids` returned from [Search Candidate Products API].

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
| opportunity_ids | array<string> | No | Filter opportunities by opportunity_ids. Max IDs: 10 |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. Provide this value in the `page_token` parameter of your request if the current response does not return all the results. (e.g. abc1234) |
| data.opportunities | array<object> | No | Product opportunity information. |
| data.total_count | integer | No | The number of opportunities that meet the query conditions. (e.g. 100) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
