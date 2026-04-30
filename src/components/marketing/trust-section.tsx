import { Shield, FileCheck, Lock, Database, Hash, Zap } from "lucide-react"
import { SectionHeader } from "./section-header"

const pillars = [
  {
    icon: Database,
    title: "Immutable Snapshots",
    desc: "Every screening run is bound to a frozen, versioned, content-hashed snapshot. Results can be replayed against the same data.",
  },
  {
    icon: Hash,
    title: "Hash Chain Provenance",
    desc: "Every decision includes a verifiable DecisionEventPackage with SHA-256 integrity hash and full decision path.",
  },
  {
    icon: FileCheck,
    title: "Signal Provenance",
    desc: "Full provenance on every intelligence signal — traceable from structured output back to raw vendor hit.",
  },
  {
    icon: Shield,
    title: "Deterministic",
    desc: "Same canonical input, rules, and snapshot produce the same output. No probabilistic drift. No model retraining surprises.",
  },
  {
    icon: Lock,
    title: "Tenant Isolated",
    desc: "Tenant-scoped persistence, API key authentication, and explicit boundary checks reduce cross-tenant exposure risk.",
  },
  {
    icon: Zap,
    title: "Single Entity + Batch",
    desc: "Single entity screening available via real-time API, or batch-process thousands. SOC-2 evidence preparation tools and audit exports.",
  },
]

export function TrustSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Transparency by Design"
          title="Built for the audit that's coming."
          centered
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
