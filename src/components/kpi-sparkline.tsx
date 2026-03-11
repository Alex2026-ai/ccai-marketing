"use client"

import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts"
import { TrendingUp, TrendingDown } from "lucide-react"

const sparkData: Record<string, { v: number; label: string }[]> = {
  audit: [
    { v: 45, label: "Q1 '24" }, { v: 52, label: "Q2 '24" }, { v: 48, label: "Q3 '24" },
    { v: 60, label: "Q4 '24" }, { v: 55, label: "Jan" }, { v: 72, label: "Feb" },
    { v: 68, label: "Mar" }, { v: 78, label: "Apr" }, { v: 85, label: "May" },
    { v: 82, label: "Jun" }, { v: 90, label: "Jul" }, { v: 92, label: "Aug" },
  ],
  speed: [
    { v: 4.2, label: "Q1 '24" }, { v: 3.8, label: "Q2 '24" }, { v: 3.1, label: "Q3 '24" },
    { v: 2.8, label: "Q4 '24" }, { v: 2.4, label: "Jan" }, { v: 2.1, label: "Feb" },
    { v: 2.0, label: "Mar" }, { v: 1.9, label: "Apr" }, { v: 1.8, label: "May" },
    { v: 1.7, label: "Jun" }, { v: 1.6, label: "Jul" }, { v: 1.5, label: "Aug" },
  ],
  lineage: [
    { v: 94, label: "Q1 '24" }, { v: 95, label: "Q2 '24" }, { v: 96, label: "Q3 '24" },
    { v: 97, label: "Q4 '24" }, { v: 98, label: "Jan" }, { v: 99, label: "Feb" },
    { v: 99, label: "Mar" }, { v: 100, label: "Apr" }, { v: 100, label: "May" },
    { v: 100, label: "Jun" }, { v: 100, label: "Jul" }, { v: 100, label: "Aug" },
  ],
}

const deltas: Record<string, { text: string; direction: "up" | "down"; color: "green" | "red" }> = {
  audit: { text: "+12% QoQ", direction: "up", color: "green" },
  speed: { text: "-38% latency", direction: "down", color: "green" },
  lineage: { text: "100% since v3", direction: "up", color: "green" },
}

const units: Record<string, string> = {
  audit: "%",
  speed: "s",
  lineage: "%",
}

function SparkTooltip({ active, payload, dataKey }: { active?: boolean; payload?: Array<{ payload: { v: number; label: string } }>; dataKey: string }) {
  if (!active || !payload?.[0]) return null
  const { v, label } = payload[0].payload
  return (
    <div className="rounded-lg border border-border bg-surface px-3 py-2 shadow-sm">
      <p className="text-[10px] font-medium text-muted-light">{label}</p>
      <p className="font-mono text-sm font-semibold text-foreground">
        {v}{units[dataKey]}
      </p>
    </div>
  )
}

export function KpiSparkline({ dataKey }: { dataKey: "audit" | "speed" | "lineage" }) {
  const data = sparkData[dataKey]
  const delta = deltas[dataKey]

  return (
    <div>
      <div className="h-12 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={`grad-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity={0.12} />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <Tooltip
              content={<SparkTooltip dataKey={dataKey} />}
              cursor={{ stroke: "rgba(14,165,233,0.15)", strokeWidth: 1 }}
            />
            <Area
              type="monotone"
              dataKey="v"
              stroke="#0ea5e9"
              strokeWidth={1.5}
              fill={`url(#grad-${dataKey})`}
              dot={false}
              activeDot={{ r: 3, fill: "#0ea5e9", stroke: "#fff", strokeWidth: 2 }}
              animationDuration={1400}
              animationEasing="ease-out"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 flex items-center gap-1.5">
        {delta.direction === "up" ? (
          <TrendingUp size={12} className={delta.color === "green" ? "text-emerald-500" : "text-red-500"} />
        ) : (
          <TrendingDown size={12} className={delta.color === "green" ? "text-emerald-500" : "text-red-500"} />
        )}
        <span className={`font-mono text-[11px] font-medium ${
          delta.color === "green" ? "text-emerald-600" : "text-red-600"
        }`}>
          {delta.text}
        </span>
      </div>
    </div>
  )
}
