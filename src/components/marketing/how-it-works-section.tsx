import { Upload, Shield, Network, ClipboardCheck, Bell } from "lucide-react"
import { SectionHeader } from "./section-header"
import { ExecutionVerificationFlow } from "./execution-verification-flow"

const steps = [
  { icon: Upload, label: "Upload", desc: "Your data is versioned and frozen. Every result is traceable to an exact snapshot." },
  { icon: Shield, label: "Screen", desc: "Same canonical input, rules, and snapshot produce the same output. Full ownership chains with risk paths and commercial intelligence correlation." },
  { icon: Network, label: "Intelligence", desc: "Raw hits become structured signals with justification, evidence snippets, severity, and full provenance including hash chain." },
  { icon: ClipboardCheck, label: "Cases & Clearing", desc: "Flagged entities become structured cases. Analysts disposition with predefined types + required justification and notes." },
  { icon: Bell, label: "Webhooks", desc: "Instant webhooks on batch.completed, batch.failed, and case.status_changed. Full retry + dead-letter handling." },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="Full transparency from input to resolution."
          centered
        />

        {/* Steps */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/8 text-accent">
                <step.icon size={20} />
              </div>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-light">
                Step {i + 1}
              </span>
              <h3 className="mt-2 text-[15px] font-semibold text-foreground">{step.label}</h3>
              <p className="mt-1 text-[12px] leading-relaxed text-muted">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <ExecutionVerificationFlow />
        </div>
      </div>
    </section>
  )
}
