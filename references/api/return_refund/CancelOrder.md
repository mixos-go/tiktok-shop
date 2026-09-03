---
title: CancelOrder
category: return_refund
api_name: CancelOrder
method: POST
path: /return_refund/202309/cancellations
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** return_refund
**API:** CancelOrder

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/return_refund/202309/cancellations

## API Description
Use this API to cancel an order on behalf of a seller. In the US and UK markets, when an item is out of stock, partial cancellation on the single item level is supported by this API.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| cancel_reason | string | No | Reason to cancel the order Please see "Return API Overview" for a list of reasons a seller can select to cancel the order. (e.g. ecom_order_delivered_refund_and_return_reason_wrong_product_seller) |
| order_id | string | No | TikTok Shop order id (e.g. 577087614418520388) |
| order_line_item_ids | array<string> | No | List of order line item ids to cancel. In the US and UK markets, when an item is out of stock, partial cancellation on the single item level is supported. To initiate a partial cancellation, specify the item's order line id. |
| skus | array<object> | No | List of SKU to cancel |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.cancel_id | string | No | The identifier of a specific order cancellation. (e.g. 4035319218955782461) |
| data.cancel_status | string | No | The status of an order cancellation request. Available values: - CANCELLATION_REQUEST_PENDING - CANCELLATION_REQUEST_SUCCESS - CANCELLATION_REQUEST_CANCEL - CANCELLATION_REQUEST_COMPLETE (e.g. CANCELLATION_REQUEST_SUCCESS) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
