---
title: GetCreatorSampleApplicationDetail
category: affiliate_creator
api_name: GetCreatorSampleApplicationDetail
method: POST
path: /affiliate_creator/202412/sample_applications/single_query
version: 202412
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_creator
**API:** GetCreatorSampleApplicationDetail

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_creator/202412/sample_applications/single_query

## API Description
Get the sample detail of specified sample application.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| application_id | string | No | Free sample application ID, required when application type is "FREE_SAMPLE". (e.g. 8070590921506065183) |
| application_type | string | No | The type of creator sample application. - FREE_SAMPLE : free sample supplied by seller which creator can apply for by themselves from product detail page. - SAMPLE_COUPON: creator claimed sample coupon (a type of coupon) and used it to place orders at a discount price. - SAMPLE_CAMPAIGN: activity organized by the platform. Creators can participate in this activity to obtain sample products provided by the platform for free. (e.g. FREE_SAMPLE) |
| main_order_id | string | No | The real main order identifier, required when application is "SAMPLE_COUPON" or "SAMPLE_CAMPAIGN" or "REFUNDABLE_SAMPLE". (e.g. 579622078763731743) |
| product_id | string | No | The product identifier. (e.g. 1729480364147774364) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.sample_application | object | No | The sample application information. |
| data.sample_application.activity_id | string | No | The sample activity identifier id( only for sample campaign). (e.g. 74378918272345199) |
| data.sample_application.create_time | integer | No | Sample application create time in seconds. (e.g. 1731298837) |
| data.sample_application.creator_fulfillment | object | No | Fulfillment info for this sample application. |
| data.sample_application.creator_fulfillment.expiration_time | integer | No | Fulfillment deadline timestamp, in seconds. (e.g. 1726301400) |
| data.sample_application.creator_fulfillment.id | string | No | Fulfillment identifier. (e.g. 87147319238415178) |
| data.sample_application.creator_fulfillment.status | string | No | Fulfillment status, It indicates the current status of the fulfillment process. The possible values are: - PENDING: The creator is yet to fulfill the content creation obligation. - ONGOING: Fulfillment is in progress; content has been created and is being evaluated against criteria. - SUCCEED: Fulfillment has been successfully completed; the content meets the required standards. - FAILED: Fulfillment failed; the content did not meet the required standards. - OVERDUE: Fulfillment is overdue; the creator did not meet the deadline. - SUSPEND: Fulfillment has been suspended. - CANCELLED: Fulfillment has been cancelled, either by the creator or due to operational reasons. - EXEMPTED: The creator has been exempted from the fulfillment obligation. (e.g. PENDING) |
| data.sample_application.creator_fulfillment.total_suspend_duration | integer | No | Total suspension duration for fulfillment, in seconds. (e.g. 7641234) |
| data.sample_application.id | string | No | Sample application identifier. (e.g. 8070590921506065183) |
| data.sample_application.main_order_id | string | No | The sample order is generated after the sample application is approved by seller. (e.g. 57871819384716917) |
| data.sample_application.sample_product | object | No | The sample product information. |
| data.sample_application.sample_product.id | string | No | The product identifier. (e.g. 1729863469568985219) |
| data.sample_application.sample_product.sku_id | string | No | The SKU identifier. (e.g. 1729480364147774364) |
| data.sample_application.sample_product.sku_sale_property_value_names | array<string> | No | Sku property name list for this sku id. |
| data.sample_application.status | string | No | The status of sample applications. The possible enumerated values are: - PENDING: The sample application is waiting for the seller's review. - AWAITING_SHIPMENT: The application is approved, and the seller needs to ship the sample. - SHIPPED: The sample has been shipped by the seller and is waiting for the creator to receive the package. - CONTENT_PENDING: The creator has received the sample package and is expected to create content. - REJECT_CANCELLED: The sample application has been rejected by the seller. - OVERDUE_CANCELLED: The sample application has expired due to being overdue. - UNFULFILL_CANCELLED: The creator did not fulfill the commitment to create content within the agreed timeframe. - SELLER_NOT_SHIP_CANCELLED: The seller did not ship the sample within the required timeframe. - WITHDRAW_CANCELLED: The creator withdrew the sample application before the seller approved it. - UNFULFILLABLE_CANCELLED: The application was cancelled due to reasons beyond the creator's control, making it impossible to create content. - OPS_CANCELLED: The application was manually cancelled by operations staff. - OPS_FAILED: The application was marked as failed by operations staff. - OPS_ COMPLETED: The application was manually marked as completed by operations staff. - COMPLETED: The application is complete, and the creator has posted the content. This field allows for tracking the status of a sample application throughout its lifecycle, providing visibility into each stage of the process for sellers and creators. (e.g. PENDING) |
| data.sample_application.type | string | No | The type of creator sample application. - FREE_SAMPLE : free sample supplied by seller which creator can apply by themselves from pdp page. - SAMPLE_COUPON: creator claimed sample coupon (a type of coupon) and used it to purchase orders at a discount price. - SAMPLE_CAMPAIGN: activity organized by the platform. Creators can participate in this activity to obtain sample products provided by the platform for free. (e.g. FREE_SAMPLE) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
