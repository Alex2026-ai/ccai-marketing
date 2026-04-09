import type { Metadata } from "next"
import { SectionHeader } from "@/components/marketing/section-header"
import { ScreenshotPlaceholder } from "@/components/marketing/screenshot-placeholder"
import { FinalCTASection } from "@/components/marketing/final-cta-section"

export const metadata: Metadata = {
  title: "Adverse Media Intelligence — CoreCompliance AI",
  description: "Transform raw vendor hits into structured, deduplicated, explainable signals. Category classification, severity ranking, source traceability, graph correlation.",
}

export default function IntelligencePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Adverse media intelligence that explains itself.
          </h1>
          <p className="mt-6 text-[16px] leading-relaxed text-muted">
            Raw vendor hits are noisy, duplicated, and hard to defend. CCAI&apos;s intelligence
            layer produces structured signals — each categorized, severity-ranked, and traceable
            to source evidence.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeader title="Your current adverse media feed is a wall of noise." centered />
          <ul className="mt-8 space-y-3 text-[14px] text-muted max-w-lg mx-auto">
            <li>• Duplicate hits for the same event from different sources</li>
            <li>• Mixed severity levels with no consistent ranking</li>
            <li>• Missing or inconsistent category classification</li>
            <li>• No link between media hits and corporate ownership</li>
            <li>• No structured evidence trail for regulators</li>
          </ul>
        </div>
      </section>

      {/* Before / After */}
      <section className="border-t border-border bg-foreground/[0.02] py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeader eyebrow="Before → After" title="See the difference." centered />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface-2/30 p-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-light">
                Raw Vendor Output
              </span>
              <div className="mt-4 space-y-2 font-mono text-[12px] text-muted">
                <p>&quot;Gazprom linked to sanctions evasion&quot; — Reuters — HIGH</p>
                <p>&quot;Gazprom sanctions evasion scheme&quot; — BBC — MEDIUM</p>
                <p>&quot;Russian energy company faces EU sanctions&quot; — FT — HIGH</p>
                <p>&quot;Gazprom Export revenue drops amid sanctions&quot; — Bloomberg — LOW</p>
                <p>&quot;Gazprom PJSC annual report controversy&quot; — local media — LOW</p>
              </div>
              <p className="mt-4 text-[11px] text-muted-light">
                5 hits. 3 duplicate the same event. 2 irrelevant.
              </p>
            </div>
            <div className="rounded-xl border border-accent/30 bg-accent-subtle/30 p-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                CCAI Intelligence Signal
              </span>
              <div className="mt-4 rounded-lg bg-surface p-4 font-mono text-[12px] text-foreground">
                <pre className="overflow-x-auto whitespace-pre">{`{
  "entity_name": "Gazprom Export",
  "category": "SANCTIONS_EVASION",
  "severity": "HIGH",
  "signal_count": 3,
  "deduplicated_from": 5,
  "top_source": "Reuters",
  "source_references": ["Reuters","BBC","FT"]
}`}</pre>
              </div>
              <p className="mt-4 text-[11px] text-accent">
                One structured signal. Categorized. Severity-ranked. Traceable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence shape */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeader eyebrow="Evidence" title="Every signal is traceable." centered />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-[0.1em] text-muted-light">
                  <th className="pb-3 pr-6">Field</th>
                  <th className="pb-3">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {[
                  ["entity_name", "The screened entity this signal relates to"],
                  ["category", "FINANCIAL_CRIME, FRAUD, CORRUPTION, SANCTIONS_EVASION, TERRORISM"],
                  ["severity", "HIGH / MEDIUM / LOW — consistent across all sources"],
                  ["signal_count", "Number of consolidated source hits"],
                  ["deduplicated_from", "Original raw hit count before deduplication"],
                  ["source_references", "List of source names for audit trail"],
                  ["graph_correlated", "Whether matched to a graph entity"],
                ].map(([field, desc]) => (
                  <tr key={field} className="border-t border-border-light">
                    <td className="py-2.5 pr-6 font-mono text-foreground">{field}</td>
                    <td className="py-2.5">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Graph correlation */}
      <section className="border-t border-border bg-foreground/[0.02] py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <SectionHeader eyebrow="Correlation" title="Media intelligence meets ownership intelligence." />
            <p className="mt-4 text-[14px] text-muted">
              When a graph query is executed, CCAI automatically correlates adverse media
              signals with entities in the ownership chain. If the UBO has adverse media,
              you see it. If an intermediate holding company has adverse media, you see it.
            </p>
          </div>
          <ScreenshotPlaceholder label="Intelligence signals correlated with graph entities" src="/screenshots/intelligence-signals.png" />
        </div>
      </section>

      {/* Regulatory */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeader eyebrow="Compliance" title="Built for the audit, not just the alert." centered />
          <ul className="mt-8 space-y-3 text-[14px] text-muted max-w-lg mx-auto">
            <li>• Deterministic processing: dedup + categorization are rule-based, not probabilistic</li>
            <li>• Raw hits preserved: original vendor data is never modified</li>
            <li>• Source traceability: every signal references the raw hits it was derived from</li>
            <li>• Tenant isolation: signals scoped per tenant, no data leakage</li>
            <li>• Fail-safe: intelligence failures are logged, never hidden</li>
          </ul>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
