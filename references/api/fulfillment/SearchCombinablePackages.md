---
title: SearchCombinablePackages
category: fulfillment
api_name: SearchCombinablePackages
method: GET
path: /fulfillment/202309/combinable_packages/search
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** SearchCombinablePackages

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202309/combinable_packages/search

## API Description
Use this API to query orders eligible for combined shipping.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the `next_page_token` from a previous response. It is not needed for the first page. |
| page_size (query) | integer | Yes | The number of results to be returned per page. Valid range: [1-50]. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.combinable_packages | array<object> | No | List of eligible packages that can be combined. |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. Provide this value in the `page_token` parameter of your request if the current response does not return all the results. (e.g. 6AsPQsUMvH3RkchNUPPh22NROHkE0D8pmq/N5M1kHYcZmtRyv9aVrNv65W7Q6tFA) |
| data.total_count | integer | No | The number of orders that meet the query conditions. (e.g. 10) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
