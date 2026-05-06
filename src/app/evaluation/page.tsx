import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { LayerDistributionVisual } from "@/components/marketing/layer-distribution-visual"

export const metadata: Metadata = {
  title: "Evaluation — CoreCompliance AI",
  description:
    "Guided evaluation workspace: test batch screening, inspect evidence, validate API integration.",
}

const tryItems = [
  { title: "Batch screening accuracy", desc: "Submit a known entity list and compare resolution results against expected outcomes. Inspect which layer resolved each entity and the confidence basis." },
  { title: "Layer distribution analysis", desc: "Review how entities distribute across L1 (deterministic), L2 (vector), L3 (semantic), and L4 (human review). Understand cost implications per layer." },
  { title: "Evidence completeness", desc: "Examine the DecisionEventPackage for representative entities. Verify that lineage, rule bindings, data bindings, and configuration snapshots are present." },
  { title: "Integration patterns", desc: "Test API endpoints with your existing tooling. Validate request/response schemas, error handling, and webhook delivery." },
  { title: "Audit report format", desc: "Generate a sample audit report and review the regulatory narrative format. Confirm the evidence chain meets your reporting requirements." },
]

const limits = [
  { constraint: "Batch size", limit: "Up to 1,000 entities per submission" },
  { constraint: "L3 budget", limit: "Capped per evaluation tenant" },
  { constraint: "Data scope", limit: "Reference watchlist data (not production feeds)" },
  { constraint: "Retention", limit: "Evaluation data retained for 30 days" },
  { constraint: "Tenant isolation", limit: "Evaluation tenants fully isolated from production" },
  { constraint: "Reliance", limit: "Sandbox results are screening signals for testing, not final compliance determinations" },
]

const steps = [
  "Submit a request with your organization, use case, and estimated screening volume.",
  "Receive evaluation access details after review.",
  "Submit test data, inspect results, validate integration patterns.",
  "Export evidence samples and audit reports for internal review.",
  "Proceed to production onboarding or schedule a technical discussion.",
]

export default function EvaluationPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 md:py-36 lg:px-8">
      <div className="fade-in-up">
        <p className="section-label">Evaluation</p>
        <div className="section-divider mt-4" />
        <h1 className="mt-6 text-[2.5rem] font-semibold tracking-tight leading-[1.08] md:text-[2.75rem]">
          Test the API with your own data.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          The integration environment runs the same engine and protocol as
          production. It is not a demo or simulation — it executes real
          screening logic against reference data so you can validate your
          integration before going live.
        </p>
      </div>

      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">What you can try.</h2>
        <div className="mt-8 space-y-3">
          {tryItems.map((item) => (
            <div key={item.title} className="card-surface px-6 py-5">
              <h3 className="text-[15px] font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <LayerDistributionVisual />
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">Limits and safety.</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          The evaluation environment has defined boundaries. Evaluation access does not grant production API keys, production data, or system configuration access.
        </p>
        <p className="mt-3 text-base leading-relaxed text-muted">
          For the complete reliance model, review the{" "}
          <Link href="/evaluation-boundaries" className="text-accent underline-offset-2 hover:underline">
            evaluation boundaries
          </Link>
          .
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-surface-2/50">
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">Constraint</th>
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">Limit</th>
              </tr>
            </thead>
            <tbody>
              {limits.map((l) => (
                <tr key={l.constraint} className="border-b border-border-light last:border-0">
                  <td className="px-4 py-3 text-sm font-medium text-foreground whitespace-nowrap">{l.constraint}</td>
                  <td className="px-4 py-3 text-sm text-muted">{l.limit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">Request access.</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          There is no sales process required to begin evaluation. Access is granted based on use case fit.
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-[#111827] px-6 py-5">
          <ol className="space-y-3">
            {steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 font-mono text-xs text-sky-400/60">{i + 1}.</span>
                <span className="text-sm leading-relaxed text-gray-300">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <div className="rounded-2xl border border-accent/15 bg-accent/3 px-8 py-14 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Ready to integrate.</h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
            Request API access. We&apos;ll follow up after reviewing your integration use case.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary text-base">
              Request API Access
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  )
}
