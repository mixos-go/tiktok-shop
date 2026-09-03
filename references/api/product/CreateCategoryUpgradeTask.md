---
title: CreateCategoryUpgradeTask
category: product
api_name: CreateCategoryUpgradeTask
method: POST
path: /product/202407/products/category_upgrade_task
version: 202407
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** CreateCategoryUpgradeTask

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202407/products/category_upgrade_task

## API Description
Create a task to upgrade live products (status: `ACTIVATE`) from a 3-level to a 7-level category tree. The task runs for up to 2 hours, depending on the number of products. If the upgrade is incomplete after 2 hours, call the API again. To figure out which products' categories have not been upgraded, call the [Search Product API](https://partner.tiktokshop.com/docv2/page/65854ffb8f559302d8a6acda) and set "category_version" to "v1". **Note**: You must wait at least 24 hours after a product goes live to successfully upgrade its category. If you call this API on the same day a new product goes live, the system will be unable to detect it.

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
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
