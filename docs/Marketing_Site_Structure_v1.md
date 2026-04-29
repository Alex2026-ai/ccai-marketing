# Marketing Site Structure

| Field   | Value                           |
|---------|---------------------------------|
| Version | v1.1                            |
| Status  | Draft                           |
| Date    | 2026-03-11                      |
| Author  | Principal Systems Architect     |

---

## 1. Purpose

The CCAI marketing site communicates what CoreCompliance AI is, how it works, and why it matters — to compliance officers, engineering leads, and procurement teams evaluating the platform.

It is a public-facing informational website. It does not provide operational functionality, dashboard access, or API endpoints.

## 2. Site Goals

1. **Explain** — Clearly communicate what CCAI does and how it works, without overstating capability
2. **Differentiate** — Establish why deterministic screening with verifiable evidence is structurally different from probabilistic or opaque alternatives
3. **Qualify** — Help prospective users determine if CCAI fits their compliance infrastructure needs
4. **Convert** — Drive qualified leads toward evaluation access or direct contact
5. **Reference** — Serve as a durable reference for technical and procurement teams during evaluation cycles

## 3. Target Audiences

### 3.1 Compliance Operators

Sanctions screening analysts and compliance officers who run screening operations daily. They care about:

- Accuracy and false positive rates
- Evidence quality for regulatory examination
- Auditability and reproducibility of decisions
- Operational reliability and monitoring

### 3.2 Enterprise Buyers

Heads of compliance, CTOs, and procurement leads evaluating screening infrastructure. They care about:

- Regulatory defensibility
- Total cost of ownership
- Multi-tenant isolation and data residency
- Vendor independence and portability
- Integration complexity and timeline

### 3.3 Developers / Platform Teams

Engineering teams responsible for integrating screening into existing workflows. They care about:

- API design and developer experience
- Batch processing throughput
- Event model and webhook integration
- Evaluation and sandbox access
- Infrastructure requirements and deployment model

## 4. Core Positioning

### 4.1 What CCAI Is

Deterministic compliance screening infrastructure. CCAI screens entities against sanctions and watchlists using a layered resolution protocol that produces verifiable evidence for every screening result.

### 4.2 Positioning Pillars

| Pillar                  | Statement                                                                 |
|-------------------------|---------------------------------------------------------------------------|
| Deterministic screening | Screening results are produced by a defined protocol, not opaque models   |
| Evidence-first          | Every result generates a structured evidence bundle with full lineage     |
| API + Dashboard         | Consumed as infrastructure via API, operated via dashboard                |
| Attestation via IA      | Screening results are attested and receipted through the Intelligent Analyst truth layer |

### 4.3 What CCAI Is Not

- Not a general-purpose AI product
- Not a chatbot or conversational interface
- Not a replacement for compliance judgment — it is infrastructure that supports it

## 5. Separation from Dashboard and Engine

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

## 6. Information Architecture

### 6.1 Page Map

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

### 6.2 Page Purpose

| Route              | Primary Audience      | Purpose                                                        |
|--------------------|-----------------------|----------------------------------------------------------------|
| `/`                | All                   | Establish what CCAI is, why it exists, and how to evaluate it  |
| `/how-it-works`    | Operators, Buyers     | Explain the screening protocol without implementation detail   |
| `/architecture`    | Developers, Buyers    | Show system structure for technical and security evaluation     |
| `/use-cases/*`     | Buyers, Operators     | Demonstrate domain applicability with concrete scenarios        |
| `/developer`       | Developers            | Provide integration guidance and API consumption model         |
| `/evidence`        | Operators, Buyers     | Explain the evidence model that supports regulatory defense    |
| `/evaluation`      | All                   | Guide users into hands-on evaluation with clear scope          |

### 6.3 Page Descriptions

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

### 6.4 Navigation Model

- **Primary nav:** Homepage, How It Works, Architecture, Use Cases, Developer
- **Secondary nav (footer):** Evidence, Evaluation, Legal, Contact
- **CTA:** Persistent "Request Access" or "Schedule Demo" action
