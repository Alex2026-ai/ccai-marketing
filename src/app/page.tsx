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
  TrendingUp,
  Upload,
  Zap,
  FileOutput,
  Activity,
  ClipboardCheck,
  Lock,
} from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { KpiSparkline } from "@/components/kpi-sparkline"
import { ReceiptDemo } from "@/components/receipt-demo"
import { HeroDiagram } from "@/components/hero-diagram"

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(14,165,233,0.035), transparent 70%)",
        }}
      >
        <div className="mx-auto max-w-3xl px-5 pt-40 pb-36 md:pt-52 md:pb-48 lg:px-8 text-center">
          <div className="fade-in-up">
            <p className="section-label">Compliance Screening Infrastructure</p>
            <h1 className="mt-5 text-[2.75rem] font-semibold tracking-tight text-foreground leading-[1.08] md:text-[4rem]">
              Deterministic screening.{" "}
              <span className="text-accent">Verifiable evidence.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted">
              CCAI screens entities against sanctions and watchlists using a
              layered resolution protocol. Every decision produces a complete,
              structured evidence record.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/evaluation" className="btn-primary">
                Request Evaluation Access
                <ArrowRight size={15} />
              </Link>
              <Link href="/how-it-works" className="btn-secondary">
                How It Works
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {["SOC 2 Type II", "HIPAA", "GDPR"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-[11px] font-semibold tracking-wider text-muted-light"
                >
                  <ShieldCheck size={12} className="text-accent/60" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Hero waterfall diagram */}
            <HeroDiagram />
          </div>
        </div>
      </section>

      {/* ── Operational Impact (Proof Section) ── */}
      <section className="border-t border-border-light bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-36 md:py-44 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center">
              <p className="section-label">Operational Impact</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-[2.75rem] md:leading-[1.1]">
                Measurable compliance outcomes.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted">
                Production metrics from regulated screening operations.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {([
              {
                value: "92%",
                label: "Audit preparation reduction",
                detail: "Evidence pre-assembled for every decision",
                sparkKey: "audit" as const,
              },
              {
                value: "<2s",
                label: "Average screening latency",
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
              <AnimateOnScroll key={kpi.label} delay={i * 0.1}>
                <div className="card-surface p-6">
                  <div className="flex items-baseline justify-between">
                    <p className="font-mono text-[2.5rem] font-semibold tracking-tighter text-foreground">
                      {kpi.value}
                    </p>
                    <TrendingUp size={14} className="text-accent/50" />
                  </div>
                  <p className="mt-3 text-sm font-medium text-foreground">
                    {kpi.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{kpi.detail}</p>
                  <div className="mt-5 border-t border-border-light pt-4">
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
        <div className="mx-auto max-w-3xl px-5 py-36 md:py-44 lg:px-8">
          <AnimateOnScroll>
            <p className="section-label">What CCAI Is</p>
            <div className="section-divider mt-4" />
            <h2 className="mt-6 text-2xl font-semibold tracking-tight md:text-[2.75rem] md:leading-[1.1]">
              Screening infrastructure for regulated institutions.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
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
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Why It Is Different ── */}
      <section className="border-t border-border-light bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-36 md:py-44 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center">
              <p className="section-label">Why It Is Different</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-[2.75rem] md:leading-[1.1]">
                Structural differences, not feature claims.
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
              <AnimateOnScroll key={item.title} delay={i * 0.08}>
                <div>
                  <div className="icon-container flex h-11 w-11 items-center justify-center rounded-xl bg-accent/6 border border-accent/10">
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <h3 className="mt-5 text-[15px] font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
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
        <div className="mx-auto max-w-6xl px-5 py-36 md:py-44 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center">
              <p className="section-label">Capabilities</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-[2.75rem] md:leading-[1.1]">
                What the platform provides.
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="mt-14">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
              {[
                {
                  icon: Upload,
                  title: "Batch Screening",
                  desc: "Upload entity files (CSV, XLSX, JSON, Parquet) for bulk resolution against sanctions and watchlists.",
                },
                {
                  icon: Zap,
                  title: "Real-Time API",
                  desc: "Single-entity resolution via REST endpoint with full evidence in the response.",
                },
                {
                  icon: FileOutput,
                  title: "Evidence Generation",
                  desc: "Structured decision packages with full lineage, rule bindings, and data provenance per entity.",
                },
                {
                  icon: Activity,
                  title: "Continuous Monitoring",
                  desc: "Ongoing re-screening against updated watchlist snapshots with delta alerting.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Audit Export",
                  desc: "Regulatory-formatted evidence bundles and PDF audit reports for examination readiness.",
                },
                {
                  icon: Lock,
                  title: "Multi-Tenant Isolation",
                  desc: "Tenant-scoped data, configuration, and access controls with regional data residency.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-surface px-7 py-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/6 border border-accent/10">
                      <item.icon size={15} className="text-accent" />
                    </div>
                    <h3 className="text-[15px] font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Receipt Demo Teaser ── */}
      <section className="border-t border-border-light bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-36 md:py-44 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center">
              <p className="section-label">See It Work</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-[2.75rem] md:leading-[1.1]">
                Screen an entity. Inspect the evidence.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted">
                Every screening decision produces a structured evidence record
                with full resolution lineage and cryptographic receipt binding.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="mt-12">
            <ReceiptDemo autoPlay />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Target Verticals ── */}
      <section className="border-t border-border-light">
        <div className="mx-auto max-w-6xl px-5 py-36 md:py-44 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center">
              <p className="section-label">Verticals</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-[2.75rem] md:leading-[1.1]">
                Built for regulated screening operations.
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: Ship,
                title: "Shipping & Maritime",
                href: "/maritime-screening",
                desc: "Screen vessel owners, operators, and beneficial ownership chains against OFAC, EU, and UN sanctions lists. Monitor ongoing exposure across fleet portfolios.",
                lift: "92% audit prep reduction",
              },
              {
                icon: Building2,
                title: "Insurance",
                href: "/insurance-screening",
                desc: "Screen policyholders, counterparties, and reinsurance chains at underwriting and renewal. Batch-process portfolio-scale entity lists with full evidence.",
                lift: "87% fewer false positives",
              },
              {
                icon: Globe,
                title: "Enterprise Platforms",
                href: "/platform-integrations",
                desc: "Embed CCAI as a screening layer within existing compliance workflows. API-first integration for platforms that need screening as infrastructure.",
                lift: "<2s average latency",
              },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 0.08}>
                <Link href={item.href} className="card-surface p-7 block transition-all duration-300 hover:border-accent/20 hover:shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2">
                    <item.icon size={18} className="text-muted" />
                  </div>
                  <h3 className="mt-6 text-[15px] font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                  {item.lift && (
                    <div className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-accent-subtle px-3 py-1.5 text-[11px] font-semibold text-accent">
                      <TrendingUp size={11} />
                      {item.lift}
                    </div>
                  )}
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="border-t border-border-light bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-36 md:py-44 lg:px-8 text-center">
          <AnimateOnScroll>
            <p className="section-label">Get Started</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-[2.75rem] md:leading-[1.1]">
              Evaluate CCAI with your own data.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted">
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
