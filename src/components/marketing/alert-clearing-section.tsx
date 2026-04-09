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
    title: "Full Evidence Chain",
    desc: "Each case carries the complete decision package: matched name, confidence score, resolution layer, adverse media signals, and ownership graph context.",
  },
  {
    icon: ClipboardCheck,
    title: "Structured Review Workflow",
    desc: "Analysts work through cases with disposition options (True Positive, False Positive, Escalate) and required justification fields. No free-form ambiguity.",
  },
  {
    icon: History,
    title: "Immutable Audit Trail",
    desc: "Every status change, disposition, and override is recorded with timestamp, analyst ID, and justification. Fully defensible under regulatory review.",
  },
  {
    icon: Clock,
    title: "Reduced Review Time",
    desc: "Pre-attached evidence eliminates manual data gathering. Analysts review decisions, not raw data. Average case resolution drops from hours to minutes.",
  },
  {
    icon: Download,
    title: "Export-Ready Evidence",
    desc: "Decision packages, case histories, and disposition records export as structured data for regulatory filing, internal audit, or client reporting.",
  },
]

export function AlertClearingSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface-2/20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Alert Clearing"
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
