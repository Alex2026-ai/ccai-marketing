const rationale = [
  {
    point: "Reliance boundary",
    detail:
      "CCAI output is framed as a screening signal and evidence record. The customer owns final compliance decisions, regulator responses, and legal interpretation.",
  },
  {
    point: "Decision context",
    detail:
      "Each record binds the result to input, tenant policy, rule pack, reference snapshot, layer trace, and integrity hash so reviewers can see what produced the signal.",
  },
  {
    point: "Human review",
    detail:
      "Review-required outcomes carry governance context for structured disposition, approval history, PI involvement, and review-quality expectations.",
  },
  {
    point: "Data freshness",
    detail:
      "Snapshot age and source timing are part of the evidence context so a reproduced decision can be distinguished from a current-data assessment.",
  },
  {
    point: "Examination support",
    detail:
      "Evidence packages organize records for customer review and regulator-facing preparation without turning software output into legal advice.",
  },
]

export function RegulatedUseRationale() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-soft">
      <div className="border-b border-border-light bg-surface-2/40 px-5 py-4">
        <p className="section-label">Regulated-use rationale</p>
        <h3 className="mt-3 text-base font-semibold text-foreground">
          Evidence that supports a defensible process.
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          The evidence structure is designed to help regulated teams document, review, and explain their own screening process.
        </p>
      </div>
      <div className="divide-y divide-border-light">
        {rationale.map((item) => (
          <div key={item.point} className="grid gap-2 px-5 py-4 sm:grid-cols-[11rem_1fr]">
            <div className="text-sm font-semibold text-foreground">{item.point}</div>
            <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
