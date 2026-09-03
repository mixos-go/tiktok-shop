---
title: OptimizedImages
category: product
api_name: OptimizedImages
method: POST
path: /product/202404/images/optimize
version: 202404
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** OptimizedImages

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202404/images/optimize

## API Description
Optimize images used in your TikTok Shop by changing the background to white. This is especially useful for images displayed in the product image gallery as it enhances product visibility. **Note**: - The images to be optimized must first be uploaded to TikTok Shop through the [Upload Product Image API](https://partner.tiktokshop.com/docv2/page/6509df95defece02be598a22). You will not be able to optimize any images that are not hosted by TikTok Shop. - Images that were previously optimized will not be processed again. - The optimization is processed asynchronously and typically completes within a few seconds. Therefore, the `optimize_status` returned in the first API request for an image is always `PROCESSING`, indicating that optimization is underway. Please call the API again after a few seconds to get the final optimization status.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| images | array<object> | No | The list of images to be optimized. Use the [Upload Product Image API](https://partner.tiktokshop.com/docv2/page/6509df95defece02be598a22) to upload the images first and obtain the corresponding image URIs. Max count: 200 |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.images | array<object> | No | The list of images to be optimized. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
