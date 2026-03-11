"use client"

import { useEffect, useState } from "react"

const layers = [
  { id: "L0", label: "Garbage Detection", color: "#94a3b8" },
  { id: "L1", label: "Deterministic Match", color: "#0ea5e9" },
  { id: "L2", label: "Vector Similarity", color: "#a78bfa" },
  { id: "L3", label: "Semantic Reasoning", color: "#f59e0b" },
  { id: "L4", label: "Human Review", color: "#ef4444" },
]

export function HeroDiagram() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className="mx-auto mt-16 max-w-md"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 1.2s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 1.2s cubic-bezier(0.16,1,0.3,1) 0.2s",
      }}
    >
      {/* Entity input */}
      <div className="mx-auto mb-3 w-fit rounded-lg border border-border bg-surface px-4 py-2 font-mono text-xs text-muted">
        entity_input
      </div>

      {/* Connector */}
      <div className="mx-auto h-4 w-px bg-border" />

      {/* Waterfall layers */}
      <div className="space-y-0">
        {layers.map((layer, i) => (
          <div key={layer.id} className="flex items-center gap-0">
            {/* Connector line */}
            {i > 0 && <div className="mx-auto h-2 w-px bg-border" style={{ marginLeft: "50%", position: "absolute" }} />}
            <div
              className="flex w-full items-center gap-3 border border-border-light bg-surface px-4 py-2.5 transition-all duration-500"
              style={{
                borderRadius: i === 0 ? "0.75rem 0.75rem 0 0" : i === layers.length - 1 ? "0 0 0.75rem 0.75rem" : "0",
                borderTopWidth: i === 0 ? "1px" : "0",
                opacity: visible ? 1 : 0,
                transitionDelay: `${0.6 + i * 0.12}s`,
              }}
            >
              <div
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded font-mono text-[10px] font-bold text-white"
                style={{ backgroundColor: layer.color }}
              >
                {layer.id}
              </div>
              <span className="text-xs font-medium text-foreground">{layer.label}</span>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="h-1 w-8 rounded-full bg-border" style={{ overflow: "hidden" }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: layer.color,
                      width: visible ? `${[20, 85, 8, 2, 5][i]}%` : "0%",
                      transition: `width 1s cubic-bezier(0.16,1,0.3,1) ${1 + i * 0.15}s`,
                      opacity: 0.7,
                    }}
                  />
                </div>
                <span className="font-mono text-[9px] tabular-nums text-muted-light">
                  {["~5%", "~85%", "~8%", "~2%", "~5%"][i]}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Connector */}
      <div className="mx-auto h-4 w-px bg-border" />

      {/* Evidence output */}
      <div className="flex items-center justify-center gap-2 rounded-lg border border-accent/20 bg-accent/4 px-4 py-2">
        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="font-mono text-xs font-medium text-accent">DecisionEventPackage</span>
      </div>
    </div>
  )
}
