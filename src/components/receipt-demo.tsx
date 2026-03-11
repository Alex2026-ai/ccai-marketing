"use client"

import { useState, useEffect, useCallback } from "react"
import { Search, CheckCircle, AlertCircle, Download, ArrowRight, ShieldAlert } from "lucide-react"

const demoEntities: Record<string, {
  entity: string
  result: string
  state: string
  riskLevel: string
  matchedRegistry: string
  layer: string
  layerLabel: string
  confidence: string
  time: string
  lineage: { label: string; detail: string }[]
  receipt: { id: string; hash: string; status: string }
}> = {
  "Acme Shipping Ltd": {
    entity: "Acme Shipping Ltd",
    result: "Acme Shipping Ltd → Acme Shipping Corporation",
    state: "CLEARED",
    riskLevel: "Low",
    matchedRegistry: "OFAC SDN — No match",
    layer: "L1",
    layerLabel: "Deterministic Match",
    confidence: "0.97",
    time: "14ms",
    lineage: [
      { label: "Input received", detail: "Acme Shipping Ltd" },
      { label: "Normalized", detail: "acme shipping (suffix strip: Ltd)" },
      { label: "L1 exact match", detail: "Acme Shipping Corporation" },
      { label: "Decision", detail: "CLEARED — confidence 0.97" },
    ],
    receipt: {
      id: "rct_a4f2…7b3e",
      hash: "sha256:e91c…3f4a",
      status: "BOUND",
    },
  },
  "Global Trade Partners": {
    entity: "Global Trade Partners",
    result: "Global Trade Partners → [No canonical match]",
    state: "REVIEW",
    riskLevel: "High",
    matchedRegistry: "EU Consolidated List — Potential match",
    layer: "L4",
    layerLabel: "Human Review",
    confidence: "0.42",
    time: "2.1s",
    lineage: [
      { label: "Input received", detail: "Global Trade Partners" },
      { label: "Normalized", detail: "global trade partners" },
      { label: "L1 miss", detail: "No exact, norm, or alias match" },
      { label: "L2 miss", detail: "Cosine 0.42 — below threshold 0.55" },
      { label: "L3 ambiguous", detail: "Multiple candidates, no confident resolution" },
      { label: "Escalated to L4", detail: "Queued for human review" },
    ],
    receipt: {
      id: "rct_pending",
      hash: "—",
      status: "ATTESTATION_PENDING",
    },
  },
}

const defaultEntity = "Acme Shipping Ltd"

const layerSteps = [
  { id: "L0", label: "Garbage Detection" },
  { id: "L1", label: "Deterministic" },
  { id: "L2", label: "Vector Similarity" },
  { id: "L3", label: "LLM Reasoning" },
]

