---
title: SearchReturns
category: return_refund
api_name: SearchReturns
method: POST
path: /return_refund/202309/returns/search
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** return_refund
**API:** SearchReturns

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/return_refund/202309/returns/search

## API Description
Use this API to retrieve one or more returns. This API supports filtering returns using query parameters. You can filter returns by create time, update time, return status, or return types.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| sort_field (query) | string | No | The returned results will be sorted by the specified field. Default: `create_time` Possible values: - `create_time` - `update_time` Specify the order for sorting the returned results by using the `sort_order` parameter. |
| sort_order (query) | string | No | The sort order for the `sort_field` parameter. Default: ASC Possible values: - `ASC`: Ascending order - `DESC`: Descending order |
| page_size (query) | string | No | The number of results to be returned per page. Default: 10. Valid range: [10-50]. |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the `next_page_token` from a previous response. It is not needed for the first page. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| arbitration_status | array<string> | No | List of arbitration statuses. Available values: - `IN_PROGRESS`: The TikTok Shop platform operator is processing arbitration. Platform may request additional information from the seller. - `SUPPORT_BUYER`: The platform operator supports buyer. - `SUPPORT_SELLER`: The platform operator supports seller. - `CLOSED`: Arbitration is closed. |
| buyer_user_ids | array<string> | No | List of TikTok Shop buyer user IDs. |
| create_time_ge | integer | No | Filter returns to show only those that are created on or after the specified date and time. Unix timestamp. Note: `create_time_ge` and `create_time_le` together constitute the creation time filter condition. - If `create_time_ge` is filled but `create_time_le` is empty, `create_time_le` will default to the current time. - If `create_time_lt` is filled but `create_time_ge` is empty, `create_time_ge` will default to the earliest shop time. (e.g. 1690340825) |
| create_time_lt | integer | No | Filter returns to show only those that are created before the specified date and time. Unix timestamp. Refer to notes in `create_time_ge` for more usage information. (e.g. 1690340825) |
| locale | string | No | The BCP-47 locale codes for displaying the returns, delimited by commas. Default: `en` Refer to [Locale codes](678e3a47bae28f030a8c7523) for the list of supported locale codes. (e.g. en-US) |
| order_ids | array<string> | No | List of TikTok Shop order IDs. |
| return_ids | array<string> | No | List of return IDs. |
| return_status | array<string> | No | List of return status. Available values: - `RETURN_OR_REFUND_REQUEST_PENDING`: Buyer has initiated a return or refund request. The request is pending review by seller or system. - `REFUND_OR_RETURN_REQUEST_REJECT`: The return or refund request was rejected. - `AWAITING_BUYER_SHIP`: The return request was approved. The seller is waiting for the buyer to ship the approved items to the seller. If the buyer doesn't ship the items to the seller before the deadline, the platform will close the request. - `BUYER_SHIPPED_ITEM`: Buyer has shipped the approved items to seller. - `REJECT_RECEIVE_PACKAGE`: Seller inspected the returned items and rejected the return request. - `RETURN_OR_REFUND_REQUEST_SUCCESS`: The return/refund request was successful. The buyer will be refunded. - `RETURN_OR_REFUND_REQUEST_CANCEL`: The request has been cancelled by the buyer or system. - `RETURN_OR_REFUND_REQUEST_COMPLETE`: The return/refund was processed successfully. The buyer has been refunded. - `AWAITING_BUYER_RESPONSE`: Seller offer another return type to the buyer, and waiting buyer response. Seller proposed return type can check the `seller_proposed_return_type`. |
| return_types | array<string> | No | List of return types. Available values: - `REFUND` - `RETURN_AND_REFUND` - `REPLACEMENT` |
| seller_proposed_return_type | array<string> | No | List of seller proposed return types. Available values: - `PARTIAL_REFUND` |
| update_time_ge | integer | No | Filter returns to show only those that are updated on or after the specified date and time. Unix timestamp. Note: `update_time_ge` and `update_time_le` together define the update time filter condition. - If `update_time_ge` is filled but `update_time_le` is empty, `update_time_le` will default to the current time. - If `update_time_lt` is filled but `update_time_ge` is empty, `update_time_ge` will default to the earliest shop time. (e.g. 1690340825) |
| update_time_lt | integer | No | Filter returns to show only those that are created before the specified date and time. Unix timestamp. Refer to notes in `create_time_ge` for more usage information. (e.g. 1690340825) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. Provide this value in the `page_token` parameter of your request if the current response does not return all the results. (e.g. aDU2dHIzMlFhME5CUzJKUDhDdVJhTDM1WmJkeFVTVW9LTkRaSnNaZCtuWjJXVU5CSDhlaA==) |
| data.return_orders | array<object> | No | List of returns. |
| data.return_orders.partial_refund.amount | string | No | The partial refund amount offered by seller. Note: only seller proposed partial refund will return this field. (e.g. 10) |
| data.return_orders.partial_refund.currency | string | No | Partial refund currency (e.g. IDR) |
| data.return_orders.refund_amount.buyer_service_fee | string | No | Buyer service fee. (e.g. 0.1) |
| data.return_orders.refund_amount.currency | string | No | Refund currency. (e.g. USD) |
| data.return_orders.refund_amount.refund_shipping_fee | string | No | Shipping fee refund. (e.g. 0.2) |
| data.return_orders.refund_amount.refund_subtotal | string | No | Subtotal refund amount. This is the total price of all items returned. (e.g. 1) |
| data.return_orders.refund_amount.refund_tax | string | No | Tax fee refund. (e.g. 0.03) |
| data.return_orders.refund_amount.refund_total | string | No | Total refund amount. (e.g. 1.23) |
| data.return_orders.refund_amount.retail_delivery_fee | string | No | Retail delivery fee takes effect once platform GMV exceeds 500,000 USD, according to US Colorado states' compliance rules. (e.g. 0.1) |
| data.return_orders.return_line_items.product_image.height | integer | No | Product image height. Units: pixels (px). (e.g. 200) |
| data.return_orders.return_line_items.product_image.url | string | No | Product image URL. (e.g. https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/004797ebfd8c4d3da2df1cc4bfdb0614~tplv-o3syd03w52-origin-jpeg.jpeg?from=4246405447) |
| data.return_orders.return_line_items.product_image.width | integer | No | Product image width. Units: pixels (px). (e.g. 200) |
| data.return_orders.return_line_items.refund_amount.buyer_service_fee | string | No | Buyer service fee. (e.g. 0.1) |
| data.return_orders.return_line_items.refund_amount.currency | string | No | Payment currency. (e.g. USD) |
| data.return_orders.return_line_items.refund_amount.refund_shipping_fee | string | No | Shipping fee refund amount to buyer. (e.g. 0.2) |
| data.return_orders.return_line_items.refund_amount.refund_subtotal | string | No | Subtotal refund amount to buyer. (e.g. 1) |
| data.return_orders.return_line_items.refund_amount.refund_tax | string | No | Tax refund amount to buyer. (e.g. 0.03) |
| data.return_orders.return_line_items.refund_amount.refund_total | string | No | Total refund amount to buyer. (e.g. 1.23) |
| data.return_orders.return_line_items.refund_amount.retail_delivery_fee | string | No | Retail delivery fee takes effect once platform GMV exceeds 500,000 USD, according to US Colorado states' compliance rules. (e.g. 0.1) |
| data.return_orders.return_warehouse_address.full_address | string | No | The full return warehouse address. (e.g. 1199 Coleman Ave San Jose, CA 95110) |
| data.total_count | integer | No | The number of returns that meet the query conditions. (e.g. 100) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
