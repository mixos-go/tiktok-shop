---
title: GetSellerPermissions
category: seller
api_name: GetSellerPermissions
method: GET
path: /seller/202309/permissions
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** seller
**API:** GetSellerPermissions

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/seller/202309/permissions

## API Description
Retrieves the cross-border operations that a cross-border seller is permitted to perform. You can use this API prior to listing products to check whether a seller has the ability to list global products. Target seller: Cross-border sellers

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.permissions | array<string> | No | The list of cross-border operations that the seller is permitted to perform. Possible values: - MANAGE_GLOBAL_PRODUCT: Indicates the seller is permitted to manage global products listed in TikTok Shops across multiple countries. If this is empty, it means the seller does not have permission to conduct cross-border operations. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
