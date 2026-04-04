import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, AlertTriangle, Shield, FileCheck, CheckCircle, Scale } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { ContinueReading } from "@/components/continue-reading"

export const metadata: Metadata = {
  title: "Insurance Screening — CoreCompliance AI",
  description:
    "Screen policyholders, brokers, reinsurers, and claims against global sanctions and risk registries before policies bind.",
}

const workflowSteps = [
  { step: "1", label: "New marine insurance policy submitted", detail: "Entity: Pacific Maritime Holdings Ltd — policy type: hull & machinery" },
  { step: "2", label: "Ship owner screened", detail: "Policyholder resolved through L1 deterministic match against OFAC SDN" },
  { step: "3", label: "Operator linked to sanctioned entity", detail: "Beneficial owner match via L2 vector similarity (0.91) — linked to designated entity" },
  { step: "4", label: "Policy flagged before binding", detail: "Decision state: REVIEW — evidence bundle assembled, IA receipt pending attestation" },
]

export default function InsuranceScreeningPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 md:py-36 lg:px-8">
      {/* Hero */}
      <div className="fade-in-up">
        <p className="section-label">Insurance Screening</p>
        <div className="section-divider mt-4" />
        <h1 className="mt-6 text-[2.5rem] font-semibold tracking-tight leading-[1.08] md:text-[2.75rem]">
          Underwrite confidently.{" "}
          <span className="text-accent">Avoid hidden exposure.</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Screen policyholders, brokers, reinsurers, and claims against global
          sanctions and risk registries before policies bind.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/evaluation" className="btn-primary">
            Evaluate Insurance Screening
            <ArrowRight size={15} />
          </Link>
          <Link href="/evidence" className="btn-secondary">
            See Evidence Output
          </Link>
        </div>
      </div>

      {/* Problem */}
      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          Sanctions risk is embedded in the insurance chain.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Underwriters, brokers, and claims handlers face sanctions exposure at
          every stage of the policy lifecycle. A single unscreened entity in a
          reinsurance chain or claims payout can trigger regulatory enforcement
          and license risk.
        </p>
        <div className="mt-8 space-y-4">
          {[
            {
              title: "Underwriting exposure",
              desc: "Policyholders and their beneficial owners may appear on sanctions lists that change between quote and bind. Static screening at onboarding misses changes during the policy term.",
            },
            {
              title: "Reinsurance chain risk",
              desc: "Ceded risk passes through multiple counterparties. Each link in the reinsurance chain carries independent sanctions exposure that compounds without systematic screening.",
            },
            {
              title: "Claims and payout risk",
              desc: "Claims payments to sanctioned entities or their intermediaries can violate sanctions regulations regardless of the policy's screening status at inception.",
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
          Structured screening across the policy lifecycle.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          CCAI screens entities at every decision point — underwriting, renewal,
          endorsement, and claims. Each screening produces a structured evidence
          package with full resolution lineage and cryptographic attestation.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { icon: Scale, label: "Underwriting screening", desc: "Policyholders, beneficial owners, and named insureds screened before policy binding." },
            { icon: Shield, label: "Counterparty verification", desc: "Brokers, reinsurers, and cedants resolved against OFAC, EU, UN, and configurable lists." },
            { icon: FileCheck, label: "Claims screening", desc: "Claimants and payees screened before payout authorization with full evidence trail." },
            { icon: CheckCircle, label: "Portfolio monitoring", desc: "Continuous re-screening across policy portfolios with delta alerting on status changes." },
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
          Every insurance entity follows the same deterministic resolution path.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {["Policyholder Entity", "Screening Waterfall", "Risk Flags", "Evidence Package", "IA Receipt"].map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div className="rounded-xl border border-border bg-surface-2/50 px-4 py-2.5 text-sm font-medium text-foreground">
                {step}
              </div>
              {i < 4 && <ArrowRight size={14} className="text-muted-light" />}
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      {/* Evidence / Proof */}
      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          Evidence for every screening decision.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Each screening decision produces a DecisionEventPackage with the
          complete resolution trace, rules applied, data sources consulted, and
          cryptographic receipt binding.
        </p>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-[#111827] px-6 py-5 font-mono text-[13px] leading-[1.7]">
          {[
            ["entity", "Pacific Maritime Holdings Ltd"],
            ["entity_type", "policyholder"],
            ["decision_state", "REVIEW"],
            ["resolution_layer", "L2_VECTOR"],
            ["confidence", "0.91"],
            ["matched_list", "OFAC SDN"],
            ["linked_entity", "Designated beneficial owner"],
            ["receipt_status", "ATTESTATION_PENDING"],
          ].map(([key, val]) => (
            <div key={key} className="text-gray-400">
              <span className="text-gray-500">{key}:</span>{" "}
              <span className="text-sky-400">{val}</span>
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
          A marine insurance policy is screened before binding.
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
            Integrate insurance screening into your platform.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted">
            Submit test policyholder and counterparty lists via API, inspect
            evidence output, and validate integration against your underwriting workflows.
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
        href="/platform-integrations"
        label="Platform Integrations"
        description="Embed deterministic sanctions screening into your platform or workflow."
      />
    </div>
  )
}
