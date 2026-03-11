"use client"

import { AreaChart, Area, ResponsiveContainer } from "recharts"

const sparkData: Record<string, { v: number }[]> = {
  audit: [
    { v: 45 }, { v: 52 }, { v: 48 }, { v: 60 }, { v: 55 }, { v: 72 },
    { v: 68 }, { v: 78 }, { v: 85 }, { v: 82 }, { v: 90 }, { v: 92 },
  ],
  speed: [
    { v: 4.2 }, { v: 3.8 }, { v: 3.1 }, { v: 2.8 }, { v: 2.4 }, { v: 2.1 },
    { v: 2.0 }, { v: 1.9 }, { v: 1.8 }, { v: 1.7 }, { v: 1.6 }, { v: 1.5 },
  ],
  lineage: [
    { v: 94 }, { v: 95 }, { v: 96 }, { v: 97 }, { v: 98 }, { v: 99 },
    { v: 99 }, { v: 100 }, { v: 100 }, { v: 100 }, { v: 100 }, { v: 100 },
  ],
}

const deltas: Record<string, string> = {
  audit: "+12% QoQ",
  speed: "-38% latency",
  lineage: "100% since v3",
}

export function KpiSparkline({ dataKey }: { dataKey: "audit" | "speed" | "lineage" }) {
  const data = sparkData[dataKey]

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
            <Area
              type="monotone"
              dataKey="v"
              stroke="#0ea5e9"
              strokeWidth={1.5}
              fill={`url(#grad-${dataKey})`}
              dot={false}
              animationDuration={1400}
              animationEasing="ease-out"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-2 font-mono text-[11px] font-medium text-accent/70">
        {deltas[dataKey]}
      </p>
    </div>
  )
}
