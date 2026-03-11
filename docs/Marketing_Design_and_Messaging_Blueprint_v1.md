# Marketing Design and Messaging Blueprint

| Field   | Value                           |
|---------|---------------------------------|
| Version | v1.0                            |
| Status  | Draft                           |
| Date    | 2026-03-11                      |

---

## 1. Brand Positioning

CoreCompliance AI is deterministic compliance screening infrastructure. It produces verifiable evidence for every sanctions screening decision and binds that evidence to cryptographic attestation through Intelligent Analyst.

CCAI is not a product you log into to "do compliance." It is the execution layer that regulated institutions embed into their screening operations — via API for platform teams, via operator dashboard for compliance officers.

The brand communicates:

- **Rigor** — decisions follow a defined protocol, not opaque models
- **Evidence** — every decision is backed by a structured, exportable record
- **Separation** — screening execution and truth attestation are architecturally independent
- **Infrastructure** — consumed as a layer, not adopted as a destination

---

## 2. Distinction from Intelligent Analyst and VeridexCore

### 2.1 Distinction from Intelligent Analyst

| Dimension        | Intelligent Analyst                    | CCAI                                    |
|------------------|----------------------------------------|-----------------------------------------|
| Role             | Truth and attestation layer            | Screening execution layer               |
| Output           | Immutable truth ledger, receipts       | Decisions, evidence, operational results|
| Visual identity  | Bright white, corporate SaaS           | Warm-dark, institutional, technical     |
| Audience tone    | Enterprise governance, trust narrative | Operational precision, infrastructure   |
| Site purpose     | Explain the attestation system         | Explain the screening protocol          |

The CCAI site must never read as an IA sub-page. It is a separate product with a separate audience entry point. IA is referenced only when explaining attestation — as a downstream system, not a parent brand.

### 2.2 Distinction from VeridexCore

| Dimension        | VeridexCore                            | CCAI                                    |
|------------------|----------------------------------------|-----------------------------------------|
| Role             | Capability and verification protocol   | Compliance screening infrastructure     |
| Visual identity  | Cold electric cyan, developer-forward  | Warm-dark, compliance-forward           |
| Audience tone    | Developer tools, protocol-first        | Regulated institutions, evidence-first  |
| Site purpose     | Developer adoption, open verification  | Enterprise evaluation, regulated use    |

The CCAI site must not use electric cyan as a primary accent. It must not feel like a developer tool landing page. The visual and tonal register is institutional and calm, not technical-excitement.

---

## 3. Target Audiences

### 3.1 Enterprise Buyers

Heads of compliance, CTOs, chief risk officers, and procurement leads evaluating screening infrastructure.

**What they need from the site:**

- Clear explanation of what CCAI does without jargon or hype
- Evidence that the system meets regulatory examination standards
- Understanding of deployment model, data residency, and isolation
- Path to evaluation without a sales gauntlet

**Key concerns:** Regulatory defensibility, vendor independence, total cost, integration timeline.

### 3.2 Compliance Teams

Sanctions screening analysts and compliance officers who will operate the system daily.

**What they need from the site:**

- Understanding of the screening protocol and evidence model
- Confidence that evidence output meets their reporting requirements
- Visibility into monitoring, alerting, and case management capabilities
- Assurance that the system supports their existing workflows

**Key concerns:** Evidence quality, false positive rates, audit export format, operational reliability.

### 3.3 Developers / Platform Teams

Engineering teams responsible for integrating screening into existing systems.

**What they need from the site:**

- API documentation and integration patterns
- Batch processing model and webhook event schema
- Evaluation sandbox access
- Understanding of how CCAI fits as a layer in their architecture

**Key concerns:** API design, throughput, error handling, deployment requirements.

---

## 4. Core Messages

### 4.1 Deterministic Compliance Screening

Screening decisions follow a defined resolution protocol. The same input, rules, and data produce the same output. Decisions are reproducible, replayable, and auditable by design — not by afterthought.

### 4.2 Evidence-First Decisions

Every screening decision produces a DecisionEventPackage: a structured evidence record containing resolution lineage, rule bindings, data bindings, confidence basis, and configuration snapshot. Evidence is the primary output, not a log attached to a score.

### 4.3 Monitoring and Re-Screening

Entities enrolled in continuous monitoring are automatically re-screened when watchlist data updates. Delta alerts surface changes in match status. Each re-screening produces the same evidence structure as the initial screen.

### 4.4 API + Dashboard

CCAI is consumed as infrastructure via REST API and operated via web dashboard. Platform teams integrate via API. Compliance officers manage operations via dashboard. Both surfaces consume the same engine.

### 4.5 Attestation Through Intelligent Analyst

After evidence assembly, decisions are attested through Intelligent Analyst — a separate truth layer that binds cryptographic receipts to each decision. CCAI produces decisions. IA attests them. Neither system modifies the other's records.

---

## 5. Tone Rules

### Do

- Write in plain, precise language
- State what the system does, not what it "enables" or "empowers"
- Use specific technical terms where they add clarity (e.g., "resolution waterfall," "DecisionEventPackage")
- Let the architecture speak — explain the structure, let the reader infer the value
- Be direct about limitations and scope

