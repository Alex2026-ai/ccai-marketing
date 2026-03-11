import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, AlertTriangle, Code, Layers, Shield, Zap, FileCheck } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { ContinueReading } from "@/components/continue-reading"

export const metadata: Metadata = {
  title: "Platform Integrations — CoreCompliance AI",
  description:
    "Integrate deterministic sanctions screening into your platform or workflow in minutes via API.",
}

export default function PlatformIntegrationsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 md:py-36 lg:px-8">
      {/* Hero */}
      <div className="fade-in-up">
        <p className="section-label">Platform Integrations</p>
        <div className="section-divider mt-4" />
        <h1 className="mt-6 text-[2.5rem] font-semibold tracking-tight leading-[1.08] md:text-[2.75rem]">
          Embed unbreakable compliance —{" "}
          <span className="text-accent">invisibly.</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Integrate deterministic sanctions screening into your platform or
          workflow in minutes. CCAI operates as infrastructure — your platform
          handles the business logic.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/evaluation" className="btn-primary">
            Get API Access
            <ArrowRight size={15} />
          </Link>
          <Link href="/developer" className="btn-secondary">
            Developer Documentation
          </Link>
        </div>
      </div>

      {/* Problem */}
      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          Compliance tools outside workflows fail.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Most compliance screening tools require teams to leave their existing
          workflows, log into a separate platform, and manually correlate
          results. This creates coverage gaps, delays, and audit fragmentation.
        </p>
        <div className="mt-8 space-y-4">
          {[
            {
              title: "Context switching kills coverage",
              desc: "When screening requires a separate tool, it becomes optional in practice. Entities pass through unscreened during high-volume periods or when the compliance tool is slow.",
            },
            {
              title: "Evidence is disconnected",
              desc: "Screening results in one system, business decisions in another. Regulatory examinations require manual correlation between screening output and operational actions.",
            },
            {
              title: "Integration is fragile",
              desc: "Vendor APIs change, SDKs lag behind, and webhook delivery is unreliable. Platform teams spend more time maintaining the integration than building with it.",
            },
          ].map((item) => (
            <div key={item.title} className="card-surface px-6 py-5">
              <div className="flex items-start gap-3">
                <AlertTriangle size={16} className="mt-0.5 shrink-0 text-amber-500" />
                <div>
                  <h3 className="text-[15px] font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      {/* Solution */}
      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          Screening as API infrastructure.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          CCAI is consumed as a single API call. Submit an entity, receive a
          verdict with structured evidence. No SDK required, no state to manage,
          no UI to embed. The screening engine handles resolution, evidence
          assembly, and receipt binding.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { icon: Zap, label: "Single-call integration", desc: "One POST request. Verdict, confidence, evidence, and receipt in the response." },
            { icon: Layers, label: "Batch processing", desc: "Submit up to 10,000 entities per batch. Parallelized resolution with webhook notification." },
            { icon: Shield, label: "Tenant isolation", desc: "Per-tenant configuration, data scoping, and access controls. Regional data residency." },
            { icon: FileCheck, label: "Structured evidence", desc: "Every response includes a DecisionEventPackage with full resolution lineage." },
          ].map((item) => (
            <div key={item.label} className="card-surface px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/6 border border-accent/10">
                  <item.icon size={15} className="text-accent" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{item.label}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      {/* API Example */}
      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          API example.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          A single screening request and response.
        </p>

        {/* Request */}
        <div className="mt-8">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">Request</p>
          <div className="overflow-x-auto rounded-2xl border border-border bg-[#111827] px-6 py-5 font-mono text-[13px] leading-[1.7]">
            <div className="text-sky-400">POST /v1/screen</div>
            <div className="mt-2 text-gray-400">{"{"}</div>
            <div className="text-gray-400 pl-4">
              <span className="text-gray-500">&quot;entity_type&quot;</span>: <span className="text-emerald-400">&quot;organization&quot;</span>,
            </div>
            <div className="text-gray-400 pl-4">
              <span className="text-gray-500">&quot;name&quot;</span>: <span className="text-emerald-400">&quot;Northern Light Shipping&quot;</span>
            </div>
            <div className="text-gray-400">{"}"}</div>
          </div>
        </div>

        {/* Response */}
        <div className="mt-6">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">Response</p>
          <div className="overflow-x-auto rounded-2xl border border-border bg-[#111827] px-6 py-5 font-mono text-[13px] leading-[1.7]">
            {[
              ["verdict", "CLEARED"],
              ["confidence", "0.97"],
              ["resolution_layer", "L1_EXACT"],
              ["latency_ms", "14"],
              ["evidence_bundle", "{ ... DecisionEventPackage }"],
              ["receipt_id", "rct_a4f2…7b3e"],
              ["receipt_status", "BOUND"],
              ["receipt_hash", "sha256:e91c…3f4a"],
            ].map(([key, val]) => (
              <div key={key} className="text-gray-400">
                <span className="text-gray-500">{key}:</span>{" "}
                <span className={key === "verdict" ? "text-emerald-400" : "text-sky-400"}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* Architecture Diagram */}
      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          Integration architecture.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          CCAI operates as a processing stage in your existing infrastructure.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {["Your Platform", "CCAI API", "Screening Engine", "Decision Event", "IA Verification"].map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div className={`rounded-xl border px-4 py-2.5 text-sm font-medium ${
                i === 0
                  ? "border-violet-200 bg-violet-50/50 text-violet-700"
                  : i === 4
                    ? "border-accent/20 bg-accent/5 text-accent"
                    : "border-border bg-surface-2/50 text-foreground"
              }`}>
                {step}
              </div>
              {i < 4 && <ArrowRight size={14} className="text-muted-light" />}
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      {/* How It Works */}
      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          Integration patterns.
        </h2>
        <div className="mt-8 space-y-4">
          {[
            {
              title: "Synchronous screening",
              desc: "Call POST /v1/screen inline during entity onboarding or transaction processing. Response includes verdict, evidence, and receipt. Average latency under 2 seconds.",
            },
            {
              title: "Batch processing",
              desc: "Submit entity files (CSV, XLSX, JSON, Parquet) or JSON arrays via POST /batch. Receive webhook notification on completion. Results include per-entity evidence packages.",
            },
            {
              title: "Continuous monitoring",
              desc: "Register entity portfolios for ongoing re-screening against updated watchlist snapshots. Receive delta alerts when an entity's status changes.",
            },
          ].map((item) => (
            <div key={item.title} className="card-surface px-6 py-5">
              <div className="flex items-start gap-3">
                <Code size={16} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <h3 className="text-[15px] font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      {/* Final CTA */}
      <AnimateOnScroll className="mt-24">
        <div className="rounded-2xl border border-accent/15 bg-accent/3 px-8 py-12 text-center">
          <h2 className="text-xl font-semibold tracking-tight">
            Create a developer evaluation workspace.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted">
            Request API credentials, submit test entities, inspect evidence
            output, and validate your integration before production deployment.
          </p>
          <div className="mt-8">
            <Link href="/evaluation" className="btn-primary">
              Request Evaluation Access
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </AnimateOnScroll>

      <ContinueReading
        href="/developer"
        label="Developer Documentation"
        description="API endpoints, batch screening, webhook events, and evaluation sandbox."
      />
    </div>
  )
}
