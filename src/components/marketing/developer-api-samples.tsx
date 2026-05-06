const apiSamples = [
  {
    title: "Upload a screening list",
    method: "POST",
    path: "/api/v1/lists/upload",
    description: "Accepts a CSV file or JSON array and returns a tenant-scoped snapshot.",
    request: `curl -X POST https://api.corecomplianceai.com/api/v1/lists/upload \\
  -H "X-API-Key: ccai_your_key" \\
  -H "Content-Type: application/json" \\
  -d '[
    {"name":"MV Northstar Trader","type":"VESSEL","id":"IMO 9123456","country":"MH"},
    {"name":"Blue Harbor Logistics LLC","type":"ORGANIZATION","country":"US"}
  ]'`,
    response: `{
  "list_id": "0196a3f7-24b8-7a9e-8c9f-88ebc7b9639e",
  "snapshot_id": "0196a3f7-24b8-7cf2-b35d-b78dcda743a1",
  "record_count": 2,
  "status": "ingested"
}`,
  },
  {
    title: "Run screening against the snapshot",
    method: "POST",
    path: "/api/v1/batches/run",
    description: "Starts screening for a previously uploaded snapshot and returns correlation IDs.",
    request: `curl -X POST https://api.corecomplianceai.com/api/v1/batches/run \\
  -H "X-API-Key: ccai_your_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "snapshot_id": "0196a3f7-24b8-7cf2-b35d-b78dcda743a1"
  }'`,
    response: `{
  "batch_id": "0196a3f7-7e04-76f2-9ef5-4daef6caa019",
  "job_id": "job_0196a3f7_0001",
  "snapshot_id": "0196a3f7-24b8-7cf2-b35d-b78dcda743a1",
  "status": "queued"
}`,
  },
  {
    title: "Retrieve the audit summary",
    method: "GET",
    path: "/api/v1/batches/{batch_id}/audit",
    description: "Returns compact evidence navigation metadata for a completed batch.",
    request: `curl https://api.corecomplianceai.com/api/v1/batches/0196a3f7-7e04-76f2-9ef5-4daef6caa019/audit \\
  -H "X-API-Key: ccai_your_key"`,
    response: `{
  "batch_id": "0196a3f7-7e04-76f2-9ef5-4daef6caa019",
  "snapshot_id": "0196a3f7-24b8-7cf2-b35d-b78dcda743a1",
  "status": "completed",
  "record_count": 2,
  "result_count": 2,
  "decision_counts": {
    "CLEARED": 1,
    "REVIEW": 1
  },
  "layer_distribution": {
    "L1_DETERMINISTIC": 1,
    "L2_VECTOR": 1
  },
  "media_signal_count": 0,
  "evidence_refs": {
    "results": "/api/v1/batches/0196a3f7-7e04-76f2-9ef5-4daef6caa019/results",
    "media_signals": "/api/v1/batches/0196a3f7-7e04-76f2-9ef5-4daef6caa019/media-signals"
  },
  "regulatory_status": "SCREENING_SIGNAL",
  "generated_at": "2026-05-04T14:31:00+00:00"
}`,
  },
]

export function DeveloperApiSamples() {
  return (
    <div className="space-y-5">
      {apiSamples.map((sample) => (
        <div key={sample.path} className="overflow-hidden rounded-2xl border border-border bg-[#111827] shadow-soft">
          <div className="border-b border-white/10 px-5 py-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-sky-400/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-sky-300">
                {sample.method}
              </span>
              <span className="font-mono text-sm text-gray-100">{sample.path}</span>
            </div>
            <h3 className="mt-3 text-base font-semibold text-white">{sample.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">{sample.description}</p>
          </div>

          <div className="grid gap-px bg-white/10 md:grid-cols-2">
            <div className="bg-[#111827]">
              <div className="border-b border-white/10 px-5 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                Request
              </div>
              <pre className="overflow-auto px-5 py-4 text-[12px] leading-relaxed text-gray-300">
                <code>{sample.request}</code>
              </pre>
            </div>
            <div className="bg-[#0f172a]">
              <div className="border-b border-white/10 px-5 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                Response
              </div>
              <pre className="overflow-auto px-5 py-4 text-[12px] leading-relaxed text-gray-300">
                <code>{sample.response}</code>
              </pre>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
