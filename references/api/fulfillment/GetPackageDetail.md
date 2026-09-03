---
title: GetPackageDetail
category: fulfillment
api_name: GetPackageDetail
method: GET
path: /fulfillment/202309/packages/{package_id}
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** GetPackageDetail

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202309/packages/{package_id}

## API Description
Returns information about a package, including handover time slot, tracking number, and shipping provider information.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| package_id (path) | string | Yes | TikTok Shop package ID. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=650 |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.create_time | integer | No | Package creation time. Unix timestamp. (e.g. 1635338186) |
| data.delivery_option_id | string | No | Order delivery option ID. Delivery option ID is mapped to seller configured logistics templates ID. (e.g. 7091146663229654785) |
| data.delivery_option_name | string | No | Delivery option name. For display purposes only. (e.g. Shipped from seller ) |
| data.dimension | object | No | The dimensions of the scheduled package. |
| data.dimension.height | string | No | The height of the scheduled package. (e.g. 0.03) |
| data.dimension.length | string | No | The length of the scheduled package. (e.g. 1.2) |
| data.dimension.unit | string | No | The unit of measurement used to measure the length. Possible values: - `CM` - `INCH` (e.g. CM) |
| data.dimension.width | string | No | The width of the scheduled package. (e.g. 0.2) |
| data.handover_method | string | No | Whether the package is delivered by pick up or drop off. Possible values: - `PICKUP`: A Logistics carrier will pickup the package(s) from the seller's pickup address. - `DROP_OFF`: Seller will need to drop off the package(s) to a designated location. (e.g. PICKUP) |
| data.has_multi_skus | boolean | No | Whether there are multiple SKU IDs in a package. (e.g. True) |
| data.insurance | object | No | Provides details of shipping insurance auto-enrolled during label purchase |
| data.insurance.claim_status | string | No | The insurance claim status. Available values: - `NOT_STARTED`: Claim has not been initiated for this package. - `CLAIM_PENDING`: Claim is currently under review. - `APPROVED`: Claim has been approved. - `DECLINED`: Claim has been declined. (e.g. CLAIM_PENDING) |
| data.insurance.coverage_amount | string | No | The insurance coverage amount for the package. Units: USD. (e.g. 200) |
| data.insurance.is_claim_eligible | boolean | No | Whether the order is eligible for an insurance claim, based on eligible refund reasons. (e.g. True) |
| data.insurance.is_purchased | boolean | No | Whether insurance has been purchased for the package. (e.g. True) |
| data.last_mile_tracking_number | string | No | For cross-border order only. Cross-border order last mile tracking number. (e.g. 6617675021119438849) |
| data.note_tag | string | No | Possible values: - `BUYER_UNNOTED`: The order has not been noted by buyer. - `BUYER_NOTED`: The order has been noted by buyer. (e.g. BUYER_UNNOTED) |
| data.order_line_item_ids | array<string> | No | The order line item ID contained in the package. |
| data.orders | array<object> | No | The response list of TikTok Shop orders. |
| data.package_id | string | No | TikTok Shop package ID. (e.g. 5433567853345) |
| data.package_status | string | No | Possible values: - `PROCESSING`: Package has been arranged by seller. Waiting for carrier to collect the parcel. - `FULFILLING`: Package has been collected by carrier and in transit. - `COMPLETED`: Package has been delivered. - `CANCELLED`: Package has been canceled. Normally, the package is canceled due to the package being lost or damaged. (e.g. PROCESSING) |
| data.pickup_slot | object | No | Time slots available for pickup. |
| data.pickup_slot.end_time | integer | No | End of time slot when a package is scheduled to be picked up by carrier. Unix timestamp. (e.g. 1635338186) |
| data.pickup_slot.start_time | integer | No | Start of the time slot when a package is scheduled to be picked up by carrier. Unix timestamp. (e.g. 1635338186) |
| data.recipient_address | object | No | Recipient address. |
| data.recipient_address.address_detail | string | No | Full buyer detail address. (e.g. Unit one building 8 ) |
| data.recipient_address.address_line1 | string | No | The first line of the street address (e.g. TikTok 5800 bristol Pkwy ) |
| data.recipient_address.address_line2 | string | No | The second line of the street address. (e.g. Suite 100 ) |
| data.recipient_address.address_line3 | string | No | The third line of the street address. Usually only for the Brazilian market. (e.g. Suite 100 ) |
| data.recipient_address.address_line4 | string | No | The fourth line of the street address. Usually only for the Brazilian market. (e.g. Suite 100 ) |
| data.recipient_address.full_address | string | No | The complete recipient addresses information. (e.g. 1*** Coleman Ave San Jose, CA 95110 ) |
| data.recipient_address.name | string | No | The name of the recipient. Please note, if this order uses platform logistics, recipient name will be desensitized (e.g. Zay) |
| data.recipient_address.phone_number | string | No | The telephone number of the buyer. Please note, if this order use platform logistics, phone number will be desensitized. (e.g. (+1)213-***-1234 ) |
| data.recipient_address.postal_code | string | No | The postal code that can be used by seller for shipping (in the U.S, this refers to the ZIP code). (e.g. 95110 ) |
| data.recipient_address.region_code | string | No | Region code. (e.g. US) |
| data.sender_address | object | No | Sender address. |
| data.sender_address.address_detail | string | No | Full sender detail address. (e.g. Unit one building 8) |
| data.sender_address.address_line1 | string | No | The first line of the sender's street address. (e.g. TikTok 5800 bristol Pkwy) |
| data.sender_address.address_line2 | string | No | The second line of the sender's street address. (e.g. Suite 100) |
| data.sender_address.address_line3 | string | No | The third line of the sender's street address. Usually only for the Brazilian market. (e.g. Suite 100) |
| data.sender_address.address_line4 | string | No | The fourth line of the sender's street address. Usually only for the Brazilian market. (e.g. Suite 100) |
| data.sender_address.full_address | string | No | The complete sender addresses information. (e.g. 1*** Coleman Ave San Jose, CA 95110) |
| data.sender_address.name | string | No | The name of the sender. (e.g. Zay) |
| data.sender_address.phone_number | string | No | The telephone number of the sender. (e.g. (+1)213-***-1234 ) |
| data.sender_address.postal_code | string | No | The postal code of the sender. (e.g. 95110) |
| data.sender_address.region_code | string | No | Region code of the sender. (e.g. US) |
| data.shipping_provider_id | string | No | Package shipping provider ID. (e.g. 6617675021119438849) |
| data.shipping_provider_name | string | No | Package shipping provider name. (e.g. TT Virtual express) |
| data.shipping_type | string | No | The method of delivery. Possible values: - `TIKTOK`: Shipping service provided by TikTok. The seller should obtain a shipping label from TikTok. - `SELLER`: Seller provides shipping, including through 3rd party fulfillment providers on behalf of the seller. (e.g. TIKTOK) |
| data.split_and_combine_tag | string | No | Possible values: - `DEFAULT`: The package has not undergone any combine or split operation. - `COMBINE`: The package has been consolidated with another order. - `SPLIT`: The order has been split into multiple orders. (e.g. SPLIT) |
| data.tracking_number | string | No | Package tracking number. (e.g. 6617675021119438849) |
| data.update_time | integer | No | The time the package has been updated. Unix timestamp. (e.g. 1635338186) |
| data.weight | object | No | The weight of the scheduled package. |
| data.weight.unit | string | No | The unit of measurement used to measure the weight. Possible values: - `GRAM` - `POUND` (e.g. GRAM) |
| data.weight.value | string | No | The value of the weight of the scheduled package. (e.g. 1.2) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
