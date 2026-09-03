---
title: GenerateAffiliateProductPromotionLink
category: affiliate_seller
api_name: GenerateAffiliateProductPromotionLink
method: POST
path: /affiliate_seller/202405/products/{product_id}/promotion_link/generate
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** GenerateAffiliateProductPromotionLink

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202405/products/{product_id}/promotion_link/generate

## API Description
The user of this API is a partner developer, on behalf of Sellers. This API is used to generate affiliate exclusive product link based on all open collaboration products available within the TikTok Shop Affiliate Product Marketplace. This API generates a link, at the product ID level (which belongs to a Seller). This link, can be distributed to creators, by the partner developer(the user of this API). The creator adds this product to the creators' showcase through this url. This link, represents an affiliate partner's ability to bring higher matchmaking effectiveness on behalf of a seller. If a creator does indeed add the product to showcase through this link, then the downstream consumer purchases will be able to be attributed to this partner due to the link generation capabilities.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_id (path) | string | Yes | The product identifier. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=650 |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.product_promotion_link | string | No | The URL for a web page with information about the product promotion. (e.g. https://www.example.com/t/acibsnsgSIngls) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
