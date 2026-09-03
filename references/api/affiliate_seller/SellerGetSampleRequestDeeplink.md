---
title: SellerGetSampleRequestDeeplink
category: affiliate_seller
api_name: SellerGetSampleRequestDeeplink
method: GET
path: /affiliate_seller/202512/sample_applications/deeplink
version: 202512
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** SellerGetSampleRequestDeeplink

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202512/sample_applications/deeplink

## API Description
Use this API to get a TikTok deeplink, use this deeplink to launch the TikTok app and land the user on the sample request page. - The seller can encode the deeplink into an QR code and send it to a creator via email.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_id (query) | string | Yes | Product id |
| sku_id (query) | string | Yes | Sku id |
| campaign_id (query) | string | No | If the product belongs to a TAP campaign, a campaign_id is required. only support campaign type : - MY_CAMPAIGNS - SELLER_CAMPAIGNS |
| collaboration_id (query) | string | No | If the product belongs to a seller collaboration, a collaboration_id is required. |
| valid_days (query) | integer | No | 7 days by default. 14 days maximum. 1 day minimum. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.deeplink | string | No | Use this deeplink to invoke TikTok: (e.g. snssdk1180://roma_redirect/?_pia_=1&app_key=aaaa&callback_dp_key=f3318dbad42e495eaa12f3b9bec5af92&enter_from=deeplink&product_id=1729504817131129797&roma_group_key=spark_page_seller_free_sample_apply&roma_page_key=p&sample_apply_source=1&sku_id=1729504817131195333&spark_page=seller_free_sample_apply&track_data=%7B%22is_from_selection_scenarios%22%3A%221%22%2C%22selection_channel%22%3A%22deeplink%22%7D) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
