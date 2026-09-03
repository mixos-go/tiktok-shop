---
title: SearchOpenCollaboration
category: affiliate_seller
api_name: SearchOpenCollaboration
method: POST
path: /affiliate_seller/202412/open_collaborations/search
version: 202412
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** SearchOpenCollaboration

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202412/open_collaborations/search

## API Description
Retrieve all open collaboration information from merchants, including commission rate, add to showcase and post content creator count.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_token (query) | string | No | Pagination offset determines where you begin to search for. It's empty when you raise your first request. |
| page_size (query) | integer | Yes | The value of "page_size" must be greater than 0 and less than or equal to 100. |
| sort_order (query) | string | No | Default value of "sort_order" is DESC. Enum: - ASC：means to sort data in ascending order - DESC：means to sort data in descending order |
| sort_field (query) | string | No | Some sorting fields are as follows: - product_original_price: sort by products' original price. By default, the open collaborations are sorted in descending order by creation time. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| keyword | string | No | Search based on the product name or product ID. Pass in the appropriate value based on the keyword_type above. (e.g. 7625459350921) |
| keyword_type | string | No | Pass in the parameter type which you use to query open collaborations. You can query based on: - PRODUCT_ID：If you use PRODUCT_ID to search, you can search for open collaboration information for a specified product ID. - PRODUCT_NAME: If you use PRODUCT_NAME to search, you can fuzzy search for open collaboration information involving related product names. (e.g. PRODUCT_ID) |
| top_level_category_id | string | No | The category of the searched product needs to be limited in this param. Prerequisites: - The value of field category_id must be greater than 0. - Currently, it only supports first-level categories (e.g. 60001) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | Next page token (e.g. b2Zmc2V0PTEw) |
| data.open_collaborations | array<object> | No | The open collaborations |
| data.open_collaborations.current_commission.end_time | integer | No | The effective end time of the commission rate. (e.g. 1727625600) |
| data.open_collaborations.current_commission.rate | integer | No | The commission rate for this product is set by merchants for creators' public promotion. The range of this value is [100, 8000]. This value is expressed in 1/10000 increments. For example: 3000 means the actual commission rate is 30.00%, and 3555 means 35.55% (e.g. 3000) |
| data.open_collaborations.current_commission.start_time | integer | No | The time when the commission rate becomes effective. (e.g. 1725334422) |
| data.open_collaborations.product.id | string | No | Product's unique id. (e.g. 1729432087292775344) |
| data.open_collaborations.product.inventory | integer | No | The inventory of this product. (e.g. 1274) |
| data.open_collaborations.product.main_image_url | string | No | The product image url. (e.g. https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/fa0387fa5a204dcfa44d5be75877a163~tplv-o3syd03w52-origin-webp.webp?from=3478900499) |
| data.open_collaborations.product.original_price | object | No | The product's original price |
| data.open_collaborations.product.original_price.currency | string | No | Currency Symbol (e.g. USD) |
| data.open_collaborations.product.original_price.maximum_amount | string | No | The maximum original price of all skus of this product. (e.g. 100.00) |
| data.open_collaborations.product.original_price.minimum_amount | string | No | The minimum original price of all skus of this product. (e.g. 12.21) |
| data.open_collaborations.product.status | string | No | Product's status. Field values: - LIVE: When the product is normal for sale, return to the LIVE status - OUT_OF_STOCK: When the product is out of stock for the consumer, the OUT_OF_STOCK state is returned - SELLER_DEACTIVATE: When the product is deactivated by the merchant, the SELLER_DEACTIVATE status is returned - PLATFORM_DEACTIVATE: When the product is deactivated by the platform or is not available for sale, the PLATFORM_DEACTIVATE status is returned - GNE_REJECT: When the product is governed or the open collaboration is dismissed, the GNE_REJECT state is returned - DELETE: When the product is deleted, the DELETE status is returned - OTHER: When the product is in an unsaleable state, such as draft, frozen, review, etc, the OTHER status is returned (e.g. LIVE) |
| data.open_collaborations.product.title | string | No | Product's name. (e.g. Blue t-shirt) |
| data.total_count | integer | No | Total count of products that satisfy all the input search conditions. (e.g. 10000) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
