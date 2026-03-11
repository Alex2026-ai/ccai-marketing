import Link from "next/link"
import {
  Shield,
  Layers,
  Search,
  FileCheck,
  Activity,
  ArrowRight,
  Ship,
  Building2,
  Globe,
} from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="mx-auto max-w-6xl px-5 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-2xl fade-in-up">
          <p className="section-label">Compliance Screening Infrastructure</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-[2.75rem] md:leading-[1.15]">
            Deterministic sanctions screening with verifiable evidence.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            CCAI screens entities against sanctions and watchlists using a
            deterministic, layered protocol. Every decision produces a structured
            evidence record — ready for regulatory examination.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/evaluation"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-[14px] font-medium text-surface transition-colors hover:bg-foreground/90"
            >
              Request Evaluation Access
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-[14px] font-medium text-foreground transition-colors hover:bg-surface-2"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* ── What CCAI Is ── */}
      <section className="border-t border-border-light bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="section-label">What CCAI Is</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Screening infrastructure for regulated institutions.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              CCAI resolves entities against sanctions lists, PEP databases, and
              adverse media sources. It produces a complete evidence record for
              every screening decision — including the resolution path, data
              sources consulted, rules applied, and confidence basis.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Consumed as infrastructure: via API for platform teams, via
              operator dashboard for compliance officers. Decisions are attested
              through Intelligent Analyst, a separate truth and verification
              layer.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why It Is Different ── */}
      <section className="border-t border-border-light">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="section-label">Why It Is Different</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Structural differences, not feature claims.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
            ].map((item) => (
              <div key={item.title}>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/8">
                  <item.icon size={16} className="text-accent" />
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Capabilities ── */}
      <section className="border-t border-border-light bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="section-label">Capabilities</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            What the platform provides.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
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
              <div key={item.title} className="bg-surface px-6 py-5">
                <h3 className="text-[14px] font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Target Verticals ── */}
      <section className="border-t border-border-light">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="section-label">Verticals</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Built for regulated screening operations.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
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
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-2">
                  <item.icon size={16} className="text-muted" />
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="border-t border-border-light bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Evaluate CCAI with your own data.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
            Request evaluation access. Submit test batches, inspect evidence
            output, and validate the API against your integration requirements.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/evaluation"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-[14px] font-medium text-surface transition-colors hover:bg-foreground/90"
            >
              Request Evaluation Access
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/developer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-[14px] font-medium text-foreground transition-colors hover:bg-surface-2"
            >
              Developer Documentation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
