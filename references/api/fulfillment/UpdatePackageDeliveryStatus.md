---
title: UpdatePackageDeliveryStatus
category: fulfillment
api_name: UpdatePackageDeliveryStatus
method: POST
path: /fulfillment/202309/packages/deliver
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** UpdatePackageDeliveryStatus

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202309/packages/deliver

## API Description
Use this API to update the delivery status of the package from in transit status. Please note that only sellers utilizing the SOF( Seller Own Fleet) capability can use this API to update the package status to 'DELIVERED'. This API is only available for the SEA region.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| packages | array<object> | No | The return list of packages. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | Specific return information (returns multiple errors and reasons). |
| data.errors.detail.package_id | string | No | Package ID. (e.g. 1231231231231) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
