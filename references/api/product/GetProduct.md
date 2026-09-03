---
title: GetProduct
category: product
api_name: GetProduct
method: GET
path: /product/202309/products/{product_id}
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** GetProduct

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/products/{product_id}

## API Description
Retrieve all properties of a product, except those in the `FREEZE` or `DELETED` status.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_id (path) | string | Yes | The product ID in TikTok Shop. |
| return_under_review_version (query) | boolean | No | A flag to indicate what product information to retrieve if a live product (`ACTIVATE` status) is edited and resent for TikTok Shop review. - True: Retrieves the latest version of the product information that is currently under review. - False: Retrieves a snapshot of the product information that is |
| return_draft_version (query) | boolean | No | A flag to indicate what product information to retrieve if a product has a draft in TikTok Shop. - True: Retrieves the draft version of the product information. - False: Retrieves the latest product information. Default: False **Note**: - Applicable only if the product is in the `DRAFT`, `ACTIVATE`, |
| locale (query) | string | No | The locale or language. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.audit | object | No | Product audit information. **Note**: Applicable only to products listed on TikTok Shop. Not applicable for products listed only on Tokopedia. |
| data.audit.pre_approved_reasons | array<string> | No | The reason why the product is pre-approved. Applicable only if `audit.status=PRE_APPROVED`, otherwise returns an empty array. Possible values: - KYC_PENDING: The seller's onboarding (KYC - Know Your Customer information) is incomplete or awaiting processing. - RESTRICTED_CATEGORY_PENDING: The product is in a restricted category, and category approval is still pending. To request access, submit an application through the Qualification Center on TikTok Shop Seller Center. Applicable only for the US market. |
| data.audit.status | string | No | The product audit status. Possible values: - NONE: The product is not applicable for audit because it has not been submitted for listing on this platform, or it is in a draft, frozen, or deactivated state. - AUDITING: The product is currently being audited. - FAILED: The product failed the audit, or the audit was cancelled. - PRE_APPROVED: The product has passed the audit but is not yet listed due to pending prerequisites. Refer to `pre_approved_reasons` for the prerequisites. - APPROVED: The product passed the audit and has been listed on the platform. (e.g. AUDITING) |
| data.audit_failed_reasons | array<object> | No | TikTok Shop audit failure information. |
| data.brand | object | No | Product brand information. |
| data.brand.id | string | No | The ID of the brand of this product. (e.g. 7082427311584347905) |
| data.brand.name | string | No | The brand name of this product. (e.g. brand xxx aaa) |
| data.category_chains | array<object> | No | Product category tree information. |
| data.certifications | array<object> | No | The list of certifications for your product. |
| data.create_time | integer | No | The time when the product is created. Unix timestamp. (e.g. 1234567890) |
| data.delivery_options | array<object> | No | The custom delivery options applied to this product, overriding the default warehouse delivery option. **Note**: This field is not supported in post-live drafts, therefore the values here will always reflect those in the base version, even if you set `return_draft_version=true`. |
| data.description | string | No | The product description in HTML format. (e.g. <p>Please compare above detailed size with your measurement before purchase.</p> <ul> <li>M-Size</li> <li>XL-Size</li> </ul> <img src="https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/181595ea7d26489284b5667488d708c1~tplv-o3syd03w52-origin-jpeg.jpeg?from=1432613627" /> ) |
| data.external_product_id | string | No | An external identifier used in an external ecommerce platform. This is used to associate the product between TikTok Shop and the external ecommerce platform. (e.g. 172959296971220002) |
| data.global_product_association | object | No | The global product association established through global product publishing or manual binding. **Note**: - Applicable for global sellers and intra-EU sellers. - Not applicable for EU sellers who synchronized products from other markets using the Global Product Replicate (GPR) tool. Refer to `global_listing_policy` instead to find the associated source products. |
| data.global_product_association.global_product_id | string | No | The global product ID in TikTok Shop. (e.g. 1729592969712207920) |
| data.global_product_association.sku_mappings | array<object> | No | The list of sku mappings between the global and local products. |
| data.has_draft | boolean | No | A flag to indicate if the product has a draft. - true: It has a draft. - false: It does not have a draft. (e.g. True) |
| data.id | string | No | The product ID generated by TikTok Shop. (e.g. 1729592969712207008) |
| data.integrated_platform_statuses | array<object> | No | The current status of the product on platforms that are natively integrated with TikTok Shop (e.g. TOKOPEDIA). **Note**: For Indonesia sellers, if you did not set the listing platform as `TOKOPEDIA` when creating or editing a product, this will be omitted. |
| data.is_cod_allowed | boolean | No | A flag indicating whether to show the Cash On Delivery (COD) payment option during checkout. Applicable only for the following markets: - Global sellers: MY, PH, SA, TH, VN - Local sellers: ID, MY, PH, SA, TH, VN (e.g. True) |
| data.is_not_for_sale | boolean | No | A flag indicating whether the product is not for sale and only available through Gift with Purchase (GWP) promotions. Such products won't appear in searches or recommendations True: Not for sale False: For sale (e.g. True) |
| data.is_pre_owned | boolean | No | A flag to indicate if the product is pre-owned. Applicable only if TOKOPEDIA is the sole listing platform. **Note**: Pre-owned products on the TikTok Shop platform are identified by the `category_id`, which must belong to one of the designated pre-owned product categories (e.g. pre-owned luxury bags, luggage, and accessories). (e.g. False) |
| data.is_replicated | boolean | No | A flag to indicate if the product contains a replica (created through local replication) in other local markets. (e.g. False) |
| data.listing_quality_tier | string | No | The current quality tier of this product listing. The quality tier of a product listing depends on the quality of the content in its product fields such as the title, image, attributes etc. Possible values: - POOR - FAIR - GOOD **Note**: Available only for the US market. (e.g. POOR) |
| data.main_images | array<object> | No | A list of images to display in the product image gallery. |
| data.manufacturer_ids | array<string> | No | The list of manufacturer IDs. Pass this value to the `manufacturer_id` field in the [Search Manufacturers API](67066a580dcee902fa03ccf9) to obtain more information about a manufacturer. **Note**: Applicable only for the EU market in certain categories |
| data.minimum_order_quantity | integer | No | The minimum order quantity for the product. Valid range: [1, 20] Applicable only for the Indonesia market and selected sellers in other SEA markets. Contact your account manager for more information about gaining access to this field. (e.g. 1) |
| data.package_dimensions | object | No | The dimensions of the product package |
| data.package_dimensions.height | string | No | The package height. (e.g. 10) |
| data.package_dimensions.length | string | No | The package length. (e.g. 10) |
| data.package_dimensions.unit | string | No | The unit for the package dimensions. (e.g. CENTIMETER) |
| data.package_dimensions.width | string | No | The package width. (e.g. 10) |
| data.package_weight | object | No | The weight of the product package. |
| data.package_weight.unit | string | No | The unit for the package weight. Possible values: - `KILOGRAM` - `POUND` (e.g. KILOGRAM) |
| data.package_weight.value | string | No | The package weight. (e.g. 1.32) |
| data.prescription_requirement | object | No | Prescription related information for the product. **Note**: Applicable only for Tokopedia. This object is returned for all pharmacy products, and omitted for non-pharmacy products. |
| data.prescription_requirement.needs_prescription | boolean | No | A flag to indicate whether a prescription is required to purchase this pharmacy product. (e.g. False) |
| data.primary_combined_product_id | string | No | If the product is a virtual bundle, this value is the ID of the primary product in the bundle. The value is omitted if the product is not a virtual bundle. (e.g. 1729592969712207008) |
| data.product_attributes | array<object> | No | A list of general attributes (e.g. manufacturer, country of origin, materials used) that describe the product as a whole, regardless of variant. |
| data.product_families | array<object> | No | The **live** product family that this product belongs to. A product family is a virtual group of products that share common characteristics (such as flavor, version, or size), allowing them to appear as selectable variations on the product page. **Note**: - Applicable only for US local sellers. - Omitted if this product does not belong to any product family. |
| data.product_status | string | No | The product status in TikTok Shop unrelated to its audit status. Possible values: - INITIAL - DRAFT - ACTIVATE - SELLER_DEACTIVATED - PLATFORM_DEACTIVATED - FREEZE - DELETED **Note**: For Indonesia sellers, if you did not set the listing platform as `TIKTOK_SHOP` when creating or editing a product, this will be omitted. (e.g. SELLER_DEACTIVATED) |
| data.product_types | array<string> | No | The product type. Possible values: - COMBINED_PRODUCT: Indicates this is a virtual bundle product. - IN_COMBINED_PRODUCT: Indicates this product is part of a virtual bundle. - GPR_TARGET_PRODUCT: Indicates this product is synchronized to global listings. Applicable only for the EU market. |
| data.recommended_categories | array<object> | No | Recommended categories for the product based on the product title, description, and images. |
| data.responsible_person_ids | array<string> | No | The list of responsible person IDs. Pass this value to the `responsible_person_id` field in the [Search Responsible Persons API](67066a55f17b7d02f95d2fb1) to obtain more information about a responsible person. **Note**: Applicable only for the EU market in certain categories |
| data.shipping_insurance_requirement | string | No | The shipping insurance purchase requirement imposed on buyers for the product. Possible values: - REQUIRED: Shipping insurance is mandatory and buyers can't opt out. - OPTIONAL: Buyers can choose to purchase shipping insurance through the platform. - NOT_SUPPORTED: Shipping insurance is not supported for the product. Default: OPTIONAL Applicable only if the listing platforms include TOKOPEDIA. (e.g. OPTIONAL) |
| data.shipping_template_id | string | No | Identifier of the shipping template that was bound to the product (e.g. 7552764259994699538) |
| data.size_chart | object | No | The measurement details of the product to help buyers find the right size. |
| data.size_chart.image | object | No | An image of the size chart. |
| data.size_chart.image.height | integer | No | The image height. Unit: px (e.g. 600) |
| data.size_chart.image.thumb_urls | array<string> | No | The URLs to view the image thumbnails. |
| data.size_chart.image.uri | string | No | The URI of the image. (e.g. tos-maliva-i-o3syd03w52-us/6c8519a3663a4d728c4e3c131dc914b4) |
| data.size_chart.image.urls | array<string> | No | The URLs to view the images. |
| data.size_chart.image.width | integer | No | The image width. Unit: px (e.g. 600) |
| data.size_chart.template | object | No | A TikTok Shop size chart template generated by the size chart tool in Seller Center > Manage Products > Bulk action > Batch manage size charts. |
| data.size_chart.template.id | string | No | The size chart template ID. (e.g. 7267563252536723205) |
| data.skus | array<object> | No | A list of Stock Keeping Units (SKUs) used to identify distinct variants of the product. |
| data.skus.combined_skus.brand.id | string | No | The ID of the brand of the source product included in the virtual bundle. (e.g. 7082427311584347905) |
| data.skus.combined_skus.brand.name | string | No | The brand name of the source product included in the virtual bundle. (e.g. brand xxx aaa) |
| data.skus.combined_skus.price.currency | string | No | The currency. Possible values based on the region: - BRL: Brazil - EUR: France, Germany, Ireland, Italy, Spain - GBP: United Kingdom - IDR: Indonesia - JPY: Japan - MXN: Mexico - MYR: Malaysia - PHP: Philippines - SGD: Singapore - THB: Thailand - USD: United States - VND: Vietnam (e.g. USD) |
| data.skus.combined_skus.price.sale_price | string | No | All sellers The source SKU's local display price shown on the product page before any discounts. (e.g. 117.5) |
| data.skus.combined_skus.price.tax_exclusive_price | string | No | Global sellers The source SKU's local pre-tax price. This excludes any applicable charges such as cross-border shipping costs, taxes, and other fees, and therefore does not appear on the product page. Note: Tax-exclusive pricing does not apply to JP and US shops using China warehouses, therefore this value is the same as sale_price. (e.g. 110) |
| data.skus.combined_skus.product_main_image.height | integer | No | The image height. Unit: px (e.g. 600) |
| data.skus.combined_skus.product_main_image.thumb_urls | array<string> | No | The URLs to view the image thumbnails. |
| data.skus.combined_skus.product_main_image.uri | string | No | The URI of the image. (e.g. tos-maliva-i-o3syd03w52-us/6c8519a3663a4d728c4e3c131dc914b4) |
| data.skus.combined_skus.product_main_image.urls | array<string> | No | The URLs to view the images. |
| data.skus.combined_skus.product_main_image.width | integer | No | The image width. Unit: px (e.g. 600) |
| data.skus.combined_skus.sales_attributes.sku_img.height | integer | No | The image height. Unit: px (e.g. 100) |
| data.skus.combined_skus.sales_attributes.sku_img.thumb_urls | array<string> | No | The URLs to view the image thumbnails. |
| data.skus.combined_skus.sales_attributes.sku_img.uri | string | No | The URI of the image. (e.g. tos-maliva-i-o3syd03w52-us/6c8519a3663a4d728c4e3c131dc914b4) |
| data.skus.combined_skus.sales_attributes.sku_img.urls | array<string> | No | The URLs to view the images. |
| data.skus.combined_skus.sales_attributes.sku_img.width | integer | No | The image width. Unit: px (e.g. 100) |
| data.skus.global_listing_policy.inventory_type | string | No | The type of inventory to synchronize. Possible values: - SHARED: Inventory Area Sharing - EXCLUSIVE: Inventory Exclusive (e.g. SHARED) |
| data.skus.global_listing_policy.price_sync | boolean | No | A flag indicating whether the product price is synchronized. (e.g. True) |
| data.skus.global_listing_policy.replicate_source | object | No | The source global listing product to synchronize from. |
| data.skus.global_listing_policy.replicate_source.product_id | string | No | The ID of the source product. (e.g. 1729592969712203232) |
| data.skus.global_listing_policy.replicate_source.shop_id | string | No | The shop ID of the source product. (e.g. 7295929697122032321) |
| data.skus.global_listing_policy.replicate_source.sku_id | string | No | The SKU ID of the source product. (e.g. 1729592969712203232) |
| data.skus.identifier_code.code | string | No | The identifier code. (e.g. 10000000000010) |
| data.skus.identifier_code.type | string | No | The type of identifier code. Possible values: - GTIN - EAN - UPC - ISBN - JAN (e.g. GTIN) |
| data.skus.list_price.amount | string | No | The price amount. (e.g. 1) |
| data.skus.list_price.currency | string | No | The currency. Possible values: USD (e.g. USD) |
| data.skus.pre_sale.fulfillment_type | object | No | Information about the type of pre-sale order fulfillment and the corresponding timeframe. - `handling_duration_days` is for fulfillment with an extended duration. - `release_date` is for starting fulfillment on a fixed date. |
| data.skus.pre_sale.fulfillment_type.handling_duration_days | integer | No | The desired duration for handling a pre-sale order and handing it over to a shipping carrier. Applicable only for the following regions and pre-sale type: **US** - `MADE_TO_ORDER`: Business days, from 3 to 14 days. - `CUSTOM`: Business days, from 3 to 30 days. **UK, EU, SEA, JP, and LATAM** - `PRE_ORDER`: Calendar days, from 3 to 30 days. (e.g. 3) |
| data.skus.pre_sale.fulfillment_type.release_date | integer | No | The date on which the product gets converted into a regular product and becomes available for general purchase. On this date, order handling will also start, changing the status of the order to [`AWAITING_SHIPMENT`](https://partner.tiktokshop.com/docv2/page/650b1b4bbace3e02b76d1011). Applicable only for `PRE_ORDER` in the US. **Note**: This date is a unix timestamp (seconds) based on the seller-selected timezone in Seller Center. (e.g. 1619611761) |
| data.skus.pre_sale.type | string | No | The type of pre-sale. Possible values based on the region: **US** - `PRE_ORDER`: The product is not yet available or released. Fulfillment can be extended by specifying a **release date**. - `MADE_TO_ORDER`: The product is produced only after the order is received. Fulfillment can be extended by specifying a **duration**. - `CUSTOM`: The product requires a fulfillment timeline that exceeds the standard due to other factors. Fulfillment can be extended by specifying a **duration**. **UK, EU, SEA, JP, and LATAM** - `PRE_ORDER`: The product is not yet available or released. Fulfillment can be extended by specifying a **duration**. (e.g. PRE_ORDER) |
| data.skus.price.currency | string | No | The currency. Possible values based on the region: - BRL: Brazil - EUR: France, Germany, Ireland, Italy, Spain - GBP: United Kingdom - IDR: Indonesia - JPY: Japan - MXN: Mexico - MYR: Malaysia - PHP: Philippines - SGD: Singapore - THB: Thailand - USD: United States - VND: Vietnam (e.g. USD) |
| data.skus.price.sale_price | string | No | **All sellers** The SKU's **local display price** shown on the product page before any discounts. (e.g. 117.5) |
| data.skus.price.tax_exclusive_price | string | No | **Global sellers** The SKU's **local pre-tax price**. This excludes any applicable charges such as cross-border shipping costs, taxes, and other fees, and therefore does not appear on the product page. **Note**: Tax-exclusive pricing does not apply to JP and US shops using China warehouses, therefore this value is the same as `sale_price`. (e.g. 110) |
| data.skus.price.unit_price | string | No | The unit price of the SKU. You can display the unit price to facilitate easier price comparisons across different products and packaging sizes. Applicable only for the EU market. **Note**: - This value is available only if you have defined the elements used to calculate this price when creating the product. - Unit price = Selling price/(SKU unit count/base unit count) (e.g. 1) |
| data.skus.sales_attributes.sku_img.height | integer | No | The image height. Unit: px (e.g. 100) |
| data.skus.sales_attributes.sku_img.thumb_urls | array<string> | No | The URLs to view the image thumbnails. |
| data.skus.sales_attributes.sku_img.uri | string | No | The URI of the image. (e.g. tos-maliva-i-o3syd03w52-us/6c8519a3663a4d728c4e3c131dc914b4) |
| data.skus.sales_attributes.sku_img.urls | array<string> | No | The URLs to view the images. |
| data.skus.sales_attributes.sku_img.width | integer | No | The image width. Unit: px (e.g. 100) |
| data.skus.status_info.deactivation_source | string | No | The deactivation source of the SKU with `DEACTIVATED` status. Possible values: - SELLER: Indicates that the seller deactivated the SKU - PLATFORM: Indicates that the platform de-activated the SKU due to violation reasons - COMBO_RELATION: Indicates that the platform de-activated the bundle-SKU due to the deactivation of sub-SKU. (e.g. PLATFORM) |
| data.skus.status_info.status | string | No | The SKU status in TikTok Shop. Possible values: - NORMAL - DEACTIVATED (e.g. DEACTIVATED) |
| data.status | string | No | The product status in TikTok Shop. This status incorporates both the product status and the audit status. Possible values: - DRAFT - PENDING - FAILED - ACTIVATE - SELLER_DEACTIVATED - PLATFORM_DEACTIVATED - FREEZE - DELETED **Note**: For Indonesia sellers, if you did not set the listing platform as `TIKTOK_SHOP` when creating or editing a product, this will be omitted. (e.g. SELLER_DEACTIVATED) |
| data.subscribe_info | object | No | All the Save and Subscribe promotion info associated with the given product. |
| data.subscribe_info.subscribe_discount_details | array<object> | No | All of the Save and Subscribe discount details. |
| data.subscribe_info.subscribe_promotion_config | array<object> | No | A subscription configuration specific to the seller. It outlines the different types of promotions and associated constraints that are available for use. |
| data.subscribe_info.subscribe_status | string | No | An enum outlining whether the given product has an active Subscribe and Save promotion: - ENABLED - NOT_ENABLED (e.g. ENABLED) |
| data.subscribe_info.support_subscribe | boolean | No | A flag outlining whether the seller and given product support Subscribe and Save promotions. (e.g. False) |
| data.title | string | No | The product title. (e.g. Short Boat Invisible Socks) |
| data.update_time | integer | No | The time when the product is last updated. Unix timestamp. (e.g. 1234567899) |
| data.video | object | No | Product video information. |
| data.video.cover_url | string | No | The URL to view the video cover image. (e.g. https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/6c8519a3663a4d728c4e3c131dc914b4~tplv-o3syd03w52-resize-jpeg:300:300.jpeg?from=522366036) |
| data.video.format | string | No | The video format. (e.g. MP4) |
| data.video.height | integer | No | The video height. Unit: px (e.g. 480) |
| data.video.id | string | No | The video ID. (e.g. v09ea0g40000cj91373c77u3mid3g1s0) |
| data.video.size | integer | No | The video's original file size. Unit: MB (e.g. 1000) |
| data.video.url | string | No | The URL to view the video. (e.g. https://v16m-default.akamaized.net/bbae7099581b26cd340beaa7821b2d8c/64de6020/video/tos/alisg/tos-alisg-v-f466fc-sg/oMne9QuzIBN3fIDN7bFCCMbBKuGigg12ghDC8k/?a=0&ch=0&cr=0&dr=0&er=0&lr=default&cd=0%7C0%7C0%7C0&br=2212&bt=1106&cs=0&ds=3&ft=dl9~j-Inz7TKnfsfiyq8Z&mime_type=video_mp4&qs=13&rc=anR4Ojk6ZmYzbTMzODRmNEBpanR4Ojk6ZmYzbTMzODRmNEBsYWFwcjRva2NgLS1kLy1zYSNsYWFwcjRva2NgLS1kLy1zcw%3D%3D&l=202308171159498F7B108584E58B010932&btag=e00048000) |
| data.video.width | integer | No | The video width. Unit: px (e.g. 1280) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
