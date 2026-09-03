---
title: SellerReviewSampleApplications
category: affiliate_seller
api_name: SellerReviewSampleApplications
method: POST
path: /affiliate_seller/202507/sample_applications/{application_id}/review
version: 202507
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** SellerReviewSampleApplications

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202507/sample_applications/{application_id}/review

## API Description
This API allows the seller to approve or reject the creator's sample application in an open collaboration. When rejecting an application, the seller must provide a specific reason. This API facilitates the management of sample applications by giving sellers the ability to review and update applications according to their criteria and requirements.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| application_id (path) | string | Yes | The unique id of sample request application ID |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| reject_reason | string | No | The reason why a seller rejected a creator's sample application. The possible enumerated values are: - NOT_MATCH: The creator does not meet the seller's collaboration requirements. - OFFLINE: The product has been taken offline. - OUT_OF_STOCK: The product is temporarily out of stock. - OTHER: Any other reason not covered by the above categories. Required if the review_result is set to REJECT This field allows the seller to specify the reason for rejecting a sample application, providing clarity to the creator regarding the rejection. (e.g. NOT_MATCH) |
| review_result | string | No | The audit action to be taken on a sample application record by the seller. The field accepts one of four enumerated values: - APPROVE: Approves the sample application. - REJECT: Rejects the sample application. This field allows the seller to specify the desired operation to manage the sample application record effectively. (e.g. APPROVE) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
