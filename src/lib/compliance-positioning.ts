export const examPackageSections = [
  {
    title: "Process narrative",
    body: "Plain-language account of intake, normalization, screening, evidence assembly, human review, and attestation boundaries.",
  },
  {
    title: "Evidence inventory",
    body: "DecisionEventPackage references, receipt IDs, snapshot metadata, rule versions, configuration snapshots, and source lineage.",
  },
  {
    title: "Human review trail",
    body: "Operator actions, review-quality requirements, approval evidence, timestamps, and PI involvement when PI assisted with drafts or summaries.",
  },
  {
    title: "Freshness disclosure",
    body: "Snapshot build time, upstream source timestamp when available, snapshot age, and any stale-window handling.",
  },
  {
    title: "Operational evidence",
    body: "Sentinel findings, required-action queues, restore-evidence readiness, and human handoff status when operational context affects review.",
  },
  {
    title: "Reliance boundary",
    body: "Explicit statement that CCAI provides screening signals and evidence records while the customer owns final compliance decisions.",
  },
]

export const evaluationBoundaries = [
  {
    boundary: "Reference data",
    meaning: "Evaluation tenants may use reference or fixture datasets instead of production provider feeds.",
  },
  {
    boundary: "No final reliance",
    meaning: "Evaluation output is for integration testing, evidence review, and workflow validation only.",
  },
  {
    boundary: "Limited retention",
    meaning: "Evaluation data is retained for a short period and should not be treated as a production record archive.",
  },
  {
    boundary: "Sandbox credentials",
    meaning: "Evaluation access does not grant production API keys, production provider data, or tenant policy administration.",
  },
]

export const freshnessSignals = [
  {
    signal: "Snapshot build timestamp",
    purpose: "Shows when CCAI assembled the local screening snapshot.",
  },
  {
    signal: "Upstream source timestamp",
    purpose: "Shows when the provider or regulator last published source data, when available.",
  },
  {
    signal: "Snapshot age",
    purpose: "Discloses the age of the data used for a screening result.",
  },
  {
    signal: "Freshness policy",
    purpose: "Compares snapshot age against the customer or environment policy.",
  },
  {
    signal: "Stale-window review",
    purpose: "Identifies results that may need review or re-screening after newer source data arrives.",
  },
  {
    signal: "Sentinel observations",
    purpose: "Surfaces source-age findings and freshness evidence for operator attention.",
  },
  {
    signal: "Operational queue items",
    purpose: "Shows when freshness or restore-evidence context needs a human handoff instead of silent automation.",
  },
]
