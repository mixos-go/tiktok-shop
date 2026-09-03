---
title: CreateManufacturer
category: product
api_name: CreateManufacturer
method: POST
path: /product/202409/compliance/manufacturers
version: 202409
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** CreateManufacturer

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202409/compliance/manufacturers

## API Description
Add a manufacturer for a seller. The provided information will be automatically translated into all EU languages supported by TikTok Shop. - Use the [Search Manufacturers API](67066a580dcee902fa03ccf9) to obtain the translations. - Use the [Partial Edit Manufacturer API](67066a55c55b3a03044eea29) to edit the translations, if necessary. - When creating a product, pass the returned `manufacturer_id` to associate the product with the manufacturer. Target seller: Local sellers operating in EU countries

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| address | string | No | The postal address of the manufacturer. Max length: 500 characters (e.g. 10 Earlsfort Terrace, Dublin, Ireland) |
| email | string | No | The email address of the manufacturer. (e.g. johndoe@email.com) |
| locale | string | No | The BCP-47 locale code representing the language used for specifying the manufacturer information. Possible values: - de-DE - en-IE - es-ES - fr-FR - it-IT Default: The locale of the seller's registered business address. **Note**: The information provided will be automatically translated into all EU languages supported by TikTok Shop. Ensure the locale matches the language used in field values to avoid inaccurate translations. (e.g. en-IE) |
| name | string | No | The manufacturer name. Max length: 255 characters (e.g. John Doe) |
| phone_number | object | No | The phone number of the manufacturer. |
| phone_number.availability | string | No | Indicates the availability of the phone number. Possible values: - `AVAILABLE`: The phone number is available and required. - `UNAVAILABLE`: No phone number is available. Default: AVAILABLE (e.g. AVAILABLE) |
| phone_number.country_code | string | No | The country code of the phone number, prefixed by a plus `+` symbol. E.g. +353 for Ireland. Max digits: 4 Required if `availability=AVAILABLE`. (e.g. +353) |
| phone_number.local_number | string | No | The local number. Length: 7 - 20 digits Required if `availability=AVAILABLE`. (e.g. 81234567) |
| registered_trade_name | string | No | The registered trade name of the manufacturer. Max length: 200 characters (e.g. TikTok Shop) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.manufacturer_id | string | No | A unique ID that identifies the manufacturer in TikTok Shop. (e.g. 66d3cbe4d9c8b09ddca932a7) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
