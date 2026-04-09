# Adverse Media Intelligence

## Page Purpose
Deep-dive on CCAI's adverse media intelligence layer. Differentiate from raw-vendor-hit dumps. Emphasize explainability, structure, and regulatory defensibility.

## Target User / Intent
Compliance analyst or AML lead drowning in noisy adverse media vendor output. Wants structured, explainable signals they can defend in an audit.

## Suggested URL
`/intelligence`

## SEO Title
Adverse Media Intelligence — Explainable Signals, Not Raw Noise | CCAI

## Meta Description
CCAI's adverse media intelligence layer transforms raw vendor hits into structured, deduplicated, explainable signals. Category classification, severity ranking, source traceability, graph correlation. Regulator-defensible.

---

## Hero

**Headline:**
Adverse media intelligence that explains itself.

**Subheadline:**
Raw vendor hits are noisy, duplicated, and hard to defend. CCAI's intelligence layer produces structured signals — each categorized, severity-ranked, and traceable to source evidence.

**Primary CTA:** Try the Live Sandbox

---

## Section: The Problem with Raw Vendor Output

**Headline:**
Your current adverse media feed is a wall of noise.

**Copy:**
Typical adverse media vendors return hundreds of raw hits per entity. Many are duplicates. Many are irrelevant. Severity is inconsistent. Categories are missing or wrong. The compliance analyst's job becomes manual triage — reading headlines, deduplicating, and making judgment calls that are hard to defend in an audit.

**Pain points:**
- Duplicate hits for the same event from different sources
- Mixed severity levels with no consistent ranking
- Missing or inconsistent category classification
- No link between media hits and corporate ownership
- No structured evidence trail for regulators

---

## Section: How CCAI Intelligence Works

**Headline:**
From raw hits to structured signals.

**Copy:**
CCAI's adverse media intelligence layer is a post-screening processor. It consumes the raw media hits produced during screening and outputs structured, deduplicated, categorized signals.

**Pipeline:**
```
Screening produces raw AdverseMediaAssessment (HIT/NO_HIT, hit list)
  → Intelligence layer consumes raw hits
    → Deduplication (same event, different sources → single signal)
    → Category classification (FINANCIAL_CRIME, FRAUD, CORRUPTION, SANCTIONS_EVASION, TERRORISM)
    → Severity ranking (HIGH / MEDIUM / LOW)
    → Source evidence linking (which source, which headline, which date)
  → Structured AdverseMediaSignal output
    → Stored as tenant-scoped artifact alongside batch results
    → Exposed via API, attached to cases, correlated with graph
```

**Key principle:** Raw hits are preserved untouched for audit. Intelligence signals are additive artifacts, not replacements.

---

## Section: Before vs After

**Headline:**
See the difference.

**Before (raw vendor output):**
```
Hit 1: "Gazprom linked to sanctions evasion" — Reuters — HIGH
Hit 2: "Gazprom sanctions evasion scheme" — BBC — MEDIUM
Hit 3: "Russian energy company faces EU sanctions" — FT — HIGH
Hit 4: "Gazprom Export revenue drops amid sanctions" — Bloomberg — LOW
Hit 5: "Gazprom PJSC annual report controversy" — local media — LOW
```
5 hits. 3 duplicate the same event. 2 are irrelevant. No category structure. No entity resolution.

**After (CCAI intelligence signal):**
```json
{
  "entity_name": "Gazprom Export",
  "category": "SANCTIONS_EVASION",
  "severity": "HIGH",
  "signal_count": 3,
  "deduplicated_from": 5,
  "top_source": "Reuters",
  "evidence_date": "2026-03-15",
  "graph_correlated": true,
  "source_references": ["Reuters", "BBC", "FT"]
}
```
One structured signal. Category classified. Severity ranked. Sources traceable. Graph-correlated.

**Tailwind/layout notes:**
- Side-by-side cards: left = raw (muted, monospace, cluttered), right = structured (clean, accent border, formatted)
- Visual emphasis on the contrast

---

## Section: Evidence Shape

**Headline:**
Every signal is traceable.

**Copy:**
Each adverse media intelligence signal carries:

| Field | Description |
|-------|-------------|
| `entity_name` | The screened entity this signal relates to |
| `category` | Classified category (financial crime, fraud, corruption, sanctions evasion, terrorism) |
| `severity` | HIGH / MEDIUM / LOW — consistent across all sources |
| `signal_count` | Number of consolidated source hits |
| `deduplicated_from` | Original raw hit count before deduplication |
| `source_references` | List of source names for audit trail |
| `evidence_date` | Most recent relevant date |
| `graph_correlated` | Whether this signal was matched to a graph entity |

Signals are stored as tenant-scoped, immutable artifacts. They are never modified after creation.

---

## Section: Graph Correlation

**Headline:**
Media intelligence meets ownership intelligence.

**Copy:**
When a graph query is executed, CCAI automatically correlates adverse media signals with entities in the ownership chain. If the UBO has adverse media, you see it. If an intermediate holding company has adverse media, you see it.

This cross-layer correlation is what turns point-solution screening into integrated compliance intelligence.

[REAL SCREENSHOT: graph response with media_correlations showing signal data per graph entity]

---

## Section: Regulatory Defensibility

**Headline:**
Built for the audit, not just the alert.

**Copy:**
CCAI's intelligence layer is designed to produce outputs that can survive regulatory scrutiny:

- **Deterministic initial processing:** deduplication and categorization are rule-based, not probabilistic. No hidden ML retraining.
- **Raw hits preserved:** the original vendor data is never modified. Intelligence signals are additive artifacts stored separately.
- **Source traceability:** every signal references the raw hits it was derived from.
- **Tenant isolation:** signals are scoped per tenant. No data leakage.
- **Fail-safe:** if intelligence processing fails, the screening batch completes normally. Intelligence failures are logged, not hidden.

---

## Section: API Access

**Headline:**
Structured signals via API.

**Endpoint:**
```
GET /api/v1/batches/{batch_id}/media-signals
```

**Returns:** array of structured signals per entity in the batch. Empty array when no signals were generated.

**Also available on:**
- Batch results response (additive `media_signals` field)
- Review case detail response (per-entity signals)
- Graph ownership response (`media_correlations`)

**Authentication:** X-API-Key header (tenant-scoped)

**CTA:** Read the Full API Docs →

---

## Notes / Constraints
- Do NOT claim AI/ML is used in the intelligence layer unless repo truth supports it (current implementation is deterministic dedup + categorization)
- Emphasize "explainable" and "structured" — these are the differentiators
- The before/after comparison is the most important visual on this page
