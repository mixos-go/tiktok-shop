---
title: GetGlobalProduct
category: product
api_name: GetGlobalProduct
method: GET
path: /product/202309/global_products/{global_product_id}
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** GetGlobalProduct

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/global_products/{global_product_id}

## API Description
Retrieve all properties of a global product that is in the "DRAFT", "UNPUBLISHED", or "PUBLISHED" status, and the corresponding local product IDs in the published markets.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| global_product_id (path) | string | Yes | Global product ID |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.brand | object | No | Product brand information. |
| data.brand.id | string | No | The ID of the brand of this product. (e.g. 7082427311584347905) |
| data.category | object | No | The category of the product. |
| data.category.id | string | No | The category ID. (e.g. 600002) |
| data.certifications | array<object> | No | The list of certifications for your product. |
| data.create_time | integer | No | The time when the product is created. Unix timestamp. (e.g. 1694522875) |
| data.description | string | No | The product description in HTML format. (e.g. ) |
| data.external_global_product_id | string | No | An external identifier used in an external ecommerce platform. This is used to associate the product between TikTok Shop and the external ecommerce platform. (e.g. 123456789) |
| data.global_seller_id | string | No | The cross-border seller ID. (e.g. 7494083603082020484) |
| data.id | string | No | The global product ID in TikTok Shop. (e.g. 1729592969712207008) |
| data.main_images | array<object> | No | A list of images to display in the product image gallery. |
| data.manufacturer | object | No | (**Deprecated**: This field is deprecated and will be removed in a future API version. Use `manufacturer_ids` instead.) The product manufacturer's details. If there are more than one manufacturer information, only the first-added manufacturer will be returned in this field. |
| data.manufacturer.address | string | No | The address of the manufacturer. (e.g. 123W 106th St, New York, NY, USA, 10025) |
| data.manufacturer.email | string | No | The email address of the manufacturer. (e.g. samplemanufacturer101@outlook.com ) |
| data.manufacturer.name | string | No | The name of the manufacturer. (e.g. Sample Manufacturer Name) |
| data.manufacturer.phone_number | string | No | The phone number of the manufacturer. (e.g. +1-2124108036) |
| data.manufacturer_ids | array<string> | No | A comma-delimited list of manufacturer IDs. Retrieve the IDs from the [Search Manufacturers API](67066a580dcee902fa03ccf9). **Note**: Applicable only for the EU market in certain categories. |
| data.package_dimensions | object | No | The dimensions of the product package. |
| data.package_dimensions.height | string | No | The package height. (e.g. 10) |
| data.package_dimensions.length | string | No | The package length. (e.g. 10) |
| data.package_dimensions.unit | string | No | The unit for the package dimensions. (e.g. CENTIMETER) |
| data.package_dimensions.width | string | No | The package width. (e.g. 10) |
| data.package_weight | object | No | The weight of the product package. |
| data.package_weight.unit | string | No | The unit for the package weight. (e.g. KILOGRAM) |
| data.package_weight.value | string | No | The package weight. (e.g. 1.32) |
| data.product_attributes | array<object> | No | A list of general attributes (e.g. manufacturer, country of origin, materials used) that describe the product as a whole, regardless of variant. |
| data.products | array<object> | No | The local products associated through global product publishing or manual binding. |
| data.responsible_person_ids | array<string> | No | A comma-delimited list of responsible person IDs. Retrieve the IDs from the [Search Responsible Persons API](67066a55f17b7d02f95d2fb1). **Note**: Applicable only for the EU market in certain categories. |
| data.size_chart | object | No | The measurement details of the product to help buyers find the right size. |
| data.size_chart.image | object | No | An image of the size chart. |
| data.size_chart.image.height | integer | No | The image height. Unit: px (e.g. 600) |
| data.size_chart.image.uri | string | No | The URI of the image. (e.g. tos-maliva-i-o3syd03w52-us/c668cdf70b7f483c94dbe) |
| data.size_chart.image.width | integer | No | The image width. Unit: px (e.g. 600) |
| data.size_chart.template | object | No | A TikTok Shop size chart template generated by the size chart tool in Seller Center > Manage Products > Bulk action > Batch manage size charts. |
| data.size_chart.template.id | string | No | The size chart template ID. (e.g. 7267563252536723205) |
| data.skus | array<object> | No | A list of global Stock Keeping Units (SKUs) used to identify distinct variants of the product. |
| data.skus.identifier_code.code | string | No | The identifier code. (e.g. 10000000000010) |
| data.skus.identifier_code.type | string | No | The type of identifier code. Possible values: - GTIN - EAN - UPC - ISBN - JAN (e.g. GTIN) |
| data.skus.price.amount | string | No | The price amount. (e.g. 1.01) |
| data.skus.price.currency | string | No | The currency. Possible values: - `USD`: Applicable for global sellers - `EUR`: Applicable for intra-EU sellers (e.g. USD) |
| data.skus.price.unit_price | string | No | The unit price of the SKU. You can display the unit price to facilitate easier price comparisons across different products and packaging sizes. Applicable only for the EU market. **Note**: - This value is available only if you have defined the elements used to calculate this price when creating the product. - Unit price = Selling price/(SKU unit count/base unit count) (e.g. 1.00) |
| data.skus.sales_attributes.sku_img.height | integer | No | The image height. Unit: px (e.g. 600) |
| data.skus.sales_attributes.sku_img.thumb_urls | array<string> | No | The URLs to view the image thumbnails. |
| data.skus.sales_attributes.sku_img.uri | string | No | The URI of the image. (e.g. tos-maliva-i-o3syd03w52-us/6c8519a3663a4d728c4e3c131dc914b4) |
| data.skus.sales_attributes.sku_img.urls | array<string> | No | The URLs to view the images. |
| data.skus.sales_attributes.sku_img.width | integer | No | The image width. Unit: px (e.g. 600) |
| data.source_locale | string | No | The BCP-47 locale code representing the source language used for specifying the product information. Default: en-US Possible values: - de-DE - en-IE - es-ES - fr-FR - it-IT **Note**: Applicable only for intra-EU sellers. (e.g. fr-FR) |
| data.title | string | No | The product title. (e.g. Short Boat Invisible Socks) |
| data.update_time | integer | No | The time when the product is last updated. Unix timestamp. (e.g. 1694522875) |
| data.video | object | No | Product video information. |
| data.video.id | string | No | The video ID. (e.g. v09ea0g40000cj91373c77u3mid3g1s0) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
