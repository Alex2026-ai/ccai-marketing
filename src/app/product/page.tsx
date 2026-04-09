import type { Metadata } from "next"
import Link from "next/link"
import { SectionHeader } from "@/components/marketing/section-header"
import { ScreenshotPlaceholder } from "@/components/marketing/screenshot-placeholder"
import { CTAPair } from "@/components/marketing/cta-buttons"
import { FinalCTASection } from "@/components/marketing/final-cta-section"

export const metadata: Metadata = {
  title: "Product — CoreCompliance AI",
  description: "One platform for sanctions screening, beneficial ownership graph analysis, adverse media intelligence, and case management. Self-serve, auditable, API-first.",
}

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            One platform. Complete compliance execution.
          </h1>
          <p className="mt-6 text-[16px] leading-relaxed text-muted">
            Deterministic screening, native UBO graph, explainable adverse media intelligence,
            structured case management — all tenant-isolated, all auditable, all self-serve.
          </p>
          <CTAPair className="mt-8 justify-center" />
        </div>
      </section>

      {/* Screening Core */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <SectionHeader eyebrow="Screening" title="Matching you can explain to a regulator." />
            <ul className="mt-6 space-y-2.5 text-[14px] text-muted">
              <li>• L1 exact match: O(1) lookup against normalized watchlist</li>
              <li>• L2 fuzzy match: token-sort ratio with configurable thresholds</li>
              <li>• Entity-type mismatch clearing reduces false positives</li>
              <li>• 6,000+ entities/second sustained throughput</li>
            </ul>
          </div>
          <ScreenshotPlaceholder label="Results table with CLEARED/BLOCKED/REVIEW badges" src="/screenshots/batch-results.png" />
        </div>
      </section>

      {/* Snapshots */}
      <section className="border-t border-border bg-foreground/[0.02] py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <SectionHeader eyebrow="Provenance" title="Know exactly what data you screened against." centered />
          <p className="mt-4 text-[14px] text-muted">
            Every screening run operates against a versioned, content-hashed snapshot. Snapshots are
            immutable — once created, they cannot be modified. Any result can be reproduced months later.
          </p>
        </div>
      </section>

      {/* Graph */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <ScreenshotPlaceholder label="Ownership graph multi-node chain" src="/screenshots/graph-ownership.png" />
          <div>
            <SectionHeader eyebrow="Ownership graph" title="Trace ownership from entity to UBO." />
            <ul className="mt-6 space-y-2.5 text-[14px] text-muted">
              <li>• Depth control: 1–5 levels of traversal</li>
              <li>• Risk paths: shell chains, unknown UBOs, deep structures</li>
              <li>• Snapshot-scoped and deterministic</li>
            </ul>
            <Link href="/graph" className="mt-6 inline-block text-[14px] font-medium text-accent hover:text-accent-deep">
              Deep-dive on Graph Intelligence →
            </Link>
          </div>
        </div>
      </section>

      {/* Intelligence */}
      <section className="border-t border-border bg-foreground/[0.02] py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <SectionHeader eyebrow="Intelligence" title="Structured signals, not raw noise." />
            <ul className="mt-6 space-y-2.5 text-[14px] text-muted">
              <li>• Deduplicates and categorizes raw adverse media hits</li>
              <li>• Severity ranking with source evidence</li>
              <li>• Graph correlation: signals overlaid on ownership entities</li>
              <li>• Fail-safe: intelligence failures never block screening</li>
            </ul>
            <Link href="/intelligence" className="mt-6 inline-block text-[14px] font-medium text-accent hover:text-accent-deep">
              Deep-dive on Intelligence →
            </Link>
          </div>
          <ScreenshotPlaceholder label="Adverse media intelligence signals" src="/screenshots/intelligence-signals.png" />
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <SectionHeader eyebrow="Case management" title="From flagged entity to resolved case." centered />
          <ul className="mt-6 space-y-2.5 text-[14px] text-muted text-left max-w-lg mx-auto">
            <li>• Auto-generation from BLOCKED/REVIEW/ESCALATED decisions</li>
            <li>• Per-entity detail: match evidence, media signals, graph data</li>
            <li>• Status workflow: open → in_review → resolved</li>
            <li>• Tenant-scoped: cases are isolated per tenant</li>
          </ul>
        </div>
      </section>

      {/* Auditability */}
      <section className="border-t border-border bg-foreground/[0.02] py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <SectionHeader eyebrow="Audit trail" title="Every decision has a receipt." centered />
          <ul className="mt-6 space-y-2.5 text-[14px] text-muted text-left max-w-lg mx-auto">
            <li>• Per-entity decision packages with SHA-256 integrity hashes</li>
            <li>• Full decision path: which layer, which threshold, which data version</li>
            <li>• Enrichment steps recorded: PEP, adverse media, ownership, jurisdiction</li>
            <li>• Content-hashed snapshots prove which data was active at screening time</li>
          </ul>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
