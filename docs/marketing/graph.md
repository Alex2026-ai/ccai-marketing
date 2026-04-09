# Graph Intelligence

## Page Purpose
Deep-dive on CCAI's native beneficial ownership graph. Differentiate from competitors who bolt on third-party graph databases or manual UBO lookup.

## Target User / Intent
Compliance officer or risk analyst who specifically needs UBO resolution. Evaluating whether CCAI can replace their manual corporate registry lookups or third-party UBO tools.

## Suggested URL
`/graph`

## SEO Title
Beneficial Ownership Graph Intelligence — CCAI

## Meta Description
Native UBO graph traversal with depth control, risk path analysis, shell company detection, and adverse media correlation. Deterministic, snapshot-scoped, auditable.

---

## Hero

**Headline:**
Beneficial ownership intelligence. Built in, not bolted on.

**Subheadline:**
Trace multi-hop ownership chains from entity to ultimate beneficial owner. Identify shell structures, assess structural risk, and correlate with adverse media — all natively, all deterministically.

**Primary CTA:** Try the Live Sandbox

[REAL SCREENSHOT: graph panel showing a 3+ node resolved ownership chain with risk path badges]

---

## Section: How Graph Traversal Works

**Headline:**
From entity to UBO in one query.

**Copy:**
Enter an entity name. CCAI traverses the ownership chain through intermediate holding companies to the ultimate beneficial owner. Every hop is typed (DIRECT, INTERMEDIATE, BENEFICIAL), every node is classified (ROOT, INTERMEDIATE, UBO, UNKNOWN), and every edge carries an ownership percentage.

**Graph structure:**
```
Root Entity (your screened name)
  → Intermediate Holding Co (jurisdiction, shell indicator)
    → Intermediate SPV (jurisdiction, shell indicator)
      → Ultimate Beneficial Owner (jurisdiction)
```

**API call:**
```
GET /api/v1/snapshots/{snapshot_id}/graph/ownership/{entity_id}?depth=3&include_risk_paths=true
```

**Response includes:**
- `nodes[]` — entity name, jurisdiction, node type, shell indicator, depth
- `edges[]` — from/to, ownership percentage, relationship type
- `ubo_entity` — resolved UBO name and jurisdiction
- `risk_paths[]` — structural risk indicators
- `metadata` — snapshot_id, depth requested/actual, computed_at

---

## Section: Depth Control

**Headline:**
Control how deep you look.

**Copy:**
Set traversal depth from 1 to 5 levels. Shallower queries are faster and focused. Deeper queries reveal hidden corporate layers. If the chain exceeds your requested depth, the response status is `PARTIAL` — you know there's more to find.

| Depth | What You See |
|-------|-------------|
| 1 | Direct parent only |
| 2 | Parent + grandparent |
| 3 | Standard UBO resolution (default) |
| 4 | Deep corporate structures |
| 5 | Maximum traversal — complex shell chains |

---

## Section: Risk Path Analysis

**Headline:**
Structural risk, not just name matching.

**Copy:**
CCAI identifies three categories of structural risk in ownership chains:

**Shell Chain** — One or more entities in the chain are flagged as shell companies. Indicator: offshore jurisdictions, no operational presence, layered through privacy havens.

**Unknown UBO** — The ownership chain terminates at an unresolvable entity. The ultimate beneficial owner cannot be identified. Status: PARTIAL.

**Deep Structure** — The ownership chain has 4 or more levels of depth. Complex corporate layering is a recognized opacity indicator.

Each risk path includes:
- `node_ids` — which entities are involved
- `shell_count` — how many shell entities
- `max_depth` — chain depth
- `opacity_reason` — shell_chain, unknown_ubo, or deep_structure

[REAL SCREENSHOT: graph panel risk path badges — shell chain warning, unknown UBO indicator]

---

## Section: Media Correlation

**Headline:**
Overlay adverse media on ownership entities.

**Copy:**
When adverse media intelligence signals exist for entities in an ownership chain, CCAI correlates them automatically. The graph response includes `media_correlations` — matching entity names in the ownership graph against media intelligence signals.

This means an analyst doesn't just see "Russian Federation is the UBO" — they see "Russian Federation is the UBO, and 3 adverse media signals are associated with entities in this chain."

[REAL SCREENSHOT: graph response with media_correlations field showing correlated signals per entity]

---

## Section: Snapshot-Scoped & Deterministic

**Headline:**
Every graph query is reproducible.

**Copy:**
Graph queries are scoped to a specific data snapshot. The same entity queried against the same snapshot always produces the same graph. This is critical for audit: you can prove what the ownership chain looked like at the time of screening, not just what it looks like today.

- `snapshot_id` in response metadata
- `computed_at` timestamp
- Deterministic: no probabilistic components in graph traversal

---

## Section: Technical Details

**API endpoint:**
```
GET /api/v1/snapshots/{snapshot_id}/graph/ownership/{entity_id}
```

**Parameters:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| depth | 1–5 | 3 | Max traversal depth |
| include_risk_paths | boolean | true | Include structural risk analysis |

**Authentication:** X-API-Key header (tenant-scoped)

**Response statuses:**
- `RESOLVED` — full chain to UBO
- `PARTIAL` — chain exists but UBO unknown or depth-truncated
- `NOT_FOUND` — no ownership data

**CTA:** Read the Full API Docs →

---

## Notes / Constraints
- Use real graph UI screenshots showing actual chains (Gazprom, EN+ Group, Darkstone Holdings are good examples from fixture data)
- Emphasize "native" — this is not a third-party graph database integration
- Emphasize deterministic — no ML/AI in the graph traversal itself
