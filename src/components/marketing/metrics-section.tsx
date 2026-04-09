const metrics = [
  { value: "72,859", label: "Sanctions entries across 15 source lists" },
  { value: "656K", label: "PEP records (OpenSanctions)" },
  { value: "<17s", label: "100K entities screened" },
  { value: "6,000+", label: "Rows/second sustained throughput" },
]

export function MetricsSection() {
  return (
    <section className="border-t border-border bg-foreground/[0.02] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <h2 className="text-center text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Trusted by compliance teams who need to defend their decisions.
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <span className="block text-3xl font-bold tabular-nums text-accent sm:text-4xl">
                {m.value}
              </span>
              <span className="mt-2 block text-[12px] text-muted">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
