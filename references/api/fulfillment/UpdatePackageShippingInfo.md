---
title: UpdatePackageShippingInfo
category: fulfillment
api_name: UpdatePackageShippingInfo
method: POST
path: /fulfillment/202309/packages/{package_id}/shipping_info/update
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** UpdatePackageShippingInfo

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202309/packages/{package_id}/shipping_info/update

## API Description
If the seller entered an incorrect tracking number, this API allows the seller to update the tracking number and shipping provider for a package that has already been shipped. Attention: This API is only applicable to orders (or packages) shipped by the seller. It is only used to update the tracking number and shipping provider for packages that have already been shipped.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| package_id (path) | string | Yes | TikTok Shop package ID. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shipping_provider_id | string | No | Identifies the carrier that will deliver the package. Please call the [Get Shipping Providers API](https://partner.tiktokshop.com/docv2/page/650aa48d4a0bb702c06d85cd?external_id=650aa48d4a0bb702c06d85cd#Back%20To%20Top) to retrieve the available shipping provider(s). (e.g. 6965352555291346690) |
| tracking_number | string | No | The shipment tracking number provided by the carrier. (e.g. 576460868968549926) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
