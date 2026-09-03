---
title: GSCreateProductv2
category: gs_full_service_commodity
api_name: GSCreateProductv2
method: POST
path: /gs_full_service_commodity/202509/beta/products
version: 202509
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_commodity
**API:** GSCreateProductv2

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_commodity/202509/beta/products

## API Description
Description of /gs_full_service_commodity/:version/products

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| idempotent_key | string | No | idempotent key (e.g. 5ac5a973f7264ea6aa6c52312eb9cae9) |
| spu | object | No | spu info |
| spu.attributes | array<object> | No | product attributes |
| spu.brand_id | string | No | id of brand (e.g. 7168670314153379586) |
| spu.category_id | string | No | id of category (e.g. 7367289505097991954) |
| spu.certifications | array<object> | No | certifications |
| spu.description | object | No | description |
| spu.description.items | array<object> | No | description |
| spu.first_key_attribute_id | string | No | first key attribute id (e.g. 7110491141870454520) |
| spu.grading_template_id | string | No | grading template id (e.g. 7367197760696125200) |
| spu.ingredient | object | No | ingredient |
| spu.ingredient.multi_material_composition | array<object> | No | multi material composition |
| spu.ingredient.multi_material_composition.component.property_value_id | string | No | property value id (e.g. 7110464130469611260) |
| spu.ingredient.single_material_composition | array<object> | No | single material composition |
| spu.ingredient.type | string | No | type (e.g. SINGLE) |
| spu.key_attribute | array<object> | No | The attribute of key attribute 1 ~ key attribute N are passed in order according to the order of sales attributes |
| spu.manufacture_ids | array<string> | No | manufacture ids |
| spu.media | object | No | media info of product |
| spu.media.pic_set_type | string | No | pic set type (e.g. Skc) |
| spu.media.pic_type | string | No | pic type (e.g. Photography) |
| spu.media.pictures | array<object> | No | pictures |
| spu.media.videos | array<object> | No | video info of product |
| spu.product_name_en | string | No | name of product (e.g. TEST_OPEN_API_EN) |
| spu.product_name_zh | string | No | name of product (e.g. 这是一个产品名称) |
| spu.rp_ids | array<string> | No | rp ids |
| spu.second_key_attribute_id | string | No | second_key_attribute_id (e.g. 7110464130469611265) |
| spu.size_group_id | string | No | size_group_id (e.g. 7384794939881686801) |
| spu.skcs | array<object> | No | skcs |
| spu.skcs.skus.dimensions.height | string | No | height (e.g. 120) |
| spu.skcs.skus.dimensions.length | string | No | length (e.g. 120) |
| spu.skcs.skus.dimensions.unit | string | No | unit (e.g. MILLIMETER) |
| spu.skcs.skus.dimensions.width | string | No | width (e.g. 120) |
| spu.skcs.skus.price.amount | string | No | amount (e.g. 19.98) |
| spu.skcs.skus.price.currency | string | No | currency (e.g. CNY) |
| spu.skcs.skus.reference_sale_price.amount | string | No | amount (e.g. 49.0) |
| spu.skcs.skus.reference_sale_price.currency | string | No | currency (e.g. CNY) |
| spu.skcs.skus.weight.unit | string | No | unit (e.g. MILLIGRAM) |
| spu.skcs.skus.weight.value | string | No | value (e.g. 12000) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.spu_code | string | No | spu code (e.g. S250904111111) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
