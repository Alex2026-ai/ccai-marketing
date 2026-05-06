import { CheckCircle2, Clock3, FileCheck2, ShieldCheck, UserCheck } from "lucide-react"

const evidenceRows = [
  ["decision", "REVIEW"],
  ["resolution_layer", "L2 fuzzy"],
  ["matched_list", "OFAC SDN candidate"],
  ["snapshot_age", "5h 18m"],
]

const gates = [
  { label: "Structured reason", state: "required", icon: FileCheck2 },
  { label: "Evidence acknowledged", state: "pending", icon: ShieldCheck },
  { label: "Human review owner", state: "assigned", icon: UserCheck },
]

export function CaseReviewVisual() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-soft">
      <div className="border-b border-border-light bg-surface-2/50 px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-light">
              Case package
            </p>
            <h3 className="mt-1 text-[15px] font-semibold text-foreground">Northstar Maritime Ltd.</h3>
          </div>
          <span className="rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1 text-[10px] font-semibold text-amber-700">
            REVIEW
          </span>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="border-b border-border-light p-4 lg:border-b-0 lg:border-r">
          <div className="rounded-lg border border-border-light bg-background p-3">
            <div className="flex items-center gap-2">
              <Clock3 size={13} className="text-accent" />
              <span className="text-[11px] font-semibold text-foreground">Review timeline</span>
            </div>
            <div className="mt-4 space-y-3">
              {["Screened", "Case created", "Analyst review", "Disposition pending"].map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-border bg-surface text-[10px] font-semibold text-muted">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-medium text-foreground">{item}</p>
                    <p className="text-[10px] text-muted-light">
                      {index < 2 ? "Evidence recorded" : "Human-owned step"}
                    </p>
                  </div>
                  {index < 2 && <CheckCircle2 size={14} className="text-success" />}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {evidenceRows.map(([key, value]) => (
              <div key={key} className="rounded-lg border border-border-light bg-surface-2/40 px-3 py-2">
                <p className="font-mono text-[10px] text-muted-light">{key}</p>
                <p className="mt-1 text-[12px] font-semibold text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-light">
            Review-quality gate
          </p>
          <div className="mt-3 space-y-2">
            {gates.map((gate) => (
              <div key={gate.label} className="flex items-center gap-2 rounded-lg border border-border-light px-3 py-2">
                <gate.icon size={14} className="text-accent" />
                <div className="min-w-0 flex-1">
                  <p className="text-[12px] font-medium text-foreground">{gate.label}</p>
                  <p className="text-[10px] text-muted-light">{gate.state}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg border border-accent/20 bg-accent-subtle px-3 py-3">
            <p className="text-[11px] font-semibold text-foreground">PI can draft. Humans approve.</p>
            <p className="mt-1 text-[10px] leading-relaxed text-muted">
              Draft language is review support only; disposition and send execution stay behind human-owned gates.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
