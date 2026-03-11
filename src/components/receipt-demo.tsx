"use client"

import { useState } from "react"
import { Search, CheckCircle, Download, ArrowRight } from "lucide-react"

const demoEntities: Record<string, {
  entity: string
  result: string
  state: string
  layer: string
  confidence: string
  lineage: string[]
  receipt: { id: string; hash: string; status: string }
}> = {
  "Acme Shipping Ltd": {
    entity: "Acme Shipping Ltd",
    result: "Acme Shipping Ltd → Acme Shipping Corporation",
    state: "CLEARED",
    layer: "L1_NORMALIZED",
    confidence: "0.97",
    lineage: [
      "Input: Acme Shipping Ltd",
      "Normalized: acme shipping",
      "L1 Match: Acme Shipping Corporation (suffix strip)",
      "Decision: CLEARED",
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
    layer: "L4_HUMAN",
    confidence: "0.42",
    lineage: [
      "Input: Global Trade Partners",
      "Normalized: global trade partners",
      "L1: MISS (no exact/norm/alias match)",
      "L2: 0.42 (below threshold 0.55)",
      "L3: Ambiguous — multiple candidates",
      "Escalated to L4 human review",
    ],
    receipt: {
      id: "rct_pending",
      hash: "—",
      status: "ATTESTATION_PENDING",
    },
  },
}

const defaultEntity = "Acme Shipping Ltd"

export function ReceiptDemo() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState<typeof demoEntities[string] | null>(null)
  const [loading, setLoading] = useState(false)

  function runDemo() {
    setLoading(true)
    setResult(null)
    const key = Object.keys(demoEntities).find(
      (k) => k.toLowerCase() === input.trim().toLowerCase()
    )
    setTimeout(() => {
      setResult(demoEntities[key || defaultEntity])
      setLoading(false)
    }, 800)
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <h3 className="text-lg font-semibold tracking-tight text-foreground">
        Interactive receipt demo
      </h3>
      <p className="mt-1.5 text-sm text-muted">
        Enter a sample entity name to see a mock screening result with evidence lineage and receipt binding.
      </p>

      {/* Input */}
      <div className="mt-5 flex gap-2">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-light" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && runDemo()}
            placeholder="Try: Acme Shipping Ltd"
            className="w-full rounded-lg border border-border bg-surface-2 py-2.5 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-light outline-none transition-colors focus:border-accent"
          />
        </div>
        <button onClick={runDemo} className="btn-primary whitespace-nowrap text-sm !px-4 !py-2.5">
          Run Screen
          <ArrowRight size={13} />
        </button>
      </div>

      {/* Hint */}
      <p className="mt-2 text-xs text-muted-light">
        Try &quot;Acme Shipping Ltd&quot; (L1 match) or &quot;Global Trade Partners&quot; (L4 escalation).
        Any other input defaults to the Acme demo.
      </p>

      {/* Loading */}
      {loading && (
        <div className="mt-6 flex items-center gap-2 text-sm text-muted">
          <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-accent border-t-transparent" />
          Screening entity...
        </div>
      )}

      {/* Result */}
      {result && !loading && (
        <div className="mt-6 space-y-4 fade-in-up">
          {/* Result summary */}
          <div className="flex items-start justify-between gap-4 rounded-lg bg-surface-2 px-4 py-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-light">Result</p>
              <p className="mt-1 text-sm font-medium text-foreground">{result.result}</p>
            </div>
            <span className={`mt-1 shrink-0 rounded-md px-2.5 py-0.5 text-xs font-semibold ${
              result.state === "CLEARED"
                ? "bg-emerald-50 text-emerald-700"
                : "bg-amber-50 text-amber-700"
            }`}>
              {result.state}
            </span>
          </div>

          {/* Metrics row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Layer", value: result.layer },
              { label: "Confidence", value: result.confidence },
              { label: "Receipt Status", value: result.receipt.status },
            ].map((m) => (
              <div key={m.label} className="rounded-lg border border-border-light px-3 py-2.5">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-light">{m.label}</p>
                <p className={`mt-0.5 font-mono text-sm font-medium ${
                  m.value === "BOUND" ? "text-emerald-600" :
                  m.value === "ATTESTATION_PENDING" ? "text-amber-600" :
                  "text-foreground"
                }`}>
                  {m.value}
                </p>
              </div>
            ))}
          </div>

          {/* Lineage */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-light mb-2">
              Lineage Trace
            </p>
            <div className="space-y-0">
              {result.lineage.map((node, i) => (
                <div key={i} className="flex items-start gap-3 py-1.5">
                  <div className="mt-1 flex flex-col items-center">
                    <div className={`h-2 w-2 rounded-full ${
                      i === result.lineage.length - 1 ? "bg-accent" : "bg-border"
                    }`} />
                    {i < result.lineage.length - 1 && (
                      <div className="mt-0.5 h-4 w-px bg-border" />
                    )}
                  </div>
                  <span className="font-mono text-xs text-muted leading-relaxed">{node}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Receipt badge */}
          <div className="flex items-center justify-between rounded-lg border border-border bg-surface-2/60 px-4 py-3">
            <div className="flex items-center gap-2.5">
              <CheckCircle size={15} className={
                result.receipt.status === "BOUND" ? "text-emerald-500" : "text-amber-500"
              } />
              <div>
                <p className="font-mono text-xs text-foreground">{result.receipt.id}</p>
                <p className="font-mono text-[11px] text-muted-light">{result.receipt.hash}</p>
              </div>
            </div>
            <button className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:text-foreground hover:border-foreground">
              <Download size={12} />
              Receipt
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
