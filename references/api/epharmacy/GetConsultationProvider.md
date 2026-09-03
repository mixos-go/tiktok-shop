---
title: GetConsultationProvider
category: epharmacy
api_name: GetConsultationProvider
method: GET
path: /epharmacy/202507/consultations/{consultation_id}/providers
version: 202507
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** epharmacy
**API:** GetConsultationProvider

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/epharmacy/202507/consultations/{consultation_id}/providers

## API Description
Retrieves the provider identifier for the specified consultation.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| consultation_id (path) | string | Yes | TTS consultation identifier |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.consultation_provider | object | No | The consultation provider. |
| data.consultation_provider.id | string | No | A unique identifier of the service provider associated with the consultation. (e.g. DK0001) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
