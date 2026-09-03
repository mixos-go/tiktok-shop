---
title: InventorySearch
category: product
api_name: InventorySearch
method: POST
path: /product/202309/inventory/search
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** InventorySearch

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/inventory/search

## API Description
Retrieve inventory information for multiple products or SKUs. **Note**: - Searches can be based on either product IDs or SKU IDs, not both at the same time. - Passing Product IDs returns the inventory information of all SKUs under the specified products. - Passing SKU IDs returns the inventory information for the specified SKUs.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_ids | array<string> | No | A list of product IDs used to search for inventory information. Max IDs: 100 |
| sku_ids | array<string> | No | A list of SKU IDs used to search for inventory information. Max IDs: 600 **Note**: If both `sku_ids` and `product_ids` are passed, `sku_ids` will take precedence. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.inventory | array<object> | No | Inventory information for the requested products or SKUs. |
| data.inventory.skus.total_available_inventory_distribution.campaign_inventory | array<object> | No | Inventory that is allocated to a specific campaign. |
| data.inventory.skus.total_available_inventory_distribution.creator_inventory | array<object> | No | Inventory that is allocated to TikTok creators. |
| data.inventory.skus.total_available_inventory_distribution.in_shop_inventory | object | No | The remaining inventory available for the shop after deducting those allocated for campaigns and creators. |
| data.inventory.skus.total_available_inventory_distribution.in_shop_inventory.quantity | integer | No | The number of units allocated. (e.g. 50) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
