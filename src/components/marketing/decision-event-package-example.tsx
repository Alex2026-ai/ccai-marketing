const decisionEventPackageExample = {
  protocol_version: "1.0.0",
  event_id: "0196a3c8-8d55-7a6a-b5df-51e6ad6f2471",
  trace_id: "0196a3c8-8d55-7e47-a7e3-3dbe5d19c2a4",
  tenant_id: "01969f8a-0d4f-74f4-a566-fb8c8d327002",
  case_id: "0196a3c8-8d55-7dc8-8dc2-e1fcbec20691",
  batch_id: "0196a3c8-1c7a-78d3-a673-9bf2e95e03e6",
  event_type: "SCREENING",
  created_at: "2026-05-04T14:22:18Z",
  execution_context_fingerprint: "2db8d1b710a9488fd7ed34e2e0fdad14d6d72a3a1d7d80bb2da3120aa8194a5c",
  region_context: "us",
  subject_type: "VESSEL",
  original_input: "MV Northstar Trader, IMO 9123456",
  normalized_input: "mv northstar trader imo 9123456",
  input_hash: "ce8d9f5665e1bfb980236dbe8ad40d780857f776fdc8aa6f8a21ff309b3f6f86",
  jurisdiction_hint: "US",
  jurisdiction_risk_tier: "STANDARD",
  jurisdiction_risk_score: 0.18,
  jurisdiction_matched_lists: [],
  vessel_enrichment_status: "ENRICHED",
  vessel_imo: "9123456",
  vessel_flag_state: "Marshall Islands",
  vessel_type: "Container Ship",
  vessel_owner: "Northstar Maritime Holdings",
  vessel_risk_flag: "",
  input_fields: {
    name: "MV Northstar Trader",
    imo: "9123456",
    flag_state: "Marshall Islands",
  },
  entity_type: "VESSEL",
  entity_type_confidence: 0.97,
  screening_type: "SANCTIONS",
  screening_mode: "BATCH",
  tenant_policy_id: "01969f8a-34e9-7814-a0d2-dde2fd45728f",
  tenant_policy_version: "shipping-eval-2026.05",
  decision_state: "REVIEW",
  decision_label: "POTENTIAL_MATCH_REVIEW",
  resolution_layer: "L2_VECTOR",
  resolution_confidence: 0.61,
  resolution_reason: "Potential alias similarity below block threshold; routed to human review.",
  routing: "HUMAN",
  requires_human_review: true,
  finalized: false,
  reason_summary: "Screening signal routed to review with evidence preserved for operator disposition.",
  decision_path: [
    {
      layer: "L0_GARBAGE",
      executed: true,
      outcome: "VALID_INPUT",
      score: null,
      threshold_applied: null,
      reason: "Structured vessel name and IMO present.",
    },
    {
      layer: "L1_DETERMINISTIC",
      executed: true,
      outcome: "NO_MATCH",
      matched_candidate_id: null,
      score: 0,
      threshold_applied: 1,
      reason: "No exact, normalized, or alias match.",
    },
    {
      layer: "L2_VECTOR",
      executed: true,
      outcome: "POTENTIAL_MATCH",
      matched_candidate_id: "wl_sdn_vessel_candidate_4c72",
      score: 0.61,
      threshold_applied: 0.55,
      reason: "Similarity exceeded review threshold and remained below block threshold.",
    },
    {
      layer: "L3_SEMANTIC",
      executed: false,
      outcome: "SKIPPED",
      reason: "Tenant policy routes this confidence band directly to human review.",
    },
    {
      layer: "L4_HUMAN",
      executed: true,
      outcome: "QUEUED",
      reason: "Operator review required before customer reliance.",
    },
  ],
  rules_context: {
    rule_pack_id: "01969f8a-576b-77df-8306-23304c1e0c41",
    rule_pack_version: "sanctions-maritime-2026.05",
    rule_pack_hash: "24a441f6a6b66481d880107a8f5aef2f5bd57a4f01e9f01bc91c7c4eeb64f940",
    rules_evaluated: 43,
    rules_triggered: 2,
    threshold_policy_id: "01969f8a-7ad0-7a85-8a57-74887c880a5c",
    threshold_policy_version: "review-band-2026.05",
    rules_version: "ruleset:2026.05.04",
  },
  reference_data_context: {
    watchlist_snapshot_id: "0196a276-7b5f-7522-9f7e-6095601031a4",
    watchlist_snapshot_hash: "6c77f192b97a4c2bd5e68f616e2bceaf7e77bb890d478c040de07df18a66a1a8",
    watchlist_sources: ["OFAC_SDN", "EU_CONSOLIDATED", "UN_SANCTIONS", "UK_OFSI"],
    matched_data_version: "watchlist:6c77f192b97a4c2bd5e68f616e2bceaf7e77bb890d478c040de07df18a66a1a8",
    entity_graph_snapshot_id: "0196a276-874f-72af-b878-c031438e92be",
    canonical_registry_version: "canonical-registry:2026.05.04",
    alias_registry_version: "alias-registry:2026.05.04",
  },
  model_context: null,
  evidence_artifacts: [
    {
      artifact_id: "0196a3c8-9f24-7bd4-b14e-9262c31b1af0",
      artifact_type: "INPUT_RECORD",
      artifact_hash: "21ce9c9d28f1cf7281bb84921970f637d1a68a9a8606f2bfbfbd98ed6800f0d4",
      storage_uri: "evidence://batch/0196a3c8/input/row-00042.json",
      role: "primary_input",
    },
    {
      artifact_id: "0196a3c8-a24d-76b7-8e64-67a0a1824a97",
      artifact_type: "MATCH_SCORE_DETAIL",
      artifact_hash: "e8a4a942ea20f9ff54102f96087b232c5f1c5ed334fbdf2fa3f3ff0a34d1ff47",
      storage_uri: "evidence://batch/0196a3c8/matches/row-00042.json",
      role: "match_detail",
    },
  ],
  human_governance: {
    review_status: "PENDING",
    approvals: [],
    overrides: [],
    escalations: ["case_rev_0196a3c8_00042"],
  },
  regulatory_reliance: {
    regulatory_status: "SCREENING_SIGNAL",
    reliance_boundary: "CUSTOMER_FINAL_DECISION",
    reliance_warning: "Screening signal only. Customer retains final review, legal interpretation, and reliance.",
    jurisdiction_basis: ["OFAC_SDN", "EU_CONSOLIDATED", "UK_OFSI"],
    legal_basis_refs: ["31 CFR Part 501", "EU consolidated financial sanctions list", "UK sanctions list"],
    snapshot_age_hours: 5,
    upstream_source_published_at: "2026-05-04T09:00:00Z",
    operator_review_required: true,
    review_quality_requirement: "EVIDENCE_ACKNOWLEDGEMENT_REQUIRED",
    explanation_verification_status: "VERIFIED",
    contradiction_protocol_required: false,
    exam_package_ready: true,
  },
  integrity: {
    package_hash: "0cb0d2212ee7d5ea0bdf6712e917b1c28a52453bc0cffbb352d9df3cd2efaa74",
    canonicalization_method: "json-canonical-sha256",
    tamper_evident: true,
    requires_attestation: true,
  },
} as const

export function DecisionEventPackageExample() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-[#111827] shadow-soft">
      <div className="border-b border-white/10 px-5 py-4">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-300">
          Synthetic DecisionEventPackage
        </p>
        <p className="mt-2 text-sm leading-relaxed text-gray-300">
          Contract-shaped example for evaluation review. IDs, hashes, entity names, and timestamps are synthetic.
        </p>
      </div>
      <pre className="max-h-[560px] overflow-auto px-5 py-5 text-[12px] leading-relaxed text-gray-300">
        <code>{JSON.stringify(decisionEventPackageExample, null, 2)}</code>
      </pre>
      <p className="border-t border-white/10 px-5 py-3 text-[11px] leading-relaxed text-gray-400">
        The VeracityReceipt is bound after this package is assembled; it is not embedded inside the package.
      </p>
    </div>
  )
}
