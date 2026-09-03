---
title: SearchSizeCharts
category: product
api_name: SearchSizeCharts
method: POST
path: /product/202407/sizecharts/search
version: 202407
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** SearchSizeCharts

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202407/sizecharts/search

## API Description
Retrieve size charts that a seller has created.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_size (query) | integer | Yes | The number of results to be returned per page. Valid range: [1-100] |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the `next_page_token` from a previous response. It is not needed for the first page. |
| locales (query) | array<string> | No | The BCP-47 locale codes for displaying the size charts. Default: The default locale of your shop. Possible values: - de-DE - en-GB - en-IE - en-US - es-ES - es-MX - fr-FR - id-ID - it-IT - ja-JP - ms-MY - pt-BR - th-TH - vi-VN - zh-CN |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| ids | array<string> | No | Filter size charts by size chart template IDs. Max: 50 IDs |
| keyword | string | No | Filter size charts by size chart template name or by key words in the template name. If both `ids` and `keyword` are provided, `ids` takes priority. (e.g. size chart) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. Provide this value in the `page_token` parameter of your request if the current response does not return all the results. (e.g. b2Zmc2V0PTAK) |
| data.size_chart | array<object> | No | The list of size charts that meet the query conditions. |
| data.total_count | integer | No | The number of size charts that meet the query conditions. (e.g. 100) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