export function ReceiptDemo({ autoPlay = false }: { autoPlay?: boolean }) {
  const [input, setInput] = useState("")
  const [result, setResult] = useState<typeof demoEntities[string] | null>(null)
  const [loading, setLoading] = useState(false)
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false)
  const [activeLayer, setActiveLayer] = useState(-1)

  const runDemo = useCallback((entityName?: string) => {
    const name = entityName || input
    if (entityName) setInput(entityName)
    setLoading(true)
    setResult(null)
    setActiveLayer(0)

    const key = Object.keys(demoEntities).find(
      (k) => k.toLowerCase() === name.trim().toLowerCase()
    )
    const entity = demoEntities[key || defaultEntity]
    const resolveLayer = parseInt(entity.layer.replace("L", ""), 10)
    const stepsToShow = Math.min(resolveLayer + 1, layerSteps.length)

    let step = 0
    const interval = setInterval(() => {
      step++
      if (step < stepsToShow) {
        setActiveLayer(step)
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setResult(entity)
          setLoading(false)
          setActiveLayer(-1)
        }, 300)
      }
    }, 350)
  }, [input])

  useEffect(() => {
    if (autoPlay && !hasAutoPlayed) {
      setHasAutoPlayed(true)
      const t = setTimeout(() => runDemo(defaultEntity), 600)
      return () => clearTimeout(t)
    }
  }, [autoPlay, hasAutoPlayed, runDemo])

  function handleFocus() {
    if (hasAutoPlayed && input === defaultEntity) {
      setInput("")
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      {/* Header */}
      <div className="border-b border-border-light bg-surface-2/40 px-6 py-5">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          Screening Demo
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">
          Enter an entity name to see resolution, evidence lineage, and receipt binding.
        </p>
      </div>

      <div className="p-6">
        {/* Quick-test presets */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-muted-light">Try:</span>
          {Object.keys(demoEntities).map((name) => (
            <button
              key={name}
              onClick={() => runDemo(name)}
              className="rounded-lg border border-border bg-surface-2/50 px-3 py-1.5 text-xs font-medium text-muted transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent-subtle"
            >
              {name}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-light" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={handleFocus}
              onKeyDown={(e) => e.key === "Enter" && runDemo()}
              placeholder="Enter entity name..."
              className="w-full rounded-lg border border-border bg-surface-2/50 py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-light outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/8"
            />
          </div>
          <button onClick={() => runDemo()} className="btn-primary whitespace-nowrap !text-sm !px-5 !py-3">
            Screen
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Helper text — always visible */}
        <p className="mt-2.5 text-xs text-muted-light">
          Try <span className="font-medium text-muted">&quot;Acme Shipping Ltd&quot;</span> (L1 match) or <span className="font-medium text-muted">&quot;Global Trade Partners&quot;</span> (L4 escalation).
        </p>

        {/* Loading — layer progress */}
        {loading && (
          <div className="mt-8 py-6">
            <div className="flex items-center justify-center gap-2.5 mb-5 text-sm text-muted">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-accent/30 border-t-accent" />
              Resolving entity through screening layers...
            </div>
            <div className="grid grid-cols-4 gap-2">
              {layerSteps.map((step, i) => (
                <div
                  key={step.id}
                  className={`rounded-lg border px-3 py-2.5 text-center transition-all duration-300 ${
                    i < activeLayer
                      ? "border-emerald-200 bg-emerald-50/50"
                      : i === activeLayer
                        ? "border-accent bg-accent/5"
                        : "border-border-light bg-surface-2/30"
                  }`}
                >
                  <p className={`font-mono text-xs font-semibold ${
                    i < activeLayer
                      ? "text-emerald-600"
                      : i === activeLayer
                        ? "text-accent"
                        : "text-muted-light"
                  }`}>
                    {step.id}
                  </p>
                  <p className={`mt-0.5 text-[10px] ${
                    i <= activeLayer ? "text-muted" : "text-muted-light/60"
                  }`}>
                    {step.label}
                  </p>
                  {i < activeLayer && (
                    <CheckCircle size={10} className="mx-auto mt-1 text-emerald-500" />
                  )}
                  {i === activeLayer && (
                    <div className="mx-auto mt-1 h-2.5 w-2.5 animate-spin rounded-full border border-accent/30 border-t-accent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Result */}
        {result && !loading && (
          <div className="mt-6 space-y-5 fade-in-up">
            {/* Result header — Entity + Verdict + Risk */}
            <div className="flex items-start justify-between gap-4 rounded-xl border border-border-light bg-surface-2/40 px-5 py-4">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-light">Entity</p>
                <p className="mt-1 text-sm font-medium text-foreground">{result.entity}</p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-muted-light">Resolution</p>
                <p className="mt-1 text-sm text-muted">{result.result}</p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-2">
                <span className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-semibold ${
                  result.state === "CLEARED"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                    : "bg-amber-50 text-amber-700 border border-amber-100"
                }`}>
                  {result.state === "CLEARED"
                    ? <CheckCircle size={11} />
                    : <AlertCircle size={11} />}
                  {result.state}
                </span>
                <span className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-0.5 text-[10px] font-semibold ${
                  result.riskLevel === "Low"
                    ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                    : "bg-red-50 text-red-600 border border-red-100"
                }`}>
                  <ShieldAlert size={9} />
                  {result.riskLevel} Risk
                </span>
              </div>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: "Layer", value: result.layer, sub: result.layerLabel },
                { label: "Confidence", value: result.confidence },
                { label: "Matched Registry", value: result.matchedRegistry },
                { label: "Latency", value: result.time },
              ].map((m) => (
                <div key={m.label} className="rounded-xl border border-border-light bg-surface px-3.5 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-light">{m.label}</p>
                  <p className={`mt-1 font-mono text-sm font-semibold ${
                    m.value === "BOUND" ? "text-emerald-600" :
                    m.value === "ATTESTATION_PENDING" ? "text-amber-600" :
                    "text-foreground"
                  }`}>
                    {m.value}
                  </p>
                  {m.sub && <p className="mt-0.5 text-[10px] text-muted-light">{m.sub}</p>}
                </div>
              ))}
            </div>

            {/* Lineage */}
            <div className="rounded-xl border border-border bg-surface-2/30 px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-light mb-3">
                Evidence Lineage
              </p>
              <div className="space-y-0">
                {result.lineage.map((node, i) => (
                  <div key={i} className="flex items-start gap-3.5 py-2">
                    <div className="mt-0.5 flex flex-col items-center">
                      <div className={`h-2.5 w-2.5 rounded-full border-2 ${
                        i === result.lineage.length - 1
                          ? "border-accent bg-accent"
                          : "border-border bg-surface"
                      }`} />
                      {i < result.lineage.length - 1 && (
                        <div className="mt-0.5 h-5 w-px bg-border" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-medium text-foreground">{node.label}</span>
                      <span className="ml-2 font-mono text-xs text-muted">{node.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Intelligent Analyst Verification Receipt */}
            {(() => {
              const isVerified = result.state === "CLEARED"
              const fields = isVerified
                ? [
                    { label: "attestation_id", value: "IA-ATTEST-8F2C91A4", highlight: "accent" as const },
                    { label: "artifact_id", value: "DECISION-7D3B2F90" },
                    { label: "verified_at", value: "2026-03-11T14:21:08Z" },
                    { label: "protocol_version", value: "1.0" },
                    { label: "engine_version", value: "CCAI-3.2.1" },
                    { label: "rules_version", value: "sanctions_rules_v14" },
                    { label: "registry_snapshot", value: "OFAC_SDN_2026-03-10" },
                    { label: "input_hash", value: "sha256:8a1c3b...d47e" },
                    { label: "output_hash", value: "sha256:f94b7a...19ad" },
                    { label: "decision_type", value: "sanctions_screening" },
                    { label: "entity", value: "Acme Shipping Ltd" },
                    { label: "result", value: "CLEAR", highlight: "success" as const },
                    { label: "verification_status", value: "VERIFIED", highlight: "success" as const },
                    { label: "receipt_signature", value: "ECDSA-P256" },
                  ]
                : [
                    { label: "attestation_id", value: "PENDING", highlight: "warn" as const },
                    { label: "artifact_id", value: "DECISION-91C7E2B5" },
                    { label: "verified_at", value: "pending_human_review" },
                    { label: "protocol_version", value: "1.0" },
                    { label: "engine_version", value: "CCAI-3.2.1" },
                    { label: "rules_version", value: "sanctions_rules_v14" },
                    { label: "registry_snapshot", value: "EU_CONSOLIDATED_2026-03-10" },
                    { label: "input_hash", value: "sha256:4d91aa...8c10" },
                    { label: "output_hash", value: "pending_final_decision" },
                    { label: "decision_type", value: "sanctions_screening" },
                    { label: "entity", value: "Global Trade Partners" },
                    { label: "result", value: "REVIEW", highlight: "warn" as const },
                    { label: "verification_status", value: "PENDING_HUMAN_REVIEW", highlight: "warn" as const },
                    { label: "receipt_signature", value: "not_issued" },
                  ]

              return (
                <div className={`rounded-xl border overflow-hidden ${
                  isVerified ? "border-emerald-200" : "border-amber-200"
                }`}>
                  {/* Header */}
                  <div className={`px-5 py-4 ${
                    isVerified ? "bg-emerald-50/50" : "bg-amber-50/50"
                  }`}>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-light">
                          Intelligent Analyst Verification Receipt
                        </p>
                        <p className={`mt-1.5 text-xs leading-relaxed ${isVerified ? "text-emerald-700" : "text-amber-700"}`}>
                          {isVerified
                            ? "Independent attestation issued by Intelligent Analyst."
                            : "Final attestation will be issued after human review is completed."}
                        </p>
                      </div>
                      <span className={`shrink-0 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider ${
                        isVerified
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                          : "bg-amber-100 text-amber-800 border border-amber-200"
                      }`}>
                        {isVerified
                          ? <CheckCircle size={10} />
                          : <AlertCircle size={10} />}
                        {isVerified ? "Verified by Intelligent Analyst" : "Pending Human Review"}
                      </span>
                    </div>
                  </div>

                  {/* Fields */}
                  <div className="grid grid-cols-1 gap-px bg-border-light sm:grid-cols-2">
                    {fields.map((field) => (
                      <div key={field.label} className="flex items-baseline justify-between gap-3 bg-surface px-5 py-2.5">
                        <span className="font-mono text-[11px] text-muted-light shrink-0">{field.label}</span>
                        <span className={`font-mono text-[11px] text-right truncate ${
                          field.highlight === "success"
                            ? "font-semibold text-emerald-600"
                            : field.highlight === "warn"
                              ? "font-semibold text-amber-600"
                              : field.highlight === "accent"
                                ? "font-semibold text-accent"
                                : "text-foreground"
                        }`}>
                          {field.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Download */}
                  <div className="border-t border-border-light bg-surface px-5 py-3 flex justify-end">
                    {isVerified ? (
                      <button className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted transition-all duration-200 hover:text-foreground hover:border-foreground hover:shadow-sm">
                        <Download size={12} />
                        Download Receipt
                      </button>
                    ) : (
                      <span className="flex items-center gap-1.5 rounded-lg border border-border-light bg-surface-2/50 px-3 py-1.5 text-xs font-medium text-muted-light cursor-not-allowed">
                        <Download size={12} />
                        Available after attestation
                      </span>
                    )}
                  </div>
                </div>
              )
            })()}
          </div>
        )}
      </div>
    </div>
  )
}
