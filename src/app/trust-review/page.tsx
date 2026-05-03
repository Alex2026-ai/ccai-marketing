import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Eye, FileText, Scale, ShieldCheck } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export const metadata: Metadata = {
  title: "Trust & Review — CoreCompliance AI",
  description:
    "How CoreCompliance AI presents screening evidence, review boundaries, data freshness, PI assistance, and examination readiness for regulated teams.",
}

const pillars = [
  {
    title: "Screening evidence",
    body: "Deterministic screening output is presented as a structured signal with matching context, source metadata, and review state.",
    href: "/product",
    icon: ShieldCheck,
  },
  {
    title: "Human review quality",
    body: "Risk-scaled review paths keep higher-risk cases from becoming simple approval clicks.",
    href: "/human-review",
    icon: CheckCircle2,
  },
  {
    title: "PI assistance boundary",
    body: "PI can draft, summarize, and explain. It does not own outcomes, change thresholds, or approve sends.",
    href: "/pi-assistive",
    icon: Eye,
  },
  {
    title: "Exam narrative",
    body: "Regulator-readable packages connect what was screened, what data was used, and what operators reviewed.",
    href: "/regulatory-examination",
    icon: FileText,
  },
]

const reviewPath = [
  ["1", "Screen", "The engine returns a screening signal, not a final compliance determination."],
  ["2", "Contextualize", "Freshness, jurisdiction, graph, media, and review metadata are made visible."],
  ["3", "Review", "Operators handle the final customer process with risk-scaled evidence expectations."],
  ["4", "Explain", "Exam packages and narratives help teams answer what happened and why."],
]

const boundaries = [
  ["Evaluation output", "Sandbox and evaluation environments are for testing workflows, integrations, and evidence review."],
  ["Data freshness", "Freshness context is part of reliance, especially when upstream sources change after screening."],
  ["Customer judgment", "CCAI supports a defensible process; regulated customers remain responsible for final compliance decisions."],
  ["Agentic operations", "Sentinel and PI are assistive surfaces. They do not mutate screening truth or approve external actions."],
]

export default function TrustReviewPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-24 md:py-36 lg:px-8">
      <div className="max-w-3xl fade-in-up">
        <p className="section-label">Trust & Review</p>
        <div className="section-divider mt-4" />
        <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.08] tracking-tight md:text-[3.25rem]">
          Compliance evidence is only useful when the review boundary is clear.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          CoreCompliance AI is built for teams that need screening evidence,
          human review, PI assistance, and exam readiness to work together
          without turning software output into final legal judgment.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/evaluation-boundaries" className="btn-primary text-base">
            Review Evaluation Boundaries
            <ArrowRight size={15} />
          </Link>
          <Link href="/regulatory-examination" className="btn-secondary text-base">
            See Exam Readiness
          </Link>
        </div>
      </div>

      <AnimateOnScroll className="mt-24">
        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="group rounded-2xl border border-border bg-surface px-6 py-6 transition-colors hover:border-accent/35"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/8 text-accent">
                    <Icon size={18} />
                  </span>
                  <h2 className="text-lg font-semibold tracking-tight">{pillar.title}</h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{pillar.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  Read more <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            )
          })}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-label">Operating Model</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">From signal to review record.</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The trust model is deliberately split into small responsibilities:
              deterministic screening, visible context, human review, and
              regulator-readable evidence. No single agent owns the whole chain.
            </p>
          </div>
          <div className="space-y-3">
            {reviewPath.map(([number, title, body]) => (
              <div key={number} className="flex gap-4 rounded-2xl border border-border bg-surface px-5 py-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/8 text-sm font-semibold text-accent">
                  {number}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <div className="rounded-2xl border border-border bg-surface px-6 py-8 md:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/8 text-accent">
              <Scale size={20} />
            </span>
            <div>
              <p className="section-label">Boundaries</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight">What the product does not claim.</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {boundaries.map(([title, body]) => (
              <div key={title} className="border-t border-border pt-4">
                <h3 className="text-base font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <div className="rounded-2xl border border-accent/15 bg-accent/3 px-8 py-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Start with the evidence story.</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            Buyers can evaluate CCAI by reviewing how decisions are scoped, how
            data freshness is disclosed, how PI is bounded, and how exam
            packages are prepared.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/data-freshness" className="btn-primary text-base">
              Read Data Freshness
              <ArrowRight size={15} />
            </Link>
            <Link href="/human-review" className="btn-secondary text-base">
              Read Human Review
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  )
}
