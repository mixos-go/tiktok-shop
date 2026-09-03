---
title: TTSTrackingValidation
category: fulfillment
api_name: TTSTrackingValidation
method: GET
path: /fulfillment/202508/tts_tracking_validation
version: 202508
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** TTSTrackingValidation

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202508/tts_tracking_validation

## API Description
Enables a seller or warehouse to validate whether a tracking number is covered by TikTok Shipping (TTS) or Collection by TikTok (CBT). Available only in the **US Market**.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| tracking_number (query) | string | Yes | The tracking number provided by shipping provider |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.is_tiktok_collection | boolean | No | A flag to determine whether the package is TikTok Collections (e.g. False) |
| data.is_tiktok_shipping | boolean | No | A flag to determine whether the package is TikTok Shipping (e.g. False) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
