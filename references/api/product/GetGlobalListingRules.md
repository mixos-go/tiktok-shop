---
title: GetGlobalListingRules
category: product
api_name: GetGlobalListingRules
method: GET
path: /product/202507/global_listing_rules
version: 202507
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** GetGlobalListingRules

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202507/global_listing_rules

## API Description
Retrieves the global listing rules for a local shop that belongs to a global seller. E.g. The supported listing methods or the inventory allocation rules. The rules differ by the markets they serve. **Note**: Applicable only for global sellers.

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
| data.inventory_rules | array<object> | No | A list of inventory allocation rules for all warehouses linked to the shop. |
| data.listing_methods | array<string> | No | The methods at which sellers can list products in this shop. Possible values: - GLOBAL_PUBLISHING: Create a global product, then publish it to target local markets. - LOCAL_REPLICATION: Create local product, then replicate it to other target local markets. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
