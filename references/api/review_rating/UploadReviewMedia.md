---
title: UploadReviewMedia
category: review_rating
api_name: UploadReviewMedia
method: POST
path: /review_rating/202410/media/upload
version: 202410
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** review_rating
**API:** UploadReviewMedia

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/review_rating/202410/media/upload

## API Description
Upload media files (e.g. images, videos) that are associated with product reviews from external sources.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: multipart/form-data |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.uri | string | No | The URI to identify the media file in API requests and responses. Pass this value when importing reviews to associate the file with a product review. (e.g. image-tos-maliva-i-o3syd03w52-us/c668cdf70b7f483c94dbe) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
