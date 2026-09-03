---
title: SellerSearchSampleApplications
category: affiliate_seller
api_name: SellerSearchSampleApplications
method: POST
path: /affiliate_seller/202508/sample_applications/search
version: 202508
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** SellerSearchSampleApplications

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202508/sample_applications/search

## API Description
This API is provided for sellers to query sample applications based on various criteria such as products, creators, or application statuses. By using this API, sellers can retrieve detailed information about sample application records, including the creator's information and the specifics of each application.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_token (query) | string | No | Pagination offset determines where you begin to search for. It's empty when raise your first request. |
| page_size (query) | integer | No | The value of "page_size" must be greater than 0 and less than or equal to 50. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| creator_user_oepn_id | string | No | TikTok User ID of a creator (e.g. 123456) |
| order_id | string | No | Main order ID associated with a sample order when the sample application is approved by seller. (e.g. 123456) |
| product_id | string | No | The unique identifier of a product. It is used to specify which product's sample application details are being queried. (e.g. 123456) |
| status | string | No | The status of sample applications. The possible enumerated values are: - PENDING: The sample application is waiting for the seller's review. - AWAITING_SHIPMENT: The application is approved, and the seller needs to ship the sample. - SHIPPED: The sample has been shipped by the seller and is waiting for the creator to receive the package. - CONTENT_PENDING: The creator has received the sample package and is expected to create content. - REJECT_CANCELLED: The sample application has been rejected by the seller. - OVERDUE_CANCELLED: The sample application has expired due to being overdue. - UNFULFILL_CANCELLED: The creator did not fulfill the commitment to create content within the agreed timeframe. - DEL_OPEN_COLLAB: Open collaboration has been deleted. - SELLER_NOT_SHIP_CANCELLED: The seller did not ship the sample within the required timeframe. - WITHDRAW_CANCELLED: The creator withdrew the sample application before the seller approved it. - UNFULFILLABLE_CANCELLED: The application was cancelled due to reasons beyond the creator's control, making it impossible to create content. - OPS_CANCELLED: The application was manually cancelled by operations staff. - OPS_FAILED: The application was marked as failed by operations staff. - OPS_COMPLETED: The application was manually marked as completed by operations staff. - COMPLETED: The application is complete, and the creator has posted the content. This field allows for tracking the status of a sample application throughout its lifecycle, providing visibility into each stage of the process for sellers and creators. (e.g. PENDING) |
| target_collabration_id | string | No | The unique ID generated after creating a target collaboration. (e.g. 123456) |
| title | string | No | Product name, supports fuzzy search queries. It allows sellers to search for products by name when managing sample applications. (e.g. product name) |
| username | string | No | TikTok User Name of a creator, supports fuzzy search (e.g. test_tt_name) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | Page token to query next page orders, last page is empty string (e.g. aDU2dHIzMlFhME5CUzJKUDhDdVJhTDM1WmJkeFVTVW9LTkRaSnNaZCtuWjJXVU5CSDhlaA==) |
| data.sample_applications | array<object> | No | The sample applications from creators |
| data.sample_applications.creator.avatar_url | string | No | The URL of the creator's avatar image (e.g. https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068xxxxx) |
| data.sample_applications.creator.content_count | integer | No | The number of contents a creator has posted in the last 30 days. It is formatted as an integer. If the creator has not authorized the sharing of this information, the field returns an empty string. (e.g. 4) |
| data.sample_applications.creator.creator_open_id | string | No | Creator Open ID. [More details](https://partner.tiktokshop.com/docv2/page/3obfokj6) (e.g. uACafQAAAABmUU2qon4R0vUYvUVS3QC6CICP2m5A2-wd77j8R9G0yg) |
| data.sample_applications.creator.ec_video_view | integer | No | The median number of creators' shoppable video views over the past 30 days. If the creator has not authorized the sharing of this information, the field returns an empty string. (e.g. 1200) |
| data.sample_applications.creator.follower_count | integer | No | The number of creator's followers (e.g. 200) |
| data.sample_applications.creator.fulfillment_percentage | string | No | Sample fulfillment rate of a creator received sample from seller over the past 90 days, formatted as a floating-point percentage with two decimal places (e.g., "60.85%"). If the creator has not authorized the disclosure of this information, the field returns an empty string. (e.g. 60.50) |
| data.sample_applications.creator.gmv | object | No | GMV generated by a creators' shoppable content over the past 30 days. It is formatted as a floating-point number with a currency symbol (e.g., "$1234.56"). If the creator has not authorized the disclosure of this information, the field returns an empty string. |
| data.sample_applications.creator.gmv.amount | string | No | GMV amount (e.g. 500) |
| data.sample_applications.creator.gmv.currency | string | No | currency (e.g. USD) |
| data.sample_applications.creator.nickname | string | No | TikTok Nick Name of a creator (e.g. Test Name) |
| data.sample_applications.creator.username | string | No | TikTok User Name of a creator (e.g. test.name) |
| data.sample_applications.product.id | string | No | The product identifier. (e.g. 123456) |
| data.sample_applications.product.sku_id | string | No | The unique id of product sku which creator apply for as sample. (e.g. 123456) |
| data.sample_applications.product.sku_image_url | string | No | The URL of SKU image. (e.g. https://p16-oec-va.ibyteimg.com/tos-malivaxxxxx) |
| data.sample_applications.product.sku_name | string | No | The description of sku (e.g. Soft Cover) |
| data.sample_applications.product.title | string | No | The product name of the product. (e.g. A women dress) |
| data.total_count | integer | No | total count (e.g. 100) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
