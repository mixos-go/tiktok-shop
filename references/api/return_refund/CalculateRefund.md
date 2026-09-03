---
title: CalculateRefund
category: return_refund
api_name: CalculateRefund
method: POST
path: /return_refund/202309/refunds/calculate
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** return_refund
**API:** CalculateRefund

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/return_refund/202309/refunds/calculate

## API Description
Use this API to check order refundable amounts.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| handover_method | string | No | Which handover method buyer chooses to use when returning goods to seller by platform - DROP_OFF: buyer drops off the parcel in logistics service collect point. - PICKUP: logistics service picks up the buyer package. (e.g. DROP_OFF) |
| order_id | string | No | TikTok Shop order id. (e.g. 576469648086175911) |
| order_line_item_ids | array<string> | No | TikTok Shop order line item ids. |
| reason_name | string | No | Seller's reason to create a return，all available reasons, please reference to API overview. (e.g. ecom_order_delivered_refund_reason_missing_product_seller) |
| request_type | string | No | Request type - CANCEL - REFUND - RETURN_AND_REFUND Note: different request types are used for different aftersales scenarios. Also, different request types might have different refund amounts, because the refund amount calculation policy is different. (e.g. REFUND) |
| shipment_type | string | No | How buyer ships items to seller when in a return request, could be: - PLATFORM - BUYER_ARRANGE (e.g. PLATFORM) |
| skus | array<object> | No | skus |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.order_refund_amount | object | No | Refund amount to buyer. |
| data.order_refund_amount.currency | string | No | Currency for payment. (e.g. USD) |
| data.order_refund_amount.refund_shipping_fee | string | No | Shipping fee refund to buyer. (e.g. 0.2) |
| data.order_refund_amount.refund_subtotal | string | No | Total price of item be returned. (e.g. 1) |
| data.order_refund_amount.refund_tax | string | No | Tax returned to buyer. (e.g. 0.03) |
| data.order_refund_amount.refund_total | string | No | Total amount refund to buyer. (e.g. 1.23) |
| data.order_refund_amount.retail_delivery_fee | string | No | Retail delivery fee takes effect once platform GMV exceeds 500,000 USD, according to US Colorado states' compliance rules. (e.g. 0.1) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
