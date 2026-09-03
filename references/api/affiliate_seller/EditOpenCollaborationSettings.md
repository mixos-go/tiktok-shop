---
title: EditOpenCollaborationSettings
category: affiliate_seller
api_name: EditOpenCollaborationSettings
method: POST
path: /affiliate_seller/202405/open_collaboration_settings
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** EditOpenCollaborationSettings

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202405/open_collaboration_settings

## API Description
This API is used to edit a Seller's open collaboration settings. It allows you to enroll your existing product catalog and all future products into an open collaboration plan. It also allows you to turn this setting off at any point. By default, this option is turned off for all Sellers.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| auto_add_product | object | No | An object with properties to automatically add products to affiliate open collaboration plans. |
| auto_add_product.commission_rate | integer | No | The commission rate in hundredths of a percent. For example, `3587` is a commission rate of `35.87%`. This value must a minimum of `100` and a maximum of `8000`. Not that setting the `enable` property to `false` overrides this property. (e.g. 1000) |
| auto_add_product.enable | boolean | No | Set to `true` if products are automatically added to affiliate open collaboration plans. The seller can add existing non-affiliate products to open collaboration at one time, and future products are added automatically. Set to `false` if otherwise. (e.g. True) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
