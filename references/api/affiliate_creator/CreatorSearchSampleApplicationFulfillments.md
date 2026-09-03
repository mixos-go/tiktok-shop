---
title: CreatorSearchSampleApplicationFulfillments
category: affiliate_creator
api_name: CreatorSearchSampleApplicationFulfillments
method: POST
path: /affiliate_creator/202409/sample_applications/fulfillments/search
version: 202409
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_creator
**API:** CreatorSearchSampleApplicationFulfillments

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_creator/202409/sample_applications/fulfillments/search

## API Description
You, the creator, can use this API to query the fulfillment status for the received sample applications.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| sort_order (query) | string | No | The sort order for the field specified in the sort_field parameter. Default: ASC Possible values: ASC: Ascending order DESC: Descending order |
| sort_field (query) | string | No | Some sorting fields are as follows: - expired_time: sort by left time to fulfill. - create_time: sort by fulfillment content create time. Default value is expired_time. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| fulfillment_statuses | array<string> | No | A list of fulfillment statuses. The response is filtered to include sample fulfillments with the fulfillment_status field set to one of the specified values. The possible values are: - PENDING: The creator has not yet fulfilled the content creation obligation. - ONGOING: Fulfillment is in progress; content has been created and is being evaluated against criteria. - SUCCEED: Fulfillment has been successfully completed; the content meets the required standards. - FAILED: Fulfillment failed; the content did not meet the required standards. - OVERDUE: Fulfillment is overdue; the creator did not meet the deadline. - SUSPEND: Fulfillment has been suspended. - CANCELLED: Fulfillment has been cancelled, either by the creator or due to operational reasons. - EXEMPTED: The creator is exempt from the fulfillment obligation. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.fulfillments | array<object> | No | Creator fulfillment contents. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
