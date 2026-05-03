import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export const metadata: Metadata = {
  title: "PI Is Assistive, Not Authoritative — CoreCompliance AI",
  description:
    "How CCAI uses PI to draft, summarize, and explain while keeping final outcomes under deterministic and human-controlled workflows.",
}

const boundaries = [
  ["PI can draft", "Case summaries, disposition language, and exam narratives can be prepared for review."],
  ["PI can explain", "Explanations must be checked against structured decision evidence before reliance."],
  ["PI cannot decide", "PI does not change routing states, thresholds, final dispositions, approvals, or outbound sends."],
  ["PI can be removed", "The system is designed so operator workflows continue when PI is unavailable."],
]

export default function PIAssistivePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 md:py-36 lg:px-8">
      <div className="fade-in-up">
        <p className="section-label">PI Boundary</p>
        <div className="section-divider mt-4" />
        <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.08] tracking-tight md:text-[2.75rem]">
          PI assists the operator. It does not own outcomes.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          CCAI treats agentic AI as an assist plane. PI may help with drafts,
          summaries, explanations, and review preparation, while the truth plane
          remains deterministic and human-governed.
        </p>
      </div>

      <AnimateOnScroll className="mt-24">
        <div className="grid gap-4">
          {boundaries.map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-border bg-surface px-6 py-5">
              <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <div className="rounded-2xl border border-accent/15 bg-accent/3 px-8 py-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Freshness is part of reliance.</h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
            Deterministic screening is stronger when customers can see which data
            snapshot was used and whether later updates require review.
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
