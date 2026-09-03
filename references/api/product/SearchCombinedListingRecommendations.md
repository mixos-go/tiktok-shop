---
title: SearchCombinedListingRecommendations
category: product
api_name: SearchCombinedListingRecommendations
method: POST
path: /product/202506/combined_listing_recommendations/search
version: 202506
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** SearchCombinedListingRecommendations

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202506/combined_listing_recommendations/search

## API Description
Retrieve the list of combined listing recommendations for products in a shop. Use this to explore potential groupings of similar products that can be combined into a listing based on shared attributes like style, color, or flavor.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_size (query) | integer | No | The number of results to be returned per page. Valid range: [1-100] |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the `next_page_token` from a previous response. It is not needed for the first page. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_ids | array<string> | No | Filter the results to show only those that are recommended for these product IDs. Max count: 20 |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.combined_listing_recommendations | array<object> | No | The list of combined listing recommendations that meet the query conditions. |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. Provide this value in the `page_token` parameter of your request if the current response does not return all the results. (e.g. b2Zmc2V0PTAK) |
| data.total_count | integer | No | The number of items that meet the query conditions. (e.g. 50) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
