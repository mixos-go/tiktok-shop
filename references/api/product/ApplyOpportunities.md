---
title: ApplyOpportunities
category: product
api_name: ApplyOpportunities
method: PUT
path: /product/202409/products/{product_id}/opportunities
version: 202409
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** ApplyOpportunities

**Method:** PUT
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202409/products/{product_id}/opportunities

## API Description
Apply to enroll a product in multiple opportunities. After using the [Create Product API](https://partner.tiktokshop.com/docv2/page/6502fc8da57708028b42b18a) to create TikTok Shop products that meet the matched opportunity requirements, you can apply for opportunities related to your product. All applications are subject to approval by TikTok Shop.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_id (path) | string | Yes | The product ID in TikTok Shop. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| opportunity_ids | array<string> | No | The IDs of the opportunities that you want to enroll your product in. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.opportunity_applications | array<object> | No | The opportunity application information. Each application is defined by 1 product ID and 1 opportunity ID. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
