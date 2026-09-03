---
title: GetWidgetToken
category: authorization
api_name: GetWidgetToken
method: GET
path: /authorization/202401/widget_token
version: 202401
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** authorization
**API:** GetWidgetToken

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/authorization/202401/widget_token

## API Description
this open api is used to generate a widget token

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_id (query) | integer | No | shopID is not needed |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.widget_token | object | No | widget token related info |
| data.widget_token.expire_at | integer | No | widget token expire timestamp, usually 5 minutes (e.g. 1703100448) |
| data.widget_token.token | string | No | token used to pass widget api (e.g. eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjc0OTM5OTA3NTMyNTY5MDA0ODYsIkNsaWVudEtleSI6IjZhbW00dnVoNWZvMWciLCJTaG9wSURzIjpbNzQ5Mzk5MDc1MzI1NjkwMDQ4Nl0sIkV4cGlyZSI6MTcwMTA2NjAyMCwiU2VsbGVyVHlwZSI6MiwiZXhwIjoxNzAxMDY2MDIwfQ.KS15mwJ8LUC2U6Chfbmwr7PO2mGK_3wLYYaa8TM6DixdKmbG3o4kRSlCfi1a6UotpXxU0CNelLwX1G5H3sY7vw) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
