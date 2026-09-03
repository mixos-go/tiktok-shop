---
title: RecommendBrand
category: product
api_name: RecommendBrand
method: POST
path: /product/202309/brands/recommend
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** RecommendBrand

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/brands/recommend

## API Description
This API recommends the Category for each product, based on product title.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| language | string | No | Providing the language that corresponds to the product name. If not provided, it will default to en. EN, ID, MS, TH, VI. Use BCP-47 language codes.For more details, please refer to http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. (e.g. MS) |
| product_title | string | No | You can provide the product title to complete brand recommendations. - Chinese characters are not allowed in the product title. - The product name must have at least 1 character and no more than 255 [1,255] (e.g. Short Boat Invisible Socks) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.brand | object | No | Brand of the brand recommended by the platform. |
| data.brand.id | string | No | Brand ID of the brand recommended by the platform. (e.g. 7082427311584347905) |
| data.brand.name | string | No | The Brand name (e.g. Teas) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
