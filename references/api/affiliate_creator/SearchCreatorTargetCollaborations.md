---
title: SearchCreatorTargetCollaborations
category: affiliate_creator
api_name: SearchCreatorTargetCollaborations
method: POST
path: /affiliate_creator/202405/target_collaborations/search
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_creator
**API:** SearchCreatorTargetCollaborations

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_creator/202405/target_collaborations/search

## API Description
This API is used to search for creator's target collaborations and the products within these target collaborations.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the next_page_token from a previous response. It is not needed for the first page. |
| page_size (query) | integer | Yes | The number of results to be returned per page. Valid range: [0-100]. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| keyword | string | No | Target collaborations in the response are restricted to the expressed name. (e.g. 12312312) |
| keyword_type | string | No | Target collaborations in the response are restricted to the the expressed type. This is an enumerated wtype with values: - TARGET_COLLABORATIONS_ID - TARGET_COLLABORATIONS_NAME `TARGET_COLLABORATIONS_ID` returns target collaborations with state set to `LIVE`, `EXPIRED`, `DELETED`, and `ENDED`. `TARGET_COLLABORATIONS_NAME` returns target collaborations with state set to `LIVE` only. (e.g. TARGET_COLLABORATIONS_ID) |
| shop_id | string | No | The TikTok Shop identifier. (e.g. 789078671231) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. (e.g. b2Zmc2V0PTAK) |
| data.target_collaborations | array<object> | No | A list of target collaboration objects. |
| data.target_collaborations.products.commission.amount | string | No | The total amount paid in commission paid for this this product. (e.g. 121.23) |
| data.target_collaborations.products.commission.currency | string | No | The currency code. (e.g. USD) |
| data.target_collaborations.products.commission.rate | integer | No | The commission rate for the target collaboration in hundredths of a percent. For example, `3587` is a commission rate of `35.87%`. (e.g. 1000) |
| data.total_count | integer | No | The total number of target collaboration groups in the response. (e.g. 100) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
