---
title: GetPayments
category: finance
api_name: GetPayments
method: GET
path: /finance/202309/payments
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** finance
**API:** GetPayments

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/finance/202309/payments

## API Description
**This API is currently unavailable to SEA markets.** Retrieves records of automated payments for a shop based on a specified date range. Use the returned list to verify and reconcile payments with the transactions in the seller's bank account.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| create_time_lt (query) | integer | No | Filter payments to show only those that occurred before the specified date and time. Unix timestamp. Refer to notes in `create_time_ge` for more usage information. |
| page_size (query) | int8 | No | The number of results to be returned per page. Default: 20 Valid range: [1-100] |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the `next_page_token` from a previous response. It is not needed for the first page. |
| sort_field (query) | string | Yes | The returned results will be sorted by the specified field. Only supports `create_time`. |
| sort_order (query) | string | No | The sort order for the `sort_field` parameter. Default: ASC Possible values: - ASC: Ascending order - DESC: Descending order |
| create_time_ge (query) | integer | No | Filter payments to show only those that occurred on or after the specified date and time. Unix timestamp. **Note:** `create_time_ge` and `create_time_lt` together constitute the creation time filter condition. - If `create_time_ge` is filled but `create_time_lt` is empty, `create_time_lt` will defau |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. Provide this value in the `page_token` parameter of your request if the current response does not return all the results. (e.g. 6AsPQsUMvH3RkchNUPPh22NROHkE0D8pmq/N5M1kHYcZmtRyv9aVrNv65W7Q6tFA+7D1ud64MPNz5OaT) |
| data.payments | array<object> | No | The list of payments that meet the query conditions. |
| data.payments.amount.currency | string | No | The exchange currency code in ISO 4217 format. (e.g. GBP) |
| data.payments.amount.value | string | No | The final payment amount. (e.g. 100) |
| data.payments.payment_amount_before_exchange.currency | string | No | The original currency code in ISO 4217 format. (e.g. GBP) |
| data.payments.payment_amount_before_exchange.value | string | No | The original payment amount. (e.g. 100) |
| data.payments.reserve_amount.currency | string | No | The original currency code in ISO 4217 format. (e.g. GBP) |
| data.payments.reserve_amount.value | string | No | The reserved amount. (e.g. -30) |
| data.payments.settlement_amount.currency | string | No | The original currency code in ISO 4217 format. (e.g. GBP) |
| data.payments.settlement_amount.value | string | No | The settlement amount. (e.g. 130) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
