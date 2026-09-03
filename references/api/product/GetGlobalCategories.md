---
title: GetGlobalCategories
category: product
api_name: GetGlobalCategories
method: GET
path: /product/202309/global_categories
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** GetGlobalCategories

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/global_categories

## API Description
Retrieve all available product categories, regardless of market variations. Product categories are updated frequently, so it's recommended to call the API in real time to ensure you are using the latest category data. Caching category data locally may result in using outdated information, leading to errors when creating global products.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| locale (query) | string | No | The BCP-47 locale codes for displaying category information. Default: en-US Possible values: - `de-DE` - `en-GB` - `en-IE` - `en-US` - `es-ES` - `es-MX` - `fr-FR` - `id-ID` - `it-IT` - `ja-JP` - `ms-MY` - `th-TH` - `vi-VN` - `zh-CN` |
| keyword (query) | string | No | Filter categories by this keyword in `local_name`. |
| category_version (query) | string | No | Filter categories by the category tree version. Possible values based on region: - US: `v2`, represents the 7-level category tree. **Important**: If the seller account contains an active US shop, you must pass `v2` when using this API. - Other regions: `v1`, represents the 3-level category tree. Def |
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
