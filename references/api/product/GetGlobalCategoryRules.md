---
title: GetGlobalCategoryRules
category: product
api_name: GetGlobalCategoryRules
method: GET
path: /product/202309/categories/{category_id}/global_rules
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** GetGlobalCategoryRules

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/categories/{category_id}/global_rules

## API Description
Retrieve the additional requirements (beyond mandatory product attributes) for listing a global product in a particular category, regardless of market variations. Requirements may include product certifications, size charts, dimensions and more. Use this API to determine the supporting information that you must prepare before listing a global product. **Note**: It must be a [leaf category](650a03f8f1fd3102b91b338a) that corresponds to the category tree type specified in the `category_version` property.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| category_id (path) | string | Yes | The ID of the category. It must be a leaf category. |
| category_version (query) | string | No | The category tree version that corresponds to the specified `category_id`. Possible values based on region: - US: `v2`, represents the 7-level category tree. **Important**: If the seller account contains an active US shop, you must pass `v2` when using this API. - Other regions: `v1`, represents the |
| locale (query) | string | No | The BCP-47 locale codes for displaying category information. Default: en-US Possible values: - `de-DE` - `en-GB` - `en-IE` - `en-US` - `es-ES` - `es-MX` - `fr-FR` - `id-ID` - `it-IT` - `ja-JP` - `ms-MY` - `th-TH` - `vi-VN` - `zh-CN` |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.manufacturer | object | No | Manufacturer rules. If this is empty, it means a manufacturer is not required for this category. Applicable only for EU markets. |
| data.manufacturer.is_required | boolean | No | A flag to indicate whether the manufacturer is required for **all EU markets**. - true: The manufacturer is required in all EU markets. - false: The manufacturer is required only in some EU markets. Refer to `required_regions` and `optional_regions` for details. (e.g. False) |
| data.manufacturer.optional_regions | array<string> | No | The markets where the manufacturer is optional. Possible values: - DE: Germany - ES: Spain - FR: France - IT: Italy - IE: Ireland |
| data.manufacturer.required_regions | array<string> | No | The markets where the manufacturer is required. Possible values: - DE: Germany - ES: Spain - FR: France - IT: Italy - IE: Ireland |
| data.product_certifications | array<object> | No | Certification related rules. As per TikTok Shop guidelines, certifications are required for certain restricted product categories. Refer to [TikTok Shop Restricted Products Policy](https://seller-us.tiktok.com/university/essay?identity=1&role=1&knowledge_id=3238037484275457&from=policy) for information on product category restrictions. If this is empty, it means certifications are not required for this category. |
| data.responsible_person | object | No | Responsible person rules. If this is empty, it means a responsible person is not required for this category. Applicable only for EU markets. |
| data.responsible_person.is_required | boolean | No | A flag to indicate whether the responsible person is required for **all EU markets**. - true: The manufacturer is required in all EU markets. - false: The manufacturer is required only in some EU markets. Refer to `required_regions` and `optional_regions` for details. (e.g. False) |
| data.responsible_person.optional_regions | array<string> | No | The markets where the responsible person is optional. Possible values: - DE: Germany - ES: Spain - FR: France - IT: Italy - IE: Ireland |
| data.responsible_person.required_regions | array<string> | No | The markets where the responsible person is required. Possible values: - DE: Germany - ES: Spain - FR: France - IT: Italy - IE: Ireland |
| data.size_chart | object | No | Size chart related rules. |
| data.size_chart.is_required | boolean | No | A flag to indicate whether a size chart is required. (e.g. True) |
| data.size_chart.is_supported | boolean | No | A flag to indicate whether size charts are supported. **Note**: If size charts are not supported, even if you provide a size chart when creating or editing a product, the size chart will not be saved. (e.g. True) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
