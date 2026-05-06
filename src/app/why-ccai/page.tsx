import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Blocks, ClipboardCheck, FileCheck2, KeyRound, Network, Scale, ShieldCheck } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export const metadata: Metadata = {
  title: "Why CCAI — CoreCompliance AI",
  description:
    "Why regulated teams choose CoreCompliance AI: self-serve adoption, deterministic evidence, human review boundaries, data freshness, and API-first integration.",
}

const reasons = [
  {
    title: "Proof before procurement",
    body: "Teams can inspect screening output, evidence structure, data freshness language, and evaluation boundaries before committing to production use.",
    icon: ClipboardCheck,
  },
  {
    title: "API-first from day one",
    body: "Upload lists, run screening, query graph context, and retrieve results through tenant-scoped API keys without a professional-services project.",
    icon: KeyRound,
  },
  {
    title: "Evidence operators can defend",
    body: "Decision packages, review records, snapshot references, and exam narratives are designed to help teams explain what happened and why.",
    icon: FileCheck2,
  },
  {
    title: "Agentic assistance with boundaries",
    body: "PI can draft and explain, but verified contradictions block PI reliance and route the issue to senior human review.",
    icon: ShieldCheck,
  },
]

const buyerChecks = [
  ["Evaluation", "Run sample workflows, inspect output, and validate integration patterns without treating sandbox results as production reliance."],
  ["Operational fit", "Use the dashboard for reviewers or embed screening into existing systems through the REST API."],
  ["Launch posture", "Review read-only preflight evidence for persistence, restore evidence, provider activation, and required environment setup."],
  ["Review model", "Keep high-risk approvals from becoming one-click acceptance with review-quality evidence and second-review paths."],
  ["Freshness posture", "Show snapshot age, upstream publication context, and stale-window handling instead of hiding source-data timing."],
  ["Exam readiness", "Assemble regulator-readable packages that connect input, evidence, review, freshness, and reliance language."],
]

const proofControls = [
  {
    title: "Exam package exports",
    body: "Operators can assemble regulator-readable evidence from the engine projection, including readiness status and explicit limitations.",
    icon: FileCheck2,
  },
  {
    title: "Risk-scaled approvals",
    body: "High-risk cases surface additional review expectations instead of making every disposition feel like the same one-click action.",
    icon: Scale,
  },
  {
    title: "PI contradiction guardrails",
    body: "PI remains assistive: visible contradictions between generated text and structured screening facts are routed back to human review.",
    icon: ShieldCheck,
  },
  {
    title: "Freshness-aware review",
    body: "Snapshot age, upstream lag, and stale-window warnings are part of the review story, not hidden implementation details.",
    icon: Blocks,
  },
  {
    title: "Launch preflight evidence",
    body: "Read-only checks surface persistence, restore evidence, outbound-provider activation, commercial-provider posture, and admin-key setup.",
    icon: ClipboardCheck,
  },
]

const adoptionPaths = [
  {
    label: "Self-serve team",
    details: "Create a tenant, issue an API key, upload a list, and review results.",
    href: "/evaluation",
  },
  {
    label: "Embedded platform",
    details: "Integrate screening into onboarding, KYC, payments, or counterparty workflows.",
    href: "/developers",
  },
  {
    label: "Enterprise review",
    details: "Evaluate dedicated isolation, commercial feeds, DR posture, and examination package requirements.",
    href: "/regulatory-examination",
  },
]

export default function WhyCCAIPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 md:py-36 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="max-w-3xl fade-in-up">
          <p className="section-label">Why CCAI</p>
          <div className="section-divider mt-4" />
          <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.08] tracking-tight md:text-[3.25rem]">
            A screening platform buyers can evaluate before they trust.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            CoreCompliance AI is built for teams that need adoption speed and
            defensible evidence at the same time: self-serve onboarding,
            deterministic screening signals, bounded PI assistance, and
            regulator-readable review records.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/evaluation" className="btn-primary text-base">
              Try the Evaluation Path
              <ArrowRight size={15} />
            </Link>
            <Link href="/trust-review" className="btn-secondary text-base">
              Review Trust Model
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/8 text-accent">
              <Blocks size={20} />
            </span>
            <div>
              <p className="section-label">Buyer Fit</p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight">What changes in adoption.</h2>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {[
              ["Before", "Long vendor evaluation, opaque matching, separate evidence collection."],
              ["With CCAI", "Run a bounded evaluation, inspect evidence, and choose the integration path."],
              ["After launch", "Operate with review records, freshness context, and exam package exports."],
            ].map(([label, copy]) => (
              <div key={label} className="border-t border-border pt-4">
                <h3 className="text-sm font-semibold tracking-tight text-foreground">{label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimateOnScroll className="mt-24">
        <div className="grid gap-4 md:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div key={reason.title} className="rounded-2xl border border-border bg-surface p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/8 text-accent">
                  <Icon size={18} />
                </span>
                <h2 className="mt-5 text-lg font-semibold tracking-tight">{reason.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{reason.body}</p>
              </div>
            )
          })}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-label">Selection Criteria</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">The checks that make adoption credible.</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The buyer conversation should not depend on vague platform claims.
              CCAI makes the operational, legal, and technical boundaries visible
              during evaluation.
            </p>
          </div>
          <div className="space-y-3">
            {buyerChecks.map(([title, body]) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-border bg-surface px-5 py-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/8 text-accent">
                  <ShieldCheck size={15} />
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
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            <p className="section-label">Proof Controls</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              The product shows its work where reviewers actually decide.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              CCAI does not ask buyers to trust a black box. The operator
              workflow exposes the evidence package, approval friction,
              freshness posture, and PI boundaries inside the review path.
            </p>
            <Link href="/regulatory-examination" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
              See examination readiness <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {proofControls.map((control) => {
              const Icon = control.icon
              return (
                <div key={control.title} className="rounded-2xl border border-border bg-surface p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/8 text-accent">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold tracking-tight">{control.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{control.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-24">
        <div className="rounded-2xl border border-border bg-surface px-6 py-8 md:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/8 text-accent">
              <Network size={20} />
            </span>
            <div>
              <p className="section-label">Adoption Paths</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight">Start where your team already works.</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {adoptionPaths.map((path) => (
              <Link
                key={path.label}
                href={path.href}
                className="group rounded-xl border border-border bg-background/30 p-5 transition-colors hover:border-accent/35"
              >
                <h3 className="text-base font-semibold tracking-tight">{path.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{path.details}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  Continue <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  )
}
