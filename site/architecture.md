# Architecture

CCAI is organized into three architectural layers. Each has distinct responsibilities, separate data stores, and enforced boundaries.

---

## 1. CCAI Execution Layer

The execution layer runs the screening protocol. It contains:

### Data Plane

Processes entity data through the resolution waterfall:

- **Ingestion** — file parsing, schema detection, entity type classification
- **Normalization** — suffix stripping, transliteration, deduplication, clustering
- **Resolution** — L0 through L4 layer execution with per-layer evidence capture
- **Lineage** — full input-to-output traceability for every entity
- **Decision package assembly** — compilation of the immutable DecisionEventPackage

The data plane handles all entity-level computation. It reads configuration from the control plane but never modifies it.

### Control Plane

Manages operational configuration and governance:

- **Tenancy** — tenant lifecycle, isolation enforcement, regional data residency
- **Governance** — rule pack versioning, threshold policies, approval chains
- **Auth** — RBAC and ABAC access control for users and service accounts
- **Quota** — rate limiting, batch size limits, L3 cost budget enforcement
- **Observability** — metrics collection, distributed tracing, alerting
- **Incident control** — circuit breakers, kill switches, escalation workflows
- **Config snapshots** — immutable snapshots of tenant configuration at execution time
- **Audit exports** — regulatory report generation and evidence packaging

The control plane constrains the data plane's behavior but does not execute screening logic.

---

## 2. Intelligent Analyst Verification Layer

The truth and attestation system. Architecturally separate from CCAI:

- Receives DecisionEventPackages from CCAI
- Records decisions in an append-only truth ledger
- Binds VeracityReceipts with cryptographic hashes
- Enables independent replay and verification
- Provides long-term retention for regulatory retrieval

IA does not influence screening decisions. CCAI does not modify IA records. The boundary is enforced at the system level, not by convention.

---

## 3. Modular Control Plane

The control plane is composed of independent modules, each with a single responsibility:

| Module            | Responsibility                                              |
|-------------------|-------------------------------------------------------------|
| Tenancy           | Tenant provisioning, suspension, deletion, isolation        |
| Governance        | Rule packs, threshold policies, model policies, approvals   |
| Auth              | Users, service accounts, roles, permissions, ABAC scoping   |
| Quota             | Rate limits, batch limits, L3 budget enforcement            |
| Observability     | Metrics, traces, alerts, operational dashboards             |
| Incident Control  | Circuit breakers, kill switches, incident response          |
| Config Snapshots  | Immutable configuration versioning for reproducibility      |
| Audit Exports     | Regulatory report formatting, evidence bundle packaging     |
| Metering          | Usage event collection and billing signal generation        |
| Monitoring        | Re-screening orchestration and delta alert generation       |

Modules communicate through an internal event bus. No module directly imports another module's internals. This isolation is enforced by automated boundary checks in CI.

---

## 4. Developer and API Consumption

CCAI is consumed as infrastructure:

- **API** — REST endpoints for single-entity resolution, batch submission, audit retrieval, and health monitoring
- **Dashboard** — Web interface for operators managing screening workflows, case triage, and evidence export
- **Webhooks** — Event notifications for batch completion, alert generation, and monitoring deltas

The API is the primary integration surface. The dashboard is the operational interface. Both consume the same underlying engine.

---

## Infrastructure Properties

| Property                | Implementation                                              |
|-------------------------|-------------------------------------------------------------|
| Multi-tenant isolation  | Project-level, VPC-level, and row-level tenant separation   |
| Regional data residency | EU and US deployments with enforced data locality           |
| Encryption              | CMEK encryption at rest, TLS in transit                     |
| Deployment              | GCP Cloud Run with container-based deployment               |
| Observability           | Structured logging, distributed tracing, metric collection  |
| Incident response       | Circuit breakers, kill switches, automated escalation       |
