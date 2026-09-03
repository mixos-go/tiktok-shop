---
title: UncombinePackages
category: fulfillment
api_name: UncombinePackages
method: POST
path: /fulfillment/202309/packages/{package_id}/uncombine
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** UncombinePackages

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202309/packages/{package_id}/uncombine

## API Description
Use this API to uncombine one or more orders from an already combined package.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| package_id (path) | string | Yes | Package ID you wish to uncombine an order(s) from. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| order_ids | array<string> | No | TikTok Shop order ID. Indicate the orders that need to be removed from the package. Please make sure the orders belong to the package. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.packages | array<object> | No | Return list of packages after being uncombined. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
