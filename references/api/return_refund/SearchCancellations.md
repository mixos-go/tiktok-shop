---
title: SearchCancellations
category: return_refund
api_name: SearchCancellations
method: POST
path: /return_refund/202309/cancellations/search
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** return_refund
**API:** SearchCancellations

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/return_refund/202309/cancellations/search

## API Description
Use this API to search and retrieve one or more order cancellations.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| sort_field (query) | string | No | The returned results will be sorted by the specified field. Default: create_time Possible values: - create_time - update_time Specify the order for sorting the returned results by using the sort_order parameter. |
| sort_order (query) | string | No | The sort order for the sort_field parameter. Default: ASC Possible values: - ASC: Ascending order - DESC: Descending order |
| page_size (query) | string | No | The number of results to be returned per page. Default: 10. Valid range: [1-50]. |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the next_page_token from a previous response. It is not needed for the first page. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| buyer_user_ids | array<string> | No | List of TikTok Shop buyer user IDs. |
| cancel_ids | array<string> | No | List of order cancellations IDs. |
| cancel_status | array<string> | No | List of order cancellation statuses. Possible values: - CANCELLATION_REQUEST_PENDING - CANCELLATION_REQUEST_SUCCESS - CANCELLATION_REQUEST_CANCEL - CANCELLATION_REQUEST_COMPLETE Please see "API Overview" for more information about these statuses. |
| cancel_types | array<string> | No | List of order cancellation types. Possible values: - CANCEL: Cancel by seller or system. - BUYER_CANCEL: Cancel by buyer. Need to be approved by seller or system. |
| create_time_ge | integer | No | Filter cancellations to show only orders that have been created after a specified date and time. Unix timestamp. (e.g. 1690340825) |
| create_time_lt | integer | No | Filter cancellations to show only orders that have been created before a specified date and time. Unix timestamp. (e.g. 1690340825) |
| locale | string | No | The BCP-47 locale codes for displaying the order, delimited by commas. Default: en-US Refer to [Locale codes](678e3a47bae28f030a8c7523) for the list of supported locale codes. (e.g. en-US) |
| order_ids | array<string> | No | List of TikTok Shop order IDs. |
| update_time_ge | integer | No | Filter cancellations to show only orders that have been updated after a specified date and time. Unix timestamp. (e.g. 1690340825) |
| update_time_lt | integer | No | Filter cancellations to show only orders that have been updated before a specified date and time. Unix timestamp. (e.g. 1690340825) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.cancellations | array<object> | No | List of order cancellations. |
| data.cancellations.cancel_line_items.product_image.height | integer | No | Product image height. Unit: px (e.g. 200) |
| data.cancellations.cancel_line_items.product_image.url | string | No | Product image URL. (e.g. https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/004797ebfd8c4d3da2df1cc4bfdb0614~tplv-o3syd03w52-origin-jpeg.jpeg?from=4246405447) |
| data.cancellations.cancel_line_items.product_image.width | integer | No | Product image width. Unit: px (e.g. 200) |
| data.cancellations.cancel_line_items.refund_amount.buyer_service_fee | string | No | Only for the ID market. Platform will charge the buyer service fee depending on the scenario. (e.g. 1000) |
| data.cancellations.cancel_line_items.refund_amount.currency | string | No | Refund currency. (e.g. USD) |
| data.cancellations.cancel_line_items.refund_amount.refund_shipping_fee | string | No | Shipping fee refund amount to the buyer. (e.g. 0.2) |
| data.cancellations.cancel_line_items.refund_amount.refund_subtotal | string | No | Subtotal refund amount to the buyer. (e.g. 1) |
| data.cancellations.cancel_line_items.refund_amount.refund_tax | string | No | Tax refund amount to the buyer. (e.g. 0.03) |
| data.cancellations.cancel_line_items.refund_amount.refund_total | string | No | Total refund amount to the buyer. (e.g. 1.23) |
| data.cancellations.cancel_line_items.refund_amount.retail_delivery_fee | string | No | Retail delivery fee takes effect once platform GMV exceeds 500,000 USD, according to Colorado (US) compliance rules. (e.g. 0.1) |
| data.cancellations.refund_amount.buyer_service_fee | string | No | Only for the ID market. Platform will charge the buyer a service fee depending on the scenario. (e.g. 1000) |
| data.cancellations.refund_amount.currency | string | No | Refund currency. (e.g. USD) |
| data.cancellations.refund_amount.refund_shipping_fee | string | No | Shipping fee refund amount to the buyer. (e.g. 0.2) |
| data.cancellations.refund_amount.refund_subtotal | string | No | Subtotal refund amount to the buyer. (e.g. 1) |
| data.cancellations.refund_amount.refund_tax | string | No | Tax refund amount to the buyer. (e.g. 0.03) |
| data.cancellations.refund_amount.refund_total | string | No | Total refund amount to the buyer. (e.g. 1.23) |
| data.cancellations.refund_amount.retail_delivery_fee | string | No | Retail delivery fee takes effect once platform GMV exceeds $500,000 USD, according to Colorado (US) compliance rules. (e.g. 0.1) |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. Provide this value in the page_token parameter of your request if the current response does not return all the results. (e.g. aDU2dHIzMlFhME5CUzJKUDhDdVJhTDM1WmJkeFVTVW9LTkRaSnNaZCtuWjJXVU5CSDhlaA==) |
| data.total_count | integer | No | The number of cancellations that meet the query conditions. (e.g. 100) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
