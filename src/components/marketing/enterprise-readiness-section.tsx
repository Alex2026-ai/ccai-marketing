import { Gauge, Server, ShieldCheck } from "lucide-react"
import { SectionHeader } from "./section-header"

const features = [
  {
    icon: Gauge,
    title: "Rate Limiting",
    desc: "60 requests per tenant per 60 seconds (operator-configurable via code constants). Fair usage enforced per tenant, not globally.",
  },
  {
    icon: Server,
    title: "Redis-Backed Shared Limiting",
    desc: "Redis-backed rate limiting in production for multi-instance deployments. Graceful fallback to per-process limiting if Redis is unavailable.",
  },
  {
    icon: ShieldCheck,
    title: "Webhook Delivery Guarantees",
    desc: "Bounded retries with backoff. Dead-letter queue for exhausted deliveries. Full delivery audit log per tenant.",
  },
]

export function EnterpriseReadinessSection() {
  return (
    <section className="border-t border-border py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Enterprise Readiness"
          title="Production-grade from day one."
          centered
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-surface p-5 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-accent/8 text-accent">
                <f.icon size={18} />
              </div>
              <h3 className="mt-3 text-[14px] font-semibold text-foreground">{f.title}</h3>
              <p className="mt-1.5 text-[12px] leading-relaxed text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
