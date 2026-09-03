---
title: RemoveActivityProduct
category: promotion
api_name: RemoveActivityProduct
method: DELETE
path: /promotion/202309/activities/{activity_id}/products
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** promotion
**API:** RemoveActivityProduct

**Method:** DELETE
**HTTP Path:** https://open-api.tiktokglobalshop.com/promotion/202309/activities/{activity_id}/products

## API Description
Use this API to remove products or SKUs from the existing product discount or flash sale promotion activity.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| activity_id (path) | string | Yes | Activity ID |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_ids | array<string> | No | IDs of the products to remove. Max count: 300. |
| sku_ids | array<string> | No | IDs of the SKUs to remove. Max count: 300. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.activity_id | string | No | A unique ID that identifies activities. (e.g. 7136104329798256386) |
| data.status | string | No | Activity status. Possible values: - DRAFT: Promotion activities with this status are not available to TikTok users. - NOT_START: Promotion activities with this status are not available to TikTok users until the set activity start time. - ONGOING: Promotion activities with this status are available to TikTok users. - EXPIRED: Promotion activities with this status are not available to TikTok users because it has expired. - DEACTIVATED: The activity has been deactivated by the seller and is not available to TikTok users. - NOT_EFFECTIVE: The activity is terminated by the platform and is not available to TikTok users. (e.g. ONGOING) |
| data.update_time | integer | No | Activity update time, unix timestamp. (e.g. 1661765135) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
