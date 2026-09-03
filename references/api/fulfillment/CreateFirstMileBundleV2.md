---
title: CreateFirstMileBundleV2
category: fulfillment
api_name: CreateFirstMileBundleV2
method: POST
path: /fulfillment/202510/first_mile_bundle
version: 202510
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** CreateFirstMileBundleV2

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202510/first_mile_bundle

## API Description
If you send multiple packages to TikTok Shop warehouse in a single first-mile bundle, you can use the API to create a first-mile bundle on TikTok Shop and get the bundle ID.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| handover_method | string | No | The way you send the first-mile bundle. Possible enumerations are: - `PICKUP`: You use the logistic service provided by TikTok Shop to send the bundle. - `DROP_OFF`: You contact the logistic provider and send the bundle. The logistic provider must be registered at TikTok Shop. (e.g. PICKUP) |
| order_ids | array<string> | No | The IDs of all the orders sent in a single first-mile bundle. The orders must follow the restrictions: - Each of the orders must exist and be RTS and shipping label printed. - The orders are sent by the same seller. - The orders belong to a single group of TikTok Shop service districts. The groups are: - Group 1: PH, SG, MY, VN, TH, and JP. - Group 2: DE, FR, IT, ES. You can not create first mile bundles for US/UK orders using this API. |
| phone_tail_number | string | No | Last 4 digits of the sender's phone number. Required when `handover_method == DROP_OFF`. (e.g. 1234) |
| shipping_provider_id | string | No | The logistic provider ID in TikTok Shop. Required when `handover_method == DROP_OFF`. (e.g. 7463353253533) |
| tracking_number | string | No | The logistic tracking number of the bundle. Required when `handover_method == DROP_OFF`. (e.g. SF1244442424) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | Specific return information (returns multiple errors and reasons) |
| data.errors.detail.order_id | string | No | TikTok Shop order ID (e.g. 578967030217083407) |
| data.first_mile_bundle_id | string | No | The ID of the first-mile bundle. (e.g. BA123444534) |
| data.url | string | No | The returned waybill link. (e.g. https://open-fs-va.tiktokshop.com/doc_tts/object/28b05?skipCookie=true&timeStamp=1721272360&sign=ef63cd6) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
