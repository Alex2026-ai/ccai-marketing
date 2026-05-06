import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { ContinueReading } from "@/components/continue-reading"
import { ConsumptionModelDiagram } from "@/components/marketing/consumption-model-diagram"

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
  { event: "monitoring.delta", trigger: "A monitored entity\u2019s status changed on re-screen" },
]

export default function DeveloperPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 md:py-36 lg:px-8">
      <div className="fade-in-up">
        <p className="section-label">Developer</p>
        <div className="section-divider mt-4" />
        <h1 className="mt-6 text-[2.5rem] font-semibold tracking-tight leading-[1.08] md:text-[2.75rem]">
          API-first screening infrastructure.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          CCAI is designed for programmatic consumption. Platform teams integrate
          screening into existing workflows without adopting a standalone product.
        </p>
      </div>

      <AnimateOnScroll className="mt-16">
        <ConsumptionModelDiagram />
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">API Endpoints</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Authentication via API key. Tenant context bound via request header. All responses include trace identifiers for audit correlation.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-surface-2/50">
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">Method</th>
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">Endpoint</th>
                <th className="hidden px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light sm:table-cell">Description</th>
              </tr>
            </thead>
            <tbody>
              {endpoints.map((ep) => (
                <tr key={ep.path} className="border-b border-border-light last:border-0">
                  <td className="px-4 py-3">
                    <span className="rounded-md bg-accent/8 px-2 py-0.5 font-mono text-[11px] font-semibold text-accent">{ep.method}</span>
                  </td>
                  <td className="px-4 py-3 font-mono text-sm text-foreground">{ep.path}</td>
                  <td className="hidden px-4 py-3 text-sm text-muted sm:table-cell">{ep.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">Batch Screening</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Batch processing is the primary operational mode for most integrations. Batches support up to 10,000 entities per submission, parallelized across resolution layers.
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-[#111827] px-6 py-5">
          <ol className="space-y-3">
            {[
              "Submit entity file (CSV, XLSX, JSON, Parquet) or JSON array",
              "Receive batch_id and trace_id in the response",
              "Poll for completion or receive webhook notification",
              "Retrieve results with per-entity resolution detail",
              "Export evidence bundles or audit reports as needed",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 font-mono text-xs text-sky-400/60">{i + 1}.</span>
                <span className="text-sm leading-relaxed text-gray-300">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">Event and Webhook Model</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          CCAI emits events at key points in the screening lifecycle. Webhooks are delivered via HTTP POST with signed payloads. Events include trace_id and batch_id for correlation.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-surface-2/50">
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">Event</th>
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">Trigger</th>
              </tr>
            </thead>
            <tbody>
              {events.map((ev) => (
                <tr key={ev.event} className="border-b border-border-light last:border-0">
                  <td className="px-4 py-3 font-mono text-[13px] text-accent">{ev.event}</td>
                  <td className="px-4 py-3 text-sm text-muted">{ev.trigger}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">Evaluation Workspace</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Before production integration, teams can evaluate CCAI in a sandboxed environment. Submit test batches against reference data, inspect resolution results and evidence output, and validate API integration patterns.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          The evaluation workspace uses the same engine and protocol as production. The only difference is the data scope and access tier.
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">CCAI as a screening layer</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          CCAI is infrastructure, not a product you switch to. It fits into existing compliance architectures.
        </p>
        <div className="mt-8 space-y-4">
          {[
            { label: "For platform teams", desc: "Embed screening as an API call within existing entity onboarding, transaction monitoring, or KYC workflows. CCAI handles resolution and evidence generation. Your platform handles the business logic." },
            { label: "For compliance systems", desc: "Feed CCAI the entity lists your existing systems produce. Consume the structured evidence output for regulatory reporting. CCAI does not replace your compliance program — it provides the screening execution and evidence layer." },
            { label: "For data pipelines", desc: "Submit batch files on a schedule. Receive structured results with full lineage. Load results into your data warehouse or reporting system. CCAI operates as a processing stage, not a destination." },
          ].map((item) => (
            <div key={item.label} className="card-surface px-6 py-5">
              <h3 className="text-[15px] font-semibold text-foreground">{item.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <div className="rounded-2xl border border-accent/15 bg-accent/3 px-8 py-12 text-center">
          <h2 className="text-xl font-semibold tracking-tight">Get API access.</h2>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted">
            Request integration credentials to test the API against your platform requirements.
          </p>
          <div className="mt-8">
            <Link href="/evaluation" className="btn-primary">
              Request API Access
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </AnimateOnScroll>

      <ContinueReading
        href="/evidence"
        label="Evidence"
        description="Decision packages, receipt binding, and regulatory audit exports."
      />
    </div>
  )
}
