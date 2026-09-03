---
title: CreatorGenerateGeneralLink
category: affiliate_creator
api_name: CreatorGenerateGeneralLink
method: POST
path: /affiliate_creator/202505/affiliate_sharing_links/general_publishers/generate_batch
version: 202505
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_creator
**API:** CreatorGenerateGeneralLink

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_creator/202505/affiliate_sharing_links/general_publishers/generate_batch

## API Description
You can use this API to generate material sharing links for your publishers. After that, you can encapsulate the sharing link with additional information like publisher ID. Right now, the material type must be `PRODUCT`. Please ensure that the material is included in the campaign by using [Generate Multi Affiliate Partner Campaign Product Links].

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| campaign_id | string | No | If a creator adds products from a campaign, please include the campaign ID. The campaign ID can be found in the Affiliate Center or retrieved using the Get Affiliate Partner Campaign List API. (e.g. 7332840009596339923) |
| link_type | string | No | Default value is empty. - For Tokopedia agencies, you may pass `TOKO` to return the Tokopedia product URL. Otherwise, the TikTok Shop product URL will be returned. (e.g. TOKO) |
| material | object | No | The entities for which the sharing links are generated. |
| material.ids | array<string> | No | The list of material IDs. The max length is 50. |
| material.type | string | No | Right now, the only possible value is `PRODUCT`. When `material_ids==PRODUCT`, use pids for material IDs. (e.g. PRODUCT) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.failed_materials | array<object> | No | The list of materials which failed to generate sharing links for. |
| data.sharing_links | array<object> | No | The successfully generated sharing links. |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
