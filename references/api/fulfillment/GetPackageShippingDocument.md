---
title: GetPackageShippingDocument
category: fulfillment
api_name: GetPackageShippingDocument
method: GET
path: /fulfillment/202309/packages/{package_id}/shipping_documents
version: 202309
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** fulfillment
**API:** GetPackageShippingDocument

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/fulfillment/202309/packages/{package_id}/shipping_documents

## API Description
For orders shipped by TikTok Shop, this API retrieves the URL of shipping documents (shipping label and packing slip) for a package specified by the package ID. This API is only applicable to "TikTok Shipping" orders. To obtain the shipping documents URL via this API, first call "Ship Package" to ship the corresponding package.

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| package_id (path) | string | Yes | TikTok Shop package ID. |
| document_type (query) | string | Yes | Available document types: - `SHIPPING_LABEL`: Returns the shipping label in PDF format by default. - `PACKING_SLIP`: Returns the packing slip in PDF format by default. - `SHIPPING_LABEL_AND_PACKING_SLIP`: Returns both the shipping label and the packing slip for the package, both in PDF format by def |
| document_size (query) | string | No | Use this field to specify the size of the document to obtain. This parameter is only applicable to shipping labels, picking slips, and packing slips that are in the PDF format. It is not applicable for hazmat labels as these are fixed to A4. If you specify `SHIPPING_LABEL_PICTURE` for the `document_ |
| document_format (query) | string | No | The format of the shipping document. Possible values: - PDF (Default) - ZPL (Only for BR and MX market) **Note**: Not applicable for `SHIPPING_LABEL_PICTURE` document type. |
| shop_cipher (query) | string | No | Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.doc_url | string | No | The URL of the shipping label and packing slip generated for the specified package. The URL is valid for 24 hours. (e.g. https://magelng.bytedance.net2/wsos_v2/oec_fulfillment_doc_tts/object/wsos641232) |
| data.tracking_number | string | No | The package tracking number from the shipping carrier. (e.g. 752455325694) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
