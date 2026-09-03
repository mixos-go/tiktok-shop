---
title: ConfirmPackageShipment
category: supply_chain
api_name: ConfirmPackageShipment
method: POST
path: /supply_chain/202309/packages/sync
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** supply_chain
**API:** ConfirmPackageShipment

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/supply_chain/202309/packages/sync

## API Description
This API enables a warehouse service provider to send package shipment information for an order. Only warehouse service providers who have been certified by the platform have permission to access this interface.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| packages | array<object> | No | Package info list |
| packages.dimension.height | integer | No | Package height value (e.g. 42) |
| packages.dimension.length | integer | No | Package length value (e.g. 34) |
| packages.dimension.unit | string | No | Package dimension unit Possible values: - METER - CENTIMETER - MILLIMETER - MICRON - FOOT - INCH (e.g. METER) |
| packages.dimension.width | integer | No | Package width value (e.g. 425) |
| packages.weight.unit | string | No | Package weight unit Possible values: - KILOGRAM - GRAM - MILLIGRAM - POUND - OUNCE (e.g. KILOGRAM) |
| packages.weight.value | integer | No | Package weight value (e.g. 342) |
| warehouse_provider_id | string | No | Warehouse provider ID, unique and provided by TikTok (e.g. 7342984797904049750) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | Error list |
| data.errors.detail.package_id | string | No | Failed package ID (e.g. 4645645645) |
| data.success_packages | array<string> | No | List of packages that have been successfully confirmed |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
