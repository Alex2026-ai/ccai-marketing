const layers = [
  { id: "L1", label: "Deterministic", share: 84, tone: "#0f766e", note: "Exact, normalized, and alias matches" },
  { id: "L2", label: "Vector", share: 8, tone: "#7c3aed", note: "Threshold-gated similarity" },
  { id: "L3", label: "Semantic", share: 3, tone: "#b45309", note: "Budget-capped ambiguity support" },
  { id: "L4", label: "Human review", share: 5, tone: "#b91c1c", note: "Operator queue with full evidence" },
]

export function LayerDistributionVisual() {
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-surface shadow-soft">
      <svg
        role="img"
        aria-labelledby="layer-distribution-title layer-distribution-desc"
        viewBox="0 0 760 420"
        className="h-auto w-full"
      >
        <title id="layer-distribution-title">Example layer distribution visual</title>
        <desc id="layer-distribution-desc">
          A representative example showing most entities resolving in deterministic matching, with smaller
          portions moving to vector matching, semantic support, and human review.
        </desc>

        <rect width="760" height="420" fill="#ffffff" />
        <rect x="24" y="24" width="712" height="372" rx="14" fill="#f8fafc" stroke="#e2e8f0" />
        <text x="48" y="50" fill="#64748b" fontSize="11" fontWeight="700" letterSpacing="1.4">
          ILLUSTRATIVE LAYER DISTRIBUTION
        </text>
        <text x="48" y="78" fill="#0f172a" fontSize="20" fontWeight="700">
          Example evaluation batch: 1,000 entities
        </text>
        <text x="48" y="102" fill="#64748b" fontSize="12">
          Representative only - actual distribution depends on customer data, tenant policy, and snapshots.
        </text>

        <line x1="116" y1="324" x2="678" y2="324" stroke="#cbd5e1" />
        <line x1="116" y1="152" x2="116" y2="324" stroke="#cbd5e1" />
        {[0, 25, 50, 75, 100].map((tick) => {
          const x = 116 + tick * 5.62
          return (
            <g key={tick}>
              <line x1={x} y1="324" x2={x} y2="330" stroke="#94a3b8" />
              <text x={x} y="348" textAnchor="middle" fill="#64748b" fontSize="10">
                {tick}%
              </text>
            </g>
          )
        })}

        {layers.map((layer, index) => {
          const y = 144 + index * 45
          const width = layer.share * 5.62
          return (
            <g key={layer.id}>
              <text x="48" y={y + 21} fill="#0f172a" fontSize="12" fontWeight="700">
                {layer.id}
              </text>
              <text x="72" y={y + 21} fill="#334155" fontSize="12">
                {layer.label}
              </text>
              <rect x="116" y={y} width="562" height="28" rx="6" fill="#e2e8f0" />
              <rect x="116" y={y} width={width} height="28" rx="6" fill={layer.tone} opacity="0.86" />
              <text x={Math.max(156, 124 + width)} y={y + 19} fill="#0f172a" fontSize="12" fontWeight="700">
                {layer.share}%
              </text>
              <text x="116" y={y + 43} fill="#64748b" fontSize="10">
                {layer.note}
              </text>
            </g>
          )
        })}

        <g>
          <rect x="48" y="356" width="206" height="24" rx="6" fill="#ecfeff" stroke="#99f6e4" />
          <text x="60" y="372" fill="#0f766e" fontSize="10" fontWeight="700">
            Early resolution reduces review workload
          </text>
        </g>
        <text x="286" y="372" fill="#64748b" fontSize="10">
          Every layer still produces evidence for downstream review and export.
        </text>
      </svg>
      <figcaption className="border-t border-border-light px-4 py-3 text-[11px] leading-relaxed text-muted">
        This sample distribution is a planning artifact for evaluations. It is not a production benchmark
        or accuracy claim.
      </figcaption>
    </figure>
  )
}
