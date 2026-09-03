---
title: UpdatePharmacies
category: epharmacy
api_name: UpdatePharmacies
method: POST
path: /epharmacy/202504/pharmacies/update
version: 202504
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** epharmacy
**API:** UpdatePharmacies

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/epharmacy/202504/pharmacies/update

## API Description
Update the pharmacies associated with your shop and their corresponding operational details.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| pharmacies | array<object> | No | The list of pharmacies that belong to a shop. Max count: 20 |
| pharmacies.pharmacist.name | string | No | The name of the pharmacist, known as Apoteker Penanggung Jawab (APJ). (e.g. Apt. Beatric Siana Dian Kelana, S. Farm) |
| pharmacies.pharmacist.practice_license_expire_time | integer | No | The license expiration time expressed in Unix timestamp (seconds). (e.g. 1795564800) |
| pharmacies.pharmacist.practice_license_number | string | No | The pharmacist practice license number, known as Surat Izin Praktik Apoteker (SIPA). (e.g. 19990106/SIPA_32.01/DPMPTSP/2024/2.2/123) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | The list of errors that occurred. |
| data.errors.detail.warehouse_id | string | No | The warehouse ID where the error occurred. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
