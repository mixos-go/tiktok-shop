---
title: CreatorSelectAffiliateProduct
category: affiliate_creator
api_name: CreatorSelectAffiliateProduct
method: POST
path: /affiliate_creator/202501/selection/products/search
version: 202501
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_creator
**API:** CreatorSelectAffiliateProduct

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_creator/202501/selection/products/search

## API Description
As a creator, you can use this API to filter products using various conditions. When no filter parameter is given, the API will return affiliate products recommended by algorithm with no specific limits.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_token (query) | string | No | Pagination offset determines where you begin to search for. It's empty when raise your first request. |
| page_size (query) | integer | No | The value of "page_size" must be greater than 0 and less than or equal to 50. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| filter_params | object | No | The parameters for filtering the products searched |
| filter_params.category_ids | array<string> | No | The categories' unique IDs of the searched product needed to be limited in this param Prerequisites: - The length of category_ids is less than 1000 |
| filter_params.commission_rate_range | object | No | The commission rate range of the searched product needed to be limited |
| filter_params.commission_rate_range.rate_ge | integer | No | The minimum value of commission rate in the search scope Prerequisites: - The value of must be greater than 100 or equal to 100, and less than 8000 or equal to 8000. - This value equals the actual commission rate multiplied by 100. For example: 1200 means the actual commission rate is 12% - Currently, the value will be automatically truncated to its floor hundred. For instance, 1239 will be truncated to 1200 (e.g. 100) |
| filter_params.commission_rate_range.rate_le | integer | No | The maximum value of commission rate in the search range Prerequisites: - The value of must be greater than 100 or equal to 100, and less than 8000 or equal to 8000. - This value equals the actual commission rate multiplied by 100. For example: 1200 means the actual commission rate is 12% - Currently, the value will be automatically truncated to its floor hundred. For instance, 1239 will be truncated to 1200 (e.g. 200) |
| filter_params.pool_ids | array<string> | No | The list of product pool IDs. A product pool is edited by the operations, corresponding to a bunch of product IDs. The product pool IDs will be provided by the operations offline. Notice: Currently, if no title_keyword is given, only 1 pool_id is supported. So in this situation, the length of this field should be 1, otherwise we will only use the first pool. |
| filter_params.price_range | object | No | The sale price range of the searched product needed to be limited |
| filter_params.price_range.price_ge | string | No | The minimum price of the searched product needed to be limited The unit is the local currency of the creator's marketing country. Prerequisites: - The value must be greater than or equal to zero - If no value is given, it means 0 - Currently, the value needs to be an integer, otherwise we will automatically truncate it to its floor integer. For instance, 12.54 will be truncated to 12 (e.g. "12") |
| filter_params.price_range.price_le | string | No | The maximum price of the searched product needed to be limited The unit is the local currency of the creator's marketing country. Prerequisites: - The value must be greater than or equal to zero - If no value is given, it means 0 - Currently, the value needs to be an integer, otherwise we will automatically truncate it to its floor integer. For instance, 12.54 will be truncated to 12 (e.g. "100") |
| filter_params.product_ids | array<string> | No | The exact product IDs the search needs. If this field is not empty, we will ignore other fields Prereqsites: The length of product_ids should be less or equal than 50 |
| filter_params.shop_rating_range | object | No | The shop rating range of the searched product needed to be limited |
| filter_params.shop_rating_range.rating_ge | integer | No | The minimum value of shop rating for the search. Prerequisites: - The value of must be greater than or equal to 0, and less than 50 or equal to 50. - This value equals the actual shop rating multiplied by 10. For example, 35 means the actual shop rating is 3.5 (e.g. 40) |
| filter_params.shop_rating_range.rating_le | integer | No | The maximum value of shop rating for the search. Prerequisites: - The value of must be greater than or equal to 0, and less than 50 or equal to 50. - This value equals the actual shop rating multiplied by 10. For example, 35 means the actual shop rating is 3.5 (e.g. 48) |
| filter_params.sold_quantity_range | object | No | The sales volume range of the searched product needed to be limited |
| filter_params.sold_quantity_range.quantity_ge | integer | No | The minimum value of product sold quantity. Prerequisites: - The value must be greater than or equal to 0 - If no value is given, it means 0 (e.g. 10000) |
| filter_params.sold_quantity_range.quantity_le | integer | No | The maximum value of product sold quantity. Prerequisites: - The value must be greater than or equal to 0 - If no value or 0 is given, it means infinity (e.g. 30000) |
| filter_params.title_keyword | string | No | The keyword of product name, which will be used for fuzzy search on products. There is no limit to the language of product name Prerequisites: - A keyword must have at least 1 character and no more than 255 characters. (e.g. "Men T-shirt") |
| sort_params | object | No | The params for sorting the products searched |
| sort_params.sort_type | string | No | The type of sort we applied to the result. Currently, there are 6 types: 1. "RECOMMENDED" Follow the algorithm recommended order 2. "BEST_SELLERS" Sort by historical sold numbers from high to low 3. "LOW_PRICE" Sort by price from low to high 4. "HIGH_PRICE" Sort by price from high to low 5. "NEWLY_RELEASED" Sort by the product edition time from late to early 6. "HIGH_COMMISSION_RATE" Sort by commission rate from high to low If no value is given, we will follow algorithm recommended order, namely the same as "RECOMMENDED" (e.g. "RECOMMENDED") |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | Next page token (e.g. "b2Zmc2V0PTQw") |
| data.products | array<object> | No | The searched products |
| data.products.commission.amount | string | No | The commission amount of the product multiplied by 1000, which is equal to floor_price * commission_rate * 1000 (e.g. "8010.2") |
| data.products.commission.rate | integer | No | The commission rate of the product multiplied by 10000, eg. 1500 means 15% (e.g. 1500) |
| data.products.market_performance.historical_sold_quantity | integer | No | The total number of products sold in history (e.g. 618) |
| data.products.price.ceiling_price | string | No | The maximum price of the product over all skus (e.g. "85.169") |
| data.products.price.currency | string | No | The three-letter code of the price currency, obeying the rules in ISO 4217 (e.g. "VND") |
| data.products.price.floor_price | string | No | The minimum price of the product over all skus (e.g. "53.468") |
| data.products.review.count | integer | No | The count of reviews (e.g. 43) |
| data.products.review.overall_score | string | No | The average score of the product, the range is (0,5] (e.g. "4.5") |
| data.products.shop.logo_url | string | No | The logo URL of the shop (e.g. "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/7220334d431949e0972ce009d8d8d09b~tplv-aphluv4xwc-resize-image:800:800.image?from=604555543") |
| data.products.shop.name | string | No | The name of the shop (e.g. "WUHAN LANGSI") |
| data.products.shop.rating | string | No | The rating of the shop, the range is (0,5] (e.g. "3.5") |
| data.products.stock.quantity | integer | No | The detailed stock quantity of the product (e.g. 123) |
| data.total_count | integer | No | The total count of products that meet input filtering conditions. In the situation that no title_keyword is given, this field will be 0 (e.g. 10000) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
