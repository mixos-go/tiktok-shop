---
title: GetReturnRecords
category: return_refund
api_name: GetReturnRecords
method: GET
path: /return_refund/202309/returns/{return_id}/records
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** return_refund
**API:** GetReturnRecords

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/return_refund/202309/returns/{return_id}/records

## API Description
Use this API to get a list of return records.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| return_id (path) | string | Yes | A unique identifier for a TikTok Shop return request. |
| locale (query) | string | No | The BCP-47 locale codes for displaying the return reason, delimited by commas. Default: en-US Refer to [Locale codes](678e3a47bae28f030a8c7523) for the list of supported locale codes. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.records | array<object> | No | A list of return records. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
