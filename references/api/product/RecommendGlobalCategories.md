---
title: RecommendGlobalCategories
category: product
api_name: RecommendGlobalCategories
method: POST
path: /product/202309/global_categories/recommend
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** RecommendGlobalCategories

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/global_categories/recommend

## API Description
Retrieve the recommended categories for a candidate global product based on its title, description, and images. If you are syncing product catalogs from an external system to TikTok Shop, use this API to facilitate product classification. **Note**: Double-byte characters (e.g. Chinese characters) are not supported in text fields such as descriptions and titles. If you include them, the API request will fail.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| category_version | string | No | The category tree version to use for this product. Possible values based on region: - US: `v2`, represents the 7-level category tree. **Important**: If the seller account contains an active US shop, you must pass `v2` when using this API. - Other regions: `v1`, represents the 3-level category tree. Default: `v1` (e.g. v1) |
| description | string | No | The product description in HTML format. **Note**: - The content must conform to the [HTML syntax](https://html.spec.whatwg.org/). All HTML tags are accepted but to optimize display on the TikTok Shop product detail page, the system will automatically convert certain tags into alternative formats, such as rendering `<table>` tags as images. - Max length: 10,000 characters. - Image guidelines: You must use [TikTok Shop image URLs](6509df95defece02be598a22). Max 30 `<img>` tags, each under 4000px with `src`, `width`, and `height` attributes. **Recommendations**: - If you are syncing a pre-existing description from another platform, include the full HTML source description here. - Provide a detailed description, ideally over 300 characters. - Include 3-5 key selling points, each under 250 characters, with supporting images. - Use 1600x1600 px for the image dimensions. (e.g. <p>Please check the measurements before purchase.</p> <ul> <li>M-Size</li> <li>XL-Size</li> </ul> <img src="https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/181595ea7d26489284b5667488d708c1~tplv-o3syd03w52-origin-jpeg.jpeg?from=1432613627" width='100' height='100' /> ) |
| images | array<object> | No | Product images, including gallery images, images that appear in the description, product variant images. |
| product_title | string | No | The product title. Title length: - DE, ES, FR, IE, IT, JP, UK, US: [1, 255] - MX:[1,300] - Other regions: [25, 255] (e.g. Men\'s Fashion Sports Low Cut Cotton Breathable Ankle Short ) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.categories | array<object> | No | Recommended category information. |
| data.leaf_category_id | string | No | The recommended category ID. This is always a leaf category. (e.g. 605254) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
