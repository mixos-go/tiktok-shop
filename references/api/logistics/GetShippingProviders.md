---
title: GetShippingProviders
category: logistics
api_name: GetShippingProviders
method: GET
path: /logistics/202309/delivery_options/{delivery_option_id}/shipping_providers
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** logistics
**API:** GetShippingProviders

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/logistics/202309/delivery_options/{delivery_option_id}/shipping_providers

## API Description
This API is used to obtain the shipping provider corresponding to the specified delivery option

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| delivery_option_id (path) | string | Yes | The specific delivery option identifier for getting the shipping provider list. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.shipping_providers | array<object> | No | shipping provider list |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
