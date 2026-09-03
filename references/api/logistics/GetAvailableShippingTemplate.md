---
title: GetAvailableShippingTemplate
category: logistics
api_name: GetAvailableShippingTemplate
method: GET
path: /logistics/202510/seller_templates
version: 202510
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** logistics
**API:** GetAvailableShippingTemplate

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/logistics/202510/seller_templates

## API Description
get seller's available shipping template and return the reason why the template is not available

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| product_attribute | object | No | Attribute of the product,including dimension and weight |
| product_attribute.dimension | object | No | The dimension of the product |
| product_attribute.dimension.height | string | No | The height of the product (e.g. 10) |
| product_attribute.dimension.length | string | No | The length of the product (e.g. 10) |
| product_attribute.dimension.unit | integer | No | 1: centimeter 2:inch 3:foot 4:millimeter 5:meter (e.g. 1) |
| product_attribute.dimension.width | string | No | The width of the product (e.g. 10) |
| product_attribute.weight | object | No | The weight of product |
| product_attribute.weight.unit | integer | No | 1:gram 2:pound 3:ounce 4:kilogram (e.g. 1) |
| product_attribute.weight.weight | string | No | The weight of product (e.g. 10) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.templates | array<object> | No | All the seller's template |
| data.templates.template.is_default | boolean | No | Is default template or not (e.g. False) |
| data.templates.template.template_id | string | No | The template_id (e.g. 1234566) |
| data.templates.template.template_name | string | No | The template name (e.g. test template) |
| data.templates.template.template_party | integer | No | 1 for shipping by platform template 2 for shipping by seller template (e.g. 1) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
