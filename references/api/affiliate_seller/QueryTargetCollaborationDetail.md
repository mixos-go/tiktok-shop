---
title: QueryTargetCollaborationDetail
category: affiliate_seller
api_name: QueryTargetCollaborationDetail
method: GET
path: /affiliate_seller/202508/target_collaborations/{target_collaboration_id}
version: 202508
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** QueryTargetCollaborationDetail

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202508/target_collaborations/{target_collaboration_id}

## API Description
This API is used by Sellers to get target collaboration information.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| target_collaboration_id (path) | string | Yes | target collaboration id |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.target_collaboration | object | No | Target Collaboration detail. |
| data.target_collaboration.content_creator_count | integer | No | The number of creators who posted content featuring products from target collaboration. The count will only include the NORMAL state. (e.g. 1) |
| data.target_collaboration.creator_invited_count | integer | No | The count of creators invited in the target collaboration. The count will only include the NORMAL state. (e.g. 10) |
| data.target_collaboration.creators | array<object> | No | The information of creators in the target collaboration. |
| data.target_collaboration.creators.avatar.url | string | No | The URL for the TikTok creator's avatar image file. (e.g. https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/2bf6a2485ec8bf93483e4a6ed907e6fd~c5_720x720.webp?lk3s=a5d48078\u0026x-expires=1712988000\u0026x-signature=E8US22KfUCwKz0R%2FMFF6%2FMOmogs%3D) |
| data.target_collaboration.end_time | integer | No | The end time of the target collaboration. (e.g. 1715654330) |
| data.target_collaboration.free_sample_rule | object | No | The free sample rules set by the seller in the target collaboration. |
| data.target_collaboration.free_sample_rule.has_free_sample | boolean | No | If true, free samples are provided to creators invited to the target collaboration group. (e.g. True) |
| data.target_collaboration.free_sample_rule.is_sample_approval_exempt | boolean | No | If true, creators invited to the target collaboration are exempt from seller review and will automatically be approved for a free sample. Note that if has_free_sample=false, this field will not take effect. (e.g. True) |
| data.target_collaboration.id | string | No | Target collaboration ID. (e.g. 789078671231123124) |
| data.target_collaboration.message | string | No | Message seller has sent to creators about seller's introduction and why excited to collaborate. (e.g. test) |
| data.target_collaboration.name | string | No | Target collaboration name. (e.g. target_collaboration) |
| data.target_collaboration.product_count | integer | No | The count of products added in the target collaboration. The count will only include the NORMAL state. (e.g. 30) |
| data.target_collaboration.products | array<object> | No | The information of products in the target collaboration. |
| data.target_collaboration.products.commission.currency | string | No | The currency code. (e.g. USD) |
| data.target_collaboration.products.commission.effective_time | string | No | Commission effective time. It is a timestamp. (e.g. 1715654330) |
| data.target_collaboration.products.commission.maximum_amount | string | No | The maximum estimated commission amount for all SKUs of this product. (e.g. 55.7) |
| data.target_collaboration.products.commission.minimum_amount | string | No | The minimum estimated commission amount for all SKUs of this product. (e.g. 34.3) |
| data.target_collaboration.products.commission.rate | integer | No | The commission rate in hundredths of a percent. For example, 3587 is a commission rate of 35.87%. This value must a minimum of 1000. The range of this value is [100, 8000]. (e.g. 3000) |
| data.target_collaboration.products.commission.shop_ads_commission_rate | integer | No | The commission rate applies only to orders generated from ads. If a creator’s video is used as an ad without this rate being set, the resulting orders will instead earn either: - The Shop Ads commission you configured in open collaboration, or - The standard commission defined in this invitation. The commission rate is specified in increments of 1/10,000. For example, 1000 stands for 0.1 or 10%. (e.g. 100) |
| data.target_collaboration.products.original_price.currency | string | No | The currency code. (e.g. USD) |
| data.target_collaboration.products.original_price.maximum_amount | string | No | The highest original price of all SKUs of the product. (e.g. 100.00) |
| data.target_collaboration.products.original_price.minimum_amount | string | No | The lowest original price of all SKUs of the product. (e.g. 12.21) |
| data.target_collaboration.seller_contact_info | object | No | Contact information for the seller in the target collaboration. |
| data.target_collaboration.seller_contact_info.email | string | No | Seller's email contact information. (e.g. test@bytedance.com) |
| data.target_collaboration.showcase_creator_count | integer | No | This field indicates the number of creators who added the product to the showcase from target collaboration. The count will only include the NORMAL state. (e.g. 2) |
| data.target_collaboration.start_time | integer | No | The start time of the target collaboration. (e.g. 1715654330) |
| data.target_collaboration.type | string | No | The type of target collaboration. Field values: - STANDARD: The target collaboration is created by sellers manually selecting products and creators. - TOP_CREATOR_PROGRAM: The target collaboration created by seller joining TikTok Shop Top Creator Program, requiring only product submission. (e.g. STANDARD) |
| data.target_collaboration.update_time | integer | No | The update time of the target collaboration. (e.g. 1715654330) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
