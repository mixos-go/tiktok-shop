---
title: CheckAnchorContent
category: affiliate
api_name: CheckAnchorContent
method: POST
path: /affiliate/202403/anchors/content_check
version: 202403
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate
**API:** CheckAnchorContent

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate/202403/anchors/content_check

## API Description
This interface is used for checking anchor contents. The interface currently supports verification of anchor title. It will return error if the title has dirty words, punctuation, emoji or less than 30 characters long.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| title | string | No | Anchor title that you want show in anchor. (e.g. "This is an anchor title") |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
