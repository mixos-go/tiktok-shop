---
title: CheckAnchorPrerequisites
category: affiliate
api_name: CheckAnchorPrerequisites
method: POST
path: /affiliate/202402/anchors/prerequisite_check
version: 202402
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate
**API:** CheckAnchorPrerequisites

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate/202402/anchors/prerequisite_check

## API Description
The is a pre-verification interface for creator adding products to video. This interface will verify the creator's permissions and product status, etc.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_id | string | No | Product id that wanted to been checked. (e.g. 7136104329798256386) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
