import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Evaluation — CoreCompliance AI",
  description:
    "Guided evaluation workspace: test batch screening, inspect evidence, validate API integration.",
}

const tryItems = [
  {
    title: "Batch screening accuracy",
    desc: "Submit a known entity list and compare resolution results against expected outcomes. Inspect which layer resolved each entity and the confidence basis.",
  },
  {
    title: "Layer distribution analysis",
    desc: "Review how entities distribute across L1 (deterministic), L2 (vector), L3 (semantic), and L4 (human review). Understand cost implications per layer.",
  },
  {
    title: "Evidence completeness",
    desc: "Examine the DecisionEventPackage for representative entities. Verify that lineage, rule bindings, data bindings, and configuration snapshots are present.",
  },
  {
    title: "Integration patterns",
    desc: "Test API endpoints with your existing tooling. Validate request/response schemas, error handling, and webhook delivery.",
  },
  {
    title: "Audit report format",
    desc: "Generate a sample audit report and review the regulatory narrative format. Confirm the evidence chain meets your reporting requirements.",
  },
]

const limits = [
  { constraint: "Batch size", limit: "Up to 1,000 entities per submission" },
  { constraint: "L3 budget", limit: "Capped per evaluation tenant" },
  { constraint: "Data scope", limit: "Reference watchlist data (not production feeds)" },
  { constraint: "Retention", limit: "Evaluation data retained for 30 days" },
  { constraint: "Tenant isolation", limit: "Evaluation tenants fully isolated from production" },
]

const steps = [
  "Submit a request with your organization, use case, and estimated screening volume.",
  "Receive evaluation tenant credentials — API key and dashboard access.",
  "Submit test data, inspect results, validate integration patterns.",
  "Export evidence samples and audit reports for internal review.",
  "Proceed to production onboarding or schedule a technical discussion.",
]

export default function EvaluationPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      {/* Header */}
      <div className="fade-in-up">
        <p className="section-label">Evaluation</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Test the protocol with your own data.
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-muted">
          The evaluation environment runs the same engine and protocol as
          production. It is not a demo or simulation — it executes real
          screening logic against reference data.
        </p>
      </div>

      {/* What You Can Try */}
      <section className="mt-16 fade-in-up">
        <h2 className="text-xl font-semibold tracking-tight">
          What you can try.
        </h2>
        <div className="mt-6 space-y-3">
          {tryItems.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-surface px-5 py-4"
            >
              <h3 className="text-[14px] font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Limits */}
      <section className="mt-16 fade-in-up">
        <h2 className="text-xl font-semibold tracking-tight">
          Limits and safety.
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          The evaluation environment has defined boundaries. Evaluation access
          does not grant production API keys, production data, or system
          configuration access.
        </p>

        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-surface-2/50">
                <th className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                  Constraint
                </th>
                <th className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                  Limit
                </th>
              </tr>
            </thead>
            <tbody>
              {limits.map((l) => (
                <tr key={l.constraint} className="border-b border-border-light last:border-0">
                  <td className="px-4 py-3 text-[13px] font-medium text-foreground whitespace-nowrap">
                    {l.constraint}
                  </td>
                  <td className="px-4 py-3 text-[13px] text-muted">
                    {l.limit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Request Access */}
      <section className="mt-16 fade-in-up">
        <h2 className="text-xl font-semibold tracking-tight">
          Request access.
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          There is no sales process required to begin evaluation. Access is
          granted based on use case fit.
        </p>

        <div className="mt-6 rounded-xl border border-border bg-[#1a1f2e] px-5 py-4">
          <ol className="space-y-2">
            {steps.map((step, i) => (
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

      {/* CTA */}
      <section className="mt-16 fade-in-up rounded-xl border border-border bg-surface px-6 py-10 text-center">
        <h2 className="text-xl font-semibold tracking-tight">
          Ready to evaluate.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-muted">
          Request evaluation access. We provision your tenant and credentials
          within one business day.
        </p>
        <div className="mt-6">
          <span className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-[14px] font-medium text-surface cursor-pointer transition-colors hover:bg-foreground/90">
            Request Evaluation Access
            <ArrowRight size={14} />
          </span>
        </div>
      </section>
    </div>
  )
}
