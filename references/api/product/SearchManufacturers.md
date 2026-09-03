---
title: SearchManufacturers
category: product
api_name: SearchManufacturers
method: POST
path: /product/202501/compliance/manufacturers/search
version: 202501
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** SearchManufacturers

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202501/compliance/manufacturers/search

## API Description
Retrieve a list of manufacturers in the EU languages supported by TikTok Shop based on their IDs or keyword. When creating a product, pass the returned `manufacturer_id` to associate the product with the manufacturer. Target seller: Local sellers operating in EU countries

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
| keyword | string | No | Filter results to show those that contain this keyword. Search scope: name, registered trade name, local_number, email Max length: 200 characters **Note**: Provide either the `manufacturer_ids` or `keyword`; if both are provided, `manufacturer_ids` will take priority. (e.g. John) |
| locales | array<string> | No | The BCP-47 locale codes for displaying the manufacturer information. Default: The locale of the seller's registered business address. Possible values: - de-DE - en-IE - es-ES - fr-FR - it-IT |
| manufacturer_ids | array<string> | No | Filter results by these manufacturer IDs. Max IDs: The value of `page_size` |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.manufacturers | array<object> | No | The list of manufacturers that meet the query conditions. |
| data.manufacturers.regional_profiles.phone_number.availability | string | No | Indicates the availability of the phone number. Possible values: - `AVAILABLE`: The phone number is available and required. - `UNAVAILABLE`: No phone number is available. (e.g. AVAILABLE) |
| data.manufacturers.regional_profiles.phone_number.country_code | string | No | The country code of the phone number, prefixed by a plus `+` symbol. E.g. +353 for Ireland. Max digits: 4 Required if `availability=AVAILABLE`. (e.g. +353) |
| data.manufacturers.regional_profiles.phone_number.local_number | string | No | The local number. Length: 7 - 20 digits Required if `availability=AVAILABLE`. (e.g. 81234567) |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. Provide this value in the `page_token` parameter of your request if the current response does not return all the results. (e.g. 66d3cbe3d9c8b09ddca932a1) |
| data.total_count | integer | No | The number of manufacturers that meet the query conditions. (e.g. 26) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
