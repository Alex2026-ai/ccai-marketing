import { SectionHeader } from "./section-header"
import { PrimaryCTA } from "./cta-buttons"
import { ProvisioningVisual } from "./provisioning-visual"

export function ProvisioningSection() {
  return (
    <section className="border-t border-border bg-foreground/[0.02] py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <SectionHeader
          eyebrow="Self-serve"
          title="API key in 30 seconds. No sales call required."
          description="Create a tenant, generate an API key, upload your first list, and screen it — all through the self-serve provisioning surface. No procurement cycles. No vendor lock-in."
          centered
        />
        <div className="mt-10">
          <ProvisioningVisual />
        </div>
        <PrimaryCTA className="mt-8" />
      </div>
    </section>
  )
}
