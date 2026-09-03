---
title: GSQuerySKUsandtheapprovalstatusofSKUsV2
category: gs_full_service_commodity
api_name: GSQuerySKUsandtheapprovalstatusofSKUsV2
method: POST
path: /gs_full_service_commodity/202504/beta/products/search
version: 202504
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_commodity
**API:** GSQuerySKUsandtheapprovalstatusofSKUsV2

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_commodity/202504/beta/products/search

## API Description
Query SKUs and the approval status of SKUs

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| external_sku_codes | array<string> | No |  |
| page_size | integer | No |  |
| page_token | string | No |  |
| platform_sku_codes | array<string> | No |  |
| platform_spu_codes | array<string> | No |  |
| push_time_ge | integer | No |  |
| push_time_lt | integer | No |  |
| sku_status | string | No |  |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No |  |
| data.spus | array<object> | No |  |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
