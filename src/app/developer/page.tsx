import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Developer — CoreCompliance AI",
  description:
    "API-first integration, batch screening, webhook events, and evaluation sandbox.",
}

const endpoints = [
  { method: "POST", path: "/resolve", desc: "Screen a single entity" },
  { method: "POST", path: "/batch", desc: "Submit a batch of entities (JSON array)" },
  { method: "POST", path: "/batch-upload", desc: "Upload a file for batch screening (multipart)" },
  { method: "GET", path: "/audit/{trace_id}", desc: "Retrieve full audit trail for a screening" },
  { method: "GET", path: "/health", desc: "System health with component status" },
  { method: "GET", path: "/stats", desc: "Global performance metrics" },
]

const events = [
  { event: "batch.completed", trigger: "All entities in a batch have been resolved" },
  { event: "batch.failed", trigger: "Batch processing encountered an unrecoverable error" },
  { event: "alert.created", trigger: "A new case has been escalated to human review" },
  { event: "monitoring.delta", trigger: "A monitored entity's status changed on re-screen" },
]

export default function DeveloperPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      {/* Header */}
      <div className="fade-in-up">
        <p className="section-label">Developer</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          API-first screening infrastructure.
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-muted">
          CCAI is designed for programmatic consumption. Platform teams integrate
          screening into existing workflows without adopting a standalone
          product.
        </p>
      </div>

      {/* API Endpoints */}
      <section className="mt-16 fade-in-up">
        <h2 className="text-xl font-semibold tracking-tight">API Endpoints</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          Authentication via API key. Tenant context bound via request header.
          All responses include trace identifiers for audit correlation.
        </p>

        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-surface-2/50">
                <th className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                  Method
                </th>
                <th className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                  Endpoint
                </th>
                <th className="hidden px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light sm:table-cell">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {endpoints.map((ep) => (
                <tr key={ep.path} className="border-b border-border-light last:border-0">
                  <td className="px-4 py-3">
                    <span className="rounded bg-surface-2 px-2 py-0.5 font-mono text-[11px] font-medium text-accent">
                      {ep.method}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-[13px] text-foreground">
                    {ep.path}
                  </td>
                  <td className="hidden px-4 py-3 text-[13px] text-muted sm:table-cell">
                    {ep.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Batch Screening */}
      <section className="mt-16 fade-in-up">
        <h2 className="text-xl font-semibold tracking-tight">Batch Screening</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          Batch processing is the primary operational mode for most integrations.
          Batches support up to 10,000 entities per submission, parallelized
          across resolution layers.
        </p>

        <div className="mt-6 rounded-xl border border-border bg-[#1a1f2e] px-5 py-4">
          <ol className="space-y-2">
            {[
              "Submit entity file (CSV, XLSX, JSON, Parquet) or JSON array",
              "Receive batch_id and trace_id in the response",
              "Poll for completion or receive webhook notification",
              "Retrieve results with per-entity resolution detail",
              "Export evidence bundles or audit reports as needed",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 font-mono text-[12px] text-accent/60">
                  {i + 1}.
                </span>
                <span className="text-[13px] leading-relaxed text-[#e2e8f0]/80">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Webhooks */}
      <section className="mt-16 fade-in-up">
        <h2 className="text-xl font-semibold tracking-tight">
          Event and Webhook Model
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          CCAI emits events at key points in the screening lifecycle. Webhooks
          are delivered via HTTP POST with signed payloads. Events include
          trace_id and batch_id for correlation.
        </p>

        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-surface-2/50">
                <th className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                  Event
                </th>
                <th className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                  Trigger
                </th>
              </tr>
            </thead>
            <tbody>
              {events.map((ev) => (
                <tr key={ev.event} className="border-b border-border-light last:border-0">
                  <td className="px-4 py-3 font-mono text-[12px] text-foreground">
                    {ev.event}
                  </td>
                  <td className="px-4 py-3 text-[13px] text-muted">
                    {ev.trigger}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Evaluation Sandbox */}
      <section className="mt-16 fade-in-up">
        <h2 className="text-xl font-semibold tracking-tight">
          Evaluation Workspace
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          Before production integration, teams can evaluate CCAI in a sandboxed
          environment. Submit test batches against reference data, inspect
          resolution results and evidence output, and validate API integration
          patterns.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          The evaluation workspace uses the same engine and protocol as
          production. The only difference is the data scope and access tier.
        </p>
      </section>

      {/* CCAI as a Layer */}
      <section className="mt-16 fade-in-up">
        <h2 className="text-xl font-semibold tracking-tight">
          CCAI as a screening layer
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          CCAI is infrastructure, not a product you switch to. It fits into
          existing compliance architectures.
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              label: "For platform teams",
              desc: "Embed screening as an API call within existing entity onboarding, transaction monitoring, or KYC workflows. CCAI handles resolution and evidence generation. Your platform handles the business logic.",
            },
            {
              label: "For compliance systems",
              desc: "Feed CCAI the entity lists your existing systems produce. Consume the structured evidence output for regulatory reporting. CCAI does not replace your compliance program — it provides the screening execution and evidence layer.",
            },
            {
              label: "For data pipelines",
              desc: "Submit batch files on a schedule. Receive structured results with full lineage. Load results into your data warehouse or reporting system. CCAI operates as a processing stage, not a destination.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-surface px-5 py-4"
            >
              <h3 className="text-[14px] font-semibold text-foreground">
                {item.label}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 fade-in-up rounded-xl border border-border bg-surface-2/50 px-6 py-8 text-center">
        <h2 className="text-lg font-semibold tracking-tight">
          Get API access.
        </h2>
        <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-muted">
          Request evaluation credentials to test the API against your
          integration requirements.
        </p>
        <div className="mt-5">
          <Link
            href="/evaluation"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-[14px] font-medium text-surface transition-colors hover:bg-foreground/90"
          >
            Request Evaluation Access
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
