---
title: GetGlobalAttributes
category: product
api_name: GetGlobalAttributes
method: GET
path: /product/202309/categories/{category_id}/global_attributes
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** GetGlobalAttributes

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/categories/{category_id}/global_attributes

## API Description
Retrieve the standard built-in product and sales attributes for listing a global product in a particular category, regardless of market variations. Products on TikTok Shop are grouped into categories predefined by TikTok Shop, and each category is associated with a standard set of product attributes and sales attributes. - **Sales attributes** (e.g. size, color, length) define product variants and are optional if your product is straightforward and has no variants. - **Product attributes** (e.g. manufacturer, country of origin, materials used) describe the product as a whole, regardless of variant. Some product attributes are mandatory based on listing policies. Use this API to determine the mandatory and optional attributes before listing a global product. **Note**: It must be a [leaf category](650a03f8f1fd3102b91b338a) that corresponds to the category tree type specified in the `category_version` property.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| category_id (path) | string | Yes | The ID of the category. It must be a leaf category. |
| locale (query) | string | No | The BCP-47 locale codes for displaying the attribute information. Default: en-US Possible values: - `de-DE` - `en-GB` - `en-IE` - `en-US` - `es-ES` - `es-MX` - `fr-FR` - `id-ID` - `it-IT` - `ja-JP` - `ms-MY` - `th-TH` - `vi-VN` - `zh-CN` |
| category_version (query) | string | No | The category tree version that corresponds to the specified `category_id`. Possible values based on region: - US: `v2`, represents the 7-level category tree. **Important**: If the seller account contains an active US shop, you must pass `v2` when using this API. - Other regions: `v1`, represents the |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.attributes | array<object> | No | The list of standard built-in product and sales attributes that are bound to the specified category. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
