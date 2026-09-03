---
title: DiagnoseandOptimizeProduct
category: product
api_name: DiagnoseandOptimizeProduct
method: POST
path: /product/202411/products/diagnose_optimize
version: 202411
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** DiagnoseandOptimizeProduct

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202411/products/diagnose_optimize

## API Description
Diagnose products to obtain information that helps you to improve the product content, enhancing product visibility and customer trust. The returned information includes: - Listing quality information (available only for the US market). - Issues with the current product details and the overall recommendations - Auto-generated optimization suggestions targeted for specific product fields, including the title, description, and image. This API enables you to diagnose both live products (status: `ACTIVATE`) and brand-new products not yet listed in TikTok Shop. - To diagnose a **live product**, provide the `product_id` and `category_id` and leave all other product details blank. - To diagnose a **brand-new product** not yet listed in TikTok Shop, omit the `product_id` and provide the product details as necessary. - To diagnose a **product similar to an existing one**, provide the `product_id` and `category_id`, along with any new details. The diagnosis will combine the existing product's information with the new details you provide. For example, if you provide a new `title`, the diagnosis will use the new title instead of the existing one while keeping the other values from the product ID. **Note**: - To diagnose multiple live products, use the [Product Information Issue Diagnosis API](665048f380b6b302e73917d9). - This API focuses solely on optimizing product visibility and does not evaluate whether your product meets listing requirements. Quality issues identified by this API do not block your product from being listed. To verify listing requirements, use the [Check Product Listing API](650a0ee8f1fd3102b91c6493).

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| brand_id | string | No | The ID of the brand of this product. Use the [Get Brands API](https://partner.tiktokshop.com/docv2/page/6503075656e2bb0289dd5d01) to get the list of available brands for a shop. **Note**: Unauthorized brands won't be displayed on TikTok Shop. (e.g. 7082427311584347905) |
| category_id | string | No | The ID of the category of this product. It must be a leaf category that corresponds to the category tree type specified in the `category_version` property. Use the [Get Categories API](https://partner.tiktokshop.com/docv2/page/6509c89d0fcef602bf1acd9b) to find out if a category is a leaf category in a particular `category_version`. **Note**: - For the US market, refer to [TikTok Shop Restricted Products Policy](https://seller-us.tiktok.com/university/essay?identity=1&role=1&knowledge_id=3238037484275457&from=policy) for information on product category restrictions. - For the Indonesia market, to list a product on both TikTok Shop and Tokopedia, you must use only categories that are available on both platforms. (e.g. 600001) |
| description | string | No | The product description in HTML format. **Note**: - The content must conform to the [HTML syntax](https://html.spec.whatwg.org/). All HTML tags are accepted but to optimize display on the TikTok Shop product detail page, the system will automatically convert certain tags into alternative formats, such as rendering `<table>` tags as images. - Max length: 10,000 characters. - Images must use TikTok Shop image URLs, not exceed 4000px, and include `src`, `width`, and `height` attributes. **Recommendations**: - If you are syncing a pre-existing description from another platform, include the full HTML source description here. - Provide a detailed description, ideally over 300 characters. - Include 3-5 key selling points, each under 250 characters, with supporting images. - Use 1600x1600 px for the image dimensions. (e.g. <p>Please check the measurements before purchase.</p> <ul> <li>M-Size</li> <li>XL-Size</li> </ul> <img src="https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/181595ea7d26489284b5667488d708c1~tplv-o3syd03w52-origin-jpeg.jpeg?from=1432613627" width='100' height='100' /> ) |
| main_images | array<object> | No | A list of images to display in the product image gallery. Use the [Upload Product Image API](https://partner.tiktokshop.com/docv2/page/6509df95defece02be598a22) to upload the images first and obtain the corresponding image URI. **Note**: - Max number of image URIs: 9 - Arrange your image URIs in the sequence that they should appear on TikTok Shop. - Image dimensions: [300x300 px, 4000x4000 px] **Recommendations**: - Use a minimum of 5 images. - The first image should have a white background. Use the [Optimize Images API](https://partner.tiktokshop.com/docv2/page/665692b35d39dc02deb49a97) to change the background to white. |
| optimization_fields | array<string> | No | The fields for which you want to generate specific optimization suggestions. Possible values: - TITLE: Product title - DESCRIPTION: Product description (suggestions for this may take more than 10 seconds to generate) - IMAGE: Product image displayed in the image gallery - ALL: Suggestions are generated for all the above fields - NONE: No suggestions will be provided. Default: NONE |
| product_attributes | array<object> | No | A list of general attributes (e.g. manufacturer, country of origin, materials used) that describe the product as a whole, regardless of variant. **Note**: The attributes available for use are determined by the system based on the product's assigned category, with some being mandatory. Retrieve the product attributes by using the [Get Attributes API](https://partner.tiktokshop.com/docv2/page/6509c5784a0bb702c0561cc8). |
| product_id | string | No | The product ID of an existing product in TikTok Shop. - Omit this if you are diagnosing a brand-new product not yet listed in TikTok Shop. - Provide this ID if the product is similar to an existing one, and you want the diagnosis to consider both the existing product's details and the new information in this request. (e.g. 1729592969712203232) |
| size_chart | object | No | The measurement details of the product to help buyers find the right size. **Note**: - For certain product categories, size charts may be required or not supported. Use the [Get Category Rules API](https://partner.tiktokshop.com/docv2/page/6509c0febace3e02b74594a9) to check the requirements. - If size charts are not supported, even if you provide a size chart here, the size chart will not be saved. - Provide either a TikTok Shop size chart template ID or a size chart image; if both are provided, the ID takes priority. |
| size_chart.image | object | No | An image of the size chart. |
| size_chart.image.uri | string | No | The URI of the size chart image. Use the [Upload Product Image API](https://partner.tiktokshop.com/docv2/page/6509df95defece02be598a22) to upload the image first and obtain the corresponding image URI. (e.g. tos-maliva-i-o3syd03w52-us/c668cdf70b7f483c94dbe ) |
| size_chart.template | object | No | A TikTok Shop size chart template generated by the size chart tool in Seller Center > Manage Products > Bulk action > Batch manage size charts. |
| size_chart.template.id | string | No | The size chart template ID. (e.g. 7267563252536723205) |
| title | string | No | The product title. Title length: - DE, ES, FR, IE, IT, JP, UK, US: [1, 255] - BR, MX: [1, 300] - Other regions: [25, 255] (e.g. Men's Fashion Sports Low Cut Cotton Breathable Ankle Short Boat Invisible Socks) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.diagnoses | array<object> | No | Product diagnosis and optimization information. |
| data.diagnoses.suggestion.images | array<object> | No | The optimized main image. Only the first image in the main image set will be optimized. |
| data.diagnoses.suggestion.seo_words | array<object> | No | The SEO keyword suggestions if `diagnoses.field` is "TITLE". |
| data.diagnoses.suggestion.smart_texts | array<object> | No | The intelligent text suggestions for titles and descriptions. |
| data.listing_quality | object | No | Product listing quality information. |
| data.listing_quality.current_tier | string | No | The current quality tier of this product listing. The quality tier of a product listing depends on the quality of the content in its product fields such as the title, image, attributes etc. Possible values: - POOR - FAIR - GOOD **NOTE**: Available only for the US market. (e.g. POOR) |
| data.listing_quality.remaining_recommendations | integer | No | The remaining number of recommendations (see `diagnosis_results`) that must be implemented for the product to advance to the highest tier. **Note**: - To advance to the highest tier, you must implement all recommendations listed in `diagnosis_results`. - Available only for the US market. (e.g. 3) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
