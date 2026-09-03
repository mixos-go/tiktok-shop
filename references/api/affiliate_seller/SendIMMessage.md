---
title: SendIMMessage
category: affiliate_seller
api_name: SendIMMessage
method: POST
path: /affiliate_seller/202412/conversations/{conversation_id}/messages
version: 202412
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** SendIMMessage

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202412/conversations/{conversation_id}/messages

## API Description
The API for sending IM messages.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| conversation_id (path) | string | Yes | conversation_id |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| content | string | No | Message content, in JSON serialized string. Examples: - TEXT: {"content": "simple text"} - PRODUCT_CARD: {"product_id": "12345"} - TARGET_ COLLABORATION_CARD {"target_collaboration_id": "1234"} - FREE_SAMPLE_CARD {"apply_id": "1234"} IMAGE { "url":"https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/2ca53c34ad8443e6b39f4e0153d3aed4~tplv-o3syd03w52-origin-image.image?from=1320446476", "width": 1280, "height": 720 } Note: You can get the value of url by calling [Upload Messages Image](https://partner.tiktokshop.com/docv2/page/upload-message-image-202511). target_collaboration_id is Invitation group id. (e.g. {"content": "simple text message"}) |
| msg_type | string | No | Message type, with possible values: - TEXT - PRODUCT_CARD - TARGET_ COLLABORATION_CARD - FREE_SAMPLE_CARD - IMAGE (e.g. TEXT) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.message_id | string | No | The message ID. (e.g. 1234444) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
