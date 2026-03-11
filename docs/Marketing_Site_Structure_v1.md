# Marketing Site Structure

| Field   | Value                           |
|---------|---------------------------------|
| Version | v1.0                            |
| Status  | Draft                           |
| Date    | 2026-03-11                      |
| Author  | Principal Systems Architect     |

---

## 1. Purpose

The CCAI marketing site communicates what CoreCompliance AI is, how it works, and why it matters — to compliance officers, engineering leads, and procurement teams evaluating the platform.

It is a public-facing informational website. It does not provide operational functionality, dashboard access, or API endpoints.

## 2. Separation from Dashboard and Engine

The marketing site is deliberately isolated from the operator dashboard and backend engine:

| Concern            | Repository           | Deployment Target     |
|--------------------|----------------------|-----------------------|
| Public website     | `ccai-marketing`     | Static hosting (TBD)  |
| Operator dashboard | `ccai-frontend`      | Vercel                |
| Backend services   | `ccai-engine`        | GCP Cloud Run         |
| Architecture specs | `ccai-protocol-spec` | Internal reference    |

This separation ensures:

- The marketing site has no runtime dependency on the engine or dashboard
- Content updates ship independently of product releases
- The public surface area is minimal and auditable
- No operational credentials or API keys are present in this repository

## 3. Information Architecture

### 3.1 Page Map

```
/                          Homepage
├── /how-it-works          Protocol walkthrough
├── /architecture          System architecture overview
├── /use-cases
│   ├── /shipping          Shipping industry use case
│   └── /insurance         Insurance industry use case
├── /developer             Developer documentation and API access
├── /evidence              Evidence model and transparency
└── /evaluation            Evaluation methodology and benchmarks
```

### 3.2 Page Descriptions

**`/` — Homepage**

Primary landing page. Communicates the core value proposition: deterministic sanctions screening with verifiable evidence and full auditability. Includes positioning statement, key differentiators, trust signals, and call-to-action.

**`/how-it-works` — Protocol Walkthrough**

Explains the screening protocol at a conceptual level. Covers the resolution waterfall (L0 → L1 → L2 → L3 → L4), decision state machine, evidence generation, and receipt binding — without exposing internal implementation detail.

**`/architecture` — System Architecture**

High-level architecture overview for technical evaluators. Covers the separation of concerns (data plane, control plane, truth plane), multi-tenant isolation, regional data residency, and infrastructure security posture.

**`/use-cases/shipping` — Shipping Industry**

Domain-specific narrative for maritime and logistics compliance teams. Covers vessel screening, beneficial ownership resolution, sanctions list matching against OFAC/EU consolidated lists, and ongoing monitoring requirements.

**`/use-cases/insurance` — Insurance Industry**

Domain-specific narrative for insurance compliance teams. Covers policyholder and counterparty screening, reinsurance chain verification, regulatory reporting obligations, and batch processing at portfolio scale.

**`/developer` — Developer Documentation**

Technical entry point for integration teams. Covers API overview, authentication model, batch upload workflow, webhook events, and SDK availability. Links to full API reference (hosted separately).

**`/evidence` — Evidence Model**

Explains the evidence and transparency architecture. Covers DecisionEventPackage structure, VeracityReceipt binding, lineage traceability, audit export capabilities, and how evidence supports regulatory examination.

**`/evaluation` — Evaluation Methodology**

Describes how CCAI is evaluated and benchmarked. Covers resolution accuracy metrics, layer distribution analysis, false positive/negative rates, confidence calibration, and the evaluation harness methodology.

### 3.3 Navigation Model

- **Primary nav:** Homepage, How It Works, Architecture, Use Cases, Developer
- **Secondary nav (footer):** Evidence, Evaluation, Legal, Contact
- **CTA:** Persistent "Request Access" or "Schedule Demo" action
