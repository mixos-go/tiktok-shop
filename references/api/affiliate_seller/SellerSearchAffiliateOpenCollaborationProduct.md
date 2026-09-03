---
title: SellerSearchAffiliateOpenCollaborationProduct
category: affiliate_seller
api_name: SellerSearchAffiliateOpenCollaborationProduct
method: POST
path: /affiliate_seller/202405/open_collaborations/products/search
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** SellerSearchAffiliateOpenCollaborationProduct

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202405/open_collaborations/products/search

## API Description
This API is used to search the information of products with open collaboration by category, commission rate, and keywords. It will return all products on the TikTok Shop Affiliate Product Marketplace that are in an open collaboration. Sellers can only search for open collaboration within the regions they are registered to sell in.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| sort_order (query) | string | No | The sort order for the sort_field parameter. Default: ASC Possible values: - ASC: Ascending order - DESC: Descending order |
| sort_field (query) | string | No | The returned results will be sorted by the specified field. See the description of the field values in the request body for more information about each field. Default: commission_rate Possible values: - commission_rate - product_sales_price - commission - units_sold |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the next_page_token from a previous response. It is not needed for the first page. |
| page_size (query) | integer | Yes | The number of results to be returned per page. Valid range: [1-20]. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=650 |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| category | object | No | Restricts the products in the search results to those that are associated with the expressed product category. |
| category.id | string | No | The category identifier. Note that only first-level categories are supported. (e.g. 3412342) |
| commission_rate_range | object | No | Restricts products in the search results to those with a commision rate greater than the expressed minimum commission rate and less than the expressed maximum commission rate. |
| commission_rate_range.rate_ge | integer | No | The commission rate must be greater than this value in order to be included in the search results. The commission rate is expressed in hundredths of a percent. For example, `3587` is a commission rate of `35.87%`. This value must a minimum of `1000`. (e.g. 100) |
| commission_rate_range.rate_lt | integer | No | The commission rate must be less than this value in order to be included in the search results. The commission rate is expressed in hundredths of a percent. For example, `3587` is a commission rate of `35.87%`. This value must a minimum of `1000`. (e.g. 8000) |
| sales_price_range | object | No | Restricts the products in the search results to those with prices greater than or equal to the expressed minimum price and less than the expressed maximum price |
| sales_price_range.amount_ge | string | No | The product price must be greater than this value in order to be included in the search results. The value must be greater than `0`. (e.g. 12.44) |
| sales_price_range.amount_lt | string | No | The product price must be greater than this value in order to be included in the search results. The value must be greater than `0`. No upper bound is set if this property is not included. (e.g. 100) |
| title_keywords | array<string> | No | A list of product keywords. Product titles, or names, are loosely matched. Keywords in the list form a query and the resulting set of matching product names is based on the conjunctive operator `AND` between each keyword. For example, the keyword list `["Men", "Fashion"]` creates a query `"Men" AND "Fashion"` and the resulting set of matching product names contains the loosely matched conjuction of "Men" and "Fashion" such as "Male Fashionable". Maximum length of the list is 20 keywords. Maximum keyword string length is 255 characters. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. (e.g. b2Zmc2V0PTEw) |
| data.products | array<object> | No | The list of products meeting the search criteria expressed in the request body. |
| data.products.commission.amount | string | No | The commission amount. (e.g. 121.32) |
| data.products.commission.currency | string | No | The currency code. (e.g. USD) |
| data.products.commission.rate | integer | No | The commission rate in hundredths of a percent. For example, `3587` is a commission rate of `35.87%`. This value must a minimum of `1000`. (e.g. 3000) |
| data.products.original_price.currency | string | No | The currency code. (e.g. USD) |
| data.products.original_price.maximum_amount | string | No | The highest original price of all SKUs of the product. (e.g. 100.00) |
| data.products.original_price.minimum_amount | string | No | The lowest original price of all SKUs of the product. (e.g. 12.21) |
| data.products.sales_price.currency | string | No | The currency code. (e.g. USD) |
| data.products.sales_price.maximum_amount | string | No | The highest promotion price of all SKUs of this product. (e.g. 55.7) |
| data.products.sales_price.minimum_amount | string | No | The lowest promotion price of all SKUs of this product. (e.g. 34.3) |
| data.products.shop.name | string | No | The name of the TikTok shop. (e.g. Test shop) |
| data.total_count | integer | No | Total count of products meeting the search criteria expressed in the request body. (e.g. 10000) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
