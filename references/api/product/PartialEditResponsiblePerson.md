---
title: PartialEditResponsiblePerson
category: product
api_name: PartialEditResponsiblePerson
method: POST
path: /product/202409/compliance/responsible_persons/{responsible_person_id}/partial_edit
version: 202409
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** PartialEditResponsiblePerson

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202409/compliance/responsible_persons/{responsible_person_id}/partial_edit

## API Description
Edit the details of an EU responsible person in the EU languages supported by TikTok Shop. Include the locale code to edit the responsible person's information in a particular language. Target seller: Local sellers operating in EU countries **Note**: - Updates are handled per top-level property, so all non-empty fields within an updated object must be supplied to prevent overwriting with blanks. - For top-level properties (e.g. `name`, `email`) that are not nested in an object, you can update them individually. Omitting these properties in the request will leave them unchanged. - If you need to edit any nested property within an object, you must provide values for all nested properties of that object. Any omitted nested properties will be overwritten with blanks. For example, if you want to update `phone_number.local_number`, you must also include the `country_code` property to avoid data loss for that property.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| responsible_person_id (path) | string | Yes | The responsible person ID in TikTok Shop. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| address | object | No | The residential address of the responsible person. |
| address.city | string | No | (**Deprecated**: This field is deprecated and will be removed in a future API version. If provided, its value will be merged into `street_address_line1`. It is recommended to specify `street_address_line1` directly.) The city name. Max length: 500 characters (e.g. -) |
| address.country | string | No | The two letter ISO 3166 country code representing the country of the address. It must be an EU country. (e.g. IE) |
| address.district | string | No | (**Deprecated**: This field is deprecated and will be removed in a future API version. If provided, its value will be merged into `street_address_line1`. It is recommended to specify `street_address_line1` directly.) The district name. Max length: 500 characters (e.g. -) |
| address.postal_code | string | No | The postal code. Max length: 500 characters (e.g. D02 HD23) |
| address.province | string | No | (**Deprecated**: This field is deprecated and will be removed in a future API version. If provided, its value will be merged into `street_address_line1`. It is recommended to specify `street_address_line1` directly.) The province, state, or region name. Max length: 500 characters (e.g. -) |
| address.street_address_line1 | string | No | The detailed street address of the location, including the building number, street name, district, city, province, and any relevant details. Max length: 500 characters (e.g. 63 Cardiff Ln, Grand Canal Dock, Dublin City, Dublin) |
| address.street_address_line2 | string | No | (**Deprecated**: This field is deprecated and will be removed in a future API version. If provided, its value will be merged into `street_address_line1`. It is recommended to specify `street_address_line1` directly.) An optional secondary line for additional address details, if necessary. Max length: 500 characters (e.g. -) |
| email | string | No | The email address of the responsible person. (e.g. john.doe@email.com) |
| locale | string | No | The BCP-47 locale code representing the language used for specifying the responsible person information. Possible values: - de-DE - en-IE - es-ES - fr-FR - it-IT Default: The locale of the seller's registered business address. **Note**: The information provided will be automatically translated into all EU languages supported by TikTok Shop. Ensure the locale matches the language used in field values to avoid inaccurate translations. (e.g. en-IE) |
| name | string | No | The responsible person name. Max length: 200 characters (e.g. John Doe) |
| phone_number | object | No | The phone number of the responsible person. |
| phone_number.country_code | string | No | The country code of the phone number, prefixed by a plus `+` symbol. E.g. +353 for Ireland. Only EU country codes are allowed. Max digits: 4 (e.g. +353) |
| phone_number.local_number | string | No | The local number. Length: 7 - 11 digits (e.g. 80915151) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
