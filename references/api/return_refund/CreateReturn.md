---
title: CreateReturn
category: return_refund
api_name: CreateReturn
method: POST
path: /return_refund/202309/returns
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** return_refund
**API:** CreateReturn

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/return_refund/202309/returns

## API Description
Use this API to initiate a return request on behalf of the buyer Sellers can reject the request, or accept and issue: -Return and Refund (buyer must send package back) -Returnless Refund (buyer can keep the item) -Partial Refund (Seller issues a partial refund, buyer can keep the item)

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| idempotency_key (query) | string | No | Idempotency Key |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| currency | string | No | Currency for refund which should be same as currency in TikTok Ship Order. (e.g. USD) |
| handover_method | string | No | Which handover method buyer chooses to use when returning goods to seller by platform - DROP_OFF - PICKUP (e.g. DROP_OFF) |
| order_id | string | No | Tiktok Shop order id (e.g. 576473917261320779) |
| order_line_item_ids | array<string> | No | Order line ids seller wants to create return request, should use order line ids to create return request if had split parcel to multiple packages, default value is all order line ids in the order if not input order_line_ids and skus |
| refund_total | string | No | Total refund amount to the buyer. The total refund amount can not exceed the refundable amount (e.g. 10.5) |
| return_reason | string | No | Seller's reason to create a return (e.g. ecom_order_delivered_refund_reason_missing_product_seller) |
| return_type | string | No | Which type to create: - REFUND - RETURN_AND_REFUND (e.g. REFUND) |
| shipment_type | string | No | How buyer ships items to seller when in a return request, could be: - PLATFORM - BUYER_ARRANGE (e.g. PLATFORM) |
| skus | array<object> | No | Skus |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.return_id | string | No | The identifier of a specific return request. (e.g. 4035319218955782461) |
| data.return_status | string | No | Return status, available values: - RETURN_OR_REFUND_REQUEST_PENDING: Request is pending, needs to be approved by seller or platform - REFUND_OR_RETURN_REQUEST_REJECT: Seller rejected the request - AWAITING_BUYER_SHIP: Waiting buyer to ship items to seller, if exceed the deadline, request will be closed by platform - BUYER_SHIPPED_ITEM: Buyer has shipped items to seller. - REJECT_RECEIVE_PACKAGE: Seller reject return package - RETURN_OR_REFUND_REQUEST_SUCCESS: The refund/return request is successful, buyer will be refunded. - RETURN_OR_REFUND_REQUEST_CANCEL: The request has been cancelled by buyer or system - RETURN_OR_REFUND_REQUEST_COMPLETE: The request is successful, and the amount has been refunded. (e.g. RETURN_OR_REFUND_REQUEST_PENDING) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
