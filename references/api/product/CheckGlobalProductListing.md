---
title: CheckGlobalProductListing
category: product
api_name: CheckGlobalProductListing
method: POST
path: /product/202404/global_products/listing_check
version: 202404
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** CheckGlobalProductListing

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202404/global_products/listing_check

## API Description
Creating global products will have some prerequisites for sellers to complete. Use this APl to check whether the seller is ready to publish products. Notice: To use this API, you need to request all the listing global product required fields to check whether the product information meets the listing requirements.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| brand_id | string | No | You can get all brand information through the "Get Global Brands" API. The Get Global Brands API will return the available status of the brand. Notice: The unauthorized brand information is only used for statistical purposes and won't be displayed to customers. (e.g. 7082427311584347905) |
| category_id | string | No | The global product category must be a Leaf Category, which is the lowest level of category. Leaf Categories are a category which has no sub categories under it. If you do not use a Leaf Category, your Create Global Product call will be rejected. You can get all category information through the "Get Global Categories" API. (e.g. 600001) |
| certifications | array<object> | No | Based on the category your product belongs to, your product may require product certification. You can obtain the requirements for each category via the "Get Global Category Rule" API. Refers to certain types of products that require prior approval from TikTok Shop to be sold. Sellers who wish to sell restricted products may be required to pass a category approval process before selling such products. i.e US market in Restricted and Unsupported Products Guidelines |
| description | string | No | HTML rich text of a product description to describe your product information in detail. Prerequisites: - Must conform to html syntax - Currently, it only supports html tags <p> <img> <ul> <ol> <li> <br> <strong> <b> <i> <em> <u>, other HTML tags will be filtered out and will not take effect. - Tags can not be nested - This field character limit needs to be within 10000 characters. - It is recommended to avoid using Chinese because the copy will be displayed to local users. - The img tag needs to include the src, width, and height attributes, and the image dimensions can not exceed 4000 - Only Tiktok Shop image URLs are allowed, no external URLs. - <strong> <b> <i> <em> <u> <br> should be used within <p> and <li> Tips - Please provide a clear and comprehensive product description preferably longer than 300 characters, and adding images to the description will help customers make purchasing decisions. - We recommend publishing 3 to 5 selling points. Different selling points are described in segments and a single selling point is within 250 characters to increase the readability of consumers. - We recommend adding auxiliary illustration images under each selling point, and the recommended image resolution is 1200* 1600px, which is convenient for consumers to understand the product more intuitively and accurately. (e.g. <p>Please compare above detailed size with your measurement before purchase.</p> <ul> <li>M-Size</li> <li>XL-Size</li> </ul> <img src="https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/181595ea7d26489284b5667488d708c1~tplv-o3syd03w52-origin-jpeg.jpeg?from=1432613627" /> ) |
| main_images | array<object> | No | You can only use the response parameters of the "Upload Image" API as the request parameters. Prerequisites - Upload 1 to 9 images in png, jpg or jpeg format with file size not more than 5 MB. - The order of image arraylist will become the sequence of images. - The resolution of the image should not be lower than 300*300px, and not higher than 4000px*4000px - Use a language acceptable to the marketplace if need text. Tips - The main body of the product is clear. Please display your product as comprehensively as possible, and it is recommended that there be no less than 5 images. - We recommend using a white background image as the first image,notamosaic containing psoriasis elements: text, logos, borders, color blocks, watermarks or other graphics. |
| manufacturer | object | No | You can fill in the Manufacturer Information using this object, including the following fields |
| manufacturer.address | string | No | The address of the manufacturer. - Must be filled with name, phone number and email to be valid (e.g. 123W 106th St, New York, NY, USA, 10025) |
| manufacturer.email | string | No | The email address of the manufacturer. - Must be a valid email address - Must be filled with name, address and phone number to be valid (e.g. samplemanufacturer101@outlook.com) |
| manufacturer.name | string | No | The name of the manufacturer. - Must be filled with address, phone number and email to be valid (e.g. Sample Manufacturer Name) |
| manufacturer.phone_number | string | No | The phone number of the manufacturer. - Must start with "+" - Must be a valid country code - Must have a " " or "-" between the country code and the local phone number - Must have a valid local phone number - Must be filled with name, address and email to be valid (e.g. +4412345678) |
| package_dimensions | object | No | The dimensions of the global product package may affect the shipping cost and logistics accessibility. Please fill in the accurate information Tips - Enter the product dimensions after it is packaged to calculate the shipping fee based on the dimensions (i.e. volume weight). - If there is a difference between the dimension entered and the actual dimension, you may be required to make up the difference. |
| package_dimensions.height | string | No | The package height must be a non-negative integer. (e.g. 10) |
| package_dimensions.length | string | No | The package length must be a non-negative integer. (e.g. 10) |
| package_dimensions.unit | string | No | The unit for the weight of the global product package must be in metric CENTIMETER, and it should remain in metric units when published in various markets. (e.g. CENTIMETER) |
| package_dimensions.width | string | No | The package width must be a non-negative integer. (e.g. 10) |
| package_weight | object | No | The weight of the global product package must be in metric KILOGRAM. Product weight will affect the calculation of freight. It must be within the limited scope of the carriage. Tips - Enter the weight by weighing the product after it is packaged. - If there is a difference between the weight entered and the actual weight, you may be required to make up the difference. - If the estimated fee based on the weight is greater than the fee based on the dimensions, the product's weight will be used. - TikTok weight calculation: weight * price per unit of weight |
| package_weight.unit | string | No | The unit for the weight of the global product package must be in metric KILOGRAM, and it should remain in metric units when published in various markets. (e.g. KILOGRAM) |
| package_weight.value | string | No | The package weight must be a positive number. (e.g. 1.32) |
| product_attributes | array<object> | No | What are the product attributes of Tiktok Shop? Product attributes are the characteristics or properties of a product that can help buyers make informed purchasing decisions. Product attributes describe the attributes or functionalities of a product, enabling buyers to understand potential safety risks associated with specific product features and usage. Product attributes must be complete, accurate, and consistent with the product's name, description, and images on the listing page. How to Use? You can obtain information about product attributes through the "Get Global Attributes" API. |
| size_chart | object | No | What is the size chart on Tiktok Shop？ A size chart is a guide that helps individuals find the right size by providing measurements and corresponding sizes for different clothing or products. How to use It？ - Whether the size chart is required and related to the category, and you can obtain relevant information through the "Get Global Category Rule" API. - You can choose to pass in the size chart image or the pre-generated size chart template ID. If both are filled, the size chart template ID will be prioritized. |
| size_chart.image | object | No | The image of size chart |
| size_chart.image.uri | string | No | You can use the "Upload Image" API to upload the size chart image, and then use the image URI returned by the "Upload Image" API as the size chart id. (e.g. tos-maliva-i-o3syd03w52-us/c668cdf70b7f483c94dbe) |
| size_chart.template | object | No | The size chart template generated by the size chart tool. This feature can be accessed by going to Seller Center -> Batch Tools -> Manage Template. |
| size_chart.template.id | string | No | Size chart template ID (e.g. 7267563252536723205) |
| skus | array<object> | No | The product skus contain sales attributes, inventory, price, identifier code and other information. |
| skus.identifier_code.code | string | No | Different SKUs are not allowed to use the same identifier code. The rules for the identifier code are as follows: - GTIN: 14 digits, numbers only; - EAN: 8, 13, 14 digits, numbers only; - UPC: 12 digits, numbers only; - ISBN: 13 digits, and the last digit supports input X (uppercase) - The GTIN code you enter should be registered with GS1. (e.g. 10000000000000) |
| skus.identifier_code.type | string | No | Code type value: GTIN、EAN、UPC、ISBN (please input one of them into this field) (e.g. GTIN) |
| skus.price.amount | string | No | The price can not exceed 99999999.99, up to 2 digits after the decimal point. (e.g. 100.00) |
| skus.price.currency | string | No | This price currency is for the SKU of a global product. (e.g. USD) |
| skus.sales_attributes.sku_img.uri | string | No | The image uri returned by the "Upload Image" API. If a product has variants that share more than one sales attribute, such as size and color, you can only choose one of the sales attribute to link an image. Example: - SKU Color-RED(Image 1) Size-XL(No image associated) (allowed) - SKU Color-RED(Image 1) Size-XL(Image 2) (not allowed) (e.g. tos-maliva-i-o3syd03w52-us/c668cdf70b7f483c94dbe) |
| title | string | No | The name of a global product. Prerequisites: - Only English characters and numbers are supported - The product name must include at least 1 character and no more than 255 characters. (e.g. Men's Fashion Sports Low Cut Cotton Breathable Ankle Short Boat Invisible Socks ) |
| video | object | No | You can fill in the video information related to the product, and this video will be displayed to the buyer. Tips - The recommended ratio is 1:1 and recommended resolution is above HD 720p. - We recommend the video duration is within 20s, and the longest should not exceed 60s. - Try highlighting 1-2 core selling points for your product. This will be displayed in the product details section. |
| video.id | string | No | Please follow these steps if you need to upload a video here: - Please upload the video file using the "Upload File" API. - Please get the response information (file id from the "UploadFile" API) and use this information to fill in the field. - If you upload a video, it should have an aspect ratio between 9:16 to 16:9. The file can be no bigger than 20MB. (e.g. v09e40f40000cfu0ovhc77ub7fl97k4w) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.check_result | string | No | Return the result of product pre-validation. including：PASS、FAILED (e.g. PASS) |
| data.fail_reasons | array<object> | No | If check_result is FAILED, fail_reasons will list the specific items that did not pass the inspection. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
