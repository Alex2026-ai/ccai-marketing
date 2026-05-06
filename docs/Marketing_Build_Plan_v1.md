# Marketing Build Plan

| Field   | Value                           |
|---------|---------------------------------|
| Version | v1.0                            |
| Status  | Draft                           |
| Date    | 2026-03-11                      |

---

## 1. Recommended Project Phases

### Phase 1 — Content and Messaging (current)

Finalize page content, messaging hierarchy, and tone. All copy reviewed and approved before any implementation begins.

Deliverables:

- Final page content for all routes
- CTA copy and placement decisions
- Tone review pass across all pages

### Phase 2 — Diagrams and Proof Assets

Produce the architecture diagrams, evidence examples, and API samples that the site content references. These assets are required for credibility — the site should not launch without them.

Deliverables:

- Execution and verification flow diagram
- Operator/developer consumption model diagram
- Evidence and attestation flow diagram
- Resolution waterfall layer diagram
- Example DecisionEventPackage (redacted, formatted)
- Sample API request/response pairs
- Layer distribution visual

### Phase 3 — Design and Layout

Design the visual treatment, page layouts, and component library. The marketing site has a separate visual identity from the operator dashboard — lighter backgrounds, editorial pacing, institutional tone.

Deliverables:

- Design system (palette, typography, spacing, components)
- Page layouts for all routes
- Responsive breakpoints
- Diagram styling and integration
- CTA component design

### Phase 4 — Implementation

Build the site using the finalized content, diagrams, and design. Static site generator or lightweight framework — the site has no dynamic content requirements.

Deliverables:

- Built site with all pages
- Deployed to hosting (Vercel, Cloudflare Pages, or equivalent)
- CTA forms connected to intake system
- Analytics instrumentation

### Phase 5 — Review and Launch

Final review pass for accuracy, tone, visual quality, and technical correctness. Ensure all claims are grounded in the implemented architecture.

Deliverables:

- Technical accuracy review
- Tone and messaging review
- Cross-browser and responsive QA
- Production deployment

---

## 2. Content-First Before Design Implementation

The site must not be designed or built before the content is finalized. Reasons:

1. **Hierarchy depends on content** — Page layout decisions require knowing what the primary, secondary, and tertiary messages are. Designing layouts with placeholder text produces generic results.

2. **Diagram placement depends on content** — Diagrams are embedded within explanatory sections. Their size, complexity, and position depend on what the surrounding text communicates.

3. **CTA placement depends on content** — CTAs appear at natural decision points in the reading flow. These points are determined by the content structure, not the layout grid.

4. **Tone enforcement depends on content** — Visual design reinforces tone. The design cannot be calibrated until the tone is established in writing.

The current phase (content and messaging) must be completed and reviewed before Phase 3 (design) begins.

---

## 3. Page Build Order

Pages should be built in this order, based on priority and dependency:

| Order | Page             | Rationale                                              |
|-------|------------------|--------------------------------------------------------|
| 1     | `/`              | Entry point — must establish positioning immediately   |
| 2     | `/how-it-works`  | Primary explanatory page — highest content density     |
| 3     | `/evidence`      | Core differentiator — requires example evidence asset  |
| 4     | `/architecture`  | Technical credibility — requires architecture diagrams |
| 5     | `/developer`     | Developer conversion — requires API examples           |
| 6     | `/evaluation`    | Conversion page — requires working CTA form            |

Use-case pages (`/use-cases/shipping`, `/use-cases/insurance`) are deferred until the core pages are complete. They are vertical-specific applications of the same content and can be added without structural changes.

---

## 4. Diagram Build Order

Diagrams should be produced in this order, based on page dependencies:

| Order | Diagram                              | Used On                    |
|-------|--------------------------------------|----------------------------|
| 1     | Execution and verification flow      | `/`, `/how-it-works`       |
| 2     | Resolution waterfall layers          | `/how-it-works`            |
| 3     | Evidence and attestation flow        | `/evidence`                |
| 4     | Three-layer architecture overview    | `/architecture`            |
| 5     | Operator/developer consumption model | `/architecture`, `/developer` |
| 6     | Layer distribution example           | `/how-it-works`, `/evaluation` |

All diagrams should be produced as SVG. Style: monochrome with single teal accent, Geist Sans labels, minimal chrome.

---

## 5. Proof Asset Checklist

| Asset                              | Status   | Required For        | Blocks Launch |
|------------------------------------|----------|---------------------|---------------|
| Execution + verification flow SVG  | Complete | `/`, `/how-it-works` | Yes         |
| Resolution waterfall diagram SVG   | Complete | `/how-it-works`    | Yes           |
| Evidence + attestation flow SVG    | Not started | `/evidence`        | Yes           |
| Architecture overview diagram SVG  | Not started | `/architecture`    | Yes           |
| Consumption model diagram SVG      | Not started | `/architecture`, `/developer` | Yes |
| Layer distribution visual SVG      | Not started | `/how-it-works`, `/evaluation` | No |
| Example DecisionEventPackage       | Not started | `/evidence`        | Yes           |
| Sample API: POST /resolve          | Not started | `/developer`       | Yes           |
| Sample API: POST /batch-upload     | Not started | `/developer`       | Yes           |
| Sample API: GET /audit/{trace_id}  | Not started | `/developer`       | No            |
| Sample webhook payload             | Not started | `/developer`       | No            |
| Regulated-use rationale            | Not started | `/evidence`        | No            |
| Case review visual                 | Complete | Homepage alert-clearing section | No |
| Provisioning visual                | Complete | Homepage self-serve section | No |

---

## 6. What Should Be Mocked First

These assets can be produced now using synthetic data derived from the architecture specs. They do not require a running system.

### Produce Now

- **Example DecisionEventPackage** — Construct a realistic JSON object using the data model defined in `CCAI_Protocol_Data_Model_v1.md`. Use synthetic entity names, hashes, and timestamps. Redact nothing real — it is all synthetic.

- **Sample API request/response pairs** — Write realistic curl examples and JSON responses based on the API endpoints defined in the architecture. Use synthetic data consistent with the evidence example.

- **Layer distribution visual** — Create a representative bar chart showing typical distribution (e.g., L1: 84%, L2: 8%, L3: 3%, L4: 5%) based on the documented architecture expectations.

- **All diagrams** — Can be produced from the architecture specs without system access. The system structure is documented; the diagrams are visual representations of existing documentation.

### Produce Now with Care

- **Regulated-use rationale** — Can be drafted based on general regulatory examination expectations, but must be reviewed for accuracy. Should not make specific legal claims. Frame as "how the evidence structure supports" rather than "CCAI ensures compliance with."

---

## 7. What Should Wait Until Backend/Product Maturity

These assets require a running system or finalized product decisions. Do not mock them — wait until the capability exists.

| Asset                              | Dependency                                    | Wait For              |
|------------------------------------|-----------------------------------------------|-----------------------|
| Live API sandbox                   | Deployed evaluation environment               | Phase 4 of engine     |
| Evaluation request form backend    | Intake system (CRM or equivalent)             | Ops decision          |
| Real screening result screenshots  | Production dashboard with real data           | Dashboard maturity    |
| Performance benchmark numbers      | Production load testing results               | Engine optimization   |
| Customer or evaluator references   | Completed evaluations                         | Business development  |
| Pricing or packaging details       | Commercial model decisions                    | Business decision     |
| Compliance certification badges    | Completed audit/certification processes       | Security/compliance   |
| Use-case page content              | Vertical-specific screening experience        | Domain validation     |

The site can launch with the core pages and synthetic proof assets. Vertical use cases, performance claims, and customer references are added as they become available — not before.
