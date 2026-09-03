---
title: getfbtmerchantmcfstatus
category: fbt
api_name: getfbtmerchantmcfstatus
method: GET
path: /fbt/202601/merchants/mcf_status
version: 202601
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fbt
**API:** getfbtmerchantmcfstatus

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/fbt/202601/merchants/mcf_status

## API Description
This API verifies whether a seller is registered as a Fulfillment by TikTok (FBT) merchant and participated in Multi Channel Fulfillment(MCF). If the seller is onboarded in FBT and enrolled in MCF, the API returns the true flag of MCF status.

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
| data.mcf_status | object | No | seller multi channel fulfillment status |
| data.mcf_status.is_mcf | int8 | No | flag of if selelr has participated in multi channel fulfillment. 0 for inactive and 1 for active. (e.g. 0) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
