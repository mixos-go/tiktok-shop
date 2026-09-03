---
title: DeactivateActivity
category: promotion
api_name: DeactivateActivity
method: POST
path: /promotion/202309/activities/{activity_id}/deactivate
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** promotion
**API:** DeactivateActivity

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/promotion/202309/activities/{activity_id}/deactivate

## API Description
Deactivate an ongoing or upcoming activity.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| activity_id (path) | string | Yes | A unique ID that identifies different activities. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.activity_id | string | No | A unique ID that identifies different activities. (e.g. 7136104329798256386) |
| data.status | string | No | Activity status. Values: - DRAFT: Promotion activities with this status are not available to TikTok users. - NOT_START: Promotion activities with this status are not available to TikTok users until the the set activity start time. - ONGOING: Promotion activities with this status are available to TikTok users. - EXPIRED: Promotion activities with this status are not available to TikTok users because it has expired. - DEACTIVATED: The activity has been deactivated by the seller and is not available to TikTok users. - NOT_EFFECTIVE: The activity is not in effect and is not available to TikTok users. (e.g. ONGOING) |
| data.title | string | No | Activity name (50 characters max.) The name must be unique. (e.g. FlashSale 20230707) |
| data.update_time | integer | No | Activity update time, unix timestamp. (e.g. 1661756811) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
