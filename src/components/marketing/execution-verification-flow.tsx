const nodes = [
  { id: "01", title: "Intake", detail: "Tenant-scoped input and schema normalization", x: 64, y: 72 },
  { id: "02", title: "Screen", detail: "Deterministic waterfall and enrichment signals", x: 304, y: 72 },
  { id: "03", title: "Evidence", detail: "DecisionEventPackage with lineage and hashes", x: 544, y: 72 },
  { id: "04", title: "Review", detail: "Human-owned disposition and review-quality gates", x: 304, y: 244 },
  { id: "05", title: "Attest", detail: "Independent receipt binding through IA", x: 544, y: 244 },
]

const links = [
  ["01", "02"],
  ["02", "03"],
  ["03", "04"],
  ["04", "05"],
]

function position(id: string) {
  const node = nodes.find((item) => item.id === id)
  if (!node) throw new Error(`Unknown execution-flow node: ${id}`)
  return node
}

export function ExecutionVerificationFlow() {
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-surface shadow-soft">
      <svg
        role="img"
        aria-labelledby="execution-verification-title execution-verification-desc"
        viewBox="0 0 720 360"
        className="h-auto w-full"
      >
        <title id="execution-verification-title">Execution and verification flow</title>
        <desc id="execution-verification-desc">
          CCAI flow from tenant-scoped intake through deterministic screening, evidence assembly,
          human review, and independent attestation.
        </desc>
        <defs>
          <marker id="flow-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#0f766e" />
          </marker>
        </defs>

        <rect x="0" y="0" width="720" height="360" fill="#ffffff" />
        <rect x="24" y="24" width="672" height="312" rx="14" fill="#f8fafc" stroke="#e2e8f0" />

        <text x="48" y="46" fill="#64748b" fontSize="11" fontWeight="700" letterSpacing="1.4">
          EXECUTION AND VERIFICATION FLOW
        </text>

        {links.map(([from, to]) => {
          const start = position(from)
          const end = position(to)
          const startX = start.x + 128
          const startY = start.y + 48
          const endX = end.x
          const endY = end.y + 48
          const path =
            start.y === end.y
              ? `M ${startX} ${startY} L ${endX - 18} ${endY}`
              : `M ${start.x + 64} ${start.y + 96} C ${start.x + 64} 196, ${end.x + 64} 170, ${end.x + 64} ${end.y - 16}`

          return (
            <path
              key={`${from}-${to}`}
              d={path}
              fill="none"
              stroke="#0f766e"
              strokeWidth="1.5"
              markerEnd="url(#flow-arrow)"
              opacity="0.75"
            />
          )
        })}

        {nodes.map((node) => (
          <g key={node.id}>
            <rect x={node.x} y={node.y} width="128" height="96" rx="10" fill="#ffffff" stroke="#cbd5e1" />
            <rect x={node.x + 12} y={node.y + 12} width="28" height="24" rx="5" fill="#ecfeff" stroke="#99f6e4" />
            <text x={node.x + 26} y={node.y + 28} textAnchor="middle" fill="#0f766e" fontSize="10" fontWeight="700">
              {node.id}
            </text>
            <text x={node.x + 12} y={node.y + 55} fill="#0f172a" fontSize="15" fontWeight="700">
              {node.title}
            </text>
            <foreignObject x={node.x + 12} y={node.y + 64} width="104" height="38">
              <p className="text-[10px] leading-snug text-muted">
                {node.detail}
              </p>
            </foreignObject>
          </g>
        ))}

        <g>
          <rect x="64" y="244" width="128" height="64" rx="10" fill="#fff7ed" stroke="#fed7aa" />
          <text x="80" y="270" fill="#9a3412" fontSize="12" fontWeight="700">Boundary</text>
          <foreignObject x="80" y="278" width="96" height="24">
            <p className="text-[10px] leading-snug text-orange-800">
              Screening signals are not final legal determinations.
            </p>
          </foreignObject>
        </g>
      </svg>
      <figcaption className="border-t border-border-light px-4 py-3 text-[11px] leading-relaxed text-muted">
        Every stage produces bounded evidence. CCAI executes screening; human review owns disposition;
        IA attests the resulting package independently.
      </figcaption>
    </figure>
  )
}
