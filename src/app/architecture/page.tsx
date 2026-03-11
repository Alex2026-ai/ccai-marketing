import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Architecture — CoreCompliance AI",
  description:
    "System architecture: execution layer, verification layer, and modular control plane.",
}

const controlPlaneModules = [
  { module: "Tenancy", desc: "Tenant provisioning, suspension, deletion, isolation enforcement" },
  { module: "Governance", desc: "Rule packs, threshold policies, model policies, approval chains" },
  { module: "Auth", desc: "Users, service accounts, roles, permissions, ABAC scoping" },
  { module: "Quota", desc: "Rate limits, batch limits, L3 budget enforcement" },
  { module: "Observability", desc: "Metrics, traces, alerts, operational dashboards" },
  { module: "Incident Control", desc: "Circuit breakers, kill switches, incident response" },
  { module: "Config Snapshots", desc: "Immutable configuration versioning for reproducibility" },
  { module: "Audit Exports", desc: "Regulatory report formatting, evidence bundle packaging" },
  { module: "Metering", desc: "Usage event collection and billing signal generation" },
  { module: "Monitoring", desc: "Re-screening orchestration and delta alert generation" },
]

const infraProperties = [
  { property: "Multi-tenant isolation", impl: "Project-level, VPC-level, and row-level tenant separation" },
  { property: "Regional data residency", impl: "EU and US deployments with enforced data locality" },
  { property: "Encryption", impl: "Customer-managed encryption keys (CMEK) at rest, TLS in transit" },
  { property: "Deployment", impl: "Container-based deployment on GCP Cloud Run" },
  { property: "Observability", impl: "Structured logging, distributed tracing, metric collection" },
  { property: "Incident response", impl: "Circuit breakers, kill switches, automated escalation" },
]

export default function ArchitecturePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      {/* Header */}
      <div className="fade-in-up">
        <p className="section-label">Architecture</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Three-layer separation.
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-muted">
          CCAI is organized into three architectural layers. Each has distinct
          responsibilities, separate data stores, and enforced boundaries.
        </p>
      </div>

      {/* Layer 1: CCAI Execution */}
      <section className="mt-16 fade-in-up">
        <div className="flex items-baseline gap-4">
          <span className="text-[13px] font-semibold tabular-nums text-accent">01</span>
          <h2 className="text-xl font-semibold tracking-tight">
            CCAI Execution Layer
          </h2>
        </div>
        <div className="mt-4 space-y-6 pl-10">
          <div>
            <h3 className="text-[14px] font-semibold text-foreground">Data Plane</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              Processes entity data through the resolution waterfall. Handles
              ingestion, schema detection, entity type classification,
              normalization, L0–L4 layer execution, lineage tracking, and
              DecisionEventPackage assembly.
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              The data plane handles all entity-level computation. It reads
              configuration from the control plane but never modifies it.
            </p>
          </div>
          <div>
            <h3 className="text-[14px] font-semibold text-foreground">Control Plane</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              Manages operational configuration and governance: tenancy, rule
              packs, auth, quotas, observability, incident control, config
              snapshots, and audit exports. The control plane constrains the
              data plane&apos;s behavior but does not execute screening logic.
            </p>
          </div>
        </div>
      </section>

      {/* Layer 2: IA Verification */}
      <section className="mt-16 fade-in-up">
        <div className="flex items-baseline gap-4">
          <span className="text-[13px] font-semibold tabular-nums text-accent">02</span>
          <h2 className="text-xl font-semibold tracking-tight">
            Intelligent Analyst Verification Layer
          </h2>
        </div>
        <div className="mt-4 pl-10">
          <p className="text-[15px] leading-relaxed text-muted">
            The truth and attestation system. Architecturally separate from
            CCAI. Receives DecisionEventPackages, records decisions in an
            append-only truth ledger, binds VeracityReceipts with cryptographic
            hashes, and enables independent replay and verification.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            IA does not influence screening decisions. CCAI does not modify IA
            records. The boundary is enforced at the system level, not by
            convention.
          </p>
        </div>
      </section>

      {/* Layer 3: Modular Control Plane */}
      <section className="mt-16 fade-in-up">
        <div className="flex items-baseline gap-4">
          <span className="text-[13px] font-semibold tabular-nums text-accent">03</span>
          <h2 className="text-xl font-semibold tracking-tight">
            Modular Control Plane
          </h2>
        </div>
        <div className="mt-4 pl-10">
          <p className="text-[15px] leading-relaxed text-muted">
            The control plane is composed of independent modules, each with a
            single responsibility. Modules communicate through an internal event
            bus. No module directly imports another module&apos;s internals. Isolation
            is enforced by automated boundary checks in CI.
          </p>

          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border bg-surface-2/50">
                  <th className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                    Module
                  </th>
                  <th className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                    Responsibility
                  </th>
                </tr>
              </thead>
              <tbody>
                {controlPlaneModules.map((m) => (
                  <tr key={m.module} className="border-b border-border-light last:border-0">
                    <td className="px-4 py-3 text-[13px] font-medium text-foreground whitespace-nowrap">
                      {m.module}
                    </td>
                    <td className="px-4 py-3 text-[13px] text-muted">
                      {m.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Consumption */}
      <section className="mt-16 fade-in-up">
        <div className="flex items-baseline gap-4">
          <span className="text-[13px] font-semibold tabular-nums text-accent">04</span>
          <h2 className="text-xl font-semibold tracking-tight">
            Developer and API Consumption
          </h2>
        </div>
        <div className="mt-4 pl-10">
          <p className="text-[15px] leading-relaxed text-muted">
            CCAI is consumed as infrastructure. REST API for single-entity
            resolution, batch submission, audit retrieval, and health monitoring.
            Web dashboard for operators managing screening workflows, case
            triage, and evidence export. Webhooks for event notifications.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            The API is the primary integration surface. The dashboard is the
            operational interface. Both consume the same underlying engine.
          </p>
        </div>
      </section>

      {/* Infrastructure Properties */}
      <section className="mt-16 fade-in-up">
        <h2 className="text-xl font-semibold tracking-tight">
          Infrastructure Properties
        </h2>
        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-surface-2/50">
                <th className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                  Property
                </th>
                <th className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                  Implementation
                </th>
              </tr>
            </thead>
            <tbody>
              {infraProperties.map((p) => (
                <tr key={p.property} className="border-b border-border-light last:border-0">
                  <td className="px-4 py-3 text-[13px] font-medium text-foreground whitespace-nowrap">
                    {p.property}
                  </td>
                  <td className="px-4 py-3 text-[13px] text-muted">
                    {p.impl}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
