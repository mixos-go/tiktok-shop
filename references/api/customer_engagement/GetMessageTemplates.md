---
title: GetMessageTemplates
category: customer_engagement
api_name: GetMessageTemplates
method: GET
path: /customer_engagement/202412/message_templates
version: 202412
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** customer_engagement
**API:** GetMessageTemplates

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/customer_engagement/202412/message_templates

## API Description
Get a library of customer engagement message templates predefined by TikTok Shop, which you can use directly in your customer engagement communications.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | Yes | Shop_cipher is required for cross-border shops, and optional for local shops. It's unique for each shop. Get the this property from the Get Authorized Shop API dynamically. Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API |
| locale (query) | string | Yes | The BCP-47 locale codes for displaying the message content, delimited by commas. Default: en-US Refer to [Locale codes](678e3a47bae28f030a8c7523) for the list of supported locale codes. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.message_templates | array<object> | No | Customer engagement message templates predefined by TikTok Shop. |
| data.message_templates.coupon_card_rules.coupon_type | array<string> | No | The types of coupon that can be included in the message. Possible values: - REGULAR_ALL: Regular coupons that target all buyers. Required coupon properties: `coupons.display_type=REGULAR` and `coupons.target_buyer_segment=ALL` in the [Search Coupons API](https://partner.tiktokshop.com/docv2/page/6699dcdf115ebe02f841e4cd). - REGULAR_REPEAT: Regular coupons that target only repeat buyers. Required coupon properties: `coupons.display_type=REGULAR` and `coupons.target_buyer_segment=REPEAT_CUSTOMERS` in the [Search Coupons API](https://partner.tiktokshop.com/docv2/page/6699dcdf115ebe02f841e4cd). |
| data.message_templates.coupon_card_rules.max_count | integer | No | The maximum number of coupon cards that can be included. (e.g. 1) |
| data.message_templates.coupon_card_rules.min_count | integer | No | The minimum number of coupon cards that must be included. (e.g. 1) |
| data.message_templates.product_card_rules.max_count | integer | No | The maximum number of product cards that can be included. (e.g. 4) |
| data.message_templates.product_card_rules.min_count | integer | No | The minimum number of product cards that must be included. (e.g. 0) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
