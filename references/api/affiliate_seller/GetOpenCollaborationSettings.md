---
title: GetOpenCollaborationSettings
category: affiliate_seller
api_name: GetOpenCollaborationSettings
method: GET
path: /affiliate_seller/202409/open_collaboration_settings
version: 202409
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** GetOpenCollaborationSettings

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202409/open_collaboration_settings

## API Description
Get the open collaboration settings, including auto add settings.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.open_collaboration_settings | object | No | Settings detail |
| data.open_collaboration_settings.auto_add_product | object | No | Setting for auto add products to affiliate |
| data.open_collaboration_settings.auto_add_product.commission_rate | integer | No | The default commission rate of open collaboration created for the auto-added products. The unit is 0.01%. For example, to set the default commission rate to 10%, set the value to `1000`. If so, if the price of a product is $50 USD, the creator would receive $5 USD for every piece of product sold. The range is `[100, 8000]`. When enable=false, this field will not be returned. (e.g. 1000) |
| data.open_collaboration_settings.auto_add_product.enable | boolean | No | - true: The seller can add existing non-affiliate products to open collaboration at one time, and future products will also be added automatically. - false: Future products will not be added to open collaboration automatically, but existing products' open collaboration will not be reverted. (e.g. True) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
