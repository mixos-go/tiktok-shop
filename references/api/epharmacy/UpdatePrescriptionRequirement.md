---
title: UpdatePrescriptionRequirement
category: epharmacy
api_name: UpdatePrescriptionRequirement
method: POST
path: /epharmacy/202504/products/{product_id}/prescription_requirements/update
version: 202504
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** epharmacy
**API:** UpdatePrescriptionRequirement

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/epharmacy/202504/products/{product_id}/prescription_requirements/update

## API Description
Update the prescription requirement of a product. Applicable only for Tokopedia products.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_id (path) | string | Yes | The product ID associated with the prescription requirement. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| prescription_requirement | object | No | The prescription requirement. |
| prescription_requirement.needs_prescription | boolean | No | A flag to indicate whether a prescription is required to purchase this product. (e.g. True) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
