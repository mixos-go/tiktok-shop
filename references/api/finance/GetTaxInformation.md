---
title: GetTaxInformation
category: finance
api_name: GetTaxInformation
method: GET
path: /finance/202504/tax_information
version: 202504
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** finance
**API:** GetTaxInformation

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/finance/202504/tax_information

## API Description
Retrieve the tax information registered for a shop. This API can be used in all countries except the EU.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.tax_information | object | No | Tax-related information associated with the shop. |
| data.tax_information.business_entity | object | No | The official business entity details registered with tax authorities. This is also the entity whose address appears on invoices. |
| data.tax_information.business_entity.address | string | No | The registered address, including the building number, street name, district, city, province, country, and any relevant details. (e.g. fake street, fake states, fake country) |
| data.tax_information.business_entity.branch_number | string | No | The branch number. Applicable only if `organization_level=BRANCH`. (e.g. 222) |
| data.tax_information.business_entity.business_name | string | No | The registered legal business name. Applicable only for the PH market. (e.g. test company) |
| data.tax_information.business_entity.fiscal_regime | string | No | The fiscal regime code applicable to the business in Mexico. Applicable only for the MX market. Possible values: - General Law Legal Persons - Legal Persons with Non-Profit Purposes - Salaries and Salaries and Income Assimilated to Salaries - Leasing - Regime of Alienation or Acquisition of Assets - Other income - Residents Abroad without Permanent Establishment in Mexico - Dividend Income (partners and shareholders) - Individuals with Business and Professional Activities - Interest income - Regime of income from obtaining prizes - No tax obligations - Cooperative Production Societies that choose to defer their income - Tax Incorporation - Agricultural, Livestock, Forestry and Fishing Activities - Optional for Groups of Companies - Coordinated - Regime of Business Activities with income through Technological Platforms - Simplified Trust Regime (e.g. General Law Legal Persons) |
| data.tax_information.business_entity.organization_level | string | No | The organizational level of this business entity. - UNKNOWN - HEADQUARTER - BRANCH Applicable only for the TH market. (e.g. BRANCH) |
| data.tax_information.business_entity.postal_code | string | No | The postal code. (e.g. 212) |
| data.tax_information.overall_status | object | No | The overall status of tax information submission and completeness for the shop. |
| data.tax_information.overall_status.is_tax_infomation_complete | boolean | No | A flag indicating whether all mandatory tax information has been completed. (e.g. True) |
| data.tax_information.overall_status.is_tax_number_submitted | boolean | No | A flag indicating whether a tax number has been submitted. This will determine if products can be listed. (e.g. True) |
| data.tax_information.tax_numbers | array<object> | No | The list of tax numbers associated with the shop. |
| data.tax_information.tax_numbers.recent_audit.rejection_reasons | array<string> | No | The list of rejection reason labels. - INVALID_RFC: The tax number is invalid. - ZIPCODE_NOT_MATCH_RFC: The postal code doesn't match the official records from the tax authority. - NAME_NOT_MATCH_RFC: The business name doesn't match the official records from the tax authority. |
| data.tax_information.tax_numbers.recent_audit.status | string | No | The audit status: - PENDING_AUDIT - UNDER_AUDIT - APPROVED - REJECTED (e.g. REJECTED) |
| data.tax_information.tax_numbers.recent_audit.tax_number | string | No | The tax number of the most recent audit. (e.g. MX222) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
