---
title: CheckListingPrerequisites
category: product
api_name: CheckListingPrerequisites
method: GET
path: /product/202312/prerequisites
version: 202312
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** CheckListingPrerequisites

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202312/prerequisites

## API Description
Check if a TikTok shop is ready to list products. Each shop needs to satisfy a series of TikTok Shop requirements before you can start listing products. Before you proceed to list products, use this API to check if your shop has satisfied all requirements. **Tip**: We recommend that you run this check before any bulk updates to avoid listing issues. For example, sellers may change the delivery option to "Shipped by seller" but fail to add a shipping template, thus blocking the shop from listing products. In this case, the API would return `is_failed=true` for the `SHIPPING_TEMPLATE` check item and you can prompt the seller to fix the problem.

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
| data.check_results | array<object> | No | A list of results from checking whether a shop satisfies TikTok Shop requirements. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
