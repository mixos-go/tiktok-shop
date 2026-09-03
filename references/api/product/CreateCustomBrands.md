---
title: CreateCustomBrands
category: product
api_name: CreateCustomBrands
method: POST
path: /product/202309/brands
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** CreateCustomBrands

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/brands

## API Description
Create custom brands for your own use across all markets. Authorization is not required when creating a brand. You can create the brand first and obtain brand authorization later through the Qualification Center in TikTok Shop Seller Center. **Note**: You can create up to 50 brands per day, with a total limit of 1,000 brands.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| name | string | No | The brand name. **Note**: - Length: [2, 30] - No language restrictions, but do not use Chinese. - The name will not be translated into multiple languages. (e.g. Teas) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.id | string | No | A unique ID that identifies the brand in TikTok Shop. (e.g. 7082427311584347905) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
