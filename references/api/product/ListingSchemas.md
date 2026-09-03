---
title: ListingSchemas
category: product
api_name: ListingSchemas
method: GET
path: /product/202407/listing_schemas
version: 202407
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** ListingSchemas

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202407/listing_schemas

## API Description
The interface returns the field requirements for creating a product. By providing the leaf category ID, you can obtain the field information and input methods for the product creation requirements.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| category_ids (query) | array<integer> | Yes | The interface returns the field requirements for creating a product. By providing the leaf category ID, you can obtain the field information and input methods for the product creation requirements. |
| locale (query) | string | No | Category information will be returned in the corresponding language based on the specified locale. If no locale is provided, the default locale of the store will be used. The currently supported locales include: en-GB, en-US, id-ID, ms-MY, th-TH, vi-VN, zh-CN. Use BCP-47 language codes, such as 'en- |
| category_version (query) | string | No | The version id of the category tree.The new version id is "v2" and will return data from our new 7-level category tree.The old version id is "v1" and will return data from the current 3-level category tree.The old version of category data will be given by default. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.errors | array<object> | No | The list of errors that occurred from executing the mutation. |
| data.errors.detail.category_id | integer | No | The category that failed to be fetched (e.g. 60002) |
| data.listing_schemas | array<object> | No | The schema information of listing product. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
