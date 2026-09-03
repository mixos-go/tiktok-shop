---
title: GetAffiliatePartnerCampaignProductList
category: affiliate_partner
api_name: GetAffiliatePartnerCampaignProductList
method: GET
path: /affiliate_partner/202405/campaigns/{campaign_id}/products
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_partner
**API:** GetAffiliatePartnerCampaignProductList

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_partner/202405/campaigns/{campaign_id}/products

## API Description
This API offers the ability to list products submitted by sellers in an Affiliate Partner campaign.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| campaign_id (path) | string | Yes | The ID of the campaign. |
| category_asset_cipher (query) | string | Yes | The partner identifier used in API requests. Retrieve this value by using the [Get Authorized Category Assets API](https://partner.tiktokshop.com/docv2/page/666012dd609d4402cc3be995). |
| page_size (query) | integer | Yes | The number of results to be returned per page. |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the `next_page_token` from a previous response. It is not needed for the first page. |
| review_status (query) | string | No | The product review status. This an enumerated type with values: - PENDING - APPROVED - REJECTED - PENDING_CLOSED - CLOSED |
| product_name (query) | string | No | Filter the product list by product name. If value of `product_name` is contained in `product.name`, the product will be included in the response. |
| product_id (query) | string | No | Filter the product list by product ID. If value of `product_id` matches `product.id`, the product will be included in the response. |
| shop_name (query) | string | No | Filter the product list by shop name. If value of `shop_name` is contained in `product.shop_name`, the product will be included in the response. |
| category_id (query) | string | No | Filter the product list by category ID. If value of `category_id` matches `product.category.id`, or the product falls into the leaf category of the specified category, the product will be included in the response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. (e.g. absdfV231as2V0PTAK) |
| data.products | array<object> | No | The list of products. |
| data.products.category.id | string | No | The category identifier. (e.g. 12222) |
| data.products.category.name | string | No | The category name. (e.g. COMPUTER) |
| data.products.highest_price.amount | string | No | The highest price amount. (e.g. 12.21) |
| data.products.highest_price.currency | string | No | The currency code for the region in which the product is sold. (e.g. USD) |
| data.products.lowest_price.amount | string | No | The lowest price amount. (e.g. 1.1) |
| data.products.lowest_price.currency | string | No | The currency in the sales region. (e.g. USD) |
| data.products.sku_information_list.base_price.currency | string | No | The currency of the SKU price. Possible values based on the region: - BRL: Brazil - EUR: France, Germany, Ireland, Italy, Spain - GBP: United Kingdom - IDR: Indonesia - JPY: Japan - MXN: Mexico - MYR: Malaysia - PHP: Philippines - SGD: Singapore - THB: Thailand - USD: United States - VND: Vietnam (e.g. MYR) |
| data.products.sku_information_list.base_price.list_price | string | No | The SKU's list price information that has been verified to be legitimate by the audit team. This is equivalent to the manufacturer's suggested retail price (MSRP), or the recommended retail price (RRP). (e.g. 162.34) |
| data.products.sku_information_list.base_price.localized_dutiable_price | string | No | localized dutiable price (e.g. 141.58) |
| data.products.sku_information_list.base_price.region_code | string | No | the region code of the sku (e.g. MY) |
| data.products.sku_information_list.base_price.sale_price | string | No | The SKU's selling price, inclusive of tax. Applicable only for cross-border sellers from China. (e.g. 162.34) |
| data.products.sku_information_list.inventory.available_quantity | string | No | The total SKU quantity available in the warehouse. (e.g. 80) |
| data.total_count | integer | No | The total number of products in the list. (e.g. 1570) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
