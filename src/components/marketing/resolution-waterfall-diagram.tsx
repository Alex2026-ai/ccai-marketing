const waterfallLayers = [
  { id: "L0", title: "Validate", detail: "Reject unusable input before matching", x: 48, y: 62, tone: "#64748b" },
  { id: "L1", title: "Exact", detail: "Normalized exact and alias lookup", x: 170, y: 112, tone: "#0f766e" },
  { id: "L2", title: "Fuzzy", detail: "Threshold-gated similarity candidate", x: 292, y: 162, tone: "#7c3aed" },
  { id: "L3", title: "Semantic", detail: "Budget-capped ambiguity support", x: 414, y: 212, tone: "#b45309" },
  { id: "L4", title: "Human", detail: "Review queue with full evidence", x: 536, y: 262, tone: "#b91c1c" },
]

export function ResolutionWaterfallDiagram() {
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-surface shadow-soft">
      <svg
        role="img"
        aria-labelledby="resolution-waterfall-title resolution-waterfall-desc"
        viewBox="0 0 720 380"
        className="h-auto w-full"
      >
        <title id="resolution-waterfall-title">Resolution waterfall diagram</title>
        <desc id="resolution-waterfall-desc">
          The resolution waterfall moves from validation through exact matching, fuzzy matching,
          semantic ambiguity support, and human review. Entities stop at the first confident result.
        </desc>
        <defs>
          <marker id="waterfall-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#334155" />
          </marker>
        </defs>

        <rect width="720" height="380" fill="#ffffff" />
        <rect x="24" y="24" width="672" height="332" rx="14" fill="#f8fafc" stroke="#e2e8f0" />
        <text x="48" y="48" fill="#64748b" fontSize="11" fontWeight="700" letterSpacing="1.4">
          RESOLUTION WATERFALL
        </text>
        <text x="48" y="333" fill="#64748b" fontSize="11">
          Stop at first confident resolution; escalate only when evidence remains ambiguous.
        </text>

        {waterfallLayers.slice(0, -1).map((layer, index) => {
          const next = waterfallLayers[index + 1]
          return (
            <path
              key={`${layer.id}-${next.id}`}
              d={`M ${layer.x + 92} ${layer.y + 38} L ${next.x - 12} ${next.y + 38}`}
              fill="none"
              stroke="#334155"
              strokeWidth="1.25"
              markerEnd="url(#waterfall-arrow)"
              opacity="0.5"
            />
          )
        })}

        {waterfallLayers.map((layer) => (
          <g key={layer.id}>
            <rect x={layer.x} y={layer.y} width="104" height="76" rx="10" fill="#ffffff" stroke="#cbd5e1" />
            <rect x={layer.x + 12} y={layer.y + 12} width="30" height="24" rx="5" fill={layer.tone} opacity="0.12" />
            <text x={layer.x + 27} y={layer.y + 28} textAnchor="middle" fill={layer.tone} fontSize="10" fontWeight="700">
              {layer.id}
            </text>
            <text x={layer.x + 12} y={layer.y + 52} fill="#0f172a" fontSize="13" fontWeight="700">
              {layer.title}
            </text>
            <foreignObject x={layer.x + 12} y={layer.y + 58} width="80" height="28">
              <p className="text-[9px] leading-tight text-muted">
                {layer.detail}
              </p>
            </foreignObject>
          </g>
        ))}

        <g>
          <rect x="536" y="72" width="112" height="56" rx="10" fill="#ecfdf5" stroke="#a7f3d0" />
          <text x="552" y="96" fill="#047857" fontSize="12" fontWeight="700">Resolved early</text>
          <text x="552" y="114" fill="#475569" fontSize="10">Lower cost, same evidence</text>
        </g>
        <path d="M 416 100 C 468 92, 496 92, 524 98" fill="none" stroke="#0f766e" strokeWidth="1.25" markerEnd="url(#waterfall-arrow)" opacity="0.75" />
      </svg>
      <figcaption className="border-t border-border-light px-4 py-3 text-[11px] leading-relaxed text-muted">
        The waterfall is ordered by cost and certainty. Later layers add context; they do not rewrite evidence from earlier layers.
      </figcaption>
    </figure>
  )
}
