import type { Metadata } from "next"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { ReceiptDemo } from "@/components/receipt-demo"

export const metadata: Metadata = {
  title: "Evidence — CoreCompliance AI",
  description:
    "Evidence bundles, receipt binding, audit exports, and regulatory examination support.",
}

const bundleComponents = [
  { component: "Resolution trace", content: "Which layers were attempted, what each returned, where resolution occurred" },
  { component: "Confidence basis", content: "Score and threshold at the resolving layer" },
  { component: "Rule binding", content: "Rule pack version, rule pack hash, specific rules triggered" },
  { component: "Data binding", content: "Watchlist snapshot ID, snapshot hash, sources consulted" },
  { component: "Config snapshot", content: "Tenant configuration version active at execution time" },
  { component: "Lineage", content: "Full path from raw input through normalization, clustering, resolution, and output" },
  { component: "Entity context", content: "Input entity, resolved canonical match, entity type, source batch" },
  { component: "Execution metadata", content: "Trace ID, batch ID, decision run ID, timestamps, execution hash" },
]

const exportTypes = [
  { type: "Screening results", format: "CSV", contents: "Entity results with layer, confidence, decision" },
  { type: "Evidence bundle", format: "JSON", contents: "Full DecisionEventPackage per entity" },
  { type: "Audit report", format: "PDF", contents: "Regulatory narrative with evidence chain and governance metadata" },
  { type: "Lineage export", format: "JSON", contents: "Complete input-to-output trace per entity" },
  { type: "Receipt archive", format: "ZIP", contents: "VeracityReceipts for all entities in a batch" },
]

const receiptFields = [
  { field: "receipt_id", purpose: "Unique identifier for the attestation receipt" },
  { field: "receipt_hash", purpose: "SHA-256 hash binding the receipt to the decision" },
  { field: "receipt_status", purpose: "BOUND (attested) or ATTESTATION_PENDING (IA unavailable)" },
  { field: "bound_at", purpose: "Timestamp of attestation" },
]

export default function EvidencePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 md:py-36 lg:px-8">
      {/* Header */}
      <div className="fade-in-up">
        <p className="section-label">Evidence</p>
        <div className="section-divider mt-4" />
        <h1 className="mt-6 text-[2.5rem] font-semibold tracking-tight leading-[1.08] md:text-[2.75rem]">
          Every decision produces a verifiable record.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          This is not a log or a score. It is a complete, structured account of
          what was decided, why, and with what data.
        </p>
      </div>

      {/* Evidence Bundle */}
      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          Evidence Bundle
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          The core evidence object is the DecisionEventPackage. Once assembled,
          it is immutable — no field can be modified, appended, or removed.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-surface-2/50">
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                  Component
                </th>
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                  Content
                </th>
              </tr>
            </thead>
            <tbody>
              {bundleComponents.map((c) => (
                <tr key={c.component} className="border-b border-border-light last:border-0">
                  <td className="px-4 py-3 text-sm font-medium text-foreground whitespace-nowrap align-top">
                    {c.component}
                  </td>
                  <td className="px-4 py-3 text-sm text-muted">
                    {c.content}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateOnScroll>

      {/* Example */}
      <AnimateOnScroll className="mt-14">
        <h3 className="text-base font-semibold text-foreground">
          Example evidence record
        </h3>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-border bg-[#111827] px-6 py-5 font-mono text-[13px] leading-[1.7]">
          {[
            ["trace_id", "tr_2026_03_11_08421234"],
            ["decision_state", "CLEARED"],
            ["resolution_layer", "L1_EXACT"],
            ["confidence", "0.98"],
            ["rule_pack_version", "rp_v3.2.1"],
            ["watchlist_snapshot", "ws_2026_03_10_daily"],
            ["config_snapshot", "cs_2026_03_11_0842"],
            ["receipt_id", "rct_5b6d\u2026e91c"],
            ["receipt_status", "BOUND"],
          ].map(([key, val]) => (
            <div key={key} className="text-gray-400">
              <span className="text-gray-500">{key}:</span>{" "}
              <span className="text-sky-400">{val}</span>
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      {/* Interactive Receipt Demo */}
      <AnimateOnScroll className="mt-24">
        <p className="section-label mb-5">Try It</p>
        <ReceiptDemo />
      </AnimateOnScroll>

      {/* Receipt References */}
      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          Receipt References
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          After evidence assembly, the package is handed to Intelligent Analyst
          for attestation. The receipt is stored in the IA truth ledger and can
          be independently retrieved and verified without access to CCAI.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-surface-2/50">
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                  Field
                </th>
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {receiptFields.map((f) => (
                <tr key={f.field} className="border-b border-border-light last:border-0">
                  <td className="px-4 py-3 font-mono text-[13px] font-medium text-foreground whitespace-nowrap">
                    {f.field}
                  </td>
                  <td className="px-4 py-3 text-sm text-muted">
                    {f.purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateOnScroll>

      {/* Audit Export */}
      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">Audit Export</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Evidence can be exported in formats suitable for regulatory
          examination. Audit reports include governance context: rule pack
          version, threshold policy, approval chain, and configuration snapshot.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-surface-2/50">
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                  Type
                </th>
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                  Format
                </th>
                <th className="hidden px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light sm:table-cell">
                  Contents
                </th>
              </tr>
            </thead>
            <tbody>
              {exportTypes.map((e) => (
                <tr key={e.type} className="border-b border-border-light last:border-0">
                  <td className="px-4 py-3 text-sm font-medium text-foreground whitespace-nowrap">
                    {e.type}
                  </td>
                  <td className="px-4 py-3">
                    <span className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[11px] font-medium text-muted">
                      {e.format}
                    </span>
                  </td>
                  <td className="hidden px-4 py-3 text-sm text-muted sm:table-cell">
                    {e.contents}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateOnScroll>

      {/* Why This Matters */}
      <AnimateOnScroll className="mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          Why this matters for regulated use.
        </h2>
        <div className="mt-8 space-y-4">
          {[
            {
              q: "What was the decision?",
              a: "CCAI records the resolution outcome and decision state for every entity.",
            },
            {
              q: "What data was used?",
              a: "The watchlist snapshot ID and hash identify exactly which version of reference data was consulted. Snapshot immutability ensures the data cannot be retroactively changed.",
            },
            {
              q: "What rules were applied?",
              a: "Rule pack versioning with approval chains provides a complete governance trail. The configuration snapshot records the exact policy state at execution time.",
            },
            {
              q: "Can the decision be reproduced?",
              a: "The combination of input entity, configuration snapshot, watchlist snapshot, and rule pack version is sufficient to replay any decision.",
            },
            {
              q: "Is the evidence independently verifiable?",
              a: "The VeracityReceipt is stored in a separate system (IA) with its own integrity guarantees. The hash binding allows independent verification without trusting either system alone.",
            },
          ].map((item) => (
            <div key={item.q} className="card-surface px-6 py-5">
              <h3 className="text-[15px] font-semibold text-foreground">
                {item.q}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-base leading-relaxed text-muted">
          CCAI does not claim to eliminate compliance risk. It provides the
          evidence infrastructure that allows regulated institutions to
          demonstrate the rigor, consistency, and traceability of their
          screening operations.
        </p>
      </AnimateOnScroll>
    </div>
  )
}
