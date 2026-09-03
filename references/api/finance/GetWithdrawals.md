---
title: GetWithdrawals
category: finance
api_name: GetWithdrawals
method: GET
path: /finance/202309/withdrawals
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** finance
**API:** GetWithdrawals

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/finance/202309/withdrawals

## API Description
Get the list of the withdrawal records (when Seller's withdraw money from TikTokShop) based on the specified date range.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| create_time_lt (query) | integer | No | Unix timestamp representing the end of transactions time range one wants to request |
| types (query) | array<string> | Yes | The type of transaction. Possible values: - WITHDRAW：The action of the seller to receive the settlement amount to the bank card through the action of withdrawal - SETTLE：The platform settles the amount to the seller - TRANSFER：Platform subsidies or deductions due to platform policies - REVERSE：Withd |
| page_size (query) | integer | No | The default is 20, it must be positive integer,the range is 1-100 |
| page_token (query) | string | No | The next page token |
| create_time_ge (query) | integer | No | Unix timestamp representing the start of transactions time range one wants to request |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | Cursor used for searching for more information (e.g. 6AsPQsUMvH3RkchNUPPh22NROHkE0D8pmq/N5M1kHYcZmtRyv9aVrNv65W7Q6tFA+7D1ud64MPNz5OaT) |
| data.total_count | integer | No | The total num of the withdraws (e.g. 1) |
| data.withdrawals | array<object> | No | Withdraw list |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
