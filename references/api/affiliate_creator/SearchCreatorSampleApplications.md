---
title: SearchCreatorSampleApplications
category: affiliate_creator
api_name: SearchCreatorSampleApplications
method: POST
path: /affiliate_creator/202412/sample_applications/search
version: 202412
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_creator
**API:** SearchCreatorSampleApplications

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_creator/202412/sample_applications/search

## API Description
Get sample application list of creator.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_token (query) | string | No | Pagination offset determines where you begin to search for. It's empty when raise your first request. |
| page_size (query) | integer | No | The value of "page_size" must be greater than 0 and less than or equal to 50. Default 20 |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| application_statuses | array<string> | No | The status of sample applications. The possible enumerated values are: - PENDING: The sample application is waiting for the seller's review. - AWAITING_SHIPMENT: The application is approved, and the seller needs to ship the sample. - SHIPPED: The sample has been shipped by the seller and is waiting for the creator to receive the package. - CONTENT_PENDING: The creator has received the sample package and is expected to create content. - REJECT_CANCELLED: The sample application has been rejected by the seller. - OVERDUE_CANCELLED: The sample application has expired due to being overdue. - UNFULFILL_CANCELLED: The creator did not fulfill the commitment to create content within the agreed timeframe. - DEL_OPEN_COLLAB: Open collaboration has been deleted. - SELLER_NOT_SHIP_CANCELLED: The seller did not ship the sample within the required timeframe. - WITHDRAW_CANCELLED: The creator withdrew the sample application before the seller approved it. - UNFULFILLABLE_CANCELLED: The application was cancelled due to reasons beyond the creator's control, making it impossible to create content. - OPS_CANCELLED: The application was manually cancelled by operations staff. - OPS_FAILED: The application was marked as failed by operations staff. - OPS_ COMPLETED: The application was manually marked as completed by operations staff. - COMPLETED: The application is complete, and the creator has posted the content. This field allows for tracking the status of a sample application throughout its lifecycle, providing visibility into each stage of the process for sellers and creators. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | Page token to query next page orders, last page is empty string. (e.g. aDU2dHIzMlFhME5CUzJKUDhDdVJhTDM1WmJkeFVTVW9LTkRaSnNaZCtuWjJXVU5CSDhlaA==) |
| data.sample_applications | array<object> | No | The sample application information. |
| data.sample_applications.creator_fulfillment.bound_product_status | string | No | Represents the marketing status of a product associated with a fulfillment order. It indicates whether the product is available for marketing and fulfillment. The possible values are: - UNKNOWN: The marketing status of the product is unknown. - LIVE: The product is available and can be used for fulfillment. - OUT_OF_STOCK: The product is out of stock and cannot be fulfilled. - SELLER_DEACTIVATE: The product has been deactivated by the seller. - PLATFORM_DEACTIVATE: The product has been deactivated by the platform. - NO_PLAN: There is no valid plan available for the creator to market the product. - PERMANENT_DELETED: The product has been permanently deleted and is no longer available. This field helps sellers and creators understand the current status of products associated with fulfillment orders, ensuring that all parties are aware of the availability and marketing status of the products involved in sample applications and collaborations. (e.g. LIVE) |
| data.sample_applications.creator_fulfillment.expiration_time | integer | No | Fulfillment deadline timestamp, in seconds. (e.g. 1726301400) |
| data.sample_applications.creator_fulfillment.id | string | No | Fulfillment ID. (e.g. 123456) |
| data.sample_applications.creator_fulfillment.status | string | No | Fulfillment status, It indicates the current status of the fulfillment process. The possible values are: - PENDING: The creator is yet to fulfill the content creation obligation. - ONGOING: Fulfillment is in progress; content has been created and is being evaluated against criteria. - SUCCEED: Fulfillment has been successfully completed; the content meets the required standards. - FAILED: Fulfillment failed; the content did not meet the required standards. - OVERDUE: Fulfillment is overdue; the creator did not meet the deadline. - SUSPEND: Fulfillment has been suspended. - CANCELLED: Fulfillment has been cancelled, either by the creator or due to operational reasons. - EXEMPTED: The creator has been exempted from the fulfillment obligation. (e.g. PENDING) |
| data.sample_applications.creator_fulfillment.total_suspend_duration | integer | No | Total suspension duration for fulfillment, in seconds. (e.g. 123) |
| data.sample_applications.sample_product.id | string | No | The product identifier. (e.g. 1729432087292775344) |
| data.sample_applications.sample_product.sku_id | string | No | The SKU identifier. (e.g. 1729480364147774364) |
| data.sample_applications.sample_product.sku_sale_property_value_names | array<string> | No | The SKU property value name. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
