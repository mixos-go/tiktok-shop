---
title: CreateImageTranslationTasks
category: product
api_name: CreateImageTranslationTasks
method: POST
path: /product/202505/images/translation_tasks
version: 202505
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** CreateImageTranslationTasks

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202505/images/translation_tasks

## API Description
Initiates a translation task for one or more images. This asynchronous API queues the images for processing in the specified target language. Applicable only for sellers that sell across EU. Use the [Image Translation Completed webhook](684f8d9bcc4e44049347a12e) to monitor the translation progress, or pass the task ID to the [Get Image Translation Tasks API](684f8b2d535a9d048f234564) to retrieve the status and the translated images. **Note**: - Please wait 5 minutes after task creation before calling the Get endpoint, and retry at intervals over 10 seconds to avoid rate limiting. - Each task corresponds to the translation of 1 image into 1 target language. - You can create up to 20 tasks per call and 500 tasks per day. Any tasks beyond the daily limit will be rejected.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| images | array<object> | No | The list of images to translate. Use the [Upload Product Image API](https://partner.tiktokshop.com/docv2/page/6509df95defece02be598a22) to upload the images first and obtain the corresponding image URIs. **Note**: The total number of image and target language combinations must not exceed 20. For example, you can submit 10 images with 2 target languages each, but you can't submit 10 images with 5 target languages each. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.translation_tasks | array<object> | No | The list of translation tasks created for the requested images. Each task corresponds to the translation of 1 image into 1 target language. So if you specified 2 target languages for an image, 2 tasks will be created. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
