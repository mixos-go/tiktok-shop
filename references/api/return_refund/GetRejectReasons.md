---
title: GetRejectReasons
category: return_refund
api_name: GetRejectReasons
method: GET
path: /return_refund/202309/reject_reasons
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** return_refund
**API:** GetRejectReasons

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/return_refund/202309/reject_reasons

## API Description
Use this API to obtain order return or cancellation rejection reasons. The seller is required to provide a reason when they reject a cancel, refund, or return request.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| locale (query) | string | No | The BCP-47 locale codes for displaying the rejection reason, delimited by commas. Default: en-US Refer to [Locale codes](678e3a47bae28f030a8c7523) for the list of supported locale codes. |
| return_or_cancel_id (query) | string | Yes | The unique identifier for an order return or cancellation. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.reasons | array<object> | No | The list of rejection reasons the seller has provided. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
