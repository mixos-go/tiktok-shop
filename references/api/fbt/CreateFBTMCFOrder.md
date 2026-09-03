---
title: CreateFBTMCFOrder
category: fbt
api_name: CreateFBTMCFOrder
method: POST
path: /fbt/202601/mcf_outbound_orders
version: 202601
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fbt
**API:** CreateFBTMCFOrder

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/fbt/202601/mcf_outbound_orders

## API Description
For orders created on other sales channels that require fulfillment via FBT, this API enables you to create corresponding orders (hereinafter referred to as MCF Orders). Once MCF Orders are successfully created, they will be automatically submitted to the FBT system for fulfillment.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| consignee | object | No | The consignee contact info |
| consignee.address | object | No | The consignee address must be a valid address; if the address verification fails, no order will be created. |
| consignee.address.address_line_1 | string | No | The detail address line 1 (e.g. Apt. 302, 5th Ave) |
| consignee.address.address_line_2 | string | No | The detail address line 2 (e.g. San Jose) |
| consignee.address.city | string | No | Consignee address city (e.g. Bay Minette) |
| consignee.address.country_code | string | No | Consignee address country code in two-character ISO 3166-1 alpha-2 format. (e.g. US) |
| consignee.address.district_or_county | string | No | Consignee address district or county (e.g. Baldwin) |
| consignee.address.postal_code | string | No | The postal code (e.g. 30518) |
| consignee.address.state_or_region | string | No | Consignee address state or region (e.g. Alabama) |
| consignee.email | string | No | The email of consignee (e.g. username@example.com) |
| consignee.name | string | No | The consignee name (e.g. username) |
| consignee.phone_number | string | No | The phone number of consignee (e.g. (+1)1211223910) |
| external_order_id | string | No | The corresponding order ID in your OMS. (e.g. shopify202208291503530001100220033) |
| goods | array<object> | No | The item IDs and quantities included in the order, where the items must be those managed in the FBT system. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.mcf_order | object | No | Created order information |
| data.mcf_order.create_time | integer | No | The time when the mcf order is created (e.g. 1661756811) |
| data.mcf_order.external_order_id | string | No | The corresponding order ID in your OMS. (e.g. shopify202208291503530001100220033) |
| data.mcf_order.mcf_order_id | string | No | A unique ID that identifies different MCF orders (e.g. 7136104329798256386) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
