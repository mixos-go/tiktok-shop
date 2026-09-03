---
title: CreateOpenCollaboration
category: affiliate_seller
api_name: CreateOpenCollaboration
method: POST
path: /affiliate_seller/202412/open_collaborations
version: 202412
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** CreateOpenCollaboration

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202412/open_collaborations

## API Description
This API allows the seller to create an open collaboration. You create an open collaboration by selecting products and setting a commission rate.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| commission_rate | integer | No | The desired commission rate for the open collaboration. The desired commission rate is expressed in hundredths of a percent. For example, `3587` is a commission rate of `35.87%`. This value must a minimum of `100`. (e.g. 1000) |
| product_id | string | No | The product ID for adding to the affiliate open collaboration. (e.g. 789078671231) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.open_collaboration | object | No | The open collaboration. |
| data.open_collaboration.effective_time | integer | No | The effective time of the open collaboration in Unix epoch time format. (e.g. 1715654330) |
| data.open_collaboration.id | string | No | The open collaboration identifier. (e.g. 7365861555575916210) |
| data.open_collaboration.product_id | string | No | The product identifier. (e.g. 789078671231) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
