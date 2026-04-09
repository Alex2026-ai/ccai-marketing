import { Upload, Database, Shield, Network, FileCheck, ClipboardCheck } from "lucide-react"
import { SectionHeader } from "./section-header"
import { ScreenshotPlaceholder } from "./screenshot-placeholder"

const steps = [
  { icon: Upload, label: "Upload", desc: "CSV, JSON, or API. Your entity list, your format." },
  { icon: Database, label: "Snapshot", desc: "Immutable, content-hashed, versioned. Every run is reproducible." },
  { icon: Shield, label: "Screen", desc: "Deterministic L1 exact + L2 fuzzy against 72K+ sanctions entries." },
  { icon: Network, label: "Enrich", desc: "UBO graph. Adverse media intelligence. Risk paths. Shell indicators." },
  { icon: FileCheck, label: "Cases", desc: "Automated case generation for BLOCKED and REVIEW hits with full evidence." },
  { icon: ClipboardCheck, label: "Clear", desc: "Structured alert clearing. Disposition, audit trail, export-ready evidence." },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="Six steps. Full audit trail. Zero black boxes."
          centered
        />

        {/* Steps */}
        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
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
          <ScreenshotPlaceholder
            label="Batch results table — input names, decisions, matched names, confidence scores"
            src="/screenshots/batch-results.png"
          />
        </div>
      </div>
    </section>
  )
}
