---
title: UploadExternalProduct
category: product
api_name: UploadExternalProduct
method: POST
path: /product/202506/external_products
version: 202506
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** UploadExternalProduct

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202506/external_products

## API Description
Upload product information from an external ecommerce platform to analyze listing data and generate insights for TikTok Shop, such as the recommended product groupings.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| external_product | object | No | External product information, obtained from an existing product in an external ecommerce platform. |
| external_product.create_time | integer | No | The time when the product is created. Unix timestamp (seconds). |
| external_product.description | string | No | The product description. Max length: 10,000 (e.g. ) |
| external_product.external_category_name | string | No | The category of the product in the external ecommerce platform. Max length: 100 (e.g. ) |
| external_product.external_product_id | string | No | An external product identifier used in the external ecommerce platform. Max length: 999 (e.g. shopifyopps123456) |
| external_product.external_shop_id | string | No | The shop ID on the external ecommerce platform. Max length: 999 (e.g. 123455) |
| external_product.first_image | object | No | The first image that is displayed in the product image gallery. |
| external_product.first_image.url | string | No | The external image URL. (e.g. ) |
| external_product.images | array<object> | No | A list of images that are displayed in the product image gallery. Max count: 25 |
| external_product.publish_time | integer | No | The time when the product is published. Unix timestamp (seconds). |
| external_product.region | string | No | The region where the product is sold. Possible values: - DE: Germany - ES: Spain - FR: France - GB: United Kingdom - ID: Indonesia - IE: Ireland - IT: Italy - JP: Japan - MY: Malaysia - PH: Philippines - SG: Singapore - TH: Thailand - US: United States - VN: Vietnam (e.g. ) |
| external_product.skus | array<object> | No | A list of Stock Keeping Units (SKUs) used to identify distinct variants of the product. Max count: 300 |
| external_product.skus.image.url | string | No | The external image URL. (e.g. ) |
| external_product.skus.weight.unit | string | No | The unit for the SKU weight. Possible values: (e.g. ) |
| external_product.skus.weight.value | string | No | The SKU weight, which must be a positive number with up to X decimal places. (e.g. ) |
| external_product.status | string | No | The product status. Default: ALL Possible values: - ALL - DRAFT - ACTIVE - ARCHIVED - SUSPENDED - PENDING_SUSPENSION (e.g. ) |
| external_product.title | string | No | The product title. Max length: 300 (e.g. ) |
| external_product.update_time | integer | No | The time when the product is updated. Unix timestamp (seconds). |
| external_product.vendor_name | string | No | The vendor name. This information is equivalent to the manufacturer name in TikTok Shop. Max length: 255 (e.g. ) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
