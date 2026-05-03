import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export const metadata: Metadata = {
  title: "Human Review by Design — CoreCompliance AI",
  description:
    "How CCAI keeps human review explicit, risk-scaled, and separate from automated screening evidence.",
}

const controls = [
  ["Risk-scaled friction", "Low-risk work can move quickly; high-risk work requires stronger evidence acknowledgement."],
  ["Second-review paths", "Critical cases can require a distinct reviewer before final disposition."],
  ["PI draft boundaries", "PI can draft and summarize, but operator review remains required."],
  ["Stale-context checks", "Stale or changed context is surfaced before approval-adjacent actions."],
]

export default function HumanReviewPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 md:py-36 lg:px-8">
      <div className="fade-in-up">
        <p className="section-label">Human Review</p>
        <div className="section-divider mt-4" />
        <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.08] tracking-tight md:text-[2.75rem]">
          The human checkpoint is designed, not assumed.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          CCAI is built for regulated teams that need review quality, not just
          approval buttons. The product surfaces risk, evidence, PI involvement,
          and stale context so human review remains meaningful.
        </p>
      </div>

      <AnimateOnScroll className="mt-24">
        <div className="grid gap-4">
          {controls.map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-border bg-surface px-6 py-5">
              <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <div className="rounded-2xl border border-accent/15 bg-accent/3 px-8 py-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">See how PI stays assistive.</h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
            PI helps operators work faster without becoming the final decision authority.
          </p>
          <div className="mt-8">
            <Link href="/pi-assistive" className="btn-primary text-base">
              Read PI Boundary
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  )
}
