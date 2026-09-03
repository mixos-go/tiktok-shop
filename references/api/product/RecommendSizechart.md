---
title: RecommendSizechart
category: product
api_name: RecommendSizechart
method: POST
path: /product/202309/images/size_charts/identify
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** RecommendSizechart

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/images/size_charts/identify

## API Description
Use this API to check if images are size chart.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| images | array<object> | No | List of images to be inspected. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.images | array<object> | No | List of images inspected. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
