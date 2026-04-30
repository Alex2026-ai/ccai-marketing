import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { PositioningTable } from "@/components/compliance/positioning-table"
import { evaluationBoundaries } from "@/lib/compliance-positioning"

export const metadata: Metadata = {
  title: "Evaluation Boundaries — CoreCompliance AI",
  description:
    "Evaluation environment limits, reliance boundaries, and production-readiness expectations for CCAI.",
}

export default function EvaluationBoundariesPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 md:py-36 lg:px-8">
      <div className="fade-in-up">
        <p className="section-label">Evaluation Boundaries</p>
        <div className="section-divider mt-4" />
        <h1 className="mt-6 text-[2.5rem] font-semibold tracking-tight leading-[1.08] md:text-[2.75rem]">
          Test the workflow without blurring reliance.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          The evaluation environment is for integration testing, evidence review,
          and operating-model validation. It is not production reliance and
          should not be used as the basis for regulatory compliance decisions.
        </p>
      </div>

      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">Evaluation limits.</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Clear boundaries keep sandbox output useful without making it look
          stronger than it is.
        </p>
        <div className="mt-8">
          <PositioningTable rows={evaluationBoundaries} />
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">What production readiness adds.</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Production onboarding needs data-feed configuration, tenant isolation,
          backup and restore posture, retention policy, operator review design,
          and customer-approved reliance language. Those controls are reviewed
          before production output is treated as a compliance record.
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <div className="rounded-2xl border border-accent/15 bg-accent/3 px-8 py-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Freshness is part of reliance.</h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
            A reproducible result still needs data-age context. Freshness tells
            the reviewer how current the screening source was.
          </p>
          <div className="mt-8">
            <Link href="/data-freshness" className="btn-primary text-base">
              Read Data Freshness
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  )
}
