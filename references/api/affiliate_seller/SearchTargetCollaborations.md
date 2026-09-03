---
title: SearchTargetCollaborations
category: affiliate_seller
api_name: SearchTargetCollaborations
method: POST
path: /affiliate_seller/202508/target_collaborations/search
version: 202508
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** SearchTargetCollaborations

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202508/target_collaborations/search

## API Description
This API is used by Seller to search for all existing target collaborations. Sellers can search based on filters such as Invitation name, Invitation ID, Product name, Product ID and Creator name.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_size (query) | integer | No | The value of "page_size" must be 20, 50 or 100. |
| page_token (query) | string | No | Pagination offset determines where you begin to search for. It's empty when raise your first request. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| collaboration_status | string | No | Filtering by target collaborations' status. You can query based on: - ONGOING: If you use ONGOING to search, the remaining validity period of the returned target collaborations will be greater than 7 days. - EXPIRING: If you use EXPIRING to search, the remaining validity period of the returned target collaborations will be less than 7 days. - VALID: If you use VALID to search, all returned target collaborations will be valid. - CANCELING: If you use CANCELING to search, all returned target collaborations will be in the process of canceling. - COMPLETED: If you use COMPLETED to search, all returned target collaborations will be in the state of completed, including expired and canceled. (e.g. ONGOING) |
| creator_accept_status | string | No | Filtering by acceptance status of creators who are invited to target collaborations. You can query based on: - "ACCEPT", it means creators have already added the products to the showcase - "ALL""", it means regardless of whether the creator adds the product to the Showcase. By default, the target collaborations will be searched by "ALL" status. (e.g. ACCEPT) |
| creator_user_open_id | string | No | Creators' TikTok User Open ID.[More details](https://partner.tiktokshop.com/docv2/page/3obfokj6) - CREATOR_OPEN_ID: If you use CREATOR_OPEN_ID to search, you can search for target collaboration information for a specified creator ID. (e.g. uACafQAAAABmUU2qon4R0vUYvUVS3QC6CICP2m5A2-wd77j8R9G0yg) |
| free_sample_setting | string | No | Filtering by target collaborations' free sample setting. You can query based on: - "WITH_FREE_SAMPLE" - "ALL" By default, the target collaborations will be searched by "ALL" setting. (e.g. WITH_FREE_SAMPLE) |
| search_param | object | No | The search param. |
| search_param.keyword | string | No | Search Keyword. (e.g. test) |
| search_param.keyword_type | string | No | Pass in the parameter type which you use to search for target collaborations. You can query based on: - PRODUCT_ID：If you use PRODUCT_ID to search, you can search for target collaboration information for a specified product ID. - PRODUCT_NAME: If you use PRODUCT_NAME to search, you can fuzzy search for target collaboration information involving related product names. - TARGET_COLLABORATION_ID: if you use Target_Collaboration_ID to search, you can search for target collaboration information for a specified target collaboration ID. - TARGET_COLLABORATION_NAME: If you use Target_Collaboration_NAME to search, you can fuzzy search for target collaboration information involving related target collaboration names. (e.g. TARGET_COLLABORATION_NAME) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | Cursor for the next page request. (e.g. b2Zmc2V0PTAK) |
| data.target_collaborations | array<object> | No | The basic information of target collaboration which creators can view in Targeted Invitation on TikTok EC Center. |
| data.target_collaborations.free_sample_rule.has_free_sample | boolean | No | If true, free samples are provided to creators invited to the target collaboration. (e.g. True) |
| data.target_collaborations.free_sample_rule.is_sample_approval_exempt | boolean | No | If true, creators invited to the target collaboration are exempt from seller review and will automatically be approved for a free sample. Note that if has_free_sample=false, this field will not take effect. (e.g. True) |
| data.total_count | integer | No | The total count of target collaboration returned by this query. (e.g. 100) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
