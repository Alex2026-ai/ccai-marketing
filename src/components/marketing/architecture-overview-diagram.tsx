const executionItems = ["Intake", "Resolution waterfall", "Evidence assembly"]
const controlItems = ["Tenancy", "Governance", "Observability"]
const verificationItems = ["Truth ledger", "Receipt binding", "Independent replay"]

function laneItems(items: string[], x: number, y: number) {
  return items.map((item, index) => (
    <g key={item}>
      <rect x={x} y={y + index * 30} width="158" height="22" rx="5" fill="#ffffff" stroke="#e2e8f0" />
      <text x={x + 10} y={y + 15 + index * 30} fill="#334155" fontSize="10" fontWeight="600">
        {item}
      </text>
    </g>
  ))
}

export function ArchitectureOverviewDiagram() {
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-surface shadow-soft">
      <svg
        role="img"
        aria-labelledby="architecture-overview-title architecture-overview-desc"
        viewBox="0 0 760 430"
        className="h-auto w-full"
      >
        <title id="architecture-overview-title">CCAI architecture overview</title>
        <desc id="architecture-overview-desc">
          CCAI separates execution, modular control, and Intelligent Analyst verification so each
          plane has distinct responsibilities and boundaries.
        </desc>
        <defs>
          <marker id="architecture-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#0f766e" />
          </marker>
        </defs>

        <rect width="760" height="430" fill="#ffffff" />
        <rect x="24" y="24" width="712" height="382" rx="14" fill="#f8fafc" stroke="#e2e8f0" />
        <text x="48" y="50" fill="#64748b" fontSize="11" fontWeight="700" letterSpacing="1.4">
          THREE-LAYER ARCHITECTURE
        </text>

        <g>
          <rect x="56" y="84" width="188" height="174" rx="12" fill="#ffffff" stroke="#cbd5e1" />
          <text x="76" y="113" fill="#0f172a" fontSize="15" fontWeight="700">CCAI execution</text>
          <text x="76" y="132" fill="#64748b" fontSize="10">Screening and evidence production</text>
          {laneItems(executionItems, 76, 154)}
        </g>

        <g>
          <rect x="286" y="84" width="188" height="174" rx="12" fill="#ffffff" stroke="#cbd5e1" />
          <text x="306" y="113" fill="#0f172a" fontSize="15" fontWeight="700">Modular control</text>
          <text x="306" y="132" fill="#64748b" fontSize="10">Bounded policy and operations</text>
          {laneItems(controlItems, 306, 154)}
        </g>

        <g>
          <rect x="516" y="84" width="188" height="174" rx="12" fill="#ffffff" stroke="#cbd5e1" />
          <text x="536" y="113" fill="#0f172a" fontSize="15" fontWeight="700">IA verification</text>
          <text x="536" y="132" fill="#64748b" fontSize="10">Separate receipt and truth layer</text>
          {laneItems(verificationItems, 536, 154)}
        </g>

        <path d="M 244 171 L 278 171" fill="none" stroke="#0f766e" strokeWidth="1.5" markerEnd="url(#architecture-arrow)" opacity="0.75" />
        <path d="M 474 171 L 508 171" fill="none" stroke="#0f766e" strokeWidth="1.5" markerEnd="url(#architecture-arrow)" opacity="0.75" />
        <path d="M 380 258 L 380 304" fill="none" stroke="#0f766e" strokeWidth="1.5" markerEnd="url(#architecture-arrow)" opacity="0.75" />

        <g>
          <rect x="146" y="304" width="468" height="54" rx="10" fill="#ecfeff" stroke="#99f6e4" />
          <text x="166" y="328" fill="#0f766e" fontSize="13" fontWeight="700">Boundary rule</text>
          <text x="166" y="348" fill="#334155" fontSize="11">
            Control configures execution; execution produces evidence; IA verifies without influencing screening.
          </text>
        </g>
      </svg>
      <figcaption className="border-t border-border-light px-4 py-3 text-[11px] leading-relaxed text-muted">
        The architecture is intentionally split. No single surface owns screening logic, governance,
        and attestation at the same time.
      </figcaption>
    </figure>
  )
}
