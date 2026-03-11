import type { Metadata } from "next"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export const metadata: Metadata = {
  title: "How It Works — CoreCompliance AI",
  description:
    "How CCAI screens entities through a deterministic resolution protocol with full evidence generation.",
}

const layers = [
  { id: "L0", name: "Garbage Detection", cost: "$0", desc: "Filters invalid input — empty values, numeric-only strings, file extensions, PII patterns. No resolution decision is made." },
  { id: "L1", name: "Deterministic Matching", cost: "$0", desc: "Exact match, normalized match after suffix stripping (Inc., Corp., Ltd.), and known alias or parent entity lookup." },
  { id: "L2", name: "Vector Similarity", cost: "$0", desc: "Character n-gram vectorization with cosine similarity against a pre-computed canonical index. Threshold-gated." },
  { id: "L3", name: "Semantic Reasoning", cost: "~$0.005", desc: "LLM-based entity resolution for ambiguous cases. Budget-capped per batch to control cost exposure." },
  { id: "L4", name: "Human Review", cost: "Variable", desc: "Escalation to operator queue for manual decision. The operator sees full context and evidence from prior layers." },
]

const stages = [
  {
    num: "01", title: "Intake",
    content: [
      "Entities enter via batch upload or API submission. Each submission receives a unique trace identifier and is bound to a tenant context.",
      "The system detects file schema, classifies entity types (company, individual, vessel, address), normalizes input, and masks detected PII before processing.",
      "Intake produces a normalized entity set. No resolution decisions are made at this stage.",
    ],
  },
  {
    num: "02", title: "Screening", showLayers: true,
    content: [
      "Each entity passes through the resolution waterfall — a sequence of layers ordered by cost and complexity. An entity stops at the first layer that produces a confident resolution.",
      "Each layer records its result, confidence score, execution time, and the rules and data it consulted. This per-layer trace becomes part of the evidence record.",
    ],
  },
  {
    num: "03", title: "Evidence Assembly",
    content: [
      "Every screening decision produces a DecisionEventPackage containing: resolution path, rule binding (version and hash), data binding (watchlist snapshot), confidence basis, full lineage, and the configuration snapshot active at execution time.",
      "The DecisionEventPackage is assembled after resolution completes. Once assembled, it is immutable — no field can be modified, appended, or removed.",
    ],
  },
  {
    num: "04", title: "Monitoring",
    content: [
      "Entities enrolled in continuous monitoring are automatically re-screened when watchlist data is updated. Delta alerts surface when a previously cleared entity now matches, or when confidence scores shift beyond configured thresholds.",
      "Each re-screening follows the same protocol and produces the same evidence structure as the initial screen.",
    ],
  },
  {
    num: "05", title: "Attestation via Intelligent Analyst",
    content: [
      "After evidence assembly, the DecisionEventPackage is handed to Intelligent Analyst — the separate truth and attestation layer. IA records the decision in an append-only truth ledger and binds a VeracityReceipt (receipt_id, receipt_hash) to the decision.",
      "CCAI produces the screening decision. Intelligent Analyst attests it. These are separate systems with separate data stores. Neither can modify the other\u2019s records.",
      "This separation ensures the evidence record is independently verifiable.",
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 md:py-36 lg:px-8">
      <div className="fade-in-up">
        <p className="section-label">Protocol</p>
        <div className="section-divider mt-4" />
        <h1 className="mt-6 text-[2.5rem] font-semibold tracking-tight leading-[1.08] md:text-[2.75rem]">
          How CCAI works.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          CCAI screens entities through a structured protocol. Each stage
          produces traceable output. The full path from intake to attestation is
          deterministic, auditable, and reproducible.
        </p>
      </div>

      <div className="mt-24 space-y-24">
        {stages.map((stage) => (
          <AnimateOnScroll key={stage.num}>
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-sm font-semibold tabular-nums text-accent">
                {stage.num}
              </span>
              <h2 className="text-2xl font-semibold tracking-tight">
                {stage.title}
              </h2>
            </div>
            <div className="mt-6 space-y-4 pl-11">
              {stage.content.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>

            {stage.showLayers && (
              <div className="mt-10 ml-11 overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-border bg-surface-2/50">
                      <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">Layer</th>
                      <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">Method</th>
                      <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">Cost</th>
                      <th className="hidden px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light sm:table-cell">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {layers.map((layer) => (
                      <tr key={layer.id} className="border-b border-border-light last:border-0">
                        <td className="px-4 py-3 font-mono text-sm font-semibold text-accent">{layer.id}</td>
                        <td className="px-4 py-3 text-sm font-medium text-foreground">{layer.name}</td>
                        <td className="px-4 py-3 font-mono text-sm text-muted">{layer.cost}</td>
                        <td className="hidden px-4 py-3 text-sm text-muted sm:table-cell">{layer.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  )
}
