---
title: GetCategories
category: product
api_name: GetCategories
method: GET
path: /product/202309/categories
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** GetCategories

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/categories

## API Description
Retrieve the list of product categories available for your shop. Product categories are updated frequently, so it's recommended to call the API in real time to ensure you are using the latest category data. Caching category data locally may result in using outdated information, leading to errors when creating products. **For the Indonesia market**: To list a product on both TikTok Shop and Tokopedia, you must use only categories that are available on both platforms. Please call this API twice to identify the overlapping categories.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| locale (query) | string | No | The BCP-47 locale codes for displaying category information. Default: The default locale of your shop. Possible values: - `de-DE` - `en-GB` - `en-IE` - `en-US` - `es-ES` - `es-MX` - `fr-FR` - `id-ID` - `it-IT` - `ja-JP` - `ms-MY` - `pt-BR` - `th-TH` - `vi-VN` - `zh-CN` |
| keyword (query) | string | No | Filter categories by this keyword in `local_name`. |
| category_version (query) | string | No | Filter categories by the category tree version. Possible values based on region: - US: `v2`, represents the 7-level category tree. **Important**: For US shops, you must pass `v2` when using this API. - Other regions: `v1`, represents the 3-level category tree. Default: `v1` |
| listing_platform (query) | string | No | Filter categories by the specified platform. Possible values: - TIKTOK_SHOP - TOKOPEDIA Default: TIKTOK_SHOP Applicable only for sellers that migrated from Tokopedia. |
| include_prohibited_categories (query) | boolean | No | A flag to indicate whether to include categories that are prohibited on TikTok Shop. Set this to `true` to identify which are the product categories that you can't list on TikTok Shop in any circumstances. Applicable only for BR, MX, EU and SEA markets. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.categories | array<object> | No | The list of categories that meet the query conditions. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
