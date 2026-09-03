---
title: ActivateProduct
category: product
api_name: ActivateProduct
method: POST
path: /product/202309/products/activate
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** ActivateProduct

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/products/activate

## API Description
Activate hidden products that are in the `Seller_deactivated` or `Platform_deactivated` status and display them in the TikTok Shop catalog. After submitting the activation request, the products will be sent to TikTok Shop for auditing and their status will change to `Pending`. If a product passes the audit, its status will change back to `Activate`. You can use the [Product status change webhook](https://partner.tiktokshop.com/docv2/page/650956aff1fd3102b90b6261) to monitor the audit status.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| listing_platforms | array<string> | No | The listing platforms where the product will be activated. Possible values: - TOKOPEDIA - TIKTOK_SHOP Default: TIKTOK_SHOP Applicable only for sellers that migrated from Tokopedia. |
| product_ids | array<string> | No | The product IDs to activate. Max number of IDs: 20 |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | The list of errors that occurred. |
| data.errors.detail.extra_errors | array<object> | No | A list of further nested errors or issues related to the main error. |
| data.errors.detail.product_id | string | No | The ID of the product that could not be activated. (e.g. 1729382588639839583) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
