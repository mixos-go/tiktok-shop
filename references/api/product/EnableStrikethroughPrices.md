---
title: EnableStrikethroughPrices
category: product
api_name: EnableStrikethroughPrices
method: POST
path: /product/202502/products/{product_id}/strikethrough_prices/enable
version: 202502
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** EnableStrikethroughPrices

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202502/products/{product_id}/strikethrough_prices/enable

## API Description
Enable the display of list price as strikethrough price on your product page. To build trust with customers, all list prices must be verified before they can be displayed as strikethrough prices. Use this API to submit pricing information from external ecommerce platforms to TikTok Shop for verification of the list price provided during product creation or editing. If verified to be legitimate, the list price will be displayed as the strikethrough price on the product page whenever applicable (e.g., when a discount is applied). **Note**: The submitted pricing information will expire 90 days after the submission date. You will need to resubmit new information if you want to keep displaying the strikethrough price.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_id (path) | string | Yes | The product ID in TikTok Shop. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| external_product_id | string | No | An external product identifier used on an external ecommerce platform. This must match the `external_product_id` used when creating the product. Retrieve it from [Get Product](6509d85b4a0bb702c057fdda). Max length: 999 characters (e.g. 000059296971220002) |
| skus | array<object> | No | The list of SKUs for which you want to submit external pricing information for verification. |
| skus.external_retail_price.amount | string | No | The price amount. Valid range: [0.01, 7600] (e.g. 1) |
| skus.external_retail_price.currency | string | No | The currency used. Possible values: USD (e.g. USD) |
| skus.external_transaction_price.amount | string | No | The price amount. Valid range: [0.01, 7600] **Note**: The value must be equal to or greater than the list price specified during product creation or editing. (e.g. 1) |
| skus.external_transaction_price.currency | string | No | The currency used. Possible values: USD (e.g. USD) |
| skus.external_transaction_price.image | object | No | An image to prove the authenticity of the highest transaction price. This can be a screenshot of the order or invoice that contains the highest transaction price. Please ensure any customer information is masked. |
| skus.external_transaction_price.image.uri | string | No | The URI of the image. Use the [Upload Product Image API](https://partner.tiktokshop.com/docv2/page/6509df95defece02be598a22) to upload the image as a `CERTIFICATION_IMAGE` and obtain the corresponding URI. (e.g. tos-maliva-i-o3syd03w52-us/c668cdf70b7f483c94dbe) |
| skus.external_transaction_price.transaction_time | integer | No | The time at which the highest transaction price was recorded in the past 90 days. Unix timestamp. (e.g. 1694309208) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | The list of errors that occurred. |
| data.errors.detail.sku_id | string | No | The TikTok Shop SKU ID where the error occurred. (e.g. 1729592969712207111) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
