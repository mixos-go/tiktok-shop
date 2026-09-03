---
title: MarkPackageAsShipped
category: fulfillment
api_name: MarkPackageAsShipped
method: POST
path: /fulfillment/202309/orders/{order_id}/packages
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** MarkPackageAsShipped

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202309/orders/{order_id}/packages

## API Description
**This API is currently exclusive to the following markets: US, UK, ES, IE, IT, DE, FR, JP.** This API is for sellers who fulfill orders through their own selected/preferred logistics carrier, and allows sellers to upload valid package information (items in packages, shipping provider information, and tracking number) orders/order line items to TikTok Shop. Use [Get Shipping Providers API](https://partner.tiktokshop.com/docv2/page/650aa48d4a0bb702c06d85cd?external_id=650aa48d4a0bb702c06d85cd) to retrieve the `shipping_provider_id` for shipping providers.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| order_id (path) | string | Yes | The unique identifier for a TikTok Shop order. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| order_line_item_ids | array<string> | No | List of order line item IDs. |
| shipping_provider_id | string | No | Use [Get Shipping Provider API](https://partner.tiktokshop.com/docv2/page/650aa48d4a0bb702c06d85cd?external_id=650aa48d4a0bb702c06d85cd) to retrieve the `shipping_provider_id` for shipping providers. (e.g. 12312312321323432) |
| tracking_number | string | No | Tracking number. (e.g. 6617675021119438849) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.order_id | string | No | TikTok Shop order ID. (e.g. 32131324123321) |
| data.order_line_item_ids | array<string> | No | List of order line item IDs. |
| data.package_id | string | No | Package ID. (e.g. 32141235124234) |
| data.warning | object | No | Warning message. |
| data.warning.message | string | No | Specific warning information. (e.g. match more than one provider) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
