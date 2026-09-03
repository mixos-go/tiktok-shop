---
title: UploadProductImage
category: product
api_name: UploadProductImage
method: POST
path: /product/202309/images/upload
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** UploadProductImage

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/images/upload

## API Description
Upload local images to TikTok Shop for use as product images, variant images, size charts, certification images and so on. **Note**: - All images used in TikTok Shop products must be uploaded through this API. You will not be able to use any image URLs that are not hosted by TikTok Shop. - You must store the response body to retrieve the ID or URL required to associate the image with a product during product creation or editing.

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
| data.height | integer | No | The height of the image after aspect ratio adjustment. (e.g. 720) |
| data.uri | string | No | The URI to identify the image in API requests and responses. Pass this value when creating or editing a product to associate the image with the product. (e.g. tos-maliva-i-o3syd03w52-us/c668cdf70b7f483c94dbe) |
| data.url | string | No | The URL to access and view the image. Use this URL in product descriptions by embedding it within an HTML `<img>` tag. (e.g. https://p-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c668cdf70b7f483c94dbe ) |
| data.use_case | string | No | The usage scenario specified during upload. Possible values: - MAIN_IMAGE - ATTRIBUTE_IMAGE - DESCRIPTION_IMAGE - CERTIFICATION_IMAGE - SIZE_CHART_IMAGE (e.g. MAIN_IMAGE) |
| data.width | integer | No | The width of the image after aspect ratio adjustment. (e.g. 720) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
