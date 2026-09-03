---
title: GetFBTMerchantOnboardedRegions
category: fbt
api_name: GetFBTMerchantOnboardedRegions
method: GET
path: /fbt/202409/merchants/onboarded_regions
version: 202409
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fbt
**API:** GetFBTMerchantOnboardedRegions

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/fbt/202409/merchants/onboarded_regions

## API Description
This API verifies whether a seller is registered as a Fulfillment by TikTok (FBT) merchant. If the seller is onboarded, the API returns the regions where the merchant is authorized to operate under the FBT system.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.onboarded_regions | array<object> | No | A list of countries or regions where the merchant is onboarded and can conduct business in the Fulfilled by TikTok system. If seller is not onboarded, `data` will be empty. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
