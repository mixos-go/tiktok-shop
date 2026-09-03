---
title: QuerySKUsandtheapprovalstatusofSKUs
category: gs_full_service_commodity
api_name: QuerySKUsandtheapprovalstatusofSKUs
method: POST
path: /gs_full_service_commodity/202405/preview/products/search
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_commodity
**API:** QuerySKUsandtheapprovalstatusofSKUs

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_commodity/202405/preview/products/search

## API Description
Query SKUs and the approval status of SKUs

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| supplier_id (query) | string | Yes | identity ID of supplier |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| external_sku_codes | array<string> | No | The SkU code of the external , upper limit 10 Only one platform SPU code, platform SKU code, and external sku code can be filled in at a time for a query |
| page_size | integer | No | page size of each query request (e.g. 10) |
| page_token | string | No | page token (e.g. y67819asj2634) |
| platform_sku_codes | array<string> | No | The Sku code of the platform , upper limit 10 Only one platform SPU code, platform SKU code, and external sku code can be filled in at a time for a query |
| platform_spu_codes | array<string> | No | The SPU code of the platform, through SPU search, will return all SKUs under the SPU , upper limit 10 Only one platform SPU code, platform SKU code, and external sku code can be filled in at a time for a query |
| push_time_ge | integer | No | Payment start timestamp (in seconds) (e.g. 1715747262) |
| push_time_lt | integer | No | Payment end timestamp (in seconds) (e.g. 1715746262) |
| sku_status | string | No | SKU status -BUYER_SELECTING -GNE_SELECTING -ELIMINATED -WAIT_DELIVERY_SAMPLE -PATTERNING -MODIFY_DATA -PRICING -WAIT_PRICE_CONFIRM -WAIT_ORDER -CAN_NOT_ORDER -ORDERED -ON_SHELF -OFF_SHELF -CANCELED (e.g. BUYER_SELECTING) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | page token of next page , use in next request (e.g. y67819asj2M2) |
| data.spus | array<object> | No | list of spus information |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
