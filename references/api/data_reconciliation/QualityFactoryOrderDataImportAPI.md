---
title: QualityFactoryOrderDataImportAPI
category: data_reconciliation
api_name: QualityFactoryOrderDataImportAPI
method: POST
path: /data_reconciliation/202401/orders/import
version: 202401
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** data_reconciliation
**API:** QualityFactoryOrderDataImportAPI

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/data_reconciliation/202401/orders/import

## API Description
TikTok Shop-Connector exchange order data from DTC(Direct To Consumer) platform to Tiktok Shop-QE system to compare the order data of DTC platform and Tiktok Shop. Which systems of users are involved with the API? For example, DTC platform Connector App, Shipping App, WMS, PIM, Multi Channel App, etc.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| orders | array<object> | No | The exchange order list |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | The list of errors that occurred from executing the mutation, one failed order one element |
| data.errors.detail.channel_order_id | string | No | Failed channel order id (e.g. 1729382588639839583) |
| data.errors.detail.channel_type | string | No | Failed channel type (e.g. SHOPIFY) |
| data.errors.detail.extra_errors | array<object> | No | Failed order reasons |
| data.errors.detail.order_id | string | No | Failed Tiktok Shop order id (e.g. 7021436810468230477) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
