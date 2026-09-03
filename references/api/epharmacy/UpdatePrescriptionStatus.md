---
title: UpdatePrescriptionStatus
category: epharmacy
api_name: UpdatePrescriptionStatus
method: POST
path: /epharmacy/202504/orders/{order_id}/update_prescription_status
version: 202504
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** epharmacy
**API:** UpdatePrescriptionStatus

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/epharmacy/202504/orders/{order_id}/update_prescription_status

## API Description
Update the status of the prescription image a buyer uploaded for an order to approved or rejected, and the reasons.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| order_id (path) | string | Yes | Unique identifier of the order |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| prescription_status | string | No | The status of the uploaded prescription after review. Possible values: - `APPROVED`: The prescription has been reviewed and is authorized for fulfillment. - `REJECTED`: The prescription is denied and cannot be fulfilled. The buyer must upload a new prescription. If the prescription is rejected twice, the order will be automatically rejected. - `PENDING_RESUBMISSION`: The prescription needs corrections or additional information. The buyer must revise and resubmit. (e.g. APPROVED) |
| rejection_reason | string | No | The reason when you choose to set status `REJECTED`. Max length: 5000 characters Examples of rejection reaon: - Resep tidak sesuai dengan obat - Resep tidak ada - Resep tidak terbaca (e.g. Resep tidak terbaca) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
