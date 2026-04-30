import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { PositioningTable } from "@/components/compliance/positioning-table"
import { freshnessSignals } from "@/lib/compliance-positioning"

export const metadata: Metadata = {
  title: "Data Freshness — CoreCompliance AI",
  description:
    "How CCAI frames snapshot age, source timestamps, and stale-window handling for screening evidence.",
}

export default function DataFreshnessPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 md:py-36 lg:px-8">
      <div className="fade-in-up">
        <p className="section-label">Data Freshness</p>
        <div className="section-divider mt-4" />
        <h1 className="mt-6 text-[2.5rem] font-semibold tracking-tight leading-[1.08] md:text-[2.75rem]">
          Reproducible evidence still needs freshness context.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          A screening result can be deterministic and replayable while still
          depending on the age of the source data. CCAI treats freshness as part
          of the evidence package rather than a footnote.
        </p>
      </div>

      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">Freshness signals.</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          The goal is to show which data version was used and whether newer
          source data may require review or re-screening.
        </p>
        <div className="mt-8">
          <PositioningTable rows={freshnessSignals} />
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">Why it matters.</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Regulators often care about whether screening data was current at the
          time of review. Freshness metadata helps customers explain what was
          known, when it was known, and whether later source updates created a
          stale-window review obligation.
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <div className="rounded-2xl border border-accent/15 bg-accent/3 px-8 py-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Start with examination readiness.</h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
            Freshness, reliance, human review, and evidence all meet in the
            regulatory examination package.
          </p>
          <div className="mt-8">
            <Link href="/regulatory-examination" className="btn-primary text-base">
              Read Examination Readiness
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  )
}
