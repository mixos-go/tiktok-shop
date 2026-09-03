---
title: GetCategoryRules
category: product
api_name: GetCategoryRules
method: GET
path: /product/202309/categories/{category_id}/rules
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** GetCategoryRules

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/categories/{category_id}/rules

## API Description
Retrieve the additional requirements (beyond mandatory product attributes) for listing a product in a particular category based on your shop's location. Requirements may include product certifications, size charts, dimensions and more. Use this API to determine the supporting information that you must prepare before listing a product. **Note**: It must be a [leaf category](6509c89d0fcef602bf1acd9b) that corresponds to the category tree type specified in the `category_version` property.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| category_id (path) | string | Yes | The ID of the category. It must be a leaf category. |
| category_version (query) | string | No | The category tree version that corresponds to the specified `category_id`. Possible values based on region: - US: `v2`, represents the 7-level category tree. **Important**: For US shops, you must pass `v2` when using this API. - Other regions: `v1`, represents the 3-level category tree. Default: `v1 |
| locale (query) | string | No | The BCP-47 locale codes for displaying category information. Default: en-US Possible values: - de-DE - en-GB - en-IE - en-US - es-ES - es-MX - fr-FR - id-ID - it-IT - ja-JP - ms-MY - pt-BR - th-TH - vi-VN - zh-CN |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.allowed_special_product_types | array<string> | No | The list of special product types, excluding regular products, that your shop is allowed to list in this category. Possible values based on the region: **US** - `PRE_ORDER`: The product is not yet available or released. Fulfillment can be extended by specifying a release date. - `MADE_TO_ORDER`: The product is produced only after the order is received. Fulfillment can be extended by specifying a duration. - `CUSTOM`: The product requires a fulfillment timeline that exceeds the standard due to other factors. Fulfillment can be extended by specifying a duration. **UK and SEA** - `PRE_ORDER`: The product is not yet available or released. Fulfillment can be extended by specifying a duration. **Note**: This field is omitted if you lack the permission to list special product types. Contact your account manager for assistance if you wish to list such products. |
| data.cod | object | No | Cash on Delivery (COD) related rules. Applicable only for the following markets: - Global sellers: MY, PH, SA, TH, VN - Local sellers: ID, MY, PH, SA, TH, VN |
| data.cod.is_supported | boolean | No | A flag to indicate whether COD is supported. **Note**: If COD is not supported, but you set `is_cod_allowed=true` when creating or editing a product, the listing will fail. (e.g. True) |
| data.epr | object | No | Extended Producer Responsibility (EPR) related rules. |
| data.epr.is_required | boolean | No | A flag to indicate whether EPR is required. (e.g. False) |
| data.fees | array<object> | No | Product fees related rules. |
| data.manufacturer | object | No | Manufacturer related rules. Applicable only for the EU market. |
| data.manufacturer.is_required | boolean | No | A flag to indicate whether the manufacturer information is required. (e.g. False) |
| data.package_dimension | object | No | Package dimension related rules. |
| data.package_dimension.is_required | boolean | No | A flag to indicate whether package dimensions are required. (e.g. True) |
| data.product_certifications | array<object> | No | Certification related rules. As per TikTok Shop guidelines, certifications are required for certain restricted product categories. Refer to [TikTok Shop Restricted Products Policy](https://seller-us.tiktok.com/university/essay?identity=1&role=1&knowledge_id=3238037484275457&from=policy) for information on product category restrictions. If this is empty, it means certifications are not required for this category. |
| data.product_certifications.expiration_date.is_required | boolean | No | A flag to indicate whether an expiration date is required for this certification. (e.g. True) |
| data.responsible_person | object | No | Responsible person (RP) related rules. Applicable only for the EU market. |
| data.responsible_person.is_required | boolean | No | A flag to indicate whether the responsible person information is required. (e.g. False) |
| data.size_chart | object | No | Size chart related rules. |
| data.size_chart.is_required | boolean | No | A flag to indicate whether a size chart is required. (e.g. True) |
| data.size_chart.is_supported | boolean | No | A flag to indicate whether size charts are supported. **Note**: If size charts are not supported, even if you provide a size chart when creating or editing a product, the size chart will not be saved. (e.g. True) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
