import type { Metadata } from "next"
import { SectionHeader } from "@/components/marketing/section-header"
import { CTAPair } from "@/components/marketing/cta-buttons"
import { FinalCTASection } from "@/components/marketing/final-cta-section"

export const metadata: Metadata = {
  title: "Developer API — CoreCompliance AI",
  description: "API-first sanctions screening. Upload lists, run screening, query ownership graphs, retrieve intelligence signals — all via REST API with API key authentication.",
}

const endpoints = [
  { method: "POST", path: "/api/v1/lists/upload", desc: "Upload entity list (CSV or JSON)" },
  { method: "POST", path: "/api/v1/batches/run", desc: "Run screening against a snapshot" },
  { method: "GET", path: "/api/v1/batches/{id}", desc: "Check batch status" },
  { method: "GET", path: "/api/v1/batches/{id}/results", desc: "Retrieve screening results" },
  { method: "GET", path: "/api/v1/batches/{id}/media-signals", desc: "Adverse media intelligence" },
  { method: "POST", path: "/api/v1/review-cases/create-from-batch", desc: "Create review cases" },
  { method: "GET", path: "/api/v1/review-cases", desc: "List review cases" },
  { method: "PATCH", path: "/api/v1/review-cases/{id}", desc: "Update case status" },
  { method: "GET", path: "/api/v1/snapshots/{id}/graph/ownership/{entity}", desc: "Ownership graph" },
]

export default function DevelopersPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            API-first compliance screening.
          </h1>
          <p className="mt-6 text-[16px] leading-relaxed text-muted">
            Upload a list, screen it, query the ownership graph, retrieve intelligence signals —
            all through a clean REST API. No SDK required. No integration project.
          </p>
          <CTAPair className="mt-8 justify-center" />
        </div>
      </section>

      {/* Quickstart */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeader eyebrow="Quickstart" title="Screen your first list in 4 commands." centered />
          <div className="mt-10 space-y-4">
            {[
              { step: 1, label: "Upload a list", cmd: `curl -X POST https://api.corecomplianceai.com/api/v1/lists/upload \\
  -H "X-API-Key: ccai_your_key" \\
  -H "Content-Type: application/json" \\
  -d '[{"name":"Acme Corp"},{"name":"Gazprom Export"}]'` },
              { step: 2, label: "Screen the list", cmd: `curl -X POST https://api.corecomplianceai.com/api/v1/batches/run \\
  -H "X-API-Key: ccai_your_key" \\
  -H "Content-Type: application/json" \\
  -d '{"snapshot_id":"snap-123"}'` },
              { step: 3, label: "Get results", cmd: `curl https://api.corecomplianceai.com/api/v1/batches/batch-456/results \\
  -H "X-API-Key: ccai_your_key"` },
              { step: 4, label: "Query ownership graph", cmd: `curl "https://api.corecomplianceai.com/api/v1/snapshots/snap-123/graph/ownership/Gazprom%20Export?depth=3" \\
  -H "X-API-Key: ccai_your_key"` },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-border bg-surface-2/30 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-[11px] font-bold text-accent">
                    {s.step}
                  </span>
                  <span className="text-[13px] font-semibold text-foreground">{s.label}</span>
                </div>
                <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-[12px] text-muted">{s.cmd}</pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="border-t border-border bg-foreground/[0.02] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionHeader eyebrow="API surface" title="Everything you need. Nothing you don't." centered />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-[0.1em] text-muted-light">
                  <th className="pb-3 pr-4">Method</th>
                  <th className="pb-3 pr-6">Endpoint</th>
                  <th className="pb-3">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {endpoints.map((ep) => (
                  <tr key={ep.path} className="border-t border-border-light">
                    <td className="py-2.5 pr-4">
                      <span className={`rounded px-1.5 py-0.5 font-mono text-[11px] font-semibold ${
                        ep.method === "GET" ? "bg-green-50 text-green-700" :
                        ep.method === "POST" ? "bg-sky-50 text-sky-700" :
                        "bg-amber-50 text-amber-700"
                      }`}>{ep.method}</span>
                    </td>
                    <td className="py-2.5 pr-6 font-mono text-[12px] text-foreground">{ep.path}</td>
                    <td className="py-2.5 text-muted">{ep.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Auth */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeader eyebrow="Authentication" title="API key. That's it." centered />
          <p className="mt-4 text-center text-[14px] text-muted max-w-lg mx-auto">
            Every request requires an <code className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[12px] text-foreground">X-API-Key</code> header.
            Your API key is bound to a tenant — all data is automatically scoped.
            No OAuth flows. No session management. No token refresh.
          </p>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
