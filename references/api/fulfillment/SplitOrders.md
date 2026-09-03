---
title: SplitOrders
category: fulfillment
api_name: SplitOrders
method: POST
path: /fulfillment/202309/orders/{order_id}/split
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** SplitOrders

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202309/orders/{order_id}/split

## API Description
Use this API to confirm an order split. Note that ​​supported split levels vary by region​​: - Some regions support ​​item-level splits​​ (splitting individual units of the same SKU). - Others only support ​​all-units splits​​ (splitting different SKUs into separate packages). Here are two examples of supported splits: - ​​**Case 1**: all-units split​​, applicable for orders in BR, SEA, MX (local sellers) Split a buyer order of SKU A of quantity 2 and SKU B of quantity 1 into two separate packages: - ​​Package 1​​: all units of SKU A ​​ - Package 2​​: all units of SKU B - **​​Case 2**: item-level split​​, applicable for orders in EU, JP, MX (global sellers), UK, US Split the same order contents into three individual packages: - ​​Package 1​​: 1 unit of SKU A ​ - ​Package 2​​: 1 unit of SKU A ​​ - Package 3​​: 1 unit of SKU B

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| order_id (path) | string | Yes | TikTok Shop order ID. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| splittable_groups | array<object> | No | Input list of splittable groups. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.packages | array<object> | No | The number of packages returned is dependent on the number of `splittable_group_ids` you sent in the request. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
