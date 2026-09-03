---
title: GetProductsSEOWords
category: product
api_name: GetProductsSEOWords
method: GET
path: /product/202405/products/seo_words
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** GetProductsSEOWords

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202405/products/seo_words

## API Description
Obtain SEO suggestions for product titles of live products (status: `ACTIVATE`) to enhance product visibility. Applicable only for the US, UK, and SEA markets.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_ids (query) | array<string> | Yes | The product IDs for which you want to obtain SEO suggestions. - Max IDs: 20 - The product must be live (`ACTIVATE` status) |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.products | array<object> | No | The list of requested products and the corresponding suggestions. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
