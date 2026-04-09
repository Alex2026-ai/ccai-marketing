"use client"

import { useState } from "react"
import { CheckCircle, XCircle, AlertTriangle, Hash, Eye } from "lucide-react"

const demoEntities = [
  {
    name: "Banco Nacional de Cuba",
    decision: "BLOCKED" as const,
    confidence: 1.0,
    layer: "L1_DETERMINISTIC",
    layerLabel: "L1 Exact Match",
    matchedName: "BANCO NACIONAL DE CUBA",
    source: "OFAC SDN",
  },
  {
    name: "Gazprom Export",
    decision: "REVIEW" as const,
    confidence: 0.96,
    layer: "L1D_FUZZY",
    layerLabel: "L2 Fuzzy Match",
    matchedName: "GAZPROM EXPORT LLC",
    source: "OFAC SDN",
  },
  {
    name: "Jane Doe Clean",
    decision: "CLEARED" as const,
    confidence: 1.0,
    layer: "L1_DETERMINISTIC",
    layerLabel: "L1 Deterministic",
    matchedName: "—",
    source: "—",
  },
  {
    name: "EN+ Group",
    decision: "REVIEW" as const,
    confidence: 0.95,
    layer: "L1D_FUZZY",
    layerLabel: "L2 Fuzzy Match",
    matchedName: "EN+ GROUP",
    source: "OFAC SDN",
  },
]

const DECISION_STYLE = {
  BLOCKED: { bg: "bg-red-600", badge: "bg-red-100 text-red-700 border-red-200", icon: XCircle },
  REVIEW: { bg: "bg-amber-600", badge: "bg-amber-50 text-amber-700 border-amber-200", icon: AlertTriangle },
  CLEARED: { bg: "bg-emerald-600", badge: "bg-green-50 text-green-700 border-green-200", icon: CheckCircle },
}

export function ScreeningDemo() {
  const [selected, setSelected] = useState(demoEntities[0])
  const [isLoading, setIsLoading] = useState(false)

  const handleSelect = (entity: typeof demoEntities[number]) => {
    if (entity.name === selected.name) return
    setIsLoading(true)
    setTimeout(() => {
      setSelected(entity)
      setIsLoading(false)
    }, 400)
  }

  const style = DECISION_STYLE[selected.decision]
  const Icon = style.icon

  return (
    <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-soft">
      <div className="text-center mb-6">
        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
          Interactive Demo
        </span>
        <h3 className="mt-1 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          See CCAI screening in action
        </h3>
      </div>

      {/* Entity selector */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {demoEntities.map((entity) => (
          <button
            key={entity.name}
            onClick={() => handleSelect(entity)}
            className={`rounded-lg px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
              selected.name === entity.name
                ? "bg-foreground text-background"
                : "bg-surface-2/80 text-muted hover:text-foreground hover:bg-surface-2"
            }`}
          >
            {entity.name}
          </button>
        ))}
      </div>

      {/* Result panel */}
      <div className="rounded-xl border border-border bg-surface-2/30 p-5 sm:p-6">
        {isLoading ? (
          <div className="flex justify-center items-center h-52">
            <div className="animate-spin h-6 w-6 border-2 border-accent border-t-transparent rounded-full" />
          </div>
        ) : (
          <>
            {/* Header: entity + decision */}
            <div className="flex justify-between items-start mb-5">
              <div>
                <div className="text-[11px] text-muted-light uppercase tracking-[0.1em]">Screened Entity</div>
                <div className="text-lg font-semibold text-foreground mt-0.5">{selected.name}</div>
              </div>
              <span className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-[12px] font-semibold text-white ${style.bg}`}>
                <Icon size={14} />
                {selected.decision}
              </span>
            </div>

            {/* Result fields */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {[
                { label: "Matched Name", value: selected.matchedName },
                { label: "Confidence", value: `${(selected.confidence * 100).toFixed(0)}%` },
                { label: "Resolution Layer", value: selected.layerLabel },
                { label: "Source", value: selected.source },
              ].map((f) => (
                <div key={f.label} className="rounded-lg border border-border bg-surface p-3">
                  <div className="text-[10px] text-muted-light uppercase tracking-[0.08em]">{f.label}</div>
                  <div className="text-[13px] font-medium text-foreground mt-0.5 truncate">{f.value}</div>
                </div>
              ))}
            </div>

            {/* Evidence receipt */}
            <div className="rounded-lg border border-dashed border-border p-4">
              <div className="flex items-center gap-2 mb-3">
                <Hash size={14} className="text-muted-light" />
                <span className="text-[12px] font-semibold text-foreground">Decision Evidence Receipt</span>
                <span className="text-[10px] text-muted-light">(demo)</span>
              </div>
              <div className="font-mono text-[11px] space-y-1.5 text-muted">
                <div>decision_state: <span className="text-foreground">{selected.decision}</span></div>
                <div>resolution_layer: <span className="text-foreground">{selected.layer}</span></div>
                <div>confidence: <span className="text-foreground">{selected.confidence.toFixed(4)}</span></div>
                <div>package_hash: <span className="text-accent">sha256:9f4a2b...7c8d</span></div>
                <div>snapshot_version: <span className="text-foreground">deterministic</span></div>
                <div className="pt-2 text-[10px] text-accent flex items-center gap-1.5">
                  <Eye size={12} /> Reproducible · Tamper-evident · Full decision path recorded
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <p className="text-center text-[11px] text-muted-light mt-4">
        Every screening produces a verifiable decision package with integrity hash and full provenance chain.
      </p>
    </div>
  )
}
