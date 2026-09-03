---
title: GetSellerSearchCreatorMarketplaceAdvancedFilters
category: affiliate_seller
api_name: GetSellerSearchCreatorMarketplaceAdvancedFilters
method: POST
path: /affiliate_seller/202601/marketplace_creators/search/filter
version: 202601
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** GetSellerSearchCreatorMarketplaceAdvancedFilters

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202601/marketplace_creators/search/filter

## API Description
This API allows you to obtain the advanced filters available in Seller Search Creator Marketplace. Because we are constantly releasing new filters which are specific to each country or region, this API serves as a way for developers to retrieve the latest available search filters.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.advanced_filters | object | No | This is an object which contains the advanced filters available for [Seller Search Creator on Marketplace](https://partner.tiktokshop.com/docv2/page/seller-search-creator-on-marketplace-202508) If we return an empty object, it means this filter is not currently supported by your country or region. |
| data.advanced_filters.category_pro | array<string> | No | Category Pro is a specific label given to Creators that regularly post about one product category and have generated most of their sales in that Category in the past 60 days. It is currently only available in the US. If we return an empty object, it means this filter is not currently supported by your country or region. |
| data.advanced_filters.creator_level | array<string> | No | The Creator level, based on their GMV. The exact definition changes by country, and is set by the TikTok Shop Creator team. If we return an empty object, it means this filter is not currently supported by your country or region. |
| data.advanced_filters.language | array<string> | No | The language of the user. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
