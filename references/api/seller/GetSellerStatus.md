---
title: GetSellerStatus
category: seller
api_name: GetSellerStatus
method: GET
path: /seller/202508/status
version: 202508
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** seller
**API:** GetSellerStatus

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/seller/202508/status

## API Description
Description of [POST]/seller/:version/status/query

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.seller_status_data | object | No | seller status information |
| data.seller_status_data.partner_channel | string | No | 0: UNKNOWN 1: ORGANIC 2: WOO 3: SHOPIFY 4: SALESFORCE 6: SHOPIFY2 (e.g. 6) |
| data.seller_status_data.seller_status | string | No | 0 : NEW_CREATE 1 : PENDING 2 : ACTIVE 3 : DEACTIVATED 4: REJECTED 6: WITHDRAW (e.g. 2) |
| data.seller_status_data.shop_statuses | array<object> | No | the collection of shop statuses |
| data.seller_status_data.tax_form_status | string | No | 0: UNKONW 1: UnderAudit 2: Approved 3: Rejected (e.g. 1) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
