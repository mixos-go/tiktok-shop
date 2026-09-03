---
title: GetMarketplaceCreatorPerformance
category: affiliate_seller
api_name: GetMarketplaceCreatorPerformance
method: GET
path: /affiliate_seller/202508/marketplace_creators/{creator_user_id}
version: 202508
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** GetMarketplaceCreatorPerformance

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202508/marketplace_creators/{creator_user_id}

## API Description
Get the Creator Affiliate's Marketplace information and performance metrics in the last 30 days.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| creator_user_id (path) | string | Yes | Creator Open ID. [More details](https://partner.tiktokshop.com/docv2/page/3obfokj6) |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.creator | object | No | Data associated with the creator's TikTok profile. |
| data.creator.avatar | object | No | Metadata and data associated with the creator's TikTok profile avatar. |
| data.creator.avatar.url | string | No | The URL for the creator's TikTok profile avatar. (e.g. https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/2bf6a2485ec8bf93483e4a6ed907e6fd~c5_720x720.webp?lk3s=a5d48078\u0026x-expires=1712988000\u0026x-signature=E8US22KfUCwKz0R%2FMFF6%2FMOmogs%3D) |
| data.creator.avg_commission_rate | integer | No | The average commission rate in hundredths of a percent. Note that if the creator has not given permission for precise data sharing, these properties will not be present. (e.g. 6000) |
| data.creator.avg_commission_rate_range | object | No | The range of average commission rates associated with the creator. Note that if the creator has not given permission for precise data sharing, these properties will not be present. |
| data.creator.avg_commission_rate_range.maximum_amount | integer | No | The largest average commission rate in hundredths of a percent. (e.g. 7000) |
| data.creator.avg_commission_rate_range.minimum_amount | integer | No | The smallest average commission rate in hundredths of a percent. (e.g. 6000) |
| data.creator.avg_ec_live_comment_count | integer | No | Average e-commerce live stream comments. (e.g. 23) |
| data.creator.avg_ec_live_like_count | integer | No | Average e-commerce live stream likes. (e.g. 344) |
| data.creator.avg_ec_live_share_count | integer | No | Average e-commerce live stream shares. (e.g. 3434) |
| data.creator.avg_ec_live_view_count | integer | No | Average live stream views with promoted products. (e.g. 4355) |
| data.creator.avg_ec_video_comment_count | integer | No | Average e-commerce video comments. (e.g. 343) |
| data.creator.avg_ec_video_like_count | integer | No | Average e-commerce video likes. (e.g. 324) |
| data.creator.avg_ec_video_play_count | integer | No | The average number of number of e-commerce video plays. (e.g. 1234) |
| data.creator.avg_ec_video_share_count | integer | No | Average e-commerce video shares. (e.g. 22) |
| data.creator.avg_gmv_per_buyer | object | No | Average GMV per buyer metadata and data associated with the creator. Note that this property is included if the target market is `US` only. Note that if the creator has not given permission for precise data sharing, these properties will not be present. |
| data.creator.avg_gmv_per_buyer.amount | string | No | The average GMV per buyer amount. (e.g. 45.68) |
| data.creator.avg_gmv_per_buyer.currency | string | No | The currency code. (e.g. USD) |
| data.creator.avg_gmv_per_buyer_range | object | No | The range of average GMV per buyer associated with the creator. Note that this property is included if the target market is `US` only. Note that if the creator has not given permission for precise data sharing, these properties will not be present. |
| data.creator.avg_gmv_per_buyer_range.currency | string | No | The currency code. (e.g. USD) |
| data.creator.avg_gmv_per_buyer_range.formatted_range | string | No | The formatted range of average GMV per buyer associated with the creator. (e.g. $15-$20) |
| data.creator.avg_gmv_per_buyer_range.maximum_amount | string | No | The largest average GMV per buyer. (e.g. 1000.00) |
| data.creator.avg_gmv_per_buyer_range.minimum_amount | string | No | The smallest average GMV per buyer. (e.g. 100.00) |
| data.creator.bio_description | string | No | The biography description associated with the creator. (e.g. This is my personal introduction) |
| data.creator.brand_collaboration_count | integer | No | The total number of brands with which the creator has previously collaborated. (e.g. 76) |
| data.creator.category_gmv_distribution | array<object> | No | GMV distribution by category. |
| data.creator.category_ids | array<string> | No | A list of category identifiers associated with the products for which the creator has created posts. |
| data.creator.content_gmv_distribution | array<object> | No | GMV associated with creator content by content type. |
| data.creator.ec_live_count | integer | No | The number of e-commerce livestreams associated with the creator. (e.g. 12) |
| data.creator.ec_live_engagement_rate | string | No | E-commerce live stream engagement rate in hundredths of a percent. For example, `6000` is 60%. (e.g. 6000) |
| data.creator.ec_video_count | integer | No | The number of e-commerce video posts associated with the creator. (e.g. 34) |
| data.creator.ec_video_engagement_rate | string | No | The number of post engagements (likes, shares, and comments) divided by the total video views averaged across the videos in the last 30 days. For example, 3000 stands for 0.3 or 30% (e.g. 3000) |
| data.creator.follower_age | array<object> | No | A list of key–value pairs representing the distribution of followers by age range. |
| data.creator.follower_count | integer | No | The creator's follower count. (e.g. 2323) |
| data.creator.follower_gender | array<object> | No | A list of key–value pairs representing the distribution of followers by gender. |
| data.creator.follower_location | array<object> | No | A list of key–value pairs representing the distribution of followers by location. |
| data.creator.gmv | object | No | Gross merchandise value (GMV) metadata and data associated with the creator. Note that if the creator has not given permission for precise data sharing, these properties will not be present. |
| data.creator.gmv.amount | string | No | The total GMV associated with the creator. (e.g. 3434.23) |
| data.creator.gmv.currency | string | No | The currency code. (e.g. USD) |
| data.creator.gmv_range | object | No | The range of GMV values associated with this creator. Note that this property is included if the target market is `US` only. Note that if the creator has not given permission for precise data sharing, these properties will not be present. |
| data.creator.gmv_range.currency | string | No | The currency code. (e.g. USD) |
| data.creator.gmv_range.formatted_range | string | No | The formatted range of GMV values associated with this creator. (e.g. $0-$100) |
| data.creator.gmv_range.maximum_amount | string | No | The highest GMV value. (e.g. 10000.00) |
| data.creator.gmv_range.minimum_amount | string | No | The lowest GMV value. (e.g. 1000.00) |
| data.creator.gpm | object | No | GMV per mille (GPM) metadata and data associated with the creator. Note that if the creator has not given permission for precise data sharing, these properties will not be present. |
| data.creator.gpm.amount | string | No | The GPM amount. (e.g. 10.23) |
| data.creator.gpm.currency | string | No | The currency code. (e.g. USD) |
| data.creator.gpm_range | object | No | The range of GPM values associated with the creator. Note that this property is included if the target market is `US`. Note that if the creator has not given permission for precise data sharing, these properties will not be present. |
| data.creator.gpm_range.currency | string | No | The currency code. (e.g. USD) |
| data.creator.gpm_range.formatted_range | string | No | The formatted range of GPM values associated with the creator. (e.g. $0-$100) |
| data.creator.gpm_range.maximum_amount | string | No | The highest GPM value. (e.g. 1000.00) |
| data.creator.gpm_range.minimum_amount | string | No | The lowest GPM value. (e.g. 100.00) |
| data.creator.live_gmv | object | No | Livestream GMV metadata and data associated with the creator. Note that if the creator has not given permission for precise data sharing, these properties will not be present. |
| data.creator.live_gmv.amount | string | No | Total livestream GMV associated with the creator. (e.g. 3432.34) |
| data.creator.live_gmv.currency | string | No | The currency code. (e.g. USD) |
| data.creator.live_gpm | object | No | Livestream GMV per mille (GPM) metadata and data associated with the creator. Note that if the creator has not given permission for precise data sharing, these properties will not be present. |
| data.creator.live_gpm.amount | string | No | The livestream GPM amount. (e.g. 44.96) |
| data.creator.live_gpm.currency | string | No | The currency code. (e.g. USD) |
| data.creator.live_gpm_range | object | No | The range of livestream GPM values associted with the creator. Note that this property is included if the target market is `US` only. Note that if the creator has not given permission for precise data sharing, these properties will not be present. |
| data.creator.live_gpm_range.currency | string | No | The currency code. (e.g. USD) |
| data.creator.live_gpm_range.formatted_range | string | No | The formatted range of livestream GPM values associted with the creator. (e.g. $0-$100) |
| data.creator.live_gpm_range.maximum_amount | string | No | The highest livestream GPM value. (e.g. 1000.00) |
| data.creator.live_gpm_range.minimum_amount | string | No | The lowest livestream GPM value. (e.g. 100.00) |
| data.creator.nickname | string | No | TikTok nickname. (e.g. Dion) |
| data.creator.post_rate | string | No | The projected rate at which a creator is likely to post a shoppable video or LIVE after receiving a sample. For example, 3000 stands for 0.3 or 30% (e.g. 100) |
| data.creator.pps | string | No | Promotion Performance Score (PPS) The score reflects the quality of a creator's shoppable content and product selection over the past 90 days. A high score may indicate a better shopping experience, with fewer potential refunds or negative reviews. (e.g. 4.5) |
| data.creator.product_original_price_range | object | No | Original promoted product price metadata and data associated with the creator. |
| data.creator.product_original_price_range.currency | string | No | The currency code. (e.g. USD) |
| data.creator.product_original_price_range.maximum_amount | string | No | The higest original promoted product price. (e.g. 343.23) |
| data.creator.product_original_price_range.minimum_amount | string | No | The lowest original promoted product price. (e.g. 2.59) |
| data.creator.profile_tt_uri | string | No | The URL for the creator's TikTok profile page. (e.g. aweme://user/profile/7200669046446064666?sec_uid=MS4wLjABAAAAvkrSOIMxn2YpXW5qBFVHIbfQ11u2L1hamtgg3mbk5GRPpl1TrnKo5zzQe5T77YLw&from_scene=8&enter_from=scan) |
| data.creator.promoted_product_num | integer | No | The number of promoted products associated with the creator. (e.g. 311) |
| data.creator.rating | string | No | Rating from sellers who worked with this creator (e.g. 3.2) |
| data.creator.selection_region | string | No | The region associated with the creator. (e.g. US) |
| data.creator.top_collaborated_brand_ids | array<string> | No | A list of the top 10 brands with which the creator has previously collaborated. |
| data.creator.units_sold | integer | No | The total number of units sold. Units are indexed to SKU. Note that if the creator has not given permission for precise data sharing, this property will not be present. (e.g. 234) |
| data.creator.units_sold_range | object | No | The range of minimum number of units sold to maximum number of units sold over the lifetime of the creator account. Note that this property is included if the target market is `US` only. Note that if the creator has not given permission for precise data sharing, these properties will not be present. |
| data.creator.units_sold_range.formatted_range | string | No | The formatted range of minimum number of units sold to maximum number of units sold over the lifetime of the creator account. (e.g. 0-10) |
| data.creator.units_sold_range.maximum_amount | integer | No | The highest number of units sold. (e.g. 1000) |
| data.creator.units_sold_range.minimum_amount | integer | No | The lowest number of units sold. (e.g. 100) |
| data.creator.username | string | No | TikTok user name. (e.g. dioab) |
| data.creator.video_gmv | object | No | The video GMV metadata and data associated with the creator. Note that if the creator has not given permission for precise data sharing, these properties will not be present. |
| data.creator.video_gmv.amount | string | No | The total video GMV associated with the creator. (e.g. 39232.34) |
| data.creator.video_gmv.currency | string | No | The currency code. (e.g. USD) |
| data.creator.video_gpm | object | No | Video GMV per mille (GPM) metadata and data associated with the creator. Note that if the creator has not given permission for precise data sharing, these properties will not be present. |
| data.creator.video_gpm.amount | string | No | The video GPM amount. (e.g. 28.89) |
| data.creator.video_gpm.currency | string | No | The currency code. (e.g. USD) |
| data.creator.video_gpm_range | object | No | The range of video GPM values associted with the creator. Note that this property is included if the target market is `US`. Note that if the creator has not given permission for precise data sharing, these properties will not be present. |
| data.creator.video_gpm_range.currency | string | No | The currency code. (e.g. USD) |
| data.creator.video_gpm_range.formatted_range | string | No | The formatted range of video GPM values associted with the creator. (e.g. $0-$100) |
| data.creator.video_gpm_range.maximum_amount | string | No | The highest video GPM value. (e.g. 1000.00) |
| data.creator.video_gpm_range.minimum_amount | string | No | The lowest video GPM value. (e.g. 100.00) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
