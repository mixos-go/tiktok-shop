---
title: CreateGlobalProduct
category: product
api_name: CreateGlobalProduct
method: POST
path: /product/202309/global_products
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** CreateGlobalProduct

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/global_products

## API Description
Create global products to be sold in one or multiple shops outside of the seller's base country. You can only create global products in `AVAILABLE` product categories. For other categories, contact your account manager for assistance. After product creation, use the [Publish Global Product API](https://partner.tiktokshop.com/docv2/page/650a64d6defece02be678fd6) to publish and translate the product in the desired markets. **Key concept**: Global products are products created by cross-border sellers to be sold in shops outside of their base country. With global products, cross-border sellers operating across multiple markets can avoid creating the same product for each shop individually. Instead, they just need to create a single global product, which can be published and synced to all their shops, simplifying product management across markets. **Note**: - This API is applicable only for intra-EU sellers and global sellers. To create and list local products intended for sale exclusively in local shops, use the [Create Product API](https://partner.tiktokshop.com/docv2/page/6502fc8da57708028b42b18a) instead. - There may be a limit to the number of products you can list per day. We recommend prioritizing the creation of key products first to ensure they get published. You can find your listing limit on the Seller Center homepage. - The language used in the product content must align with the target market's language (e.g. don't use Chinese), otherwise the listing will fail or be rejected.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| brand_id | string | No | The ID of the brand of this product. **Note**: Unauthorized brands won't be displayed on TikTok Shop. (e.g. 7082427311584347905) |
| category_id | string | No | The ID of the category of this product. - It must be a leaf category that corresponds to the category tree type specified in the `category_version` property. - It must be a main category (`categories.permission_statuses=AVAILABLE` in [Get Global Categories API](650a03f8f1fd3102b91b338a)). **Note**: Refer to TikTok Shop Academy for information on product category restrictions. (e.g. 600001) |
| category_version | string | No | The category tree version to assign this product to. Possible values based on region: - US and SEA regions: `v2`, represents the 7-level category tree. **Important**: If the seller account contains an active US or SEA shop, you must pass `v2` when using this API. - Other regions: `v1`, represents the 3-level category tree. Default: `v1` (e.g. v1) |
| certifications | array<object> | No | The list of certifications for your product. Max count: 10 As per TikTok Shop guidelines, certifications are required for certain restricted product categories. Retrieve the certification requirements for your product from the [Get Global Category Rules API](https://partner.tiktokshop.com/docv2/page/650a056df1fd3102b91b5b8e). Refer to [TikTok Shop Restricted Products Policy](https://seller-us.tiktok.com/university/essay?identity=1&role=1&knowledge_id=3238037484275457&from=policy) for information on product category restrictions. |
| description | string | No | The product description in HTML format. **Note**: - The content must conform to the [HTML syntax](https://html.spec.whatwg.org/). All HTML tags are accepted but to optimize display on the TikTok Shop product detail page, the system will automatically convert certain tags into alternative formats, such as rendering `<table>` tags as images. - Max length: 10,000 characters. - Image guidelines: You must use [TikTok Shop image URLs](6509df95defece02be598a22). Max 30 `<img>` tags, each under 4000px with `src`, `width`, and `height` attributes. **Recommendations**: - If you are syncing a pre-existing description from another platform, include the full HTML source description here. - Provide a detailed description, ideally over 300 characters. - Include 3-5 key selling points, each under 250 characters, with supporting images. - Use 1600x1600 px for the image dimensions. (e.g. ) |
| external_global_product_id | string | No | An external identifier used in an external ecommerce platform. This is used to associate the global product between TikTok Shop and the external ecommerce platform. Max length: 999 characters (e.g. 123456789) |
| main_images | array<object> | No | A list of images to display in the product image gallery. - Max count: 9 - Arrange your image URIs in the sequence that they should appear on TikTok Shop. - Image dimensions: [300x300 px, 4000x4000 px] **Recommendations**: - Use a minimum of 5 images. - The first image should have a white background. Use the [Optimize Images API](https://partner.tiktokshop.com/docv2/page/665692b35d39dc02deb49a97) to change the background to white. |
| manufacturer | object | No | (**Deprecated**: This field is deprecated and will be removed in a future API version. Use `manufacturer_ids` instead.) The product manufacturer's details. **Note**: You must fill in all the nested properties for the manufacturer's information to be valid. |
| manufacturer.address | string | No | The address of the manufacturer. (e.g. 123W 106th St, New York, NY, USA, 10025) |
| manufacturer.email | string | No | The email address of the manufacturer. (e.g. samplemanufacturer101@outlook.com) |
| manufacturer.name | string | No | The name of the manufacturer. (e.g. Sample Manufacturer Name) |
| manufacturer.phone_number | string | No | The phone number of the manufacturer, prefixed by a plus `+` symbol. There must be a space or hyphen between the country code and the local phone number. (e.g. +1-2124108036) |
| manufacturer_ids | array<string> | No | A comma-delimited list of manufacturer IDs. Retrieve the IDs from the [Search Manufacturers API](67066a580dcee902fa03ccf9). **Note**: Applicable only for the EU market in certain categories. Use the [Get Global Category Rules API](650a056df1fd3102b91b5b8e) to check the requirements. |
| package_dimensions | object | No | The dimensions of the product package. **Note**: - Provide the dimensions measured after packing the product. - These values impact the shipping cost, so it is important to ensure that dimensions are accurate. Any discrepancies may lead to additional shipping fees. |
| package_dimensions.height | string | No | The package height. A positive whole number. (e.g. 10) |
| package_dimensions.length | string | No | The package length. A positive whole number. (e.g. 10) |
| package_dimensions.unit | string | No | The unit for the package dimensions. Only `CENTIMETER` is supported. (e.g. CENTIMETER) |
| package_dimensions.width | string | No | The package width. A positive whole number. (e.g. 10) |
| package_weight | object | No | The weight of the product package. **Note**: - Provide the weight measured after packing the product. - This value impacts the shipping cost, so it is important to ensure that the measurements are accurate. Any discrepancies may lead to additional shipping fees. - The package weight will take precedence over package dimensions in fee calculation if the fee based on weight is higher. |
| package_weight.unit | string | No | The unit for the package weight. Only `KILOGRAM` is supported. (e.g. KILOGRAM) |
| package_weight.value | string | No | The package weight, which must be a positive number with up to 3 decimal places. (e.g. 1.31) |
| product_attributes | array<object> | No | A list of general attributes (e.g. manufacturer, country of origin, materials used) that describe the product as a whole, regardless of variant. **Important**: The attributes available for use are determined by the system based on the product's assigned category, with some being mandatory. You must provide the product attributes marked as `is_required` in the response of the [Get Global Attributes API](https://partner.tiktokshop.com/docv2/page/650a0483c16ffe02b8dfc80a). |
| responsible_person_ids | array<string> | No | A comma-delimited list of responsible person IDs. Retrieve the IDs from the [Search Responsible Persons API](67066a55f17b7d02f95d2fb1). **Note**: Applicable only for the EU market in certain categories. Use the [Get Global Category Rules API](650a056df1fd3102b91b5b8e) to check the requirements. |
| size_chart | object | No | The measurement details of the product to help buyers find the right size. **Note**: - For certain product categories, size charts may be required or not supported. Use the [Get Global Category Rules API](https://partner.tiktokshop.com/docv2/page/650a056df1fd3102b91b5b8e) to check the requirements. - If size charts are not supported, even if you provide a size chart here, the size chart will not be saved. - Provide either a TikTok Shop size chart template ID or a size chart image; if both are provided, the ID takes priority. |
| size_chart.image | object | No | An image of the size chart. **Recommendations**: - Resolution: Minimum 1024px on the shorter side - Content: Include key measurement dimensions (e.g., bust, waist, hips, inseam), the more the better. - Format: Use a table with distinct columns and row. - Use only one table per product and image. - Display each dimension in a separate row. - Display units in column headers. |
| size_chart.image.uri | string | No | The URI of the size chart image. Obtain this URI by uploading the images through the [Upload Product Image API](6509df95defece02be598a22) with `use_case=SIZE_CHART_IMAGE`. (e.g. tos-maliva-i-o3syd03w52-us/c668cdf70b7f483c94dbe) |
| size_chart.template | object | No | A TikTok Shop size chart template generated by the size chart tool in Seller Center > Manage Products > Bulk action > Batch manage size charts. |
| size_chart.template.id | string | No | The size chart template ID. (e.g. 7267563252536723205) |
| skus | array<object> | No | A list of global Stock Keeping Units (SKUs) used to identify distinct variants of the product. **Note**: - Max SKUs for EU, JP, UK, US: 300 - Max SKUs for other regions: 100 **Recommendations**: Place the most important variant at the beginning of the array. |
| skus.identifier_code.code | string | No | The identifier code. **Format**: - GTIN: 14 digits - EAN: 8, 13, or 14 digits - UPC: 12 digits - ISBN: 13 digits, or 9 digits ending in capital `X` - JAN: 8 or 13 digits **Note**: The identifier code must be unique for each SKU, with no repetition allowed. (e.g. 10000000000000) |
| skus.identifier_code.type | string | No | The type of identifier code. Possible values: - GTIN - EAN - UPC - ISBN - JAN (e.g. GTIN) |
| skus.price.amount | string | No | The price amount. Max: 99,999,999.99 (e.g. 999) |
| skus.price.currency | string | No | The currency. Possible values: - `USD`: Applicable for global sellers - `EUR`: Applicable for intra-EU sellers (e.g. USD) |
| skus.sales_attributes.sku_img.uri | string | No | The URI of the image. Obtain this URI by uploading the images through the [Upload Product Image API](6509df95defece02be598a22) with `use_case=ATTRIBUTE_IMAGE`. (e.g. tos-maliva-i-o3syd03w52-us/c668cdf70b7f483c94dbe ) |
| source_locale | string | No | The BCP-47 locale code representing the source language used for specifying the product information. Default: en-US Possible values: - de-DE - en-IE - es-ES - fr-FR - it-IT **Note**: - Applicable only for intra-EU sellers. Other sellers can ignore this field and provide the product information in English. - The information provided will be automatically translated into all EU languages supported by TikTok Shop. Ensure the locale matches the language used in field values to avoid inaccurate translations. (e.g. de-DE) |
| title | string | No | The product title. Title length: - DE, ES, FR, IE, IT, JP, UK, US: [1, 255] - MX:[1,300] - Other regions: [25, 255] (e.g. Men's Fashion Sports Low Cut Cotton Breathable Ankle Short Boat Invisible Socks ) |
| video | object | No | A product introduction or promotion video to display for your product. **Recommendations**: - Aspect ratio: 1:1 - Resolution: HD 720p or higher - Duration: 20 - 60 seconds |
| video.id | string | No | The ID of the product video. Use the [Upload Product File API](https://partner.tiktokshop.com/docv2/page/6509dffdc16ffe02b8dc10c5) to upload the video first and obtain the corresponding file ID. (e.g. v09e40f40000cfu0ovhc77ub7fl97k4w) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.global_product_id | string | No | The global product ID generated by TikTok Shop. (e.g. 1729592969712207008) |
| data.global_skus | array<object> | No | A list of global Stock Keeping Units (SKUs) used to identify distinct variants of the product. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
