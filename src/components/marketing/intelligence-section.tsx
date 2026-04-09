import Link from "next/link"
import { SectionHeader } from "./section-header"

export function IntelligenceSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Adverse Media Intelligence"
          title="From noisy vendor hits to explainable signals."
          centered
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] text-muted">
          Raw adverse media data is noisy. CCAI&apos;s intelligence layer deduplicates,
          categorizes, and structures raw hits into explainable signals — each
          traceable to source evidence, each defensible in front of a regulator.
        </p>

        {/* Before / After comparison */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Before */}
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
              5 hits. 3 duplicate the same event. 2 irrelevant. No structure.
            </p>
          </div>

          {/* After */}
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

        <div className="mt-8 text-center">
          <Link href="/intelligence" className="text-[14px] font-medium text-accent hover:text-accent-deep transition-colors">
            See the Intelligence Layer →
          </Link>
        </div>
      </div>
    </section>
  )
}
