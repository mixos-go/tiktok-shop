---
title: GetCustomerTabVisibility
category: customer_engagement
api_name: GetCustomerTabVisibility
method: GET
path: /customer_engagement/202501/customer_tab/visibility
version: 202501
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** customer_engagement
**API:** GetCustomerTabVisibility

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/customer_engagement/202501/customer_tab/visibility

## API Description
Checks whether the Customer tab is visible for the specified shop.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | Yes | Shop_cipher is required for cross-border shops, and optional for local shops. It's unique for each shop. Get the this property from the Get Authorized Shop API dynamically. Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.is_visible | boolean | No | A flag to indicate if the Customer tab is visible to the shop. (e.g. True) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