### Do Not

- Use superlatives ("best-in-class," "industry-leading," "revolutionary")
- Use generic SaaS language ("seamless," "unlock," "supercharge," "next-generation")
- Make claims not grounded in the implemented architecture
- Use excitement as a substitute for explanation
- Imply capabilities that do not exist
- Use "AI" as a marketing adjective — CCAI uses specific, defined techniques at specific layers

### Tone Reference

The tone should read like a well-written technical specification that has been edited for a non-technical executive audience. Serious. Specific. Institutional. The reader should feel like they are being informed, not sold to.

---

## 6. Visual Direction

### 6.1 Separation from Dashboard

The marketing site and the operator dashboard are visually distinct:

| Property          | Marketing Site                        | Operator Dashboard                    |
|-------------------|---------------------------------------|---------------------------------------|
| Purpose           | Inform and qualify                    | Operate and investigate               |
| Density           | Low — editorial pacing               | High — operational data               |
| Layout            | Scroll-based, section-driven         | Panel-based, navigation-driven        |
| Typography        | Larger, more spacious                | Compact, data-dense                   |
| Color weight      | Lighter backgrounds, more contrast   | Dark surfaces, muted chrome           |

The marketing site should not look like a screenshot of the dashboard. It is a separate visual context.

### 6.2 Visual Principles

**Premium public-site presentation** — The site should feel like a high-quality institutional publication. Clean typography, generous whitespace, deliberate hierarchy. No decorative elements that do not serve communication.

**Architecture-led trust** — Diagrams, evidence examples, and structural explanations do the work of building credibility. Not testimonials, not partner logos, not abstract illustrations.

**Strong hierarchy** — Each page has a clear primary message, supporting detail, and a single call to action. The reader always knows what they are looking at and what to do next.

**Calm, technical, institutional** — The visual register communicates stability and precision. Muted color palette. No gradients for decoration. No animation for attention. Motion only where it aids comprehension (diagram transitions, scroll-reveal for sections).

### 6.3 Palette Direction

| Role              | Direction                                                  |
|-------------------|------------------------------------------------------------|
| Background        | Near-white or very light warm gray — not the dashboard's dark mode |
| Text              | Dark slate for body, near-black for headings               |
| Accent            | Restrained teal — used sparingly for interactive elements and key callouts |
| Secondary         | Muted violet — used only for subtle depth or categorization|
| Danger/Alert      | Muted red — used only in evidence examples, not decoratively |
| Surfaces          | White or very light gray cards on a slightly warm background |
| Borders           | Light gray, low contrast — separation without weight       |

The marketing site palette is intentionally lighter than the dashboard. This creates immediate visual distinction and feels appropriate for a public-facing informational context.

### 6.4 Typography Direction

- **Headings:** Geist Sans, semibold, tight tracking. Confident but not loud.
- **Body:** Geist Sans, regular weight, comfortable line height (1.6–1.7). Readable at length.
- **Code/Evidence:** Geist Mono, slightly smaller, used only for evidence examples and API snippets.
- **Labels/Eyebrows:** Small caps or uppercase, wide tracking, muted color. Used for section identification.

---

## 7. Page-by-Page Messaging Priorities

### `/` — Homepage

| Priority | Message                                                    |
|----------|------------------------------------------------------------|
| 1        | What CCAI is — deterministic compliance screening infrastructure |
| 2        | Why evidence matters — every decision produces a verifiable record |
| 3        | How it is consumed — API for platforms, dashboard for operators |
| 4        | Where it fits — shipping, insurance, enterprise platforms   |
| 5        | What to do next — request evaluation access                |

The homepage must establish positioning within the first scroll. No ambient introduction. State what it is, why it is different, and how to evaluate it.

### `/how-it-works` — Protocol Walkthrough

| Priority | Message                                                    |
|----------|------------------------------------------------------------|
| 1        | The five stages: intake → screening → evidence → monitoring → attestation |
| 2        | The resolution waterfall: L0 through L4, ordered by cost and complexity |
| 3        | Evidence assembly: what goes into a DecisionEventPackage   |
| 4        | Monitoring: continuous re-screening on watchlist updates    |
| 5        | Attestation: receipt binding through Intelligent Analyst    |

This page does the most explanatory work. It should be clear enough for a compliance officer and precise enough for a technical evaluator.

### `/architecture` — System Architecture

| Priority | Message                                                    |
|----------|------------------------------------------------------------|
| 1        | Three-layer separation: CCAI execution, IA verification, modular control plane |
| 2        | Data plane / control plane isolation with enforced boundaries |
| 3        | Multi-tenant isolation and regional data residency         |
| 4        | Infrastructure properties: encryption, observability, incident control |
| 5        | API and dashboard as consumption surfaces                  |

This page is for technical evaluators and security reviewers. Lead with structure, not features.

### `/developer` — Developer Documentation

| Priority | Message                                                    |
|----------|------------------------------------------------------------|
| 1        | API-first consumption model — endpoints, auth, response schema |
| 2        | Batch screening workflow — submit, poll/webhook, retrieve  |
| 3        | Webhook event model — batch completion, alerts, monitoring deltas |
| 4        | Evaluation sandbox — same engine, test data, full API access |
| 5        | CCAI as a layer — fits into existing architectures         |

