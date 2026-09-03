---
title: SearchGlobalProducts
category: product
api_name: SearchGlobalProducts
method: POST
path: /product/202312/global_products/search
version: 202312
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** SearchGlobalProducts

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202312/global_products/search

## API Description
Retrieve a list of global products that meet the specified conditions. This API will only return the key product properties. You can pass a returned global product ID to the [Get Global Product API](https://partner.tiktokshop.com/docv2/page/6509e2b0bace3e02b7490c96) to obtain more details about the product.

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
| create_time_ge | integer | No | Filter global products to show only those that are created on or after the specified date and time. Unix timestamp. **Note**: The "create_time_ge" and "create_time_le" together constitute the creation time filter condition. - If "create_time_ge" is filled but "create_time_le" is empty, "create_time_le" will default to the current time. - If "create_time_le" is filled but "create_time_ge" is empty, "create_time_ge" will default to the earliest shop time. (e.g. 1694576429) |
| create_time_le | integer | No | Filter global products to show only those that are created on or before the specified date and time. Unix timestamp. Refer to notes in "create_time_ge" for more usage information. (e.g. 1694576429) |
| seller_skus | array<string> | No | Filter global products by these seller SKU codes. |
| status | string | No | Filter global products by their status. Possible values: - PUBLISHED - UNPUBLISHED - DRAFT - DELETED (e.g. PUBLISHED) |
| update_time_ge | integer | No | Filter global products to show only those that are updated on or after the specified date and time. Unix timestamp. **Note**: The fields "update_time_ge" and "update_time_le" together define the update time filter condition. - If "update_time_ge" is filled but "update_time_le" is empty, "update_time_le" will default to the current time. - If "update_time_le" is filled but "update_time_ge" is empty, "update_time_ge" will default to the earliest shop time. (e.g. 1694576429) |
| update_time_le | integer | No | Filter global products to show only those that are updated on or before the specified date and time. Unix timestamp. Refer to notes in `update_time_ge` for more usage information. (e.g. 1694576429) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.global_products | array<object> | No | The list of global products that meet the query conditions. |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. Provide this value in the `page_token` parameter of your request if the current response does not return all the results. (e.g. b2Zmc2V0PTAK) |
| data.total_count | integer | No | The total number of global products that meet the query conditions. (e.g. 100) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
