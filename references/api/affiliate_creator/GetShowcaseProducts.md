---
title: GetShowcaseProducts
category: affiliate_creator
api_name: GetShowcaseProducts
method: GET
path: /affiliate_creator/202405/showcases/products
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_creator
**API:** GetShowcaseProducts

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_creator/202405/showcases/products

## API Description
This API lists the products in the creator's showcase, paginated by specified page size and iterated through pages by page token for up to 2000 products in the showcase. This API is generally used when a creator would like to view the products in the showcase. The platform will return the product details in the showcase, as well as the products in the livebag if the creator is live streaming.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_size (query) | integer | Yes | The number of results to be returned per page. Valid range: [1-20]. |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the next_page_token from a previous response. It is not needed for the first page. |
| origin (query) | string | Yes | Set to `LIVE` to indicate the request originates from a Live room. Set to `SHOWCASE` to indicate that the request originates from the Showcase. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. (e.g. V231as2V0PTAK) |
| data.products | array<object> | No | A list of products. |
| data.products.addition.customized_main_images | array<object> | No | A list of product images. |
| data.products.collaboration.id | string | No | The open or target collaboration identifier. (e.g. 7495383576027499219) |
| data.products.collaboration.partner | object | No | The partner information. |
| data.products.collaboration.partner.id | string | No | The partner identifier. (e.g. 123456789) |
| data.products.collaboration.partner.name | string | No | The partner name. (e.g. Partner Name) |
| data.products.collaboration.type | string | No | The collaboration type. This an enumerated type with values: 1 - Open Collaboration 2 - Target Collaboration 5 - Partner Campaign 11 - Flat Fee 12 - Collaboration Plus 13 - Affiliate Promotion (e.g. OPEN) |
| data.products.commission.rate | integer | No | The commission rate in hundredths of a percent. For example, `3587` is a commission rate of `35.87%`. The range of this value is [100, 8000]. (e.g. 3000) |
| data.products.commission.reward_rate | integer | No | The reward commission rate in hundredths of a percent. For example, `3587` is a commission rate of `35.87%`. (e.g. 500) |
| data.products.price.original_price | object | No | The original price of the product. |
| data.products.price.original_price.currency | string | No | The currency code. (e.g. USD) |
| data.products.price.original_price.maximum_amount | string | No | The highest original price for the product. (e.g. 100.00) |
| data.products.price.original_price.minimum_amount | string | No | The lowest original price for the product. (e.g. 12.21) |
| data.products.price.platform_discount_price | object | No | An object including data about the product platform discount price. |
| data.products.price.platform_discount_price.currency | string | No | The currency code. (e.g. USD) |
| data.products.price.platform_discount_price.maximum_amount | string | No | The highest product platform discount price. (e.g. 100.00) |
| data.products.price.platform_discount_price.minimum_amount | string | No | The lowest product platform discount price. (e.g. 12.21) |
| data.products.price.seller_discount_price | object | No | An object including data about the product discount price. |
| data.products.price.seller_discount_price.currency | string | No | The currency code. (e.g. USD) |
| data.products.price.seller_discount_price.maximum_amount | string | No | The highest discount price. (e.g. 100.00) |
| data.products.price.seller_discount_price.minimum_amount | string | No | The lowest discount price. (e.g. 12.21) |
| data.products.shop.name | string | No | The TikTok Shop name. (e.g. Gift store) |
| data.products.status.added_status | string | No | The product showcase status. This is an enumerated type with values: - NOT_ADDED - ADDED - REJECTED (e.g. ADDED) |
| data.products.status.inventory_status | string | No | The product inventory status. This an enumerated type with values: - IN_STOCK - SOLD_OUT (e.g. IN_STOCK) |
| data.products.status.is_hidden | boolean | No | Set to `false` if the product is visible in the showcase. Set to `true` if the product is hidden from the showcase. (e.g. False) |
| data.products.status.review_status | string | No | The product review status. This is an enumerated type with values: - APPROVED - CHANGES_UNDER_REVIEW - UNAVAILABLE - ZERO_COMMISSION (e.g. APPROVED) |
| data.total_count | integer | No | Total count of products in the response. (e.g. 15) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
