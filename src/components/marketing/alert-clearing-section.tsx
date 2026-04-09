import { FileCheck, ClipboardCheck, History, Download, Shield, Clock } from "lucide-react"
import { SectionHeader } from "./section-header"
import { PrimaryCTA } from "./cta-buttons"
import { ScreenshotPlaceholder } from "./screenshot-placeholder"

const capabilities = [
  {
    icon: FileCheck,
    title: "Automated Case Creation",
    desc: "Every BLOCKED or REVIEW decision automatically generates a structured review case with full evidence attached. No manual ticket creation.",
  },
  {
    icon: Shield,
    title: "Full Evidence Lineage",
    desc: "Every case includes the complete DecisionEventPackage with hash chain and provenance — matched name, confidence, resolution layer, adverse media signals, ownership graph context.",
  },
  {
    icon: ClipboardCheck,
    title: "Structured Disposition Workflow",
    desc: "Analysts disposition with predefined types: True Positive, False Positive, Escalate. Required justification and notes fields. No free-form ambiguity.",
  },
  {
    icon: History,
    title: "Immutable Audit Trail",
    desc: "Every status change, disposition, and override is recorded with timestamp, analyst ID, and justification. Fully defensible under regulatory review.",
  },
  {
    icon: Clock,
    title: "Status Workflow",
    desc: "Open → In Review → Resolved. Pre-attached evidence eliminates manual data gathering. Analysts review decisions, not raw data.",
  },
  {
    icon: Download,
    title: "Export-Ready Audit Bundles",
    desc: "JSON export for regulators (PDF export coming soon). Decision packages, case histories, and disposition records ready for regulatory filing or internal audit.",
  },
]

export function AlertClearingSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface-2/20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Alert Clearing — One of Our Strongest Features"
          title="Structured alert clearing that actually reduces manual work."
          description="Every screening hit becomes a structured case with full provenance. Your analysts review evidence, not raw data. Every resolution is auditable."
          centered
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent/20 hover:shadow-soft"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/8 text-accent">
                <cap.icon size={18} />
              </div>
              <h3 className="mt-3 text-[14px] font-semibold text-foreground">{cap.title}</h3>
              <p className="mt-1.5 text-[12px] leading-relaxed text-muted">{cap.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <ScreenshotPlaceholder
            label="Case review dashboard — entity detail, evidence chain, disposition workflow, audit log"
          />
        </div>

        <div className="mt-10 text-center">
          <PrimaryCTA />
          <p className="mt-3 text-[11px] text-muted-light">
            See how alert clearing works in the live sandbox
          </p>
        </div>
      </div>
    </section>
  )
}
