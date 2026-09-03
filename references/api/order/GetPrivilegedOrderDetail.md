---
title: GetPrivilegedOrderDetail
category: order
api_name: GetPrivilegedOrderDetail
method: GET
path: /order/202309/privileged_orders
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** order
**API:** GetPrivilegedOrderDetail

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/order/202309/privileged_orders

## API Description
Get the detailed order information of an Order, including important attributes such as order status, shipping addresses, payment details, price and tax info, and package information.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| ids (query) | array<string> | Yes | A list of TikTok Shop order ID values. Max count : 50 |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.orders | array<object> | No | TikTok Shop orders. |
| data.orders.payment.currency | string | No | Currency for payment. (e.g. IDR) |
| data.orders.payment.original_shipping_fee | string | No | Shipping fee before discount (e.g. 5000) |
| data.orders.payment.original_total_product_price | string | No | Total original price of products. (VAT included for crossborder shop). For the US market, this is pre-tax total amount. (e.g. 5000) |
| data.orders.payment.platform_discount | string | No | Product discount by platform. (e.g. 5000) |
| data.orders.payment.product_tax | string | No | The tax on the total item price. (e.g. 5000) |
| data.orders.payment.retail_delivery_fee | string | No | RDF(Retail delivery fee). Available only in the US market. (e.g. 1.28) |
| data.orders.payment.seller_discount | string | No | Product discount by seller. (e.g. 5000) |
| data.orders.payment.shipping_fee | string | No | Buyer paid shipping fee. Shipping_fee = original_shipping_fee - shipping_fee_seller_discount - shipping_fee_platform_discount For the US market, this is pre-tax total amount. (e.g. 5000) |
| data.orders.payment.shipping_fee_platform_discount | string | No | Shipping fee discount by platform. (e.g. 5000) |
| data.orders.payment.shipping_fee_seller_discount | string | No | Shipping fee discount by seller. (e.g. 5000) |
| data.orders.payment.shipping_fee_tax | string | No | The tax on the shipping price. (e.g. 5000) |
| data.orders.payment.small_order_fee | string | No | Small order fee for TH. Small order fee is for Thailand only. small order fee means that the platform will set a minimum order spending amount, when the order amount is lower than the minimum order spending amount, the user needs to pay small order fee to meet the platform minimum spending amount. e.g. Minmum order spending amount is 100, order amount is 80. So the small order fee will be 20. (e.g. 5000) |
| data.orders.payment.sub_total | string | No | Buyer paid sub total of all the SKUs in the order. For the US market, this is pre-tax total amount. sub_total = original_total_product_price - seller_discount - platform_discount (e.g. 5000) |
| data.orders.payment.tax | string | No | Buyer paid total taxes of the order. Applicable to crossborder shops and the US market. (e.g. 5000) |
| data.orders.payment.total_amount | string | No | Buyer paid total payment. Total_amount=sub_total+shipping_fee+taxes+retail_delivery_fee. (e.g. 5000) |
| data.orders.recipient_address.address_detail | string | No | Full buyer detail address (e.g. unit one building 8) |
| data.orders.recipient_address.address_line1 | string | No | The first line of the street address (e.g. Tiktok 5800 bristol Pkwy) |
| data.orders.recipient_address.address_line2 | string | No | The second line of the street address (e.g. Suite 100) |
| data.orders.recipient_address.address_line3 | string | No | The third line of the street address. Usually only for the Brazilian market (e.g. Suite 100) |
| data.orders.recipient_address.address_line4 | string | No | The fourth line of the street address. Usually only for the Brazilian market (e.g. Suite 100) |
| data.orders.recipient_address.delivery_preferences | object | No | Contains all of the delivery instructions provided by the buyer for the shipping address. Currently, only available in the US market. |
| data.orders.recipient_address.delivery_preferences.drop_off_location | string | No | Drop-off location selected by the buyer. (e.g. Front Door) |
| data.orders.recipient_address.district_info | array<object> | No | district_info is unavailable under unpaid and on_hold status |
| data.orders.recipient_address.email | string | No | The email address of the buyer. This field will only return a value if the following conditions are met: - The buyer confirms their willingness to share their real email address at the time of order placement. - The order is a Shopify 1P connector order. (e.g. v2b2V5@chat.seller.tiktok.com) |
| data.orders.recipient_address.full_address | string | No | The complete recipient addresses information. (e.g. 1199 Coleman Ave San Jose, CA 95110) |
| data.orders.recipient_address.name | string | No | The name of the buyer. Please notice, if this order use platform logistics, buyer name will be desensitized (e.g. zay) |
| data.orders.recipient_address.phone_number | string | No | The telephone number of the buyer. Please notice, if this order use platform logistics, phone number will be desensitized (e.g. (+86)12345678980) |
| data.orders.recipient_address.postal_code | string | No | The postal code that can be used by seller for shipping. (In the U.S, it means zipcode) (e.g. 23683) |
| data.orders.recipient_address.region_code | string | No | Region code (e.g. ID) |
| data.orders.recipient_address.tokenized_email | string | No | The tokenized email address in which the seller can use to send messages to the buyer via TikTok Shop IM. Please note, the seller will need to first enable the email communication feature in Seller Center, and are subjected to the rules and conditions of TikTok Shop IM. This field will only return a value if the order is a Shopify 1P connector order. (e.g. v2b2V5@chat.seller.tiktok.com) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
