---
title: GetOrderDetail
category: order
api_name: GetOrderDetail
method: GET
path: /order/202507/orders
version: 202507
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** order
**API:** GetOrderDetail

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/order/202507/orders

## API Description
Get the detailed order information of an order, including important attributes such as order status, shipping addresses, payment details, price and tax info, and package information.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| ids (query) | array<string> | Yes | A list of TikTok Shop order ID values. Max count: 50 |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.orders | array<object> | No | Order information. |
| data.orders.handling_duration.days | string | No | The number of days. (e.g. 7) |
| data.orders.handling_duration.type | string | No | Indicates if the duration is calculated in calendar days or business days. Possible values: - `CALENDAR_DAY`: Represents consecutive days, including weekends and holidays. - `BUSINESS_DAY`: Represents business days, excluding weekends and public holidays. Default: `BUSINESS_DAY` (e.g. BUSINESS_DAY) |
| data.orders.payment.buyer_service_fee | string | No | A service fee is charged on every transaction made. The charge is applied from the fifth order onwards and collected directly from customers during checkout. Only available in Indonesia market. (e.g. 1000) |
| data.orders.payment.currency | string | No | Currency for payment. (e.g. IDR) |
| data.orders.payment.distance_fee | string | No | Total distance fee for Horizon+ Program. Only applicable for ID market (e.g. 2000) |
| data.orders.payment.distance_shipping_fee | string | No | Distance shipping fee is fee that charged charged by our logistics partner and covers the separate distance-based cost for deliveries outside Java island as a part of Horizon+ Program. Only applicable in ID Market. (e.g. 1000) |
| data.orders.payment.handling_fee | string | No | A fee charged to buyers to cover the additional processing, handling, and/or installment costs associated with the chosen payment method. (e.g. 1000) |
| data.orders.payment.item_insurance_fee | string | No | The cost incurred by the buyers for coverage against defects or damage to the product after purchase. **Note**: Only available in the US and Indonesia markets. (e.g. 1000) |
| data.orders.payment.item_insurance_tax | string | No | The tax paid on the insurance purchased by buyers. Note: Only applicable in US market. (e.g. 10) |
| data.orders.payment.original_shipping_fee | string | No | Shipping fee before discount (e.g. 5000) |
| data.orders.payment.original_total_product_price | string | No | Total original price of products (VAT included for crossborder shop). For the US market, this is pre-tax total amount. (e.g. 5000) |
| data.orders.payment.payment_discount_service_fee | string | No | Service fee as paid by the buyer to apply payment platform discount (e.g. 10) |
| data.orders.payment.payment_platform_discount | string | No | Discount applied to the order funded by a payment platform (e.g. 10) |
| data.orders.payment.platform_discount | string | No | Product discount by platform. (e.g. 5000) |
| data.orders.payment.product_tax | string | No | The tax on the total item price. (e.g. 21.3) |
| data.orders.payment.retail_delivery_fee | string | No | RDF (retail delivery fee). Available only in the US market. (e.g. 1.28) |
| data.orders.payment.seller_discount | string | No | Product discount by seller. (e.g. 5000) |
| data.orders.payment.shipping_fee | string | No | Buyer paid shipping fee. `shipping_fee` = `original_shipping_fee` - `shipping_fee_seller_discount` - `shipping_fee_platform_discount` For the US market, this is pre-tax total amount. (e.g. 5000) |
| data.orders.payment.shipping_fee_cofunded_discount | string | No | Shipping fee discount provided by seller, eligible for co-funded reimbursement upon order delivery, based on Co-Funded Free Shipping program terms. **Note**: This will be 0 for orders that did not meet minimum order value for co-funded reimbursement. In this case, refer to `shipping_fee_seller_discount` for the shipping discount the buyer received. (e.g. 7) |
| data.orders.payment.shipping_fee_platform_discount | string | No | Shipping fee discount by platform. (e.g. 5000) |
| data.orders.payment.shipping_fee_seller_discount | string | No | Shipping fee discount provided by seller for an order that will not qualify for co-funded reimbursement. **Note**: If an order meets the minimum order value for co-funded reimbursement, this will be 0. In this case, refer to `shipping_fee_cofunded_discount` for the shipping discount the buyer received. (e.g. 5000) |
| data.orders.payment.shipping_fee_tax | string | No | The tax on the shipping price. (e.g. 11) |
| data.orders.payment.shipping_insurance_fee | string | No | The cost incurred by the buyers for coverage against loss or damage to goods during transit. **Note**: Available only in the Indonesia market. (e.g. 1000) |
| data.orders.payment.small_order_fee | string | No | Small order fee for TH. Small order fee is for Thailand only. small order fee means that the platform will set a minimum order spending amount, when the order amount is lower than the minimum order spending amount, the user needs to pay small order fee to meet the platform minimum spending amount. e.g. Minimum order spending amount is 100, order amount is 80. So the small order fee will be 20. (e.g. 3000) |
| data.orders.payment.sub_total | string | No | Buyer paid subtotal of all the SKUs in the order. For the US market, this is pre-tax total amount. `sub_total` = `original_total_product_price` - `seller_discount` - `platform_discount` (e.g. 5000) |
| data.orders.payment.tax | string | No | Buyer paid total taxes of the order. Applicable to crossborder shops and the US market. (e.g. 5000) |
| data.orders.payment.total_amount | string | No | Buyer paid total amount. `total_amount` = `sub_total` + `shipping_fee` + `taxes` + `retail_delivery_fee` (e.g. 5000) |
| data.orders.recipient_address.address_detail | string | No | Full buyer detail address. (e.g. Unit one building 8) |
| data.orders.recipient_address.address_line1 | string | No | The first line of the street address. (e.g. TikTok 5800 bristol Pkwy) |
| data.orders.recipient_address.address_line2 | string | No | The second line of the street address (e.g. Suite 100) |
| data.orders.recipient_address.address_line3 | string | No | The third line of the street address. Applicable only for the BR market. (e.g. Vila Olímpia) |
| data.orders.recipient_address.address_line4 | string | No | The fourth line of the street address. Applicable only for the BR market. (e.g. Avenida Presidente Juscelino Kubitschek) |
| data.orders.recipient_address.delivery_preferences | object | No | Contains all of the delivery instructions provided by the buyer for the shipping address. Currently, only available in the US market. |
| data.orders.recipient_address.delivery_preferences.drop_off_location | string | No | Drop-off location selected by the buyer. (e.g. Front Door) |
| data.orders.recipient_address.district_info | array<object> | No | District information list. |
| data.orders.recipient_address.first_name | string | No | The first name of the recipient. If the buyer does not provide their first and last name separately, this parameter will have the same value as the "name" parameter. (e.g. David) |
| data.orders.recipient_address.first_name_local_script | string | No | Recipient first name in katakana. **Note**: Applicable only for the JP market. (e.g. ジョン) |
| data.orders.recipient_address.full_address | string | No | The complete recipient addresses information. (e.g. 1199 Coleman Ave San Jose, CA 95110) |
| data.orders.recipient_address.last_name | string | No | The last name of the recipient. If the buyer does not provide their first and last name separately, this parameter will be empty. (e.g. Kong) |
| data.orders.recipient_address.last_name_local_script | string | No | Recipient last name in katakana. **Note**: Applicable only for the JP market. (e.g. ドゥ) |
| data.orders.recipient_address.name | string | No | The name of the recipient. Please note, if this order uses platform logistics, recipient name will be desensitized (e.g. David Kong) |
| data.orders.recipient_address.phone_number | string | No | The telephone number of the buyer. Please notice, if this order uses platform logistics, phone number will be desensitized. (e.g. (+1)213-***-1234) |
| data.orders.recipient_address.post_town | string | No | Post town of the address Note: Available only in UK market (e.g. Ribbleton) |
| data.orders.recipient_address.postal_code | string | No | The postal code that can be used by seller for shipping (in the U.S, this is the ZIP code). (e.g. 95110) |
| data.orders.recipient_address.region_code | string | No | Region code. (e.g. US) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
