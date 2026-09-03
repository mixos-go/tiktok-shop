---
title: CreateLastMileBundle
category: fulfillment
api_name: CreateLastMileBundle
method: POST
path: /fulfillment/202408/last_mile_bundles
version: 202408
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** CreateLastMileBundle

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202408/last_mile_bundles

## API Description
When you consolidate multiple packages into a last mile bundle and ship it to the TikTok Shop warehouse, you should call this API to inform TTS platform about the last mile bundle.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| fulfillment_unit_ids | array<string> | No | List of fulfillment Unit IDs included in the bundle. The length must not exceed `300`. |
| last_mile_bundle | object | No | Last mile bundle |
| last_mile_bundle.dimensions | object | No | Bundle dimensions |
| last_mile_bundle.dimensions.height | integer | No | Height value (e.g. 15) |
| last_mile_bundle.dimensions.length | integer | No | Length value (e.g. 15) |
| last_mile_bundle.dimensions.unit | string | No | Unit. Possible enumerations: - `centimeter`. (e.g. centimeter) |
| last_mile_bundle.dimensions.width | integer | No | Width value (e.g. 15) |
| last_mile_bundle.external_bundle_id | string | No | Bundle ID in your order management system (e.g. test_bag_no) |
| last_mile_bundle.fulfillment_unit_count | integer | No | Number of small packages in the bundle (e.g. 1) |
| last_mile_bundle.outbound_time | integer | No | UNIX timestamp of outbounding from your warehouse in milliseconds. (e.g. 1721644119953) |
| last_mile_bundle.weight | object | No | Bundle weight |
| last_mile_bundle.weight.unit | string | No | Unit. Possible enumerations: - `gram`. (e.g. gram) |
| last_mile_bundle.weight.value | integer | No | value (e.g. 1200) |
| logistics_group_id | integer | No | Logistics group id for biz (e.g. 15999517849288) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.last_mile_bundle_id | string | No | TikTok Shop last mile bundle ID (e.g. 7394368153362581254) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
