---
title: CombinePackage
category: fulfillment
api_name: CombinePackage
method: POST
path: /fulfillment/202309/packages/combine
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** CombinePackage

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202309/packages/combine

## API Description
Use this API to combine packages into one fulfillment package.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| combinable_packages | array<object> | No | Input list of combinable packages. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | Return list of possible errors. |
| data.errors.detail.package_id | string | No | Package ID. (e.g. 1231231231231313123132) |
| data.packages | array<object> | No | Return list of successfully combined packages. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
