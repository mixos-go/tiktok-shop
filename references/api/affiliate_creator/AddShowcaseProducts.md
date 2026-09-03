---
title: AddShowcaseProducts
category: affiliate_creator
api_name: AddShowcaseProducts
method: POST
path: /affiliate_creator/202405/showcases/products/add
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_creator
**API:** AddShowcaseProducts

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_creator/202405/showcases/products/add

## API Description
This API adds the products to the creator's showcase. The platform will return the add status of the products, and error code and error message if the deletion fails.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| add_type | string | No | Specifies how products are added to the showcase. This an enumerated type with values: - PRODUCT_ID - PRODUCT_LINK (e.g. PRODUCT_ID) |
| product_ids | array<string> | No | A list of product identifiers included if `add_type` is set to `PRODUCT_ID`. The products associated with the identifiers are added to the showcase. Maximum length of the list is 20 product identifiers. |
| product_link | string | No | A list of product URLs included if `add_type` is set to `PRODUCT_LINK`. The products associated with the URLs are added to the showcase. Maximum length of the list is 20 product URLs. (e.g. https://www.example.com/api/v1/share/AImHx6DlXqP1) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | A list of product showcase addition errors. |
| data.errors.detail.product_id | string | No | The product identifier. (e.g. 12390753231) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
