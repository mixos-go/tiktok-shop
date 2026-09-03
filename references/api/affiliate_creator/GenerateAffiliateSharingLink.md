---
title: GenerateAffiliateSharingLink
category: affiliate_creator
api_name: GenerateAffiliateSharingLink
method: POST
path: /affiliate_creator/202501/affiliate_sharing_links/generate_batch
version: 202501
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_creator
**API:** GenerateAffiliateSharingLink

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_creator/202501/affiliate_sharing_links/generate_batch

## API Description
Use externally input material id, distributor customized tags, promotion channel and other needed parameters to generate affiliate share link, which contains chain keys.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| channel | string | No | The customized promotion channel (e.g. facebook) |
| material | object | No | The material used to generate links. |
| material.campaign_url | string | No | The original url of the campaign page, which will be returned after verified and concatenated with chainkey and other event tracking parameters. (e.g. https://vt.tokopedia.com/caravel/campaign?__live_platform__=webcast&append_common_params=1&bdhm_bid=caravel_h5&bdhm_pid=7436566936202528513_7436630394906167057&campaign_id=7436566936202528513&campaign_region=ID&disable_ttnet_proxy=0&hide_loading=0&hide_nav_bar=1&page_group_id=7436630394906167057) |
| material.id | string | No | The ID of product/campiagn/showcase that our partner wants to promote. We use this material id to generate the sharing link (e.g. 17213214214587983) |
| material.type | string | No | You can use the following enumerations: - PRODUCT - CAMPAIGN - SHOWCASE When `type==PRODUCT`, use pid as `id`; when `type==CAMPAIGN`, use campaign ID as `id`, and pass in `campaign_url`; when `type==SHOWCASE`, no need to pass in `id` and `campaign_url`. (e.g. PRODUCT) |
| tags | array<string> | No | The parameter provided for creator to record his own tracking info |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.affiliate_sharing_links | array<object> | No | Generated affiliate links for each Tag |
| data.errors | array<object> | No | Specific error(if have) for each tagString(if have) |
| data.errors.detail.fail_reason | string | No | Detail fail reason for specific tag (e.g. Tag has exceeded the length limit) |
| data.errors.detail.tag | string | No | Same as description in request params (e.g. tag-aaa) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
