---
title: UpdateActivityProduct
category: promotion
api_name: UpdateActivityProduct
method: PUT
path: /promotion/202309/activities/{activity_id}/products
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** promotion
**API:** UpdateActivityProduct

**Method:** PUT
**HTTP Path:** https://open-api.tiktokglobalshop.com/promotion/202309/activities/{activity_id}/products

## API Description
Use this API to add the products or SKUs to the list of a product discount activity or a flash deal activity. You can also change the discounts on existing products or SKUs. To remove the products or SKUs from the list, use [Remove Activity Product](https://partner.tiktokshop.com/docv2/page/650acfd84a0bb702c072b4eb).

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
| activity_id | string | No | A unique ID that identifies activities. You cannot update the products in `DEACTIVATED` or `EXPIRED` activities. (e.g. 7136104288010372865) |
| products | array<object> | No | The items to add to the list or the existing items in the list of promotion activity to edit. The length must not exceed `300`. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.activity_id | string | No | A unique ID that identifies different activities. (e.g. 7136104329798256386) |
| data.status | string | No | Activity status. Possible values: - DRAFT: Promotion activities with this status are not available to TikTok users. - NOT_START: Promotion activities with this status are not available to TikTok users until the set activity start time. - ONGOING: Promotion activities with this status are available to TikTok users. - EXPIRED: Promotion activities with this status are not available to TikTok users because it has expired. - DEACTIVATED: The activity has been deactivated by the seller and is not available to TikTok users. - NOT_EFFECTIVE: The activity is terminated by the platform and is not available to TikTok users. (e.g. DRAFT) |
| data.title | string | No | Activity name set by the merchant. (e.g. DiscountPromotion) |
| data.total_count | integer | No | The number of items in this request. When `product_level==PRODUCT`, it's the number of products; when `product_level==VARIATION`, it's the number of SKUs across products. (e.g. 1) |
| data.update_time | integer | No | Latest update time. UNIX timestamp. (e.g. 1661756811) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
