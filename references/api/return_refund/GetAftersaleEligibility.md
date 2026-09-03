---
title: GetAftersaleEligibility
category: return_refund
api_name: GetAftersaleEligibility
method: GET
path: /return_refund/202512/orders/{order_id}/aftersale_eligibility
version: 202512
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** return_refund
**API:** GetAftersaleEligibility

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/return_refund/202512/orders/{order_id}/aftersale_eligibility

## API Description
Use this API to check eligible aftersale solutions for an order, including whether the seller or buyer can initiate a refund, return, or cancel a specific order.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| order_id (path) | string | Yes | The unique identifier for a TikTok Shop order. |
| initiate_aftersale_user (query) | string | No | The type of user you would like to check aftersale options for. Default: SELLER Possible values: - SELLER - BUYER |
| request_types (query) | array<string> | No | Which request types you want to query. -CANCEL -REFUND -RETURN_AND_REFUND |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.sku_eligibility | array<object> | No | The eligible aftersale options for a given SKU. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
