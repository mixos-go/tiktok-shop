---
title: GetPharmacies
category: epharmacy
api_name: GetPharmacies
method: GET
path: /epharmacy/202504/pharmacies
version: 202504
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** epharmacy
**API:** GetPharmacies

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/epharmacy/202504/pharmacies

## API Description
Get the list of pharmacies associated with your shop and their corresponding operational details.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the `next_page_token` from a previous response. It is not needed for the first page. |
| page_size (query) | integer | No | The number of results to be returned per page. Default: 50 Valid range: [1, 100] |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. Provide this value in the `page_token` parameter of your request if the current response does not return all the results. (e.g. b2Zmc2V0PTAK) |
| data.pharmacies | array<object> | No | The list of pharmacies that belong to a TikTok Shop. |
| data.pharmacies.pharmacist.name | string | No | The name of the pharmacist, known as Apoteker Penanggung Jawab (APJ). (e.g. Apt. Beatric Siana Dian Kelana, S. Farm) |
| data.pharmacies.pharmacist.practice_license_expire_time | integer | No | The license expiration time expressed in Unix timestamp (seconds). (e.g. 1795564800) |
| data.pharmacies.pharmacist.practice_license_number | string | No | The pharmacist practice license number, known as Surat Izin Praktik Apoteker (SIPA). (e.g. 19990106/SIPA_32.01/DPMPTSP/2024/2.2/123) |
| data.total_count | integer | No | The number of pharmacies returned. (e.g. 3) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
