# Homepage

## Page Purpose
Primary entry point. Establish credibility, communicate the full platform value, and drive sandbox trial or architecture call.

## Target User / Intent
Compliance officer, AML lead, or risk manager evaluating screening solutions. Arriving from search, referral, or direct. Skeptical, audit-focused, comparing against incumbent tools.

## Suggested URL
`/`

## SEO Title
CoreCompliance AI — Deterministic Screening, UBO Graph, Adverse Media Intelligence

## Meta Description
Self-serve compliance screening platform with deterministic sanctions matching, native beneficial ownership graph intelligence, and explainable adverse media signals. Auditable, tenant-isolated, API-first.

---

## Hero

**Headline:**
Compliance screening that doesn't guess.

**Subheadline:**
Deterministic screening. Native UBO graph. Explainable adverse media intelligence. All in one self-serve platform.

**Primary CTA:** Try the Live Sandbox
**Secondary CTA:** Book a 20-minute Architecture Deep-Dive

**Visual concept:**
Split hero — left side: headline + CTAs. Right side: real screenshot of the CCAI dashboard showing a completed batch with decision distribution (CLEARED/BLOCKED/REVIEW breakdown).

[REAL SCREENSHOT: dashboard batch outcome summary — 4-stat grid showing Total Records, Clear, Review, Match Candidates]

**Tailwind/layout notes:**
- Full-width hero, min-h-[80vh]
- Dark navy background gradient
- Left-aligned text block (max-w-xl), right-aligned screenshot with subtle drop shadow
- CTAs: primary = solid white on dark, secondary = outline/ghost

---

## Section 2: How It Works

**Section headline:**
Five steps. Full audit trail. Zero black boxes.

**Flow (horizontal on desktop, vertical on mobile):**

1. **Upload** — CSV, JSON, or API. Your entity list, your format.
2. **Snapshot** — Immutable, content-hashed, versioned. Every screening run is reproducible.
3. **Screen** — Deterministic L1 exact + L2 fuzzy matching against 72K+ sanctions entries. PEP, jurisdiction, entity-type clearing.
4. **Enrich** — Native UBO graph traversal. Adverse media intelligence. Ownership depth, shell indicators, risk paths.
5. **Review** — Structured cases for flagged entities. Disposition workflow. Full evidence chain.

**Visual concept:**
Horizontal step flow with numbered circles connected by a line. Each step has an icon and 1-line description.

[REAL SCREENSHOT: batch results table showing input names, decisions, matched names, confidence scores]

**Tailwind/layout notes:**
- Light background section
- Flex row on lg, flex col on mobile
- Step circles: numbered, accent color
- Below the flow: single screenshot spanning ~80% width

---

## Section 3: Graph Intelligence

**Section headline:**
See the ownership chain. Not just the name.

**Copy:**
CCAI's native beneficial ownership graph maps multi-hop ownership structures from root entity to ultimate beneficial owner. Shell company indicators, depth analysis, and structural risk paths — all deterministic, all auditable.

- Depth control: 1–5 levels
- Risk path analysis: shell chains, unknown UBOs, deep structures
- Adverse media correlation: overlay media intelligence signals on graph entities
- Snapshot-scoped: every graph query is reproducible against a specific data version

**Visual concept:**
Real graph UI showing a resolved ownership chain (e.g., Gazprom Export → Gazprom PJSC → Russian Federation) with node types, edge percentages, and risk path badges.

[REAL SCREENSHOT: ownership graph panel — resolved chain with ROOT/INTERMEDIATE/UBO node types, shell indicator, risk path badges]

**CTA:** Explore the Graph →

**Tailwind/layout notes:**
- Dark section (navy background)
- Two-column: copy left (max-w-lg), screenshot right
- Screenshot with subtle border + glow effect

---

## Section 4: Adverse Media Intelligence

**Section headline:**
From noisy vendor hits to explainable signals.

**Copy:**
Raw adverse media data is noisy. CCAI's intelligence layer deduplicates, categorizes, and structures raw hits into explainable signals — each traceable to source evidence, each defensible in front of a regulator.

- Structured signals: category, severity, entity match, source evidence
- Post-screening enrichment: signals attach to batch results and review cases
- Graph correlation: media intelligence overlaid on ownership graph entities
- Audit-preserving: raw hits retained, intelligence artifacts stored separately

**Before/After concept:**
Two-column comparison:
- Left: "Raw vendor output" — wall of unstructured text, mixed severity, duplicate hits
- Right: "CCAI intelligence signal" — structured card with category badge, severity indicator, source reference, entity match

[REAL SCREENSHOT: batch results with media_signals field showing structured signal data]

**CTA:** See the Intelligence Layer →

**Tailwind/layout notes:**
- Light background
- Before/after side-by-side cards
- "Before" card: muted, cluttered styling. "After" card: clean, structured, accent border

---

## Section 5: Self-Serve Provisioning

**Section headline:**
API key in 30 seconds. No sales call required.

**Copy:**
Create a tenant, generate an API key, upload your first list, and screen it — all through the self-serve provisioning surface. No procurement cycles. No vendor lock-in. Full control from day one.

- API key lifecycle: create, rotate, revoke, audit
- Tenant isolation: your data is yours, scoped and encrypted
- Onboarding guide: step-by-step quickstart built into the UI
- No minimum commitment: screen 10 names or 100,000

[REAL SCREENSHOT: provisioning page — API key creation dialog or onboarding guide panel]

**CTA:** Try the Live Sandbox →

**Tailwind/layout notes:**
- Subtle gradient background
- Centered content block (max-w-2xl)
- Screenshot below copy, centered, with shadow

---

## Section 6: Trust & Evidence

**Section headline:**
Built for the audit that's coming.

**Copy:**
Every screening decision in CCAI produces a complete evidence chain. Deterministic matching means identical inputs always produce identical outputs. Content-hashed snapshots mean you can prove exactly which data was used. Tenant isolation means your data never leaks.

**Evidence pillars (3-column grid):**

1. **Deterministic** — Same input, same output, every time. No probabilistic drift. No model retraining surprises.
2. **Auditable** — Per-entity decision packages with SHA-256 integrity hashes. Full decision path recorded: which layer, which threshold, which data version.
3. **Isolated** — Tenant-scoped persistence. API key authentication. Cross-tenant access is structurally impossible.

**Tailwind/layout notes:**
- Light background
- 3-column grid on lg, stacked on mobile
- Each pillar: icon + headline + 2-line description
- Subtle card borders

---

## Section 7: Social Proof

**Section headline:**
Trusted by compliance teams who need to defend their decisions.

**Copy:**
[Placeholder for testimonials, client logos, or case studies. Use when available.]

**If no testimonials yet:**
Replace with metrics section:
- 72,859 sanctions entries across 15 source lists
- 656,339 PEP records (OpenSanctions)
- 100K entities screened in under 17 seconds
- 6,000+ rows/second sustained throughput

**Tailwind/layout notes:**
- Dark section
- Centered, large metric numbers with labels below
- 4-column grid on lg

---

## Section 8: Final CTA

**Headline:**
Start screening in minutes.

**Subheadline:**
No procurement. No integration project. Upload a list and get results.

**Primary CTA:** Try the Live Sandbox
**Secondary CTA:** Book a 20-minute Architecture Deep-Dive

**Tailwind/layout notes:**
- Full-width dark section
- Centered text + stacked CTAs
- Generous vertical padding (py-24)
