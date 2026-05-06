import { CheckCircle2, Copy, KeyRound, LockKeyhole, ServerCog } from "lucide-react"

const steps = [
  ["Tenant", "Bluewater Logistics", "created"],
  ["Region", "US primary", "selected"],
  ["Key", "prod_screening_...7f42", "issued"],
]

export function ProvisioningVisual() {
  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-border bg-surface text-left shadow-soft">
      <div className="border-b border-border-light bg-surface-2/50 px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-light">
              Self-serve provisioning
            </p>
            <h3 className="mt-1 text-[15px] font-semibold text-foreground">Evaluation tenant ready</h3>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
            <CheckCircle2 size={12} />
            Active
          </span>
        </div>
      </div>

      <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
        <div className="border-b border-border-light p-4 md:border-b-0 md:border-r">
          <div className="space-y-3">
            {steps.map(([label, value, status]) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/8 text-accent">
                  {label === "Key" ? <KeyRound size={15} /> : <ServerCog size={15} />}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-light">
                    {label}
                  </p>
                  <p className="truncate text-[12px] font-semibold text-foreground">{value}</p>
                </div>
                <span className="text-[10px] text-muted-light">{status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4">
          <div className="rounded-lg border border-border-light bg-background p-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <LockKeyhole size={14} className="text-accent" />
                <span className="text-[11px] font-semibold text-foreground">Key handling</span>
              </div>
              <Copy size={13} className="text-muted-light" />
            </div>
            <div className="mt-3 space-y-2 font-mono text-[10px]">
              <p><span className="text-muted-light">scope:</span> <span className="text-foreground">screen:batch</span></p>
              <p><span className="text-muted-light">expires:</span> <span className="text-foreground">90 days</span></p>
              <p><span className="text-muted-light">secret:</span> <span className="text-foreground">shown once</span></p>
            </div>
          </div>
          <p className="mt-3 text-[10px] leading-relaxed text-muted">
            The raw API key is returned only at creation. Browser surfaces route through the BFF; server-only credentials stay off the client.
          </p>
        </div>
      </div>
    </div>
  )
}
