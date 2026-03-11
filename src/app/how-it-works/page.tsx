import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How It Works — CoreCompliance AI",
  description:
    "How CCAI screens entities through a deterministic resolution protocol with full evidence generation.",
}

const layers = [
  {
    id: "L0",
    name: "Garbage Detection",
    cost: "$0",
    desc: "Filters invalid input — empty values, numeric-only strings, file extensions, PII patterns. No resolution decision is made.",
  },
  {
    id: "L1",
    name: "Deterministic Matching",
    cost: "$0",
    desc: "Exact match, normalized match after suffix stripping (Inc., Corp., Ltd.), and known alias or parent entity lookup.",
  },
  {
    id: "L2",
    name: "Vector Similarity",
    cost: "$0",
    desc: "Character n-gram vectorization with cosine similarity against a pre-computed canonical index. Threshold-gated.",
  },
  {
    id: "L3",
    name: "Semantic Reasoning",
    cost: "~$0.005",
    desc: "LLM-based entity resolution for ambiguous cases. Budget-capped per batch to control cost exposure.",
  },
  {
    id: "L4",
    name: "Human Review",
    cost: "Variable",
    desc: "Escalation to operator queue for manual decision. The operator sees full context and evidence from prior layers.",
  },
]

const stages = [
  {
    num: "01",
    title: "Intake",
    content: [
      "Entities enter via batch upload or API submission. Each submission receives a unique trace identifier and is bound to a tenant context.",
      "The system detects file schema, classifies entity types (company, individual, vessel, address), normalizes input, and masks detected PII before processing.",
      "Intake produces a normalized entity set. No resolution decisions are made at this stage.",
    ],
  },
  {
    num: "02",
    title: "Screening",
    content: [
      "Each entity passes through the resolution waterfall — a sequence of layers ordered by cost and complexity. An entity stops at the first layer that produces a confident resolution.",
      "Each layer records its result, confidence score, execution time, and the rules and data it consulted. This per-layer trace becomes part of the evidence record.",
    ],
    showLayers: true,
  },
  {
    num: "03",
    title: "Evidence Assembly",
    content: [
      "Every screening decision produces a DecisionEventPackage containing: resolution path, rule binding (version and hash), data binding (watchlist snapshot), confidence basis, full lineage, and the configuration snapshot active at execution time.",
      "The DecisionEventPackage is assembled after resolution completes. Once assembled, it is immutable — no field can be modified, appended, or removed.",
    ],
  },
  {
    num: "04",
    title: "Monitoring",
    content: [
      "Entities enrolled in continuous monitoring are automatically re-screened when watchlist data is updated. Delta alerts surface when a previously cleared entity now matches, or when confidence scores shift beyond configured thresholds.",
      "Each re-screening follows the same protocol and produces the same evidence structure as the initial screen.",
    ],
  },
  {
    num: "05",
    title: "Attestation via Intelligent Analyst",
    content: [
      "After evidence assembly, the DecisionEventPackage is handed to Intelligent Analyst — the separate truth and attestation layer. IA records the decision in an append-only truth ledger and binds a VeracityReceipt (receipt_id, receipt_hash) to the decision.",
      "CCAI produces the screening decision. Intelligent Analyst attests it. These are separate systems with separate data stores. Neither can modify the other's records.",
      "This separation ensures the evidence record is independently verifiable.",
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      {/* Header */}
      <div className="fade-in-up">
        <p className="section-label">Protocol</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          How CCAI works.
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-muted">
          CCAI screens entities through a structured protocol. Each stage
          produces traceable output. The full path from intake to attestation is
          deterministic, auditable, and reproducible.
        </p>
      </div>

      {/* Stages */}
      <div className="mt-16 space-y-16">
        {stages.map((stage) => (
          <section key={stage.num} className="fade-in-up">
            <div className="flex items-baseline gap-4">
              <span className="text-[13px] font-semibold tabular-nums text-accent">
                {stage.num}
              </span>
              <h2 className="text-xl font-semibold tracking-tight">
                {stage.title}
              </h2>
            </div>
            <div className="mt-4 space-y-3 pl-10">
              {stage.content.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>

            {/* Resolution waterfall table */}
            {stage.showLayers && (
              <div className="mt-8 ml-10 overflow-hidden rounded-xl border border-border">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-border bg-surface-2/50">
                      <th className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                        Layer
                      </th>
                      <th className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                        Method
                      </th>
                      <th className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                        Cost
                      </th>
                      <th className="hidden px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light sm:table-cell">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {layers.map((layer) => (
                      <tr
                        key={layer.id}
                        className="border-b border-border-light last:border-0"
                      >
                        <td className="px-4 py-3 text-[13px] font-medium text-foreground">
                          {layer.id}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-foreground">
                          {layer.name}
                        </td>
                        <td className="px-4 py-3 text-[13px] font-mono text-muted">
                          {layer.cost}
                        </td>
                        <td className="hidden px-4 py-3 text-[13px] text-muted sm:table-cell">
                          {layer.desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
