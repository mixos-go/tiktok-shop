---
title: CreateAttributeRecommendationRequest
category: product
api_name: CreateAttributeRecommendationRequest
method: POST
path: /product/202501/attribute_recommendation_request
version: 202501
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** CreateAttributeRecommendationRequest

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202501/attribute_recommendation_request

## API Description
Submit product information from an external ecommerce platform to initiate the process for identifying suitable product attributes in TikTok Shop. Use this API when syncing your product catalog from an external OMS system into TTS. After submitting the product information, attribute recommendation generation will occur asynchronously. You can obtain the final recommended product attributes through the [Product attribute recommendation generated] webhook.

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
| external_product.description | string | No | The product description. Max length: 10,000 (e.g. \u003cp\u003ePlease check the measurements before purchase.\u003c/p\u003e\u003cul\u003e) |
| external_product.external_product_id | string | No | An external product identifier used in the external ecommerce platform. Max length: 999 (e.g. shopifyopps123456) |
| external_product.images | array<object> | No | A list of images that are displayed in the product image gallery. Max: 9 |
| external_product.is_existing_product | boolean | No | A flag indicating whether the product is an existing product or a newly created product in the external platform (e.g. Shopify). - true: It is an existing product - false: It is a new product Default: false (e.g. False) |
| external_product.other_product_data | string | No | A serialized string containing additional or extended product information (e.g. metafields) on the external platform not covered by standard fields. Max length: 20,000 (e.g. \u003cp\u003ePlease check the measurements before purchase.\u003c/p\u003e\u003cul\u003e) |
| external_product.skus | array<object> | No | A list of Stock Keeping Units (SKUs) used to identify distinct variants of the product. Max count: 300 |
| external_product.title | string | No | The product title. Max length: 300 (e.g. Short Boat Invisible Socks) |
| external_product.tts_category_id | string | No | The category of the product in TikTok Shop. Use the [Recommend Category](6509bae1f1fd3102b91379d4) API to get recommended category based on your product information. (e.g. 600001) |
| external_product.vendor_name | string | No | The vendor name of the product in the external ecommerce platform. This will be used as the manufacturer name in TikTok Shop. Max length: 255 (e.g. xxxx) |
| external_product.version | string | No | A unique identifier representing the current state of the product information. For example, this can be a Unix timestamp in milliseconds. This value should change whenever the product data is updated, allowing the system to distinguish different updates to the same product over time. Max length: 13 (e.g. 1741234626) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
