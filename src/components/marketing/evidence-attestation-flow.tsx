const evidenceSteps = [
  {
    title: "DecisionEventPackage",
    detail: "Resolution path, rule binding, data snapshot, confidence basis, and execution hash.",
    x: 56,
    y: 78,
  },
  {
    title: "Evidence Inventory",
    detail: "Case context, human review trail, freshness disclosure, and export metadata.",
    x: 292,
    y: 78,
  },
  {
    title: "IA Attestation",
    detail: "Separate truth layer binds receipt identifiers and hashes to the package.",
    x: 528,
    y: 78,
  },
]

const receiptRows = [
  ["receipt_status", "BOUND or ATTESTATION_PENDING"],
  ["package_hash", "content-addressed evidence"],
  ["reliance", "customer final decision"],
]

export function EvidenceAttestationFlow() {
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-surface shadow-soft">
      <svg
        role="img"
        aria-labelledby="evidence-attestation-title evidence-attestation-desc"
        viewBox="0 0 760 360"
        className="h-auto w-full"
      >
        <title id="evidence-attestation-title">Evidence and attestation flow</title>
        <desc id="evidence-attestation-desc">
          Decision evidence is assembled by CCAI, organized for review, then attested by
          Intelligent Analyst as a separate truth layer.
        </desc>
        <defs>
          <marker id="evidence-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#0f766e" />
          </marker>
        </defs>

        <rect width="760" height="360" fill="#ffffff" />
        <rect x="24" y="24" width="712" height="312" rx="14" fill="#f8fafc" stroke="#e2e8f0" />
        <text x="48" y="50" fill="#64748b" fontSize="11" fontWeight="700" letterSpacing="1.4">
          EVIDENCE AND ATTESTATION FLOW
        </text>

        <path d="M 228 126 L 276 126" fill="none" stroke="#0f766e" strokeWidth="1.5" markerEnd="url(#evidence-arrow)" opacity="0.75" />
        <path d="M 464 126 L 512 126" fill="none" stroke="#0f766e" strokeWidth="1.5" markerEnd="url(#evidence-arrow)" opacity="0.75" />

        {evidenceSteps.map((step, index) => (
          <g key={step.title}>
            <rect x={step.x} y={step.y} width="172" height="96" rx="10" fill="#ffffff" stroke="#cbd5e1" />
            <rect x={step.x + 12} y={step.y + 12} width="30" height="24" rx="5" fill="#ecfeff" stroke="#99f6e4" />
            <text x={step.x + 27} y={step.y + 28} textAnchor="middle" fill="#0f766e" fontSize="10" fontWeight="700">
              {`0${index + 1}`}
            </text>
            <text x={step.x + 12} y={step.y + 55} fill="#0f172a" fontSize="14" fontWeight="700">
              {step.title}
            </text>
            <foreignObject x={step.x + 12} y={step.y + 65} width="148" height="42">
              <p className="text-[10px] leading-snug text-muted">{step.detail}</p>
            </foreignObject>
          </g>
        ))}

        <g>
          <rect x="56" y="216" width="648" height="72" rx="10" fill="#ffffff" stroke="#cbd5e1" />
          <text x="76" y="242" fill="#0f172a" fontSize="13" fontWeight="700">
            Regulator-readable output
          </text>
          {receiptRows.map(([key, value], index) => (
            <g key={key}>
              <text x={76 + index * 204} y="266" fill="#64748b" fontSize="10" fontFamily="monospace">
                {key}
              </text>
              <text x={76 + index * 204} y="282" fill="#0f172a" fontSize="11" fontWeight="700">
                {value}
              </text>
            </g>
          ))}
        </g>
      </svg>
      <figcaption className="border-t border-border-light px-4 py-3 text-[11px] leading-relaxed text-muted">
        CCAI assembles screening evidence and review context. Intelligent Analyst attests the package
        separately, preserving the boundary between execution and verification.
      </figcaption>
    </figure>
  )
}
