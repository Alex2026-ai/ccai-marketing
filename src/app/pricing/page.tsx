import type { Metadata } from "next"
import { Check, Minus } from "lucide-react"
import { SectionHeader } from "@/components/marketing/section-header"
import { PrimaryCTA, SecondaryCTA } from "@/components/marketing/cta-buttons"
import { FinalCTASection } from "@/components/marketing/final-cta-section"

export const metadata: Metadata = {
  title: "Pricing — CoreCompliance AI",
  description: "Transparent pricing for deterministic sanctions screening, UBO graph intelligence, and adverse media intelligence. No minimum commitment.",
}

const tiers = [
  {
    name: "Starter",
    price: "Contact us",
    desc: "For teams getting started with screening.",
    features: [
      "Up to 10,000 entities/month",
      "Deterministic screening (L1 + L2)",
      "Immutable snapshots",
      "Batch + API access",
      "Basic case management",
      "1 API key",
      "Email support",
    ],
    cta: "primary" as const,
  },
  {
    name: "Professional",
    price: "Contact us",
    desc: "Full platform with graph + intelligence.",
    highlight: true,
    features: [
      "Up to 100,000 entities/month",
      "Everything in Starter",
      "Beneficial ownership graph (1–5 depth)",
      "Adverse media intelligence signals",
      "Risk path analysis",
      "Graph × media correlation",
      "3 API keys with rotation + audit",
      "Priority support",
    ],
    cta: "primary" as const,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Dedicated infrastructure and feeds.",
    features: [
      "Unlimited entities",
      "Everything in Professional",
      "Commercial feed adapters",
      "Custom watchlist integration",
      "Dedicated tenant isolation",
      "SLA guarantees",
      "Dedicated account manager",
    ],
    cta: "secondary" as const,
  },
]

const comparison = [
  { feature: "Deterministic screening", starter: true, pro: true, enterprise: true },
  { feature: "Immutable snapshots", starter: true, pro: true, enterprise: true },
  { feature: "API access", starter: true, pro: true, enterprise: true },
  { feature: "Batch upload", starter: true, pro: true, enterprise: true },
  { feature: "Case management", starter: true, pro: true, enterprise: true },
  { feature: "Tenant isolation", starter: true, pro: true, enterprise: true },
  { feature: "Audit trail", starter: true, pro: true, enterprise: true },
  { feature: "UBO graph", starter: false, pro: true, enterprise: true },
  { feature: "Adverse media intelligence", starter: false, pro: true, enterprise: true },
  { feature: "Risk path analysis", starter: false, pro: true, enterprise: true },
  { feature: "Graph × media correlation", starter: false, pro: true, enterprise: true },
  { feature: "Multiple API keys", starter: false, pro: true, enterprise: true },
  { feature: "Commercial feeds", starter: false, pro: false, enterprise: true },
  { feature: "SLA", starter: false, pro: false, enterprise: true },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Transparent pricing. No procurement surprise.
          </h1>
          <p className="mt-4 text-[15px] text-muted">
            Start screening in minutes. Scale when you need to. No long-term lock-in.
          </p>
        </div>
      </section>

      {/* Tier cards */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-3 lg:px-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-xl border p-6 ${
                tier.highlight
                  ? "border-accent/40 bg-accent-subtle/20 shadow-premium"
                  : "border-border bg-surface"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-0.5 text-[11px] font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold text-foreground">{tier.name}</h3>
              <p className="mt-1 text-[24px] font-bold text-foreground">{tier.price}</p>
              <p className="mt-1 text-[13px] text-muted">{tier.desc}</p>
              <ul className="mt-6 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13px] text-muted">
                    <Check size={14} className="mt-0.5 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                {tier.cta === "primary" ? <PrimaryCTA className="w-full justify-center" /> : <SecondaryCTA className="w-full justify-center" />}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="border-t border-border bg-foreground/[0.02] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionHeader title="Feature comparison" centered />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-[0.1em] text-muted-light">
                  <th className="pb-3 pr-6">Feature</th>
                  <th className="pb-3 pr-6 text-center">Starter</th>
                  <th className="pb-3 pr-6 text-center">Professional</th>
                  <th className="pb-3 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-t border-border-light">
                    <td className="py-2.5 pr-6 text-muted">{row.feature}</td>
                    <td className="py-2.5 pr-6 text-center">{row.starter ? <Check size={14} className="mx-auto text-accent" /> : <Minus size={14} className="mx-auto text-muted-light" />}</td>
                    <td className="py-2.5 pr-6 text-center">{row.pro ? <Check size={14} className="mx-auto text-accent" /> : <Minus size={14} className="mx-auto text-muted-light" />}</td>
                    <td className="py-2.5 text-center">{row.enterprise ? <Check size={14} className="mx-auto text-accent" /> : <Minus size={14} className="mx-auto text-muted-light" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-2xl px-5 lg:px-8">
          <SectionHeader title="Frequently asked questions" centered />
          <div className="mt-10 space-y-6">
            {[
              { q: "Can I start without a sales call?", a: "Yes. Create a tenant, generate an API key, and start screening immediately." },
              { q: "What happens if I exceed my monthly limit?", a: "You'll receive a notification. Screening continues — we don't cut you off mid-batch." },
              { q: "Can I switch tiers?", a: "Yes, at any time. Upgrades take effect immediately." },
              { q: "Is there a free trial?", a: "Yes. Try the sandbox with sample data at no cost. No credit card required." },
              { q: "What's in the audit trail?", a: "Per-entity decision packages with integrity hashes, full decision paths, enrichment steps, and snapshot references. Available at every tier." },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-border-light pb-6">
                <h3 className="text-[14px] font-semibold text-foreground">{faq.q}</h3>
                <p className="mt-2 text-[13px] text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
