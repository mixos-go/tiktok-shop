---
title: CreatorSearchOpenCollaborationProduct
category: affiliate_creator
api_name: CreatorSearchOpenCollaborationProduct
method: POST
path: /affiliate_creator/202405/open_collaborations/products/search
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_creator
**API:** CreatorSearchOpenCollaborationProduct

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_creator/202405/open_collaborations/products/search

## API Description
This API is used to search the information of products with open collaboration by category, commission rate, and keywords. It will return all products on the TikTok Shop Affiliate Product Marketplace that are in an open collaboration. Creators can only search for open collaboration within the regions they are registered in the affiliate.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_token (query) | string | No | Pagination offset determines where you begin to search for. It's empty when raise your first request. |
| page_size (query) | integer | Yes | The value of "page_size" must be greater than 0 and less than or equal to 20. |
| sort_field (query) | string | No | The returned results are sorted by the specified field. Possible values: - commission_rate - product_sales_price - commission - units_sold Specify the sort order using the `sort_order` parameter. |
| sort_order (query) | string | No | The sort order for the objects in the response. Default: ASC Possible values: - ASC: Ascending order - DESC: Descending order |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| category | object | No | Restricts the products in the search results to those that are associated with the expressed product category. |
| category.id | string | No | The category identifier. Note that only first-level categories are supported. (e.g. 341234) |
| commission_rate_range | object | No | The commission rate of the searched product needs to be limited within this range. |
| commission_rate_range.rate_ge | integer | No | The commission rate must be greater than this value in order to be included in the search results. The commission rate is expressed in hundredths of a percent. For example, `3587` is a commission rate of `35.87%`. This value must a minimum of `1000`. (e.g. 100) |
| commission_rate_range.rate_lt | integer | No | The commission rate must be less than this value in order to be included in the search results. The commission rate is expressed in hundredths of a percent. For example, `3587` is a commission rate of `35.87%`. This value must a minimum of `1000`. (e.g. 8000) |
| sales_price_range | object | No | Restricts the products in the search results to those with prices greater than or equal to the expressed minimum price and less than the expressed maximum price. |
| sales_price_range.amount_ge | string | No | The product price must be greater than this value in order to be included in the search results. The value must be greater than `0`. (e.g. 12.44) |
| sales_price_range.amount_lt | string | No | The product price must be greater than this value in order to be included in the search results. The value must be greater than `0`. No upper bound is set if this property is not included. (e.g. 100) |
| title_keywords | array<string> | No | A list of product keywords for searching. Product titles, or names, are loosely matched. Keywords in the list form a query and the resulting set of matching product names is based on the conjunctive operator `AND` between each keyword. For example, the keyword list `["Men", "Fashion"]` creates a query `"Men" AND "Fashion"` and the resulting set of matching product names contains the loosely matched conjuction of "Men" and "Fashion" such as "Male Fashionable". Maximum length of the list is 20 keywords. Maximum keyword string length is 255 characters. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. (e.g. b2Zmc2V0PTEw) |
| data.products | array<object> | No | A list of products. |
| data.products.commission.amount | string | No | The commission amount. (e.g. 121.32) |
| data.products.commission.currency | string | No | The currency code. (e.g. USD) |
| data.products.commission.rate | integer | No | The commission rate in hundredths of a percent. For example, `3587` is a commission rate of `35.87%`. This value must a minimum of `1000`. The range of this value is [100, 8000]. (e.g. 3000) |
| data.products.original_price.currency | string | No | The currency code. (e.g. USD) |
| data.products.original_price.maximum_amount | string | No | The highest original price of all SKUs of the product. (e.g. 100.00) |
| data.products.original_price.minimum_amount | string | No | The lowest original price of all SKUs of the product. (e.g. 12.21) |
| data.products.sales_price.currency | string | No | The currency code. (e.g. USD) |
| data.products.sales_price.maximum_amount | string | No | The highest promotion price of all SKUs of this product. (e.g. 55.7) |
| data.products.sales_price.minimum_amount | string | No | The lowest promotion price of all SKUs of this product. (e.g. 34.3) |
| data.products.shop.name | string | No | The TikTok Shop name. (e.g. Test shop) |
| data.total_count | integer | No | Total count of products meeting the search criteria expressed in the request body. (e.g. 10000) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
