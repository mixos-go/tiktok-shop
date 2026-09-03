---
title: ProductInformationIssueDiagnosis
category: product
api_name: ProductInformationIssueDiagnosis
method: GET
path: /product/202405/products/diagnoses
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** ProductInformationIssueDiagnosis

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202405/products/diagnoses

## API Description
Diagnose multiple existing live (status: `ACTIVATE`) products to obtain information that helps you to improve the product content, enhancing product visibility and customer trust. The returned information includes: - Listing quality information (available only for the US market). - Issues with the current product details and the overall recommendations - Auto-generated optimization suggestions targeted for specific product fields, including the title, description, and image. **Note**: This API focuses solely on optimizing product visibility and does not evaluate whether your product meets listing requirements. Quality issues identified by this API do not block your product from being listed. To verify listing requirements, use the [Check Product Listing API](650a0ee8f1fd3102b91c6493).

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_ids (query) | array<string> | Yes | The list of product IDs that you want to diagnose. **Note**: - Max number of IDs: 200 - The product must be live (status: `ACTIVATE`) |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.products | array<object> | No | The list of requested products and the corresponding diagnosis results. |
| data.products.diagnoses.suggestion.images | array<object> | No | The optimized image. Only the first image in the `main_images` set will be optimized. |
| data.products.diagnoses.suggestion.seo_words | array<object> | No | The SEO keyword suggestions for product titles. |
| data.products.diagnoses.suggestion.smart_texts | array<object> | No | The list of optimized product title or description. |
| data.products.listing_quality.current_tier | string | No | The current quality tier of this product listing. The quality tier of a product listing depends on the quality of the content in its product fields such as the title, image, attributes etc. Possible values: - POOR - FAIR - GOOD **Note**: Available only for the US market. (e.g. POOR) |
| data.products.listing_quality.remaining_recommendations | integer | No | The remaining number of recommendations (see `diagnosis_results`) that must be implemented for the product to reach the highest tier. **Note**: - To reach the highest tier, you must implement all recommendations listed in `diagnosis_results`. - Available only for the US market. (e.g. 3) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
