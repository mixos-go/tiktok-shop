---
title: RedeemInfoCallback
category: fulfillment
api_name: RedeemInfoCallback
method: POST
path: /fulfillment/202601/redeem_info/callback
version: 202601
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** RedeemInfoCallback

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202601/redeem_info/callback

## API Description
Description of [POST]/fulfillment/:version/redeem_info/callback

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| order_id | string | No | TikTok Shop order id. (e.g. 576461413038785752) |
| order_info_list | array<object> | No | Order lines that need to send redeem info related to the order id. |
| order_info_list.redeem_info.redeem_data | string | No | Redeem type is 'CODE', set redeem code to this field. Redeem type is 'URL', set redeem url to this field. (e.g. abc12344 https://www.test.com/abc) |
| order_info_list.redeem_info.redeem_type | string | No | What redeem type that you callback. 'CODE' - type code 'URL' - type url (e.g. CODE) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.order_statuses | array<object> | No | Callback result. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
