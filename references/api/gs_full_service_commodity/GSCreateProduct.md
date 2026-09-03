---
title: GSCreateProduct
category: gs_full_service_commodity
api_name: GSCreateProduct
method: POST
path: /gs_full_service_commodity/202405/preview/products
version: 202405
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** gs_full_service_commodity
**API:** GSCreateProduct

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/gs_full_service_commodity/202405/preview/products

## API Description
Create a new product and push the seller's product information to the GS full service platform

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| supplier_id (query) | string | Yes | ID of seller |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| spu | object | No | SPU Details |
| spu.attributes | array<object> | No | Product attributes |
| spu.brand_id | string | No | Brand ID (e.g. 7361057855527192325) |
| spu.category_id | string | No | Product category, leaf category id (e.g. 7075264658340611845) |
| spu.certifications | array<object> | No | certifications information |
| spu.first_key_attribute_id | string | No | Key Attribute 1 ID (e.g. 7093469487152088837) |
| spu.grading_template_id | string | No | Size Chart Template ID (e.g. 7341316590817183493) |
| spu.ingredient | object | No | Ingredient information |
| spu.ingredient.multi_material_composition | array<object> | No | Multi-component composition |
| spu.ingredient.multi_material_composition.component.property_value_id | string | No | Location attribute value id (e.g. 7201078475993581318) |
| spu.ingredient.single_material_composition | array<object> | No | Single material composition |
| spu.ingredient.type | string | No | Ingredient type -SINGLE -MULTI_COMPONENT (e.g. SINGLE) |
| spu.media | object | No | Product SPU Picture Information |
| spu.media.pic_set_type | string | No | Picture set type, fill in according to category requirements -Skc -SpuWithSkc -SpuWithSku (e.g. Skc) |
| spu.media.pic_type | string | No | Image type , it is recommended to upload photographic pictures, and upload pictures as required -Selection -Photography (e.g. Photography) |
| spu.media.pictures | array<object> | No | SPU Picture |
| spu.media.videos | array<object> | No | Product video information |
| spu.product_name_en | string | No | Product name (English) (e.g. Test product name) |
| spu.product_name_zh | string | No | Product name (Chinese) (e.g. 测试商品) |
| spu.second_key_attribute_id | string | No | Key Attribute 2 ID (e.g. 7093469487152187141) |
| spu.size_group_id | string | No | Size group id, fill in according to category requirements (e.g. 7277854476945196805) |
| spu.skcs | array<object> | No | SKC/SKU Information |
| spu.skcs.skus.dimensions.height | string | No | height (e.g. 100) |
| spu.skcs.skus.dimensions.length | string | No | length (e.g. 100) |
| spu.skcs.skus.dimensions.unit | string | No | unit，Currently only supports millimeters -MILLIMETER (e.g. MILLIMETER) |
| spu.skcs.skus.dimensions.width | string | No | width (e.g. 100) |
| spu.skcs.skus.price.amount | string | No | Price (excluding tax), unit yuan (e.g. 12.00) |
| spu.skcs.skus.price.currency | string | No | Currently only supports Renminbi -CNY (e.g. CNY) |
| spu.skcs.skus.weight.unit | string | No | unit，Currently only supports milligrams -MILLIGRAM (e.g. MILLIGRAM) |
| spu.skcs.skus.weight.value | string | No | weight value (e.g. 100) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.spu_code | string | No | Spu code (e.g. S202412345678) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
