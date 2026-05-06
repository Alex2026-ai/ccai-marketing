const surfaces = [
  { title: "Platform team", detail: "Calls REST APIs from onboarding, KYC, payments, or logistics systems.", x: 54, y: 76 },
  { title: "Compliance operator", detail: "Uses the dashboard for review, case work, evidence, and approvals.", x: 522, y: 76 },
]

const outputs = [
  "Screening results",
  "Review cases",
  "Evidence exports",
  "Webhook events",
]

export function ConsumptionModelDiagram() {
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-surface shadow-soft">
      <svg
        role="img"
        aria-labelledby="consumption-model-title consumption-model-desc"
        viewBox="0 0 760 360"
        className="h-auto w-full"
      >
        <title id="consumption-model-title">Operator and developer consumption model</title>
        <desc id="consumption-model-desc">
          Developers consume CCAI through APIs, operators consume it through the dashboard, and both
          surfaces use the same screening engine and evidence output.
        </desc>
        <defs>
          <marker id="consumption-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#0f766e" />
          </marker>
        </defs>

        <rect width="760" height="360" fill="#ffffff" />
        <rect x="24" y="24" width="712" height="312" rx="14" fill="#f8fafc" stroke="#e2e8f0" />
        <text x="48" y="50" fill="#64748b" fontSize="11" fontWeight="700" letterSpacing="1.4">
          OPERATOR AND DEVELOPER CONSUMPTION MODEL
        </text>

        {surfaces.map((surface) => (
          <g key={surface.title}>
            <rect x={surface.x} y={surface.y} width="184" height="92" rx="10" fill="#ffffff" stroke="#cbd5e1" />
            <text x={surface.x + 16} y={surface.y + 30} fill="#0f172a" fontSize="14" fontWeight="700">
              {surface.title}
            </text>
            <foreignObject x={surface.x + 16} y={surface.y + 42} width="150" height="42">
              <p className="text-[10px] leading-snug text-muted">{surface.detail}</p>
            </foreignObject>
          </g>
        ))}

        <g>
          <rect x="288" y="90" width="184" height="78" rx="10" fill="#ecfeff" stroke="#99f6e4" />
          <text x="318" y="121" fill="#0f766e" fontSize="15" fontWeight="700">CCAI engine</text>
          <text x="318" y="142" fill="#334155" fontSize="11">Same deterministic core</text>
        </g>

        <rect x="272" y="214" width="216" height="76" rx="10" fill="#ffffff" stroke="#cbd5e1" />
        <text x="296" y="240" fill="#0f172a" fontSize="14" fontWeight="700">Evidence and results</text>
        <text x="296" y="260" fill="#64748b" fontSize="10">Shared output contract</text>

        <path d="M 238 122 L 280 122" fill="none" stroke="#0f766e" strokeWidth="1.5" markerEnd="url(#consumption-arrow)" opacity="0.75" />
        <path d="M 522 122 L 480 122" fill="none" stroke="#0f766e" strokeWidth="1.5" markerEnd="url(#consumption-arrow)" opacity="0.75" />
        <path d="M 380 168 L 380 206" fill="none" stroke="#0f766e" strokeWidth="1.5" markerEnd="url(#consumption-arrow)" opacity="0.75" />

        {outputs.map((output, index) => (
          <g key={output}>
            <rect x={64 + index * 160} y="304" width="126" height="28" rx="6" fill="#ffffff" stroke="#e2e8f0" />
            <text x={127 + index * 160} y="322" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="700">
              {output}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="border-t border-border-light px-4 py-3 text-[11px] leading-relaxed text-muted">
        CCAI is consumed as infrastructure: APIs for product systems, dashboard surfaces for operators,
        and one evidence contract underneath both.
      </figcaption>
    </figure>
  )
}
