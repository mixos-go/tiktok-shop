---
title: GetShoppableVideoPrecheckResult
category: affiliate_creator
api_name: GetShoppableVideoPrecheckResult
method: GET
path: /affiliate_creator/202601/videos/precheck_tasks/{task_id}
version: 202601
base_url: https://open-api.tiktokglobalshop.com
---

**Category:** affiliate_creator
**API:** GetShoppableVideoPrecheckResult

**Method:** GET
**HTTP Path:** https://open-api.tiktokglobalshop.com/affiliate_creator/202601/videos/precheck_tasks/{task_id}

## API Description
Use this API to get video pre-check result

## Request Parameters
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| task_id (path) | string | Yes | task id from [Precheck Video Content](https://partner.tiktokshop.com/docv2/page/precheck-video-content-202511) |
| x-tts-access-token (header) | string | Yes |  |
| Content-Type (header) | string | Yes | Allowed type: application/json |

## Response
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| code | integer | No | The success or failure status code returned in API response. |
| data | object | No | Specific return information. |
| data.precheck_task | object | No | Video pre-check task |
| data.precheck_task.good_quality_check_result | object | No | good qualtiy check details |
| data.precheck_task.good_quality_check_result.issues | array<object> | No | A list of quality issues and improvement suggestions when the good quality check fails. |
| data.precheck_task.good_quality_check_result.status | string | No | SUCCESS: The precheck task passed all good quality checks FAIL: The precheck task failed good quality checks. Check the 'issues' field for details. PROCESSING: The good qualtify check is still in progress (e.g. FAIL) |
| data.precheck_task.id | string | No | The id of the video pre-check task. (e.g. 7493990579714164574) |
| data.precheck_task.violation_check_result | object | No | violation check details |
| data.precheck_task.violation_check_result.issues | array<object> | No | A list of policy violation details returned when violation check fails |
| data.precheck_task.violation_check_result.status | string | No | SUCCESS: The precheck task passed violation checks FAIL: The precheck task has failed due to violations. Check the 'issues' field for details. PROCESSING: The precheck violation task is still in progress (e.g. FAIL) |
| message | string | No | The success or failure messages returned in API response. Reasons of failure will be described in the message. |
| request_id | string | No | Request log. |
