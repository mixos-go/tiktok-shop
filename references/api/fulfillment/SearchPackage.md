---
title: SearchPackage
category: fulfillment
api_name: SearchPackage
method: POST
path: /fulfillment/202309/packages/search
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** SearchPackage

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202309/packages/search

## API Description
Retrieve package IDs based on specified conditions. Package creation time and information update time are the common querying conditions.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_size (query) | integer | Yes | The number of results to be returned per page. Valid range: [1-50]. |
| sort_field (query) | string | No | The returned results will be sorted by the specified field. Default: `create_time` Possible values: - `create_time` - `update_time` - `order_pay_time` Specify the order for sorting the returned results by using the sort_order parameter. |
| sort_order (query) | string | No | The sort order for the sort_field parameter. Default: `DESC` Possible values: - `ASC`: Ascending order - `DESC`: Descending order |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the `next_page_token` from a previous response. It is not needed for the first page. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=650 |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| create_time_ge | integer | No | Filter the packages to show only those that are created after (or at) the specified date and time. Unix timestamp. (e.g. 1623812664) |
| create_time_lt | integer | No | Filter the packages to show only those that are created before the specified date and time. Unix timestamp. (e.g. 1623812664) |
| package_status | string | No | Possible values: - `PROCESSING`: Package has been arranged by seller. Waiting for carrier to collect the parcel. - `FULFILLING`: Package has been collected by carrier and in transit. - `COMPLETED`: Package has been delivered. - `CANCELLED`: Package has been canceled. Normally, the package is canceled due to the package being lost or damaged. (e.g. PROCESSING) |
| update_time_ge | integer | No | Filter the packages to show only those that are updated after (or at) the specified date and time. Unix timestamp. (e.g. 1623812664) |
| update_time_lt | integer | No | Filter the packages to show only those that are updated before the specified date and time. Unix timestamp. (e.g. 1623812664) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. Provide this value in the `page_token` parameter of your request if the current response does not return all the results. (e.g. 6AsPQsUMvH3RkchNUPPh22NROHkE0D8pmq/N5M1kHYcZmtRyv9aVrNv65W7Q6tFA) |
| data.packages | array<object> | No | The response list of packages. |
| data.total_count | integer | No | The number of packages that meet the query conditions. (e.g. 221) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
