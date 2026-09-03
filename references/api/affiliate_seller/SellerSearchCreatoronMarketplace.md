---
title: SellerSearchCreatoronMarketplace
category: affiliate_seller
api_name: SellerSearchCreatoronMarketplace
method: POST
path: /affiliate_seller/202508/marketplace_creators/search
version: 202508
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_seller
**API:** SellerSearchCreatoronMarketplace

**Method:** POST
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_seller/202508/marketplace_creators/search

## API Description
This API is used by Sellers to search for Creators in the Creator Marketplace. Sellers can search based on filters such as GMV, keywords, and Creator follower demographics. All the data returned is for the last 30 days.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| page_token (query) | string | No | Pagination offset determines where you begin to search for. It's empty when raise your first request |
| page_size (query) | integer | Yes | The value of "page_size" must be 12 or 20 |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Request Body
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| advanced_filters | object | No | Advanced filters are specific to each country. We will provide a separate endpoint which allows you to query which filters are available for which country. |
| advanced_filters.category_pro | array<string> | No | Get the available "Category Pro" categories available. Category Pro is a specific label given to Creators that regularly post about one product category and have generated most of their sales in that Category in the past 60 days - Beauty and Self Care - Fashion and Style - Health and Wellness - Home - Men's Style - Pet Supplies - Sports and Outdoor - Tech, Office and Books See [Get Seller Search Creator Marketplace Advanced Filters](https://partner.tiktokshop.com/docv2/page/get-seller-search-creator-marketplace-advanced-filters-202601) for the country-specific category pro enums. |
| advanced_filters.creator_level | array<string> | No | Supported creator levels are country/region-specific. Always fetch the valid creator level enums from the Get Seller Search [Creator Marketplace Advanced Filters](https://partner.tiktokshop.com/docv2/page/get-seller-search-creator-marketplace-advanced-filters-202601) endpoint before calling this API. |
| advanced_filters.language | array<string> | No | Supported languages vary by country. If you pass an unsupported language value, the API returns an error. See [Get Seller Search Creator Marketplace Advanced Filters](https://partner.tiktokshop.com/docv2/page/get-seller-search-creator-marketplace-advanced-filters-202601) for the country-specific language enums. |
| affiliate_data | object | No | Object which contains affiliate based data |
| affiliate_data.avg_commission_rate | string | No | - ALL - LESS_THAN_20% - LESS_THAN_15% - LESS_THAN_10% - LESS_THAN_5% Creator's average commission rate range based on showcase products, sales, and promoted products in the last 30 days. You can only pick one value. (e.g. LESS_THAN_20%) |
| affiliate_data.creator_agency_staus | string | No | - AGENCY_MANAGED - INDEPENDENT (e.g. AGENCY_MANAGED) |
| affiliate_data.is_fast_growing | boolean | No | Top 10% of creators with the greatest increase in transactions, revenue, shoppable videos, live views, or followers in the last 30 days (e.g. False) |
| affiliate_data.not_invited_l90_days | boolean | No | True/False Select this filter to see creators you haven't invited in the last 90 days (e.g. False) |
| affiliate_data.post_rate | string | No | These categories represent how often a creator posts a shoppable video or LIVE after receiving a sample. - All - OK - GOOD - BETTER Every country has its own benchmark based on what is a GOOD vs BETTER fulfillment rate. BETTER is always going to have the highest fulfillment rate, including 100% fulfillment rate. (e.g. GOOD) |
| category | array<object> | No | Object for category filters: [Get Categories](https://partner.tiktokshop.com/docv2/page/get-categories-202309) |
| content_performance | object | No | Object containing content performance filters |
| content_performance.avg_engagement_rate | string | No | Average engagement rate more than 0-20. You can only filter by increments of 1% point, up to 20%. (e.g. 1) |
| content_performance.avg_live_avg_viewers_ge | string | No | Average LIVE views greater than or equal to Pick any whole number between 0 and 100,000, and we will return all results with average video views greater than that number. You can only pass in average LIVE or average shoppable LIVE. Using both filters will cause the API call to fail (e.g. 1) |
| content_performance.avg_shopable_engagement_rate | string | No | Average shoppable engagement rate more than 0-20. You can only filter by increments of 1% point, up to 20%. (e.g. 1) |
| content_performance.avg_shoppable_live_avg_viewers_ge | string | No | Average shoppable LIVE viewers greater than or equal to Pick any whole number between 0 and 100,000, and we will return all results with average video views greater than that number. You can only pass in average LIVE or average shoppable LIVE. Using both filters will cause the API call to fail (e.g. 1) |
| content_performance.avg_shoppable_video_views | string | No | You can pass in average shoppable video views anywhere between 0 and 100k Pick any whole number between 0 and 100,000, and we will return all results with average shoppable video views greater than that number. You can only pass in Average Video Views OR Average Shoppable Video Views. Using both filters will cause the API call to fail. (e.g. 1) |
| content_performance.avg_video_views | string | No | Average Video Views more than You can pass in average video views anywhere between 0 and 100k Pick any whole number between 0 and 100,000, and we will return all results with average video views greater than that number. You can only pass in Average Video Views OR Average Shoppable Video Views. Using both filters will cause the API call to fail. (e.g. 1) |
| follower_demographics | object | No | Filtering creators by follower demographics |
| follower_demographics.age_ranges | array<string> | No | Follower age filtering options, which are range intervals, include: AGE_RANGE_18_24: "18-24", AGE_RANGE_25_34: "25-34", AGE_RANGE_35_44: "35-44", AGE_RANGE_45_54: "45-54", AGE_RANGE_55_AND_ABOVE: "55+" |
| follower_demographics.count_range | object | No | Follower count filtering |
| follower_demographics.count_range.count_ge | integer | No | The minimum value of follower count. The value passed in must be greater than or equal to 0 (e.g. 1000) |
| follower_demographics.count_range.count_le | integer | No | The maximum value of follower count. - Generally, a value greater than or equal to 0 needs to be passed. If a value less than 0 is passed, it means that the field will not be filtered. (e.g. 10000) |
| follower_demographics.gender_distribution | object | No | Filtering creators by follower gender which includes: "male", "female" |
| follower_demographics.gender_distribution.gender | string | No | A particular gender, "MALE" or "FEMALE" (e.g. MALE) |
| follower_demographics.gender_distribution.percentage_ge | integer | No | Greater than or equal to a certain percentage, scaled up by 10,000 times. For example, 6000 stands for 0.6 or 60% (e.g. 6000) |
| gmv_ranges | array<string> | No | Filtering by GMV range intervals which include: GMV_RANGE_0_100: "0-100", GMV_RANGE_100_1000: "100-1000", GMV_RANGE_1000_10000: "1000-10000", GMV_RANGE_10000_AND_ABOVE: "10000+" For example: - If GMV_RANGE_0_100 is passed, it means filtering the creator data that is greater than or equal to 0 and less than or equal to 100. - If GMV_RANGE_0_100 and GMV_RANGE_100_1000 are passed, it means to filter the creator data that is greater than or equal to 0 and less than or equal to 1000. |
| keyword | string | No | Searching creators by keyword, matching based on TikTok Username and Nickname. (e.g. JefreeStar) |
| search_key | string | No | Caching search results improves api performance and ensures stable request results. You don't need to pass a value on the first call. For the second call, please pass the value returned in the response of the first call. (e.g. 2E+0EcXoSk2HWdEWh2nITfkBRMbwuug0mt9s3fWgV0k=) |
| units_sold_ranges | array<string> | No | Filtering by sales volume range intervals which include: UNITS_SOLD_RANGE_0_10: "0-10", UNITS_SOLD_RANGE_10_100: "10-100", UNITS_SOLD_RANGE_100_1000: "100-1000", UNITS_SOLD_RANGE_1000_AND_ABOVE: "1000+" For example: - If UNITS_SOLD_RANGE_0_10 is passed, it means filtering the creator data that is greater than or equal to 0 and less than or equal to 10. - If UNITS_SOLD_RANGE_0_10 and UNITS_SOLD_RANGE_10_100 are passed, it means to filter the creator data that is greater than or equal to 0 and less than or equal to 100. |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.creators | array<object> | No | Creator's basic information |
| data.creators.avatar.url | string | No | URL of creator's avatar picture (e.g. https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/2bf6a2485ec8bf93483e4a6ed907e6fd~c5_720x720.webp?lk3s=a5d48078\u0026x-expires=1712988000\u0026x-signature=E8US22KfUCwKz0R%2FMFF6%2FMOmogs%3D) |
| data.creators.gmv.amount | string | No | GMV value (e.g. 1232.90) |
| data.creators.gmv.currency | string | No | Currency symbol (e.g. USD) |
| data.creators.gmv_range.currency | string | No | Currency symbol (e.g. USD) |
| data.creators.gmv_range.formatted_range | string | No | The formatted range of GMV values associated with this creator. (e.g. $0-$100) |
| data.creators.gmv_range.maximum_amount | string | No | The maximum value of GMV range (e.g. 100.34) |
| data.creators.gmv_range.minimum_amount | string | No | The minimum value of GMV range (e.g. 1.00) |
| data.creators.live_gmv.amount | string | No | Live stream GMV value (e.g. 0.34) |
| data.creators.live_gmv.currency | string | No | Currency symbol (e.g. USD) |
| data.creators.top_follower_demographics.age_ranges | array<string> | No | Return the top 3 age ranges of the followers. Ranges are : AGE_RANGE_18_24: "18-24", AGE_RANGE_25_34: "25-34", AGE_RANGE_35_44: "35-44", AGE_RANGE_45_54: "45-54", AGE_RANGE_55_AND_ABOVE: "55+" |
| data.creators.top_follower_demographics.major_gender | object | No | Major gender of the followers |
| data.creators.top_follower_demographics.major_gender.gender | string | No | Top follower gender category of the creator, "MALE" or "FEMALE" (e.g. FEMALE) |
| data.creators.top_follower_demographics.major_gender.percentage | integer | No | Percentage of top follower gender, scaled up by 10,000 times. For example, 6524 stands for 0.6524 or 65.24%. You can then infer that the opposite gender would be 0.3476 or 34.76%. (e.g. 6524) |
| data.creators.units_sold_range.formatted_range | string | No | The formatted range of minimum number of units sold to maximum number of units sold over the lifetime of the creator account. (e.g. $0-$100) |
| data.creators.units_sold_range.maximum_amount | integer | No | The maximum value of sales volume range (e.g. 1000) |
| data.creators.units_sold_range.minimum_amount | integer | No | The minimum value of sales volume range (e.g. 100) |
| data.creators.video_gmv.amount | string | No | Video GMV value (e.g. 23.34) |
| data.creators.video_gmv.currency | string | No | Currency symbol (e.g. USD) |
| data.next_page_token | string | No | Next page token (e.g. b2Zmc2V0PTEw) |
| data.search_key | string | No | Caching search results improves api performance and ensures stable request results (e.g. k1ChOzI9e+j5BHHHEnt+VhItjVFEkPUCCXNsrU8/v4U=) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
