import { Shield, FileCheck, Lock } from "lucide-react"
import { SectionHeader } from "./section-header"

const pillars = [
  {
    icon: Shield,
    title: "Deterministic",
    desc: "Same input, same output, every time. No probabilistic drift. No model retraining surprises.",
  },
  {
    icon: FileCheck,
    title: "Auditable",
    desc: "Per-entity decision packages with SHA-256 integrity hashes. Full decision path recorded.",
  },
  {
    icon: Lock,
    title: "Isolated",
    desc: "Tenant-scoped persistence. API key authentication. Cross-tenant access is structurally impossible.",
  },
]

export function TrustSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Trust & evidence"
          title="Built for the audit that's coming."
          centered
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-surface p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/8 text-accent">
                <p.icon size={22} />
              </div>
              <h3 className="mt-4 text-[15px] font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
