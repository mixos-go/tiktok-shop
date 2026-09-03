---
title: GenerateTargetCollaborationLink
category: affiliate_seller
api_name: GenerateTargetCollaborationLink
method: POST
path: /affiliate_seller/202509/target_collaboration/{target_collaboration_id}/link
version: 202509
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** GenerateTargetCollaborationLink

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202509/target_collaboration/{target_collaboration_id}/link

## API Description
Generate a Target Collaboration Link that the seller can share with the creator. This link directs the creator to a guided flow to review details and formally accept the target collaboration

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| target_collaboration_id (path) | string | Yes | Target collaboration ID. |
| shop_cipher (query) | string | Yes | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=650 |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.link | string | No | The link of the target invitation, the creator can jump to the page of adding products after clicking. (e.g. https://affiliate-id.tokopedia.com/api/v1/oec/affiliate/seller/invitation_group/share/long_url/AJBNfIPZXGcc) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
