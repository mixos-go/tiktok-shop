---
title: CreatorGetSampleRequestDeeplink
category: affiliate_creator
api_name: CreatorGetSampleRequestDeeplink
method: GET
path: /affiliate_creator/202512/samples/deeplink
version: 202512
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_creator
**API:** CreatorGetSampleRequestDeeplink

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_creator/202512/samples/deeplink

## API Description
Use this API to get a one-time TikTok deeplink, use this deeplink to launch TikTok app and land the user on the sample request page. If the redirect_schema is valid, TikTok will redirect the user back to the 3rd party app after the sample request is submitted. The deeplink generated can only be used by the creator who authorizes this API call.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_id (query) | string | Yes | Product id |
| sku_id (query) | string | Yes | Sku id |
| redirect_schema (query) | string | No | An URL schema for App redirection after sample request |
| campaign_id (query) | string | No | If the product belongs to a TAP campaign, a campaign_id is required. |
| collaboration_id (query) | string | No | If the product belongs to a seller collaboration, a collaboration_id is required. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.deeplink | string | No | Use this deeplink to invoke TikTok: aweme://sample_request?product_id=123456&sku_id=123456&token=iei938d93sd02 This deeplink can only be used by the creator who authorizes this API call. This deeplink expires in 30 minutes. (e.g. aweme://sample_request?product_id=123456&sku_id=123456&token=iei938d93sd02) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
