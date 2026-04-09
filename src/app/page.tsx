import type { Metadata } from "next"
import { HeroSection } from "@/components/marketing/hero-section"

export const metadata: Metadata = {
  title: "CoreCompliance AI — Deterministic Screening, UBO Graph, Adverse Media Intelligence",
  description: "Self-serve compliance screening platform with deterministic sanctions matching, native beneficial ownership graph intelligence, and explainable adverse media signals. Auditable, tenant-isolated, API-first.",
}
import { HowItWorksSection } from "@/components/marketing/how-it-works-section"
import { GraphShowcaseSection } from "@/components/marketing/graph-showcase-section"
import { IntelligenceSection } from "@/components/marketing/intelligence-section"
import { ProvisioningSection } from "@/components/marketing/provisioning-section"
import { TrustSection } from "@/components/marketing/trust-section"
import { MetricsSection } from "@/components/marketing/metrics-section"
import { FinalCTASection } from "@/components/marketing/final-cta-section"
import { ScreeningDemo } from "@/components/marketing/screening-demo"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="py-16 lg:py-20">
        <ScreeningDemo />
      </section>
      <HowItWorksSection />
      <GraphShowcaseSection />
      <IntelligenceSection />
      <ProvisioningSection />
      <TrustSection />
      <MetricsSection />
      <FinalCTASection />
    </>
  )
}
