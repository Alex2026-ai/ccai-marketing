"use client"

import { useState, useEffect } from "react"
import { Search, CheckCircle, AlertCircle, Download, ArrowRight } from "lucide-react"

const demoEntities: Record<string, {
  entity: string
  result: string
  state: string
  layer: string
  layerLabel: string
  confidence: string
  time: string
  lineage: { label: string; detail: string }[]
  receipt: { id: string; hash: string; status: string }
}> = {
  "Acme Shipping Ltd": {
    entity: "Acme Shipping Ltd",
    result: "Acme Shipping Ltd \u2192 Acme Shipping Corporation",
    state: "CLEARED",
    layer: "L1",
    layerLabel: "Deterministic Match",
    confidence: "0.97",
    time: "14ms",
    lineage: [
      { label: "Input received", detail: "Acme Shipping Ltd" },
      { label: "Normalized", detail: "acme shipping (suffix strip: Ltd)" },
      { label: "L1 exact match", detail: "Acme Shipping Corporation" },
      { label: "Decision", detail: "CLEARED \u2014 confidence 0.97" },
    ],
    receipt: {
      id: "rct_a4f2\u20267b3e",
      hash: "sha256:e91c\u20263f4a",
      status: "BOUND",
    },
  },
  "Global Trade Partners": {
    entity: "Global Trade Partners",
    result: "Global Trade Partners \u2192 [No canonical match]",
    state: "REVIEW",
    layer: "L4",
    layerLabel: "Human Review",
    confidence: "0.42",
    time: "2.1s",
    lineage: [
      { label: "Input received", detail: "Global Trade Partners" },
      { label: "Normalized", detail: "global trade partners" },
      { label: "L1 miss", detail: "No exact, norm, or alias match" },
      { label: "L2 miss", detail: "Cosine 0.42 \u2014 below threshold 0.55" },
      { label: "L3 ambiguous", detail: "Multiple candidates, no confident resolution" },
      { label: "Escalated to L4", detail: "Queued for human review" },
    ],
    receipt: {
      id: "rct_pending",
      hash: "\u2014",
      status: "ATTESTATION_PENDING",
    },
  },
}

const defaultEntity = "Acme Shipping Ltd"

export function ReceiptDemo({ autoPlay = false }: { autoPlay?: boolean }) {
  const [input, setInput] = useState("")
  const [result, setResult] = useState<typeof demoEntities[string] | null>(null)
  const [loading, setLoading] = useState(false)
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false)

  useEffect(() => {
    if (autoPlay && !hasAutoPlayed) {
      setHasAutoPlayed(true)
      setInput(defaultEntity)
      setLoading(true)
      const t = setTimeout(() => {
        setResult(demoEntities[defaultEntity])
        setLoading(false)
      }, 1200)
      return () => clearTimeout(t)
    }
  }, [autoPlay, hasAutoPlayed])

  function runDemo() {
    setLoading(true)
    setResult(null)
    const key = Object.keys(demoEntities).find(
      (k) => k.toLowerCase() === input.trim().toLowerCase()
    )
    setTimeout(() => {
      setResult(demoEntities[key || defaultEntity])
      setLoading(false)
    }, 900)
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
        {/* Input */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-light" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && runDemo()}
              placeholder="Acme Shipping Ltd  or  Global Trade Partners"
              className="w-full rounded-lg border border-border bg-surface-2/50 py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-light outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/8"
            />
          </div>
          <button onClick={runDemo} className="btn-primary whitespace-nowrap !text-sm !px-5 !py-3">
            Screen
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-8 flex items-center justify-center gap-2.5 py-8 text-sm text-muted">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-accent/30 border-t-accent" />
            Resolving entity through screening layers...
          </div>
        )}

        {/* Result */}
        {result && !loading && (
          <div className="mt-6 space-y-5 fade-in-up">
            {/* Result header */}
            <div className="flex items-start justify-between gap-4 rounded-xl border border-border-light bg-surface-2/40 px-5 py-4">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-light">Resolution</p>
                <p className="mt-1.5 text-sm font-medium text-foreground">{result.result}</p>
              </div>
              <span className={`mt-1 shrink-0 inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-semibold ${
                result.state === "CLEARED"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                  : "bg-amber-50 text-amber-700 border border-amber-100"
              }`}>
                {result.state === "CLEARED"
                  ? <CheckCircle size={11} />
                  : <AlertCircle size={11} />}
                {result.state}
              </span>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: "Layer", value: result.layer, sub: result.layerLabel },
                { label: "Confidence", value: result.confidence },
                { label: "Latency", value: result.time },
                { label: "Receipt", value: result.receipt.status },
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
                Resolution Lineage
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

            {/* Receipt badge */}
            <div className={`flex items-center justify-between rounded-xl border px-5 py-4 ${
              result.receipt.status === "BOUND"
                ? "border-emerald-100 bg-emerald-50/40"
                : "border-amber-100 bg-amber-50/40"
            }`}>
              <div className="flex items-center gap-3">
                {result.receipt.status === "BOUND"
                  ? <CheckCircle size={16} className="text-emerald-500" />
                  : <AlertCircle size={16} className="text-amber-500" />}
                <div>
                  <p className="font-mono text-xs font-medium text-foreground">{result.receipt.id}</p>
                  <p className="font-mono text-[11px] text-muted">{result.receipt.hash}</p>
                </div>
              </div>
              <button className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted transition-all duration-200 hover:text-foreground hover:border-foreground hover:shadow-sm">
                <Download size={12} />
                Download Receipt
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
