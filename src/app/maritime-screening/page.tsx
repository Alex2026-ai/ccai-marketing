import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Anchor, AlertTriangle, Shield, FileCheck, CheckCircle } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { ContinueReading } from "@/components/continue-reading"

export const metadata: Metadata = {
  title: "Maritime Screening — CoreCompliance AI",
  description:
    "Screen vessels, operators, and counterparties against global sanctions lists before every booking or charter decision.",
}

const evidenceFields = [
  { field: "entity", value: "Northern Light Shipping Co." },
  { field: "matched_list", value: "OFAC SDN — Specially Designated Nationals" },
  { field: "registry_snapshot", value: "ws_2026_03_10_daily (SHA-256: e91c…3f4a)" },
  { field: "rules_version", value: "rp_v3.2.1" },
  { field: "receipt_hash", value: "sha256:a4f2…7b3e" },
]

const workflowSteps = [
  { step: "1", label: "Forwarder screens charter vessel", detail: "Entity submitted: MV Pacific Fortune, flag: Panama" },
  { step: "2", label: "Flag detected on beneficial owner", detail: "Beneficial owner linked to OFAC SDN entry via L2 vector match (0.89)" },
  { step: "3", label: "Booking blocked", detail: "Decision state: BLOCKED — confidence 0.89, threshold 0.55" },
  { step: "4", label: "Evidence bundle stored", detail: "DecisionEventPackage assembled, IA receipt bound (rct_5b6d…e91c)" },
]

export default function MaritimeScreeningPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 md:py-36 lg:px-8">
      {/* Hero */}
      <div className="fade-in-up">
        <p className="section-label">Maritime Screening</p>
        <div className="section-divider mt-4" />
        <h1 className="mt-6 text-[2.5rem] font-semibold tracking-tight leading-[1.08] md:text-[2.75rem]">
          Protect shipments, clients, and reputation —{" "}
          <span className="text-accent">instantly.</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Screen vessels, operators, and counterparties against global sanctions
          lists before every booking or charter decision.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/evidence" className="btn-primary">
            Try Vessel Screening Demo
            <ArrowRight size={15} />
          </Link>
          <Link href="/evaluation" className="btn-secondary">
            Request Evaluation
          </Link>
        </div>
      </div>

      {/* Problem */}
      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          The exposure is structural.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Shipping companies, logistics providers, freight forwarders, and
          brokers operate in a sanctions environment where a single unscreened
          counterparty can trigger regulatory action, cargo seizure, or loss of
          banking relationships.
        </p>
        <div className="mt-8 space-y-4">
          {[
            {
              title: "Vessel ownership is opaque",
              desc: "Beneficial ownership chains cross multiple jurisdictions. Flag state, registered owner, operator, and charterer may each carry independent sanctions risk.",
            },
            {
              title: "Screening gaps compound",
              desc: "Manual or periodic screening misses changes between checks. A vessel cleared last quarter may have changed operators or been reflagged to a sanctioned registry.",
            },
            {
              title: "Evidence requirements are increasing",
              desc: "Regulators expect documented screening decisions, not just pass/fail. OFAC, EU, and UN enforcement actions increasingly require evidence of the screening process itself.",
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
          Deterministic screening for every maritime entity.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          CCAI screens vessels, operators, beneficial owners, and counterparties
          through a layered resolution protocol. Each entity is resolved against
          OFAC, EU, UN, and configurable watchlists. Every decision produces a
          structured evidence package attested by Intelligent Analyst.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { icon: Anchor, label: "Vessel & operator screening", desc: "IMO numbers, flag states, and ownership chains resolved against global sanctions lists." },
            { icon: Shield, label: "Counterparty verification", desc: "Charterers, brokers, and freight forwarders screened before contract execution." },
            { icon: FileCheck, label: "Evidence per decision", desc: "DecisionEventPackage with full lineage, rule bindings, and IA veracity receipt." },
            { icon: CheckCircle, label: "Continuous monitoring", desc: "Re-screen entity portfolios against updated watchlist snapshots with delta alerts." },
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

      {/* How It Works */}
      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">How it works.</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Every maritime entity follows the same deterministic path.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {["Entity Input", "CCAI Screening Engine", "Match Detection", "Evidence Package", "IA Veracity Receipt"].map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div className="rounded-xl border border-border bg-surface-2/50 px-4 py-2.5 text-sm font-medium text-foreground">
                {step}
              </div>
              {i < 4 && <ArrowRight size={14} className="text-muted-light" />}
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      {/* Evidence Example */}
      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          Evidence output.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Every screening decision produces a structured evidence record. This
          is a representative subset of the fields in a maritime screening
          DecisionEventPackage.
        </p>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-[#111827] px-6 py-5 font-mono text-[13px] leading-[1.7]">
          {evidenceFields.map(({ field, value }) => (
            <div key={field} className="text-gray-400">
              <span className="text-gray-500">{field}:</span>{" "}
              <span className="text-sky-400">{value}</span>
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      {/* Workflow Example */}
      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          Screening in practice.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          A freight forwarder screens a charter vessel before booking.
        </p>
        <div className="mt-8 space-y-0">
          {workflowSteps.map((item, i) => (
            <div key={item.step} className="flex items-start gap-3.5 py-3">
              <div className="mt-0.5 flex flex-col items-center">
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-semibold ${
                  i === workflowSteps.length - 1
                    ? "border-accent bg-accent text-white"
                    : "border-border bg-surface text-muted"
                }`}>
                  {item.step}
                </div>
                {i < workflowSteps.length - 1 && (
                  <div className="mt-0.5 h-5 w-px bg-border" />
                )}
              </div>
              <div className="min-w-0 pt-0.5">
                <span className="text-sm font-medium text-foreground">{item.label}</span>
                <p className="mt-0.5 font-mono text-xs text-muted">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      {/* Final CTA */}
      <AnimateOnScroll className="mt-24">
        <div className="rounded-2xl border border-accent/15 bg-accent/3 px-8 py-12 text-center">
          <h2 className="text-xl font-semibold tracking-tight">
            Evaluate CCAI with your shipping data.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted">
            Submit test vessel and counterparty lists, inspect evidence output,
            and validate integration against your maritime compliance workflows.
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
        href="/insurance-screening"
        label="Insurance Screening"
        description="Screen policyholders, brokers, and reinsurers before policies bind."
      />
    </div>
  )
}
