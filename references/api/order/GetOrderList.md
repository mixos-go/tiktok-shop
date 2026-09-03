---
title: GetOrderList
category: order
api_name: GetOrderList
method: POST
path: /order/202309/orders/search
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** order
**API:** GetOrderList

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/order/202309/orders/search

## API Description
Returns a list of orders created or updated during the timeframe indicated by the specified parameters. You can also apply a range of filtering criteria to narrow the list of orders returned, such as order status, delivery option type, and buyer user ID.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_size (query) | integer | Yes | The number of results to be returned per page. Default: 20. Valid range: [1-100]. |
| sort_order (query) | string | No | The sort order for the `sort_field` parameter. Default: DESC Possible values: - ASC: Ascending order - DESC: Descending order |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the `next_page_token` from a previous response. It is not needed for the first page. |
| sort_field (query) | string | No | The returned results will be sorted by the specified field. Default: `create_time` Possible values: - `create_time` - `update_time` Specify the order for sorting the returned results by using the `sort_order` parameter. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| buyer_user_id | string | No | Buyer user ID. (e.g. 7213489962827123654) |
| create_time_ge | integer | No | Filter orders to show only those that are created on or after the specified date and time. Unix timestamp. Note: `create_time_ge` and `create_time_lt` together constitute the creation time filter condition. - If `create_time_ge` is filled but `create_time_lt` is empty, `create_time_lt` will default to the current time. - If `create_time_lt` is filled but `create_time_ge` is empty, `create_time_ge` will default to the earliest shop time. (e.g. 1623812664) |
| create_time_lt | integer | No | Filter orders to show only those that are created before the specified date and time. Unix timestamp. Refer to notes in `create_time_ge` for more usage information. (e.g. 1623812664) |
| is_buyer_request_cancel | boolean | No | Whether the buyer has initiated an order cancellation request. (e.g. False) |
| order_status | string | No | Specific order status. Available values: - `UNPAID`: The order has been placed, but payment has not been completed. - `ON_HOLD`: The order has been accepted and is awaiting fulfillment. The buyer may still cancel without the seller’s approval. If `order_type=PRE_ORDER`, the product is still awaiting release so payment will only be authorized 1 day before the release, but the seller should start preparing for the release. - `AWAITING_SHIPMENT`: The order is ready to be shipped, but no items have been shipped yet. - `PARTIALLY_SHIPPING`: Some items in the order have been shipped, but not all. - `AWAITING_COLLECTION`: Shipping has been arranged, but the package is waiting to be collected by the carrier. - `IN_TRANSIT`: The package has been collected by the carrier and delivery is in progress. - `DELIVERED`: The package has been delivered to the buyer. - `COMPLETED`: The order has been completed, and no further returns or refunds are allowed. - `CANCELLED`: The order has been cancelled. (e.g. UNPAID) |
| shipping_type | string | No | The delivery method. - `TIKTOK`: Shipping service provided by TikTok. The seller should obtain a shipping label from TikTok. - `SELLER`: Seller provides shipping, including through 3rd party fulfillment providers on behalf of the seller. (e.g. TIKTOK) |
| update_time_ge | integer | No | Filter orders to show only those that are updated on or after the specified date and time. Unix timestamp. Note: `update_time_ge` and `update_time_lt` together define the update time filter condition. - If `update_time_ge` is filled but `update_time_lt` is empty, `update_time_lt` will default to the current time. - If `update_time_lt` is filled but `update_time_ge` is empty, `update_time_ge` will default to the earliest shop time. Update times may exceed the selected search range due to ongoing data refreshes during the search process. (e.g. 1623812664) |
| update_time_lt | integer | No | Filter orders to show only those that are updated before the specified date and time. Unix timestamp. Refer to notes in `update_time_ge` for more usage information. Update times may exceed the selected search range due to ongoing data refreshes during the search process. (e.g. 1623812664) |
| warehouse_ids | array<string> | No | Filter orders by pickup/sales warehouse IDs. Applicable only if the multi-warehouse feature is enabled. Max count: 100 |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. Provide this value in the `page_token` parameter of your request if the current response does not return all the results. (e.g. 6AsPQsUMvH3RkchNUPPh22NROHkE0D8pmq/N5M1kHYcZmtRyv9aVrNv65W7Q6tFA+7D1ud64MPNz5OaT) |
| data.orders | array<object> | No | Order information. |
| data.orders.handling_duration.days | string | No | The number of days. (e.g. 7) |
| data.orders.handling_duration.type | string | No | Indicates if the duration is calculated in calendar days or business days. Possible values: - `CALENDAR_DAY`: Represents consecutive days, including weekends and holidays. - `BUSINESS_DAY`: Represents business days, excluding weekends and public holidays. Default: `BUSINESS_DAY` (e.g. BUSINESS_DAY) |
| data.orders.payment.buyer_service_fee | string | No | A service fee is charged on every transaction made. The charge is applied from the fifth order onwards and collected directly from customers during checkout. Only available in the Indonesia market. (e.g. 1000) |
| data.orders.payment.currency | string | No | Currency for payment. (e.g. IDR) |
| data.orders.payment.distance_fee | string | No | Total distance fee for Horizon+ Program. Only applicable for ID market (e.g. 2000) |
| data.orders.payment.distance_shipping_fee | string | No | Distance shipping fee is fee that charged charged by our logistics partner and covers the separate distance-based cost for deliveries outside Java island as a part of Horizon+ Program. Only applicable in ID Market. (e.g. 1000) |
| data.orders.payment.handling_fee | string | No | A fee charged to the buyer to cover the additional processing, handling, and/or installment costs associated with the chosen payment method. (e.g. 1000) |
| data.orders.payment.item_insurance_fee | string | No | The cost incurred by the buyers for coverage against defects or damage to the product after purchase. **Note**: Only available in the US and Indonesia markets. (e.g. 1000) |
| data.orders.payment.item_insurance_tax | string | No | The tax paid on the insurance purchased by buyers. Note: Only applicable in US market. (e.g. 10) |
| data.orders.payment.original_shipping_fee | string | No | Shipping fee before discount. (e.g. 5000) |
| data.orders.payment.original_total_product_price | string | No | Total original price of the products (VAT included for cross-border shops). For the US market, this is pre-tax total amount. (e.g. 5000) |
| data.orders.payment.payment_discount_service_fee | string | No | Service fee as paid by the buyer to apply payment platform discount (e.g. 10) |
| data.orders.payment.payment_platform_discount | string | No | Discount applied to the order funded by a payment platform (e.g. 10) |
| data.orders.payment.platform_discount | string | No | Product discount by platform. (e.g. 5000) |
| data.orders.payment.product_tax | string | No | The tax on the total item price. (e.g. 21.3) |
| data.orders.payment.retail_delivery_fee | string | No | Retail delivery fee (RDF). **Note**: Only available in the US market. (e.g. 1.28) |
| data.orders.payment.seller_discount | string | No | Product discount by seller. (e.g. 5000) |
| data.orders.payment.shipping_fee | string | No | Buyer paid shipping fee. `shipping_fee = original_shipping_fee - shipping_fee_seller_discount - shipping_fee_platform_discount` For the US market, this is pre-tax total amount. (e.g. 5000) |
| data.orders.payment.shipping_fee_cofunded_discount | string | No | Shipping fee discount provided by seller, eligible for co-funded reimbursement upon order delivery, based on Co-Funded Free Shipping program terms. **Note**: This will be 0 for orders that did not meet minimum order value for co-funded reimbursement. In this case, refer to `shipping_fee_seller_discount` for the shipping discount the buyer received. (e.g. 5000) |
| data.orders.payment.shipping_fee_platform_discount | string | No | Shipping fee discount provided by platform. (e.g. 5000) |
| data.orders.payment.shipping_fee_seller_discount | string | No | Shipping fee discount provided by seller for an order that will not qualify for co-funded reimbursement. **Note**: If an order meets the minimum order value for co-funded reimbursement, this will be 0. In this case, refer to `shipping_fee_cofunded_discount` for the shipping discount the buyer received. (e.g. 5000) |
| data.orders.payment.shipping_fee_tax | string | No | The tax on the shipping price. (e.g. 11) |
| data.orders.payment.shipping_insurance_fee | string | No | The cost incurred by the buyer for coverage against loss or damage to goods during transit. **Note**: Only available in the Indonesia market. (e.g. 1000) |
| data.orders.payment.small_order_fee | string | No | Small order fee for TH (**Thailand market only**). Small order fee means that the platform will set a minimum order spending amount. When the order amount is lower than the minimum order spending amount, the user needs to pay a small order fee to meet the platform minimum spending amount. e.g. Minimum order spending amount is 100, order amount is 80. So the small order fee will be 20. (e.g. 3000) |
| data.orders.payment.sub_total | string | No | Buyer paid sub-total of all the SKUs in the order. `sub_total = original_total_product_price - seller_discount - platform_discount` For the US market, this is pre-tax total amount. (e.g. 5000) |
| data.orders.payment.tax | string | No | Buyer paid total taxes for the order. Applicable to both cross-border shops and the US market. (e.g. 5000) |
| data.orders.payment.total_amount | string | No | Buyer paid total payment. `total_amount = sub_total + shipping_fee + taxes + retail_delivery_fee` (e.g. 5000) |
| data.orders.recipient_address.address_detail | string | No | Full recipient detailed address. (e.g. Unit one building 8) |
| data.orders.recipient_address.address_line1 | string | No | The first line of the street address. (e.g. TikTok 5800 bristol Pkwy) |
| data.orders.recipient_address.address_line2 | string | No | The second line of the street address. (e.g. Suite 100) |
| data.orders.recipient_address.address_line3 | string | No | The third line of the street address. Usually only for the Brazilian market (e.g. ) |
| data.orders.recipient_address.address_line4 | string | No | The fourth line of the street address. Usually only for the Brazilian market (e.g. ) |
| data.orders.recipient_address.delivery_preferences | object | No | Contains all of the delivery instructions provided by the recipient for the shipping address. Currently, only available in the US market. |
| data.orders.recipient_address.delivery_preferences.drop_off_location | string | No | Drop-off location selected by the recipient. (e.g. Front Door) |
| data.orders.recipient_address.district_info | array<object> | No | `district_info` is unavailable under `UNPAID` and `ON_HOLD` statuses. |
| data.orders.recipient_address.first_name | string | No | Recipient first name. If the recipient first and last names are not provided separately, this parameter will have the same value as the `name` parameter. (e.g. David) |
| data.orders.recipient_address.first_name_local_script | string | No | Recipient first name in katakana. **Note**: Applicable only for the JP market. (e.g. ジョン) |
| data.orders.recipient_address.full_address | string | No | Complete recipient address information. (e.g. 1199 Coleman Ave San Jose, CA 95110) |
| data.orders.recipient_address.last_name | string | No | Recipient last name. If the recipient first and last names are not provided separately, this parameter will be empty. (e.g. Kong) |
| data.orders.recipient_address.last_name_local_script | string | No | Recipient last name in katakana. **Note**: Applicable only for the JP market. (e.g. ドゥ) |
| data.orders.recipient_address.name | string | No | Recipient name. **Note**: If this order uses platform logistics, the recipient name will be desensitized. (e.g. David Kong) |
| data.orders.recipient_address.phone_number | string | No | Recipient telephone number. **Note**: If this order uses platform logistics, the phone number will be desensitized. (e.g. (+1)213-***-1234) |
| data.orders.recipient_address.post_town | string | No | Post town of the address Note: Available only in UK market (e.g. Ribbleton) |
| data.orders.recipient_address.postal_code | string | No | The postal code that can be used by seller for shipping. For the US market, this refers to the ZIP Code. (e.g. 95110) |
| data.orders.recipient_address.region_code | string | No | Region code. (e.g. US) |
| data.total_count | integer | No | Total number of orders in the search result. (e.g. 22113) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
