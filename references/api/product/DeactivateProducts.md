---
title: DeactivateProducts
category: product
api_name: DeactivateProducts
method: POST
path: /product/202309/products/deactivate
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** DeactivateProducts

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/products/deactivate

## API Description
Deactivate products that are in the `Activate` status and hide them from buyers. The status changes to `Seller_deactivated` after deactivation. In the event there's some issue with a product (e.g. out of stock), you can deactivate the product and hide it temporarily from buyers. When the issues are resolved, you can activate the product again by using the [Activate Product API](https://partner.tiktokshop.com/docv2/page/650306ff5a12ff0294eab4a9).

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| listing_platforms | array<string> | No | The listing platforms where the product will be deactivated. Possible values: - TOKOPEDIA - TIKTOK_SHOP Default: TIKTOK_SHOP Applicable only for sellers that migrated from Tokopedia. |
| product_ids | array<string> | No | The product IDs to deactivate. Max number of IDs: 20. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | The list of errors that occurred. |
| data.errors.detail.product_id | string | No | The ID of the product that could not be deactivated. (e.g. 1729382588639839583) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
