import type { Metadata } from "next"
import { SectionHeader } from "@/components/marketing/section-header"
import { ScreenshotPlaceholder } from "@/components/marketing/screenshot-placeholder"
import { FinalCTASection } from "@/components/marketing/final-cta-section"

export const metadata: Metadata = {
  title: "Beneficial Ownership Graph Intelligence — CoreCompliance AI",
  description: "Native UBO graph traversal with depth control, risk path analysis, shell company detection, and adverse media correlation. Deterministic, snapshot-scoped, auditable.",
}

export default function GraphPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Beneficial ownership intelligence. Built in, not bolted on.
            </h1>
            <p className="mt-6 text-[15px] leading-relaxed text-muted">
              Trace multi-hop ownership chains from entity to ultimate beneficial owner.
              Identify shell structures, assess structural risk, and correlate with adverse
              media — all natively, all deterministically.
            </p>
          </div>
          <ScreenshotPlaceholder label="Ownership graph — EN+ Group chain with risk badges" src="/screenshots/graph-ownership.png" />
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeader eyebrow="Traversal" title="From entity to UBO in one query." centered />
          <div className="mt-10 rounded-xl border border-border bg-surface-2/30 p-6 font-mono text-[13px] text-muted">
            <p className="text-muted-light">Root Entity (your screened name)</p>
            <p className="pl-4">→ Intermediate Holding Co <span className="text-[11px] text-muted-light">(jurisdiction, shell indicator)</span></p>
            <p className="pl-8">→ Intermediate SPV <span className="text-[11px] text-muted-light">(jurisdiction, shell indicator)</span></p>
            <p className="pl-12">→ Ultimate Beneficial Owner <span className="text-[11px] text-accent">(jurisdiction)</span></p>
          </div>
        </div>
      </section>

      {/* Depth control */}
      <section className="border-t border-border bg-foreground/[0.02] py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeader eyebrow="Depth" title="Control how deep you look." centered />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-[0.1em] text-muted-light">
                  <th className="pb-3 pr-6">Depth</th>
                  <th className="pb-3">What You See</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {[
                  ["1", "Direct parent only"],
                  ["2", "Parent + grandparent"],
                  ["3", "Standard UBO resolution (default)"],
                  ["4", "Deep corporate structures"],
                  ["5", "Maximum traversal — complex shell chains"],
                ].map(([depth, desc]) => (
                  <tr key={depth} className="border-t border-border-light">
                    <td className="py-2.5 pr-6 font-mono font-semibold text-foreground">{depth}</td>
                    <td className="py-2.5">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Risk paths */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeader eyebrow="Risk analysis" title="Structural risk, not just name matching." centered />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              { title: "Shell Chain", color: "border-red-200 bg-red-50 text-red-700", desc: "One or more entities in the chain are flagged as shell companies. Offshore jurisdictions, layered through privacy havens." },
              { title: "Unknown UBO", color: "border-amber-200 bg-amber-50 text-amber-700", desc: "The ownership chain terminates at an unresolvable entity. The ultimate beneficial owner cannot be identified." },
              { title: "Deep Structure", color: "border-violet/20 bg-violet-subtle text-violet", desc: "The ownership chain has 4+ levels of depth. Complex corporate layering is a recognized opacity indicator." },
            ].map((rp) => (
              <div key={rp.title} className="rounded-xl border border-border p-6">
                <span className={`inline-block rounded-md border px-2.5 py-1 text-[11px] font-semibold ${rp.color}`}>
                  {rp.title}
                </span>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">{rp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media correlation */}
      <section className="border-t border-border bg-foreground/[0.02] py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <SectionHeader eyebrow="Correlation" title="Overlay adverse media on ownership entities." />
            <p className="mt-4 text-[14px] text-muted">
              When adverse media intelligence signals exist for entities in an ownership chain,
              CCAI correlates them automatically. An analyst sees not just the UBO — but the
              media signals associated with every entity in the chain.
            </p>
          </div>
          <ScreenshotPlaceholder label="Intelligence signals correlated with graph entities" src="/screenshots/intelligence-signals.png" />
        </div>
      </section>

      {/* API */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeader eyebrow="API" title="Snapshot-scoped & deterministic." centered />
          <div className="mt-8 rounded-xl border border-border bg-surface-2/30 p-6">
            <code className="text-[13px] font-mono text-accent">
              GET /api/v1/snapshots/&#123;snapshot_id&#125;/graph/ownership/&#123;entity_id&#125;?depth=3&include_risk_paths=true
            </code>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-[0.1em] text-muted-light">
                  <th className="pb-3 pr-6">Parameter</th>
                  <th className="pb-3 pr-6">Default</th>
                  <th className="pb-3">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-t border-border-light">
                  <td className="py-2.5 pr-6 font-mono text-foreground">depth</td>
                  <td className="py-2.5 pr-6">3</td>
                  <td className="py-2.5">Max traversal depth (1–5)</td>
                </tr>
                <tr className="border-t border-border-light">
                  <td className="py-2.5 pr-6 font-mono text-foreground">include_risk_paths</td>
                  <td className="py-2.5 pr-6">true</td>
                  <td className="py-2.5">Include structural risk analysis</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
