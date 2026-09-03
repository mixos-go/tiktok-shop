---
title: UpdateTargetCollaboration
category: affiliate_seller
api_name: UpdateTargetCollaboration
method: PUT
path: /affiliate_seller/202508/target_collaborations/{target_collaboration_id}
version: 202508
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** UpdateTargetCollaboration

**Method:** PUT
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202508/target_collaborations/{target_collaboration_id}

## API Description
This API is used by Seller to update STANDARD target collaboration.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| target_collaboration_id (path) | string | Yes | The unique id of specific target collaboration. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| creator_user_open_ids | array<string> | No | The list of Creators' TikTok User Open IDs invited in the target collaboration. The maximum number of creators is 50. [More details](https://partner.tiktokshop.com/docv2/page/3obfokj6) |
| end_time | string | No | The end time of the target collaboration. (e.g. 1715654330) |
| free_sample_rule | object | No | The free sample rules set by the seller in the target collaboration. |
| free_sample_rule.has_free_sample | boolean | No | If true, free samples are provided to creators invited to the target collaboration. (e.g. True) |
| free_sample_rule.is_sample_approval_exempt | boolean | No | If true, creators invited to the target collaboration are exempt from seller review and will automatically be approved for a free sample. Note that if has_free_sample=false, this field will not take effect. (e.g. True) |
| name | string | No | The name of the target collaboration. (e.g. openapi_test) |
| products | array<object> | No | The information about the products provided by the seller for target collaboration with creators in the target collaboration. The maximum number of products is 100. When a product is deleted from the product list, if the deleted product has been added to the showcase by the creator, it will take effect at 0:00 the next day, otherwise it will take effect immediately. |
| seller_contact_info | object | No | Contact information for the seller in the target collaboration. |
| seller_contact_info.email | string | No | Seller's email contact information (e.g. test@bytedance.com) |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.target_collaboration_conflicts | array<object> | No | A list of creators and products with target collaboration conflicts that caused target collaboration update failure. |
| data.update_failed | object | No | Describe which fields were not updated successfully. |
| data.update_failed.add_creator_open_ids | array<string> | No | The list of creators' TikTok User Open IDs that have not been successfully added. More details:https://partner.tiktokshop.com/docv2/page/3obfokj6 |
| data.update_failed.add_products | object | No | The list of products that have not been successfully added. |
| data.update_failed.add_products.commission_rate | integer | No | The desired commission rate for the target collaboration. The desired commission rate is expressed in hundredths of a percent. For example, 3587 is a commission rate of 35.87%. This value must be a minimum of 1000. (e.g. 1000) |
| data.update_failed.add_products.id | string | No | The product identifier. (e.g. 789078671231312312) |
| data.update_failed.change_commissions | object | No | The list of commission information that has not been successfully changed. |
| data.update_failed.change_commissions.commission_rate | integer | No | The desired commission rate for the target collaboration. The desired commission rate is expressed in hundredths of a percent. For example, 3587 is a commission rate of 35.87%. This value must be a minimum of 1000. (e.g. 1000) |
| data.update_failed.change_commissions.product_id | string | No | The product identifier. (e.g. 789078671231312312) |
| data.update_failed.end_time | integer | No | The end time of the target collaboration, which has not been successfully updated. (e.g. 1715654330) |
| data.update_failed.name | string | No | The name of the target collaboration. (e.g. openapi_test) |
| data.update_failed.remove_creator_open_ids | array<string> | No | The list of creators' TikTok User Open IDs that have not been successfully removed. More details:https://partner.tiktokshop.com/docv2/page/3obfokj6 |
| data.update_failed.remove_product_ids | array<string> | No | The list of product ids that have not been successfully removed. |
| data.update_failed.seller_contact_info | object | No | Contact information for the seller in the target collaboration which has not been successfully updated. |
| data.update_failed.seller_contact_info.email | string | No | Seller's email contact information which has not been successfully updated. (e.g. test@bytedance.com) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
