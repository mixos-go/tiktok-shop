---
title: GetBrands
category: product
api_name: GetBrands
method: GET
path: /product/202309/brands
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** product
**API:** GetBrands

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/product/202309/brands

## API Description
Retrieve all available brands for your shop, including the built-in brands and any custom brands created using the [Create Custom Brands API](650a0926f1fd3102b91bbfb0). Pass the returned brand ID when creating or editing a product to associate the brand with the product. - To check if a brand is fully authorized for use in a specific product category, specify the **category ID**. - To obtain the full list of brands that your shop can potentially use and their authorization status, omit the category ID. We recommend that you specify the **brand name** to narrow down the list of brands returned. **Key concept** Whether you can select and display a brand depends on the brand's authorization status, the categories authorized for the brand, and whether the brand is classified as T1 (internationally renowned brands that require prior brand authorization). **- Brand selection rules**: You can only select the following types of brands during product creation/editing. - Authorized brands which contain the desired category (`authorized_status=AUTHORIZED` and `brand_status=AVAILABLE`) - Unauthorized non-T1 brands (`authorized_status=UNAUTHORIZED` and `is_t1_brand=false`) **- Brand display rules**: Note however that brands will only appear on the product display page if the brand is authorized (`authorized_status=AUTHORIZED`) and available in the desired category (`brand_status=AVAILABLE`). This means that you need to obtain brand authorization for unauthorized non-T1 brands before they can be displayed. Obtain brand authorization or add categories to an authorized brand through TikTok Shop Seller Center > Qualification Center > Brand qualification. **For Tokopedia sellers**: You can select and display any returned brand on Tokopedia regardless of these rules.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| category_id (query) | string | No | Specify a category ID to show the availability of **authorized brands** in the category. **Note**: Specify this value to obtain an accurate list of brands that you can use in a category. |
| is_authorized (query) | boolean | No | Filter results by the brand authorization status. Possible values: - 1: Returns only authorized brands - 0: Returns all brands |
| brand_name (query) | string | No | Filter results to include brand names that begin with the specified value. |
| page_size (query) | integer | Yes | The number of results to be returned per page. Valid range: [1-100] |
| page_token (query) | string | No | An opaque token used to retrieve the next page of a paginated result set. Retrieve this value from the result of the `next_page_token` from a previous response. It is not needed for the first page. |
| category_version (query) | string | No | The category tree version that corresponds to the specified `category_id`. Possible values based on region: - US: `v2`, represents the 7-level category tree. **Important**: For US shops, you must pass `v2` when using this API. - Other regions: `v1`, represents the 3-level category tree. Default: `v1 |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.brands | array<object> | No | The list of brands that meet the query conditions. |
| data.next_page_token | string | No | An opaque token used to retrieve the next page of a paginated result set. Provide this value in the `page_token` parameter of your request if the current response does not return all the results. (e.g. b2Zmc2V0PTAK) |
| data.total_count | integer | No | The total count of brands that meet the query conditions. (e.g. 10000) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
