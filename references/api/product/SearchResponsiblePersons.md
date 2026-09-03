---
title: SearchResponsiblePersons
category: product
api_name: SearchResponsiblePersons
method: POST
path: /product/202501/compliance/responsible_persons/search
version: 202501
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** SearchResponsiblePersons

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202501/compliance/responsible_persons/search

## API Description
Retrieve a list of responsible persons in the EU languages supported by TikTok Shop based on their ID or keywords. When creating a product, pass the returned `responsible_person_id` to associate the product with the responsible person. Target seller: Local sellers operating in EU countries

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_size (query) | integer | Yes | The number of results to be returned per page. Valid range: [1-100] |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the `next_page_token` from a previous response. It is not needed for the first page. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| keyword | string | No | Filter results to show those that contain this keyword. Search scope: name, local_number, email Max length: 200 characters **Note**: Provide either the `responsible_person_ids` or `keyword`; if both are provided, `responsible_person_ids` will take priority. (e.g. John) |
| locales | array<string> | No | The BCP-47 locale codes for displaying the responsible person information. Default: The locale of the seller's registered business address. Possible values: - de-DE - en-IE - es-ES - fr-FR - it-IT |
| responsible_person_ids | array<string> | No | Filter results by these responsible person IDs. Max IDs: The value of `page_size` |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. Provide this value in the `page_token` parameter of your request if the current response does not return all the results. (e.g. 66d3cbe3d9c8b09ddca932a1) |
| data.responsible_persons | array<object> | No | The list of responsible persons that meet the query conditions. |
| data.responsible_persons.regional_profiles.address.city | string | No | (**Deprecated**: This field is deprecated and will return an empty string. Please refer to `street_address_line1` instead for the city name.) The city name. Max length: 500 characters (e.g. -) |
| data.responsible_persons.regional_profiles.address.country | string | No | The two letter ISO 3166 country code representing the country of the address. It must be an EU country. (e.g. IE) |
| data.responsible_persons.regional_profiles.address.district | string | No | (**Deprecated**: This field is deprecated and will return an empty string. Please refer to `street_address_line1` instead for the district name.) The district name. Max length: 500 characters (e.g. -) |
| data.responsible_persons.regional_profiles.address.postal_code | string | No | The postal code. Max length: 500 characters (e.g. D02 HD23) |
| data.responsible_persons.regional_profiles.address.province | string | No | (**Deprecated**: This field is deprecated and will return an empty string. Please refer to `street_address_line1` instead for the province name.) The province, state, or region name. Max length: 500 characters (e.g. -) |
| data.responsible_persons.regional_profiles.address.street_address_line1 | string | No | The detailed street address of the location, including the building number, street name, district, city, province, and any relevant details. Max length: 500 characters (e.g. 63 Cardiff Ln, Grand Canal Dock, Dublin City, Dublin) |
| data.responsible_persons.regional_profiles.address.street_address_line2 | string | No | (**Deprecated**: This field is deprecated and will return an empty string. Please refer to `street_address_line1` instead for the relevant details.) An optional secondary line for additional address details, if necessary. Max length: 500 characters (e.g. -) |
| data.responsible_persons.regional_profiles.phone_number.country_code | string | No | The country code of the phone number, prefixed by a plus `+` symbol. E.g. +353 for Ireland. Only EU country codes are allowed. Max digits: 4 (e.g. +353) |
| data.responsible_persons.regional_profiles.phone_number.local_number | string | No | The local number. Length: 7 - 11 digits (e.g. 80915151) |
| data.total_count | integer | No | The number of responsible persons that meet the query conditions. (e.g. 26) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
