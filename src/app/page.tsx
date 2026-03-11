import Link from "next/link"
import {
  Shield,
  Layers,
  Search,
  FileCheck,
  ArrowRight,
  Ship,
  Building2,
  Globe,
  ShieldCheck,
} from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { KpiSparkline } from "@/components/kpi-sparkline"

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(14,165,233,0.04), transparent 70%)",
        }}
      >
        <div className="mx-auto max-w-6xl px-5 pt-24 pb-20 md:pt-36 md:pb-28 lg:px-8">
          <div className="max-w-2xl fade-in-up">
            <p className="section-label">Compliance Screening Infrastructure</p>
            <h1 className="mt-4 text-[2.5rem] font-semibold tracking-tight text-foreground leading-[1.1] md:text-[4rem]">
              Deterministic sanctions screening with verifiable evidence.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted max-w-xl">
              CCAI screens entities against sanctions and watchlists using a
              deterministic, layered protocol. Every decision produces a structured
              evidence record — ready for regulatory examination.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/evaluation" className="btn-primary">
                Request Evaluation Access
                <ArrowRight size={15} />
              </Link>
              <Link href="/how-it-works" className="btn-secondary">
                How It Works
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {["SOC 2", "HIPAA", "GDPR"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 py-1 text-[11px] font-semibold tracking-wider text-muted-light"
                >
                  <ShieldCheck size={12} className="text-accent/50" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Operational Impact (Proof Section) ── */}
      <section className="border-t border-border-light bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
          <AnimateOnScroll>
            <p className="section-label">Operational Impact</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-[2.75rem] md:leading-[1.15]">
              Measurable compliance outcomes.
            </h2>
          </AnimateOnScroll>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {([
              {
                value: "92%",
                label: "Audit preparation reduction",
                detail: "Evidence pre-assembled for every decision",
                sparkKey: "audit" as const,
              },
              {
                value: "<2s",
                label: "Average screening time",
                detail: "Per entity, across all resolution layers",
                sparkKey: "speed" as const,
              },
              {
                value: "100%",
                label: "Evidence lineage coverage",
                detail: "Every output traceable to input and rules",
                sparkKey: "lineage" as const,
              },
            ]).map((kpi, i) => (
              <AnimateOnScroll key={kpi.label}>
                <div
                  className="rounded-xl border border-border bg-surface p-6"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <p className="font-mono text-4xl font-semibold tracking-tight text-accent">
                    {kpi.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    {kpi.label}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-light">{kpi.detail}</p>
                  <div className="mt-4">
                    <KpiSparkline dataKey={kpi.sparkKey} />
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── What CCAI Is ── */}
      <section className="border-t border-border-light">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
          <AnimateOnScroll>
            <div className="max-w-2xl">
              <p className="section-label">What CCAI Is</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-[2.75rem] md:leading-[1.15]">
                Screening infrastructure for regulated institutions.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                CCAI resolves entities against sanctions lists, PEP databases, and
                adverse media sources. It produces a complete evidence record for
                every screening decision — including the resolution path, data
                sources consulted, rules applied, and confidence basis.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Consumed as infrastructure: via API for platform teams, via
                operator dashboard for compliance officers. Decisions are attested
                through Intelligent Analyst, a separate truth and verification
                layer.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Why It Is Different ── */}
      <section className="border-t border-border-light bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
          <AnimateOnScroll>
            <p className="section-label">Why It Is Different</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-[2.75rem] md:leading-[1.15]">
              Structural differences, not feature claims.
            </h2>
          </AnimateOnScroll>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Layers,
                title: "Deterministic Protocol",
                desc: "Decisions follow a defined resolution waterfall. The same input, rules, and data produce the same output. Reproducible and replayable.",
              },
              {
                icon: FileCheck,
                title: "Evidence by Default",
                desc: "Every decision generates a DecisionEventPackage with full lineage, rule bindings, and data bindings. Evidence is the primary output.",
              },
              {
                icon: Shield,
                title: "Separate Attestation",
                desc: "CCAI produces decisions. Intelligent Analyst attests them. The screening engine and truth ledger are architecturally independent.",
              },
              {
                icon: Search,
                title: "Layered Resolution",
                desc: "Entities pass through up to five layers — deterministic to semantic to human review. Cost scales with complexity, not volume.",
              },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title}>
                <div style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/8">
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Capabilities ── */}
      <section className="border-t border-border-light">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
          <AnimateOnScroll>
            <p className="section-label">Capabilities</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-[2.75rem] md:leading-[1.15]">
              What the platform provides.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll className="mt-12">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
              {[
                {
                  title: "Batch Screening",
                  desc: "Upload entity files (CSV, XLSX, JSON, Parquet) for bulk resolution against sanctions and watchlists.",
                },
                {
                  title: "Real-Time API",
                  desc: "Single-entity resolution via REST endpoint with full evidence in the response.",
                },
                {
                  title: "Evidence Generation",
                  desc: "Structured decision packages with full lineage, rule bindings, and data provenance per entity.",
                },
                {
                  title: "Continuous Monitoring",
                  desc: "Ongoing re-screening against updated watchlist snapshots with delta alerting.",
                },
                {
                  title: "Audit Export",
                  desc: "Regulatory-formatted evidence bundles and PDF audit reports for examination readiness.",
                },
                {
                  title: "Multi-Tenant Isolation",
                  desc: "Tenant-scoped data, configuration, and access controls with regional data residency.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-surface px-6 py-6">
                  <h3 className="text-[15px] font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Target Verticals ── */}
      <section className="border-t border-border-light bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
          <AnimateOnScroll>
            <p className="section-label">Verticals</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-[2.75rem] md:leading-[1.15]">
              Built for regulated screening operations.
            </h2>
          </AnimateOnScroll>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: Ship,
                title: "Shipping & Maritime",
                desc: "Screen vessel owners, operators, and beneficial ownership chains against OFAC, EU, and UN sanctions lists. Monitor ongoing exposure across fleet portfolios.",
              },
              {
                icon: Building2,
                title: "Insurance",
                desc: "Screen policyholders, counterparties, and reinsurance chains at underwriting and renewal. Batch-process portfolio-scale entity lists with full evidence.",
              },
              {
                icon: Globe,
                title: "Enterprise Platforms",
                desc: "Embed CCAI as a screening layer within existing compliance workflows. API-first integration for platforms that need screening as infrastructure.",
              },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title}>
                <div
                  className="rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:border-accent/20 hover:shadow-sm"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-2">
                    <item.icon size={18} className="text-muted" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="border-t border-border-light">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-2xl font-semibold tracking-tight md:text-[2.75rem] md:leading-[1.15]">
              Evaluate CCAI with your own data.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted">
              Request evaluation access. Submit test batches, inspect evidence
              output, and validate the API against your integration requirements.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/evaluation" className="btn-primary">
                Request Evaluation Access
                <ArrowRight size={15} />
              </Link>
              <Link href="/developer" className="btn-secondary">
                Developer Documentation
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
