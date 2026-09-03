---
title: ProductAuditingResearch
category: product
api_name: ProductAuditingResearch
method: POST
path: /product/202601/compliance/auditing/research
version: 202601
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** ProductAuditingResearch

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202601/compliance/auditing/research

## API Description
Description of [POST]/product/:version/product_auditing_research

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_token (query) | string | No | returned by the current page, and for the first page, it is an empty string. |
| page_size (query) | integer | Yes | max is 20 |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| brand_ids | array<string> | No | brand id |
| category_ids | array<string> | No | leaf category id |
| product_ids | array<string> | No | max is 20 |
| product_title | string | No | product title (e.g. mike noritama cute calico cat) |
| seller_id | string | No | shop id (e.g. 1733337095719126364) |
| seller_name | string | No | shop name (e.g. shopname1) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | Obtain the transmission parameters for the next page data (e.g. [\"1733419489460520284\"]) |
| data.products | array<object> | No | product information |
| data.total_count | integer | No | total product count (e.g. 454) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
