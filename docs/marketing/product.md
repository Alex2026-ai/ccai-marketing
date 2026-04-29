# Product

## Page Purpose
Comprehensive platform overview. Show how all capabilities work together as a cohesive system, not a collection of point features.

## Target User / Intent
Compliance officer or risk manager doing deep evaluation. Wants to understand the full system, not just one feature. Comparing against incumbent multi-vendor setups.

## Suggested URL
`/product`

## SEO Title
CCAI Platform — Deterministic Screening, Graph Intelligence, Media Intelligence

## Meta Description
One platform for sanctions screening, beneficial ownership graph analysis, adverse media intelligence, and case management. Self-serve, auditable, API-first.

---

## Hero

**Headline:**
One platform. Complete compliance execution.

**Subheadline:**
Deterministic screening, native UBO graph, explainable adverse media intelligence, structured case management — all tenant-isolated, all auditable, all self-serve.

**Primary CTA:** Try the Live Sandbox

---

## Section: Deterministic Screening Core

**Headline:**
Matching you can explain to a regulator.

**Copy:**
CCAI's screening engine uses deterministic L1 exact matching and L2 fuzzy matching against 72,859 sanctions and restricted-party entries across 15 source lists. Every match result is reproducible for the same canonical input, tenant rules, and watchlist version.

- L1 exact match: O(1) lookup against normalized watchlist
- L2 fuzzy match: token-sort ratio with configurable thresholds (≥95% BLOCKED, ≥85% REVIEW)
- Entity-type mismatch clearing: person vs vessel, org vs vessel — reduces false positives
- Score cutoff optimization: early-exit for sub-threshold comparisons

**Key metric:** 6,000+ entities/second sustained throughput. 100K batch in under 17 seconds.

[REAL SCREENSHOT: results table with decision column showing CLEARED/BLOCKED/REVIEW badges, confidence scores, matched names]

---

## Section: Immutable Snapshots

**Headline:**
Know exactly what data you screened against.

**Copy:**
Every screening run operates against a versioned, content-hashed snapshot. Snapshots are immutable — once created, they cannot be modified. This means any screening result can be reproduced months later against the exact same data.

- Content hash (SHA-256) proves data integrity
- Snapshot ID for precise audit reference
- Upload CSV or JSON — your data, normalized and versioned
- Provider-agnostic: same snapshot format for sanctions, PEP, adverse media, ownership

---

## Section: Beneficial Ownership Graph

**Headline:**
Trace ownership from entity to UBO.

**Copy:**
CCAI's native graph engine traverses multi-hop ownership chains and identifies ultimate beneficial owners, shell company structures, and structural risk indicators. No third-party graph database. No external API calls during screening.

- Depth control: 1–5 levels of traversal
- Risk paths: shell chains, unknown UBOs, deep structures (≥4 levels)
- Snapshot-scoped: every graph query tied to a specific data version
- Deterministic: same entity and same data snapshot produce the same graph

[REAL SCREENSHOT: ownership graph panel — multi-node chain with UBO resolution]

**CTA:** Deep-dive on Graph Intelligence →

---

## Section: Adverse Media Intelligence

**Headline:**
Structured signals, not raw noise.

**Copy:**
CCAI's intelligence layer processes raw adverse media hits into structured, deduplicated, categorized signals. Each signal is traceable to source evidence and explainable to an analyst or regulator.

- Category classification: financial crime, fraud, corruption, sanctions evasion, terrorism
- Severity ranking: HIGH / MEDIUM / LOW with evidence references
- Graph correlation: media signals overlaid on ownership graph entities
- Fail-safe: intelligence failures never block the screening batch

[REAL SCREENSHOT: batch results with media_signals showing structured signal data]

**CTA:** Deep-dive on Intelligence →

---

## Section: Case Management

**Headline:**
From flagged entity to resolved case.

**Copy:**
Flagged screening results automatically generate review cases. Analysts can review entity details, examine evidence, update case status, and resolve — all within the platform.

- Auto-generation from BLOCKED/REVIEW/ESCALATED decisions
- Per-entity detail: match evidence, media signals, graph data
- Status workflow: open → in_review → resolved
- Tenant-scoped: cases are isolated per tenant

---

## Section: Self-Serve Operations

**Headline:**
No vendor dependency. No integration project.

**Copy:**
CCAI is designed for self-serve operation from day one. Create a tenant, generate an API key, upload a list, and screen it — all through the API or the provisioning UI.

- API key lifecycle: create, rotate, revoke, audit
- Onboarding guide built into the provisioning surface
- No minimum commitment or long-term contract required
- Full API documentation at `/developers`

**Primary CTA:** Try the Live Sandbox
**Secondary CTA:** Book a 20-minute Architecture Deep-Dive

---

## Section: Auditability

**Headline:**
Every screening result has a receipt.

**Copy:**
- Per-entity decision packages with SHA-256 integrity hashes
- Full decision path: which resolution layer, which threshold, which data version
- Enrichment steps recorded: PEP, adverse media, ownership, jurisdiction
- Promotion logic auditable: CLEARED → REVIEW transitions include the trigger reason
- Content-hashed snapshots: prove which data was active at screening time

---

## Notes / Constraints
- Product page should link to Graph, Intelligence, and Developers pages for deep-dives
- Keep each section skimmable — headline + 3-4 bullet points + optional screenshot
- Avoid repeating the homepage flow verbatim; this page goes deeper on each capability