This page should feel like the introduction to an API reference. Concrete, specific, actionable.

### `/evidence` — Evidence Model

| Priority | Message                                                    |
|----------|------------------------------------------------------------|
| 1        | DecisionEventPackage structure — what is in the evidence bundle |
| 2        | Receipt binding — how decisions are attested through IA    |
| 3        | Audit export formats — CSV, JSON, PDF, lineage, receipt archive |
| 4        | Regulatory examination support — what examiners need and how CCAI provides it |
| 5        | Immutability and independent verification                  |

This page speaks directly to compliance officers evaluating whether the evidence output meets their regulatory reporting requirements.

### `/evaluation` — Evaluation Access

| Priority | Message                                                    |
|----------|------------------------------------------------------------|
| 1        | What you can try — batch screening, evidence review, API validation |
| 2        | How the evaluation works — same engine, reference data, sandbox isolation |
| 3        | Limits and safety — batch size caps, data scope, retention |
| 4        | How to get started — request access, receive credentials, begin |
| 5        | No sales process required — access granted on use case fit |

This is the conversion page. It should be short, clear, and end with the access request form.

---

## 8. CTA Framework

### Primary CTA: Request Evaluation

Used on: homepage hero, evaluation page, persistent header/footer.

Label: "Request Evaluation Access"

Action: Opens a form collecting organization name, use case, estimated volume, and contact information.

### Secondary CTA: Talk to Us

Used on: architecture page, evidence page, footer.

Label: "Schedule a Technical Discussion"

Action: Opens a scheduling link or contact form for deeper technical evaluation.

### Tertiary CTA: Developer Interest

Used on: developer page, footer.

Label: "Get API Access"

Action: Links to evaluation request with developer context pre-selected.

### CTA Placement Rules

- Every page ends with a single, clear CTA
- The homepage has both primary and secondary CTAs in the hero
- No more than one CTA per visible viewport section
- CTAs do not interrupt reading flow — they appear at natural decision points

---

## 9. Diagram Needs

### 9.1 Execution and Verification Flow

Shows the end-to-end path from entity submission to attested receipt:

```
Entity Batch → CCAI Engine → Resolution Waterfall → Evidence Assembly → IA Attestation → Receipt
```

Purpose: Primary explanatory diagram for homepage and how-it-works page. Communicates the separation between screening execution (CCAI) and truth attestation (IA).

### 9.2 Operator and Developer Consumption Model

Shows how the two primary audiences interact with CCAI:

```
Developer → API → CCAI Engine ← Dashboard ← Operator
                      ↓
              Evidence + Results
```

Purpose: Architecture page and developer page. Communicates that CCAI is infrastructure consumed through two surfaces.

### 9.3 Evidence and Attestation Flow

Shows what goes into the evidence bundle and how it is attested:

```
Resolution Trace ─┐
Rule Binding ──────┤
Data Binding ──────┼─→ DecisionEventPackage ─→ IA ─→ VeracityReceipt
Config Snapshot ───┤
Lineage ───────────┘
```

Purpose: Evidence page. Communicates the completeness and structure of the evidence model.

### Diagram Style

- Monochrome with single accent color (teal) for key elements
- Minimal chrome — no drop shadows, no 3D, no decorative arrows
- Clean labels in Geist Sans
- Structured as flowcharts or block diagrams, not illustrations
- SVG format for crisp rendering at any size

---

## 10. Proof Elements Needed Later

These assets do not exist yet but are required before the site can communicate with full credibility. They should be produced during the build phase.

### 10.1 Architecture Diagrams

- Three-layer architecture overview (CCAI execution / IA verification / control plane)
- Resolution waterfall layer diagram (L0 → L1 → L2 → L3 → L4)
- Multi-tenant isolation model
- Regional deployment topology

### 10.2 Example Evidence Bundle

A realistic, redacted DecisionEventPackage rendered as a formatted code block or interactive expandable section. Must include all major components: resolution trace, rule binding, data binding, lineage, receipt reference.

### 10.3 Sample API Request/Response

Realistic examples for:

- Single entity resolution (`POST /resolve`)
- Batch submission (`POST /batch-upload`)
- Audit trail retrieval (`GET /audit/{trace_id}`)
- Webhook event payload (`batch.completed`)

Each example should show request headers, body, and response with realistic (but synthetic) data.

### 10.4 Regulated-Use Rationale

A concise explanation of how CCAI's evidence model addresses specific regulatory examination requirements. Not legal advice — a technical explanation of how the evidence structure supports compliance program documentation obligations.

Target regulations/frameworks to reference:

- OFAC compliance program guidance
- EU sanctions screening requirements
- Financial Action Task Force (FATF) recommendations
- General regulatory examination expectations for sanctions screening

### 10.5 Layer Distribution Example

A visual showing typical entity distribution across resolution layers for a representative batch. Communicates that most entities resolve cheaply at L1/L2 and only a small percentage require expensive L3 or manual L4.
