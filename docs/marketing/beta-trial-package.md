# Beta Trial Package - Logistics / Vessel Operators

## Purpose

This package describes the bounded beta trial for international logistics and vessel-screening operators. It is written for prospects, investors, and internal sales/implementation teams. It should stay aligned with the implemented engine, frontend, and public-claims policy.

## Initial Beta Cohort

The planned initial beta cohort is two international logistics companies with vessel-related screening needs. The beta is designed to validate integration, operator workflow, evidence quality, and buyer readiness before any production reliance claim.

## What CCAI Will Demonstrate

- Upload a logistics or vessel-oriented entity list through the Product API.
- Run deterministic screening against the configured sandbox or approved provider mode.
- Retrieve tenant-scoped results, audit summary, media-signal context, and review cases.
- Show vessel enrichment for vessel-like inputs and IMO identifiers when source data is available.
- Surface ownership graph context where data exists.
- Register webhooks for integration events such as batch completion and case status changes.
- Review flagged cases in the operator UI with evidence, freshness, review friction, PI contradiction guard, and exam package readiness.
- Export regulator-readable evidence packages as review artifacts.

## Evaluation Boundary

The beta is for integration testing, evidence review, and operating-model validation. It is not production reliance. Customers should treat CCAI beta output as screening-signal evidence, not as a final compliance decision, legal opinion, sanctions-clearance certificate, or substitute for a customer's compliance officer.

Before a customer uses CCAI for production reliance, the customer and CCAI must agree on:

- Provider mode and source-data scope.
- Data freshness expectations.
- Tenant isolation tier.
- Retention and deletion policy.
- Backup and restore commitments.
- Human-review responsibilities.
- Reliance and liability language.

## Data Format

The first beta upload should use the engine sample format:

```csv
name,type,id,country,dob
Morning Glory,VESSEL,IMO 9156729,KP,
Maersk Alabama,VESSEL,IMO 9164263,US,
MSC Oscar,VESSEL,IMO 9703291,MH,
Blue Harbor Logistics LLC,ORGANIZATION,BHL-001,US,
Northstar Freight Forwarding Ltd,ORGANIZATION,NFF-001,GB,
Gazprom Export,ORGANIZATION,SAMPLE-REVIEW-001,RU,
```

Customer-supplied beta files should start with synthetic, scrubbed, or legally approved test records. Live customer data should not enter the beta until the relevant privacy, retention, data-processing, and access-control terms are accepted.

## Success Criteria

A beta trial is successful when:

- The customer can upload a file and retrieve results without CCAI manually touching the data.
- At least one flagged row can be reviewed in the operator workflow.
- Audit summary and evidence references are visible.
- The operator can explain what data source mode was used.
- Snapshot freshness and limitations are visible.
- PI assistance improves review speed without changing outcomes or hiding contradictions.
- The customer can map webhook or API output into its own operating model.
- The customer understands that final compliance decisions remain theirs.

## What Not To Claim

Do not claim that beta CCAI:

- Promises sanctions compliance.
- Replaces a compliance officer.
- Makes final legal determinations.
- Has independently certified every customer obligation.
- Uses live premium provider data unless the exact vendor feed is configured, approved, and validated.
- Self-heals compliance truth or changes screening outcomes through PI.

## Prospect Narrative

CCAI is built as deterministic compliance infrastructure with agentic assistance around it. The screening core produces structured evidence and tenant-scoped results. PI helps operators understand, draft, prioritize, and monitor, but PI does not change decisions, thresholds, approvals, watchlists, hashes, or final outcomes. The beta validates that a logistics operator can move from list upload to evidence review to operational integration while preserving human accountability and clear reliance boundaries.

## Internal Handoff

Before scheduling a beta session, confirm:

- Engine dry-run runbook: `ccai-engine/docs/beta/LOGISTICS_VESSEL_BETA_READINESS.md`
- Frontend rehearsal checklist: `ccai-frontend/docs/beta/OPERATOR_BETA_REHEARSAL.md`
- Public claims policy: `docs/marketing/public-claims-policy.md`
- Evaluation boundaries: `docs/marketing/evaluation-boundaries.md`
- Data freshness page spec: `docs/marketing/data-freshness.md`
- Regulatory examination page spec: `docs/marketing/regulatory-examination.md`
