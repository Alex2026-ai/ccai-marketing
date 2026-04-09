# Developers / API

## Page Purpose
Technical entry point for developers evaluating CCAI's API. Establish API-first credibility. Drive sandbox trial.

## Target User / Intent
Developer or technical lead tasked with integrating a screening solution. Wants to see real endpoints, real request/response shapes, and a quickstart path — not marketing abstractions.

## Suggested URL
`/developers`

## SEO Title
Developer API — CoreCompliance AI

## Meta Description
API-first sanctions screening platform. Upload lists, run screening batches, query ownership graphs, retrieve intelligence signals — all via REST API with API key authentication.

---

## Hero

**Headline:**
API-first compliance screening.

**Subheadline:**
Upload a list, screen it, query the ownership graph, retrieve intelligence signals — all through a clean REST API. No SDK required. No integration project.

**Primary CTA:** Try the Live Sandbox
**Secondary CTA:** Read the Full API Docs

---

## Section: Quickstart

**Headline:**
Screen your first list in 4 commands.

```bash
# 1. Upload a list
curl -X POST https://api.corecomplianceai.com/api/v1/lists/upload \
  -H "X-API-Key: ccai_your_key" \
  -H "Content-Type: application/json" \
  -d '[{"name":"Acme Corp"},{"name":"Gazprom Export"},{"name":"Jane Doe"}]'
# → {"snapshot_id":"snap-123", "record_count":3, "status":"ingested"}

# 2. Screen the list
curl -X POST https://api.corecomplianceai.com/api/v1/batches/run \
  -H "X-API-Key: ccai_your_key" \
  -H "Content-Type: application/json" \
  -d '{"snapshot_id":"snap-123"}'
# → {"batch_id":"batch-456", "status":"completed"}

# 3. Get results
curl https://api.corecomplianceai.com/api/v1/batches/batch-456/results \
  -H "X-API-Key: ccai_your_key"
# → {"results":[{"name":"Acme Corp","decision":"CLEARED"}, ...]}

# 4. Query ownership graph
curl "https://api.corecomplianceai.com/api/v1/snapshots/snap-123/graph/ownership/Gazprom%20Export?depth=3" \
  -H "X-API-Key: ccai_your_key"
# → {"status":"RESOLVED", "ubo_entity":"Russian Federation", ...}
```

**Tailwind/layout notes:**
- Dark code block with syntax highlighting
- Copy button on each command
- Subtle step numbering

---

## Section: Core API Surface

**Headline:**
Everything you need. Nothing you don't.

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/v1/lists/upload` | POST | Upload entity list (CSV or JSON) |
| `/api/v1/batches/run` | POST | Run screening against a snapshot |
| `/api/v1/batches/{id}` | GET | Check batch status |
| `/api/v1/batches/{id}/results` | GET | Retrieve screening results |
| `/api/v1/batches/{id}/media-signals` | GET | Retrieve adverse media intelligence signals |
| `/api/v1/review-cases/create-from-batch` | POST | Create review cases from flagged results |
| `/api/v1/review-cases` | GET | List review cases |
| `/api/v1/review-cases/{id}` | PATCH | Update case status |
| `/api/v1/snapshots/{id}/graph/ownership/{entity}` | GET | Query ownership graph |

**Authentication:** `X-API-Key` header on every request. Tenant derived from key.

---

## Section: Snapshots & Provenance

**Headline:**
Every screening run is versioned and reproducible.

**Copy:**
When you upload a list, CCAI creates an immutable snapshot — a content-hashed, versioned artifact. Every batch run references a specific snapshot. Every result references a specific batch. Every graph query references a specific snapshot.

This provenance chain means you can prove, months later, exactly what data was screened, what results were produced, and what ownership structures were resolved — down to the SHA-256 hash.

---

## Section: Screening Results

**Headline:**
Per-entity decisions with full evidence.

**Response shape (per entity):**
```json
{
  "name": "Gazprom Export",
  "decision": "BLOCKED",
  "score": 1.0,
  "matched_name": "Gazprom Export",
  "details": {}
}
```

**Decision values:**
| Decision | Meaning |
|----------|---------|
| `CLEARED` | No match found |
| `BLOCKED` | High-confidence sanctions match |
| `REVIEW` | Partial match — analyst review required |
| `ESCALATED` | Ambiguous entity — human review required |

---

## Section: Ownership Graph API

**Headline:**
Multi-hop UBO resolution via API.

```
GET /api/v1/snapshots/{snapshot_id}/graph/ownership/{entity_id}?depth=3&include_risk_paths=true
```

**Response includes:**
- `nodes[]` — entity chain with types, jurisdictions, shell indicators
- `edges[]` — ownership percentages and relationship types
- `risk_paths[]` — shell chains, unknown UBOs, deep structures
- `ubo_entity` — resolved ultimate beneficial owner
- `metadata` — snapshot_id, depth, computed_at

**CTA:** Full Graph API Reference →

---

## Section: Intelligence Signals API

**Headline:**
Structured adverse media signals per batch.

```
GET /api/v1/batches/{batch_id}/media-signals
```

Returns structured, deduplicated signals with category, severity, source references, and entity match data. Also available inline on batch results and review case detail responses.

---

## Section: Authentication

**Headline:**
API key. That's it.

**Copy:**
Every request requires an `X-API-Key` header. Your API key is bound to a tenant — all data is automatically scoped. No OAuth flows. No session management. No token refresh.

Create keys, rotate them, revoke them, and audit them through the provisioning surface or management API.

---

## Section: Full Documentation

**Headline:**
Comprehensive API reference available.

Link to: `docs/API_PRODUCT.md` (or hosted docs URL when available)

Covers all endpoints, request/response shapes, error codes, and authentication details.

**Primary CTA:** Try the Live Sandbox
**Secondary CTA:** Book a 20-minute Architecture Deep-Dive

---

## Notes / Constraints
- This page should feel like Stripe's developer docs landing page: clean, code-heavy, trust-building
- Real curl commands with real endpoint paths
- No invented endpoints — use only what exists in the repo
- Link to full API docs (docs/API_PRODUCT.md in ccai-engine repo)
