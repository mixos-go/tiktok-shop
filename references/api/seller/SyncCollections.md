---
title: SyncCollections
category: seller
api_name: SyncCollections
method: POST
path: /seller/202508/collections/sync
version: 202508
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** seller
**API:** SyncCollections

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/seller/202508/collections/sync

## API Description
Description of [POST]/seller/:version/collections/sync

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| collections | array<object> | No | the decorate theme content |
| logo_url | string | No | the shop logo url (e.g. https://cdn.shopify.com/s/files/1/0896/9152/1333/files/theme_cover_image.jpg?v=1722512835) |
| source | integer | No | the data source of collections (e.g. 1) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.failed_info | object | No | sync failed collection list |
| data.failed_info.ids | array<string> | No | failed collection ids |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
