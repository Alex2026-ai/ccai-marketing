const webhookPayload = {
  event_type: "batch.completed",
  tenant_id: "01969f8a-0d4f-74f4-a566-fb8c8d327002",
  payload: {
    batch_id: "0196a3f7-7e04-76f2-9ef5-4daef6caa019",
    snapshot_id: "0196a3f7-24b8-7cf2-b35d-b78dcda743a1",
    status: "completed",
    record_count: 2,
    error: "",
  },
} as const

export function WebhookPayloadSample() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-[#111827] shadow-soft">
      <div className="border-b border-white/10 px-5 py-4">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-300">
          Webhook POST body
        </p>
        <p className="mt-2 text-sm leading-relaxed text-gray-300">
          Product events are delivered as tenant-scoped JSON envelopes. Delivery attempts, retries, and dead-letter state are tracked internally.
        </p>
      </div>
      <pre className="overflow-auto px-5 py-5 text-[12px] leading-relaxed text-gray-300">
        <code>{JSON.stringify(webhookPayload, null, 2)}</code>
      </pre>
    </div>
  )
}
