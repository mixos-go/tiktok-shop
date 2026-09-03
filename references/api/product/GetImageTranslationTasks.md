---
title: GetImageTranslationTasks
category: product
api_name: GetImageTranslationTasks
method: GET
path: /product/202506/images/translation_tasks
version: 202506
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** GetImageTranslationTasks

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202506/images/translation_tasks

## API Description
Retrieves the image translation task status and translated images for one or more previously submitted images. **Note**: Please wait 5 minutes after [task creation](684f8b2d6e0b37048b2448b4) before calling this API, and retry at intervals over 10 seconds to avoid rate limiting. Applicable only for sellers that sell across EU.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| translation_task_ids (query) | array<string> | No | The image translation task IDs for retrieving translation results. Max count: 20 |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.translation_tasks | array<object> | No | The requested translation tasks and the corresponding results. Each task corresponds to the translation of 1 image into 1 target language. |
| data.translation_tasks.original_image.uri | string | No | The URI of the original image. (e.g. tos-useast2a-i-tulkllf4y5-euttp/748e39ecff38453ab8396a36a53dbb92) |
| data.translation_tasks.original_image.url | string | No | The URL of the original image. (e.g. https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/sample.jpeg) |
| data.translation_tasks.translated_image.uri | string | No | The URI of the translated image. (e.g. tos-maliva-i-o3syd03w52-us/53b55d6e8cdf1f315affa7e70b45707d) |
| data.translation_tasks.translated_image.url | string | No | The URL of the translated image. (e.g. https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/sample.jpeg) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
