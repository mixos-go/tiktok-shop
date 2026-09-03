---
title: GetStatements
category: finance
api_name: GetStatements
method: GET
path: /finance/202309/statements
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** finance
**API:** GetStatements

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/finance/202309/statements

## API Description
Retrieves the statements generated for a shop and the key statement information based on a specified date range or their payment status. Use this API to get an overview of your daily statements over a range of time, or to find out which statements have been paid or not. For the detailed transactions, refer to [Get Statement Transactions](650a6749defece02be67da87) or [Get Order Statement Transactions](650a6734defece02be67d724). Applicable for all regions' sellers. Only data after 2023-07-01 is available.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| statement_time_lt (query) | integer | No | Filter statements to show only those that are generated before the specified date and time. Unix timestamp. Refer to notes in `statement_time_ge` for more usage information. |
| payment_status (query) | string | No | Filter statements based on the payment status. Possible values: - PAID: Payment has been transferred to the seller. - FAILED: Payment transfer failed. - PROCESSING: Payment is currently being processed. Default: All statuses are returned. |
| page_size (query) | int8 | No | The number of results to be returned per page. Default: 20 Valid range: [1-100] |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the `next_page_token` from a previous response. It is not needed for the first page. |
| sort_field (query) | string | Yes | The returned results will be sorted by the specified field. Only supports `statement_time`. |
| sort_order (query) | string | No | The sort order for the `sort_field` parameter. Default: ASC Possible values: - ASC: Ascending order - DESC: Descending order |
| statement_time_ge (query) | integer | No | Filter statements to show only those that are generated on or after the specified date and time. Unix timestamp. **Note:** `statement_time_ge` and `statement_time_le` together constitute the creation time filter condition. - If `statement_time_ge` is filled but `statement_time_lt` is empty, `stateme |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. Provide this value in the `page_token` parameter of your request if the current response does not return all the results. (e.g. 6AsPQsUMvH3RkchNUPPh22NROHkE0D8pmq/N5M1kHYcZmtRyv9aVrNv65W7Q6tFA+7D1ud64MPNz5OaT) |
| data.statements | array<object> | No | The list of statements that meet the query conditions. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
