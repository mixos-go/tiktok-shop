---
title: GetTransactionsbyOrder
category: finance
api_name: GetTransactionsbyOrder
method: GET
path: /finance/202501/orders/{order_id}/statement_transactions
version: 202501
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** finance
**API:** GetTransactionsbyOrder

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/finance/202501/orders/{order_id}/statement_transactions

## API Description
Retrieves the SKU-level details of an order transaction. This covers transactions related to sales, fees, commissions, shipping, taxes, and refunds. Applicable for all regions' sellers. Only data after 2023-07-01 is available (Please note that for US cross-border sellers, data before 2025-04-30 is unavailable).

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| order_id (path) | string | Yes | The order ID in TikTok Shop. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.currency | string | No | The three-digit currency code in ISO 4217 format. (e.g. GBP) |
| data.fee_and_tax_amount | string | No | The fees and taxes charged by the platform for the order at the time of order settlement. Shipping-related costs are excluded. (e.g. -30) |
| data.order_create_time | integer | No | The creation time of the order. Unix timestamp. (e.g. 1685548800) |
| data.order_id | string | No | The order ID in TikTok Shop. (e.g. 5793990727963214852) |
| data.revenue_amount | string | No | The revenue amount for the order at the time of order settlement. This is equivalent to the net sales amount. (e.g. 200) |
| data.settlement_amount | string | No | The settlement amount for the order. Formula: revenue_amount - shipping_cost_amount - fee_tax_amount (e.g. 130) |
| data.shipping_cost_amount | string | No | The shipping costs for the order at the time of order settlement. (e.g. -70) |
| data.sku_transactions | array<object> | No | The list of SKU transaction records for the order. |
| data.sku_transactions.fee_tax_breakdown.fee | object | No | The list of fees. |
| data.sku_transactions.fee_tax_breakdown.fee.affiliate_ads_commission_amount | string | No | The commission for eligible orders from ads. (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.fee.affiliate_commission_amount | string | No | The commission amount charged to the seller for payment to the creator. (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.fee.affiliate_commission_amount_before_pit | string | No | The affiliate ads commission paid to a creator before any personal income tax withholding. Applicable only for SEA markets. (e.g. -2) |
| data.sku_transactions.fee_tax_breakdown.fee.affiliate_commission_deposit | string | No | The amount reserved for creator commissions after an order is paid. Applies only to commissions tied to order volume and is based on the highest earning rate. (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.fee.affiliate_commission_release | string | No | The commission deposit refunded to you after order settlement. Applies only to commissions tied to order volume. (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.fee.affiliate_partner_commission_amount | string | No | The commission amount for purchases through affiliate partner links. (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.fee.bonus_cashback_service_fee_amount | string | No | The service fee charged for participation in the bonus cashback program. (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.fee.campaign_resource_fee | string | No | Amount of campaign resource fee from program seller joining in (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.fee.cofunded_creator_bonus_amount | string | No | The portion of the creator bonus that you co-fund as part of the commission boost campaign. (e.g. -10) |
| data.sku_transactions.fee_tax_breakdown.fee.cofunded_promotion_service_fee_amount | string | No | The service fee charged for co-funded promotions. (e.g. 100) |
| data.sku_transactions.fee_tax_breakdown.fee.credit_card_handling_fee_amount | string | No | The handling fee charged when the buyer pays with a credit card. (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.fee.dt_handling_fee_amount | string | No | The handling fee charged for orders that are fulfilled by Dilayani Tokopedia. (e.g. 10) |
| data.sku_transactions.fee_tax_breakdown.fee.dynamic_commission_amount | string | No | The dynamic commission fee is the amount that the platform charges to all sellers for every successfully delivered order. Applicable only for Indonesia. (e.g. 5) |
| data.sku_transactions.fee_tax_breakdown.fee.epr_pob_service_fee_amount | string | No | The eco-contributions TikTok Shop pays on your behalf to the qualified producer responsibility organization (PRO). (e.g. -10) |
| data.sku_transactions.fee_tax_breakdown.fee.external_affiliate_marketing_fee_amount | string | No | The service fee for participating in the External Affiliate Marketing Solution Program, as stated during registration. (e.g. 10) |
| data.sku_transactions.fee_tax_breakdown.fee.fee_per_item_sold_amount | string | No | The fee charged to sellers by the platform for each item sold. Applicable only for the Brazil market. (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.fee.flash_sales_service_fee_amount | string | No | The service fee charged for participation in flash sales. (e.g. 50) |
| data.sku_transactions.fee_tax_breakdown.fee.installation_service_fee | string | No | The fee TikTok Shop charges you for using platform installation service (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.fee.live_specials_fee_amount | string | No | The service fee charged for participation in the [LIVE Specials Programme]. (e.g. 2) |
| data.sku_transactions.fee_tax_breakdown.fee.mall_service_fee_amount | string | No | The service fee charged for using TikTok Shop Mall. (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.fee.platform_commission_amount | string | No | The commission amount charged by TikTok Shop. (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.fee.pre_order_service_fee_amount | string | No | The service fee charged when seller joins Pre-order program. (e.g. 10) |
| data.sku_transactions.fee_tax_breakdown.fee.referral_fee_amount | string | No | The referral fee charged for processing successful orders. Applicable only for the US. (e.g. -2) |
| data.sku_transactions.fee_tax_breakdown.fee.refund_administration_fee_amount | string | No | The 20% refund administration fee deducted from the total refunded referral fee amount. (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.fee.seller_paylater_handling_fee_amount | string | No | The handling fee charged to the seller for participation in the PayLater program. (e.g. -10) |
| data.sku_transactions.fee_tax_breakdown.fee.sfp_service_fee_amount | string | No | The service fee charged for participation in the [Seller Free Shipping Programme]. (e.g. 2) |
| data.sku_transactions.fee_tax_breakdown.fee.shipping_fee_guarantee_service_fee | string | No | A flat service fee charged for each order under the Shipping Fee Guarantee Program (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.fee.tap_shop_ads_commission | string | No | The advertising commission cost a merchant pays to TikTok Shop Affiliate Partner (TAP). (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.fee.transaction_fee_amount | string | No | The transaction fee charged for processing successful orders. (e.g. -2) |
| data.sku_transactions.fee_tax_breakdown.fee.tsp_commission_amount | string | No | The commission amount charged by TikTok Shop Partners (TSP). (e.g. 10) |
| data.sku_transactions.fee_tax_breakdown.fee.vn_fix_infrastructure_fee | string | No | Infrastructure fees are a fixed service fee that TikTok Shop charges for providing, maintaining, and developing infrastructure for delivery services. It applies to delivered orders on the main order level. (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.fee.voucher_xtra_service_fee_amount | string | No | The service fee charged for participation in the Voucher Xtra program. (e.g. 100) |
| data.sku_transactions.fee_tax_breakdown.tax | object | No | The list of tax amounts. |
| data.sku_transactions.fee_tax_breakdown.tax.anti_dumping_duty_amount | string | No | The anti-dumping duties collected by governments for import goods. (e.g. 20) |
| data.sku_transactions.fee_tax_breakdown.tax.customs_clearance_amount | string | No | The fees charged by logistic suppliers for customs clearance services. Applicable only for cross-border shop orders. (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.tax.customs_duty_amount | string | No | The customs duties, a type of tax on cross-border goods collected by governments. Applicable only for cross-border shop orders. (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.tax.gst_amount | string | No | The goods and services tax (GST) collected and remitted to the tax authority by the platform for low-value goods imported into Singapore, effective January 1, 2023. (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.tax.import_vat_amount | string | No | The import VAT, a tax paid on goods bought in one country and imported into another. Applicable only for cross-border shop orders. In Japan, it refers to the Japan Consumption Tax (JCT). (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.tax.isr_amount | string | No | The Mexican federal income tax that TikTok Shop is required to withhold. (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.tax.iva_amount | string | No | The Mexican VAT that TikTok Shop is required to withhold on your taxable products and remit to the tax authority. (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.tax.local_vat_amount | string | No | The VAT paid by the platform on the seller's behalf. Applicable only for local shop orders. (e.g. 10) |
| data.sku_transactions.fee_tax_breakdown.tax.pit_amount | string | No | The personal income tax (PIT) paid by the platform on the seller's behalf. (e.g. 10) |
| data.sku_transactions.fee_tax_breakdown.tax.sst_amount | string | No | The sales and service tax (SST) collected and remitted to the tax authority by the platform for low-value goods imported into Malaysia, effective January 1, 2024. (e.g. 0) |
| data.sku_transactions.fee_tax_breakdown.tax.vat_amount | string | No | The VAT paid by the platform on the seller's behalf. Applicable only for cross-border shop orders. (e.g. 0) |
| data.sku_transactions.revenue_breakdown.cod_service_fee_amount | string | No | The cash on delivery service fees charged to buyers. Applicable only for Saudi Arabia. (e.g. 0) |
| data.sku_transactions.revenue_breakdown.refund_cod_service_fee_amount | string | No | The refund for cash on delivery service fees. Applicable only for Saudi Arabia. (e.g. 0) |
| data.sku_transactions.revenue_breakdown.refund_subtotal_before_discount_amount | string | No | The total price of all refunded items before any seller discounts. This is equivalent to the shop's gross sales refund. (e.g. 0) |
| data.sku_transactions.revenue_breakdown.seller_discount_amount | string | No | The total amount of discounts funded by the seller, including: - Seller promotions (Product Discount, Flash Deal, Buy More Save More, Voucher and Bundle Deal) - Seller's portion of a co-funded voucher discount in co-funding campaigns - Seller discounts during a campaign (e.g. -10) |
| data.sku_transactions.revenue_breakdown.seller_discount_refund_amount | string | No | Discounts returned to the sellers due to returns or refunds. (e.g. 0) |
| data.sku_transactions.revenue_breakdown.subtotal_before_discount_amount | string | No | The total price of all order items before any seller discounts and platform discounts are deducted. This is equivalent to the shop's gross sales. (e.g. 210) |
| data.sku_transactions.shipping_cost_breakdown.actual_shipping_fee_amount | string | No | The actual shipping fee calculated based on the weight/dimensions measured by the carrier. For details, check `shipping_cost_breakdown.supplementary_component`. (e.g. -50) |
| data.sku_transactions.shipping_cost_breakdown.customer_paid_shipping_fee_amount | string | No | The actual shipping fee borne by the customer, calculated based on the product weight uploaded by the seller. Negative numbers refer to the refunded amount of customer-paid shipping fees (e.g. 0) |
| data.sku_transactions.shipping_cost_breakdown.exchange_shipping_fee_amount | string | No | The shipping fee paid by the seller for the delivery of goods exchange. Applicable only for Indonesia. (e.g. 5) |
| data.sku_transactions.shipping_cost_breakdown.failed_delivery_subsidy_amount | string | No | For shipping fee from failed deliveries, you pay up to a standard rate, and TikTok Shop covers the remaining amount. (e.g. 5) |
| data.sku_transactions.shipping_cost_breakdown.fbt_free_shipping_fee_amount | string | No | This is the fee that you cover when offering customers free shipping through FBT. (e.g. 5) |
| data.sku_transactions.shipping_cost_breakdown.fbt_fulfillment_fee_reimbursement_amount | string | No | A reimbursement from TikTok Shop for Fulfilled by TikTok (FBT) orders that don't qualify for free shipping. Applicable only for the US. (e.g. 5) |
| data.sku_transactions.shipping_cost_breakdown.free_return_subsidy_amount | string | No | Reimbursement for the platform-funded portion of return shipping fees, as part of the free returns offered to customers. (e.g. 5) |
| data.sku_transactions.shipping_cost_breakdown.replacement_shipping_fee_amount | string | No | The shipping fee paid by the seller for the delivery of goods replacement. Applicable only for Indonesia. (e.g. -10) |
| data.sku_transactions.shipping_cost_breakdown.return_shipping_fee_amount | string | No | The shipping fee paid by the seller for the delivery of returns. (e.g. -10) |
| data.sku_transactions.shipping_cost_breakdown.return_shipping_fee_paid_buyer_amount | string | No | Reimbursement for the shipping fees paid by customers to return packages (e.g. 5) |
| data.sku_transactions.shipping_cost_breakdown.return_shipping_label_fee_amount | string | No | The fee borne by the customer to cover the cost of return labels. This fee is collected on the seller's behalf and settled according to the agreed payment terms. (e.g. 5) |
| data.sku_transactions.shipping_cost_breakdown.seller_self_shipping_service_fee_amount | string | No | A service fee charged for orders shipped through your own logistics provider. Applies to packages that don't meet the exemption criteria. (e.g. 5) |
| data.sku_transactions.shipping_cost_breakdown.shipping_fee_discount_amount | string | No | The shipping fee subsidies and incentives provided by the platform. This includes all subsidies regardless of fulfillment channels or policies. For details, check `shipping_cost_breakdown.supplementary_component`. (e.g. 0) |
| data.sku_transactions.shipping_cost_breakdown.shipping_insurance_fee_amount | string | No | The shipping insurance fee incurred by the seller for purchasing additional TikTok shipping insurance services. (e.g. 0) |
| data.sku_transactions.shipping_cost_breakdown.signature_confirmation_fee_amount | string | No | The fee incurred for packages requiring signature confirmation services (e.g. 5) |
| data.sku_transactions.shipping_cost_breakdown.supplementary_component | object | No | Supplementary costs for your reference. These amounts do not directly contribute to `shipping_cost_amount`. |
| data.sku_transactions.shipping_cost_breakdown.supplementary_component.customer_shipping_fee_offset_amount | string | No | The fee to offset TikTok Shop Shipping Incentive or customer-paid shipping fee, resulting in a net charge of $0 to the seller. Applicable only for the US. (e.g. -6.99) |
| data.sku_transactions.shipping_cost_breakdown.supplementary_component.fbm_shipping_cost_amount | string | No | The shipping fee incurred by the seller for using TikTok Shipping. This is part of `actual_shipping_fee_amount`. (e.g. 30) |
| data.sku_transactions.shipping_cost_breakdown.supplementary_component.fbt_fulfillment_fee_amount | string | No | The shipping and warehouse fulfillment fee incurred by the seller for orders fulfilled by TikTok (FBT). This is part of `actual_shipping_fee_amount`. Applicable only for the US. (e.g. 0) |
| data.sku_transactions.shipping_cost_breakdown.supplementary_component.fbt_fulfillment_fee_reimbursement_amount | string | No | (**Deprecated**: This field is deprecated and will return an empty string. Please refer to `shipping_cost_breakdown.fbt_fulfillment_fee_reimbursement_amount` instead for the relevant details.) (e.g. 5) |
| data.sku_transactions.shipping_cost_breakdown.supplementary_component.fbt_shipping_cost_amount | string | No | The shipping fee incurred by the seller for orders fulfilled by TikTok (FBT). This is part of `actual_shipping_fee_amount`. Applicable only for EU and UK. (e.g. -30) |
| data.sku_transactions.shipping_cost_breakdown.supplementary_component.platform_shipping_fee_discount_amount | string | No | The shipping fee discount provided in accordance with a campaign policy. This is part of `shipping_fee_discount_amount`. (e.g. 20) |
| data.sku_transactions.shipping_cost_breakdown.supplementary_component.promo_shipping_incentive_amount | string | No | The additional shipping incentive that the seller will receive if the seller signed up for the Co-Funded Free Shipping Program. A negative amount indicates a reversal of incentives due to order refunds attributed to the seller's responsibility. This is part of `shipping_fee_discount_amount`. (e.g. 0) |
| data.sku_transactions.shipping_cost_breakdown.supplementary_component.refunded_customer_shipping_fee_amount | string | No | Shipping fee returned to customers due returns and refunds.Does not include subsidies.This is part of `customer_paid_shipping_fee_amount`. (e.g. 0) |
| data.sku_transactions.shipping_cost_breakdown.supplementary_component.return_refund_subsidy_amount | string | No | For shipping fee from returns and refunds, you pay up to a standard rate, and TikTok Shop covers the remaining amount.This is part of `customer_paid_shipping_fee_amount`. (e.g. 0) |
| data.sku_transactions.shipping_cost_breakdown.supplementary_component.seller_shipping_fee_discount_amount | string | No | The shipping fee discount provided by sellers. (e.g. 0) |
| data.sku_transactions.shipping_cost_breakdown.supplementary_component.shipping_fee_guarantee_reimbursement | string | No | Reimbursement from the Shipping Fee Guarantee Program for failed deliveries or returns (e.g. 0) |
| data.sku_transactions.shipping_cost_breakdown.supplementary_component.shipping_fee_subsidy_amount | string | No | The shipping fee subsidy funded by the platform for seller shipping. This is part of `shipping_fee_discount_amount`. - Positive amount represents a subsidy received by the seller. - Negative amount represents a subsidy that the seller must return to TikTok Shop. (e.g. 0) |
| data.total_count | integer | No | The number of transaction records (e.g. 2) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
