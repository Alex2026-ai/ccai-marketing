import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { PositioningTable } from "@/components/compliance/positioning-table"
import { examPackageSections } from "@/lib/compliance-positioning"

export const metadata: Metadata = {
  title: "Regulatory Examination Readiness — CoreCompliance AI",
  description:
    "How CCAI structures screening evidence for regulatory examination without replacing customer compliance judgment.",
}

export default function RegulatoryExaminationPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 md:py-36 lg:px-8">
      <div className="fade-in-up">
        <p className="section-label">Examination Readiness</p>
        <div className="section-divider mt-4" />
        <h1 className="mt-6 text-[2.5rem] font-semibold tracking-tight leading-[1.08] md:text-[2.75rem]">
          Evidence regulators can read.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          CCAI is designed to produce screening evidence that can be reviewed by
          compliance teams, counsel, auditors, and regulators. The platform
          supports examination narratives without turning software output into a
          final legal determination.
        </p>
      </div>

      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">What an examination package contains.</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          A regulator-ready package should connect machine evidence to a plain
          operational story: what was screened, which data was used, what the
          system returned, who reviewed it, and what the customer decided.
        </p>
        <div className="mt-8">
          <PositioningTable rows={examPackageSections} />
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">The boundary is explicit.</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          CCAI output is a screening signal and evidence record. It helps the
          customer operate a defensible process, but the customer remains
          responsible for final compliance decisions, regulator responses, and
          legal interpretation.
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <div className="rounded-2xl border border-accent/15 bg-accent/3 px-8 py-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Review the evaluation boundary next.</h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
            Evaluation access is useful for workflow validation, but it has
            boundaries that must stay visible before production reliance.
          </p>
          <div className="mt-8">
            <Link href="/evaluation-boundaries" className="btn-primary text-base">
              Read Evaluation Boundaries
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  )
}
