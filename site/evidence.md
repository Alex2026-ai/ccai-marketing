# Evidence

Every CCAI screening decision produces a structured evidence record. This is not a log or a score — it is a complete, verifiable account of what was decided, why, and with what data.

---

## Evidence Bundle

The core evidence object is the DecisionEventPackage. Each package contains:

| Component              | Content                                                    |
|------------------------|------------------------------------------------------------|
| Resolution trace       | Which layers were attempted, what each returned, where resolution occurred |
| Confidence basis       | Score and threshold at the resolving layer                 |
| Rule binding           | Rule pack version, rule pack hash, specific rules triggered |
| Data binding           | Watchlist snapshot ID, snapshot hash, sources consulted    |
| Configuration snapshot | Tenant configuration version active at execution time      |
| Lineage                | Full path from raw input through normalization, clustering, resolution, and output |
| Entity context         | Input entity, resolved canonical match, entity type, source batch |
| Execution metadata     | Trace ID, batch ID, decision run ID, timestamps, execution hash |

The DecisionEventPackage is assembled after resolution completes. Once assembled, it is immutable. No field can be modified, appended, or removed.

---

## Receipt References

After evidence assembly, the package is handed to Intelligent Analyst for attestation:

| Field            | Purpose                                              |
|------------------|------------------------------------------------------|
| `receipt_id`     | Unique identifier for the attestation receipt        |
| `receipt_hash`   | SHA-256 hash binding the receipt to the decision     |
| `receipt_status` | BOUND (attested), ATTESTATION_PENDING (IA unavailable) |
| `bound_at`       | Timestamp of attestation                             |

The receipt is stored in the IA truth ledger. It can be independently retrieved and verified without access to CCAI. The hash binding ensures that the receipt corresponds to exactly the decision that was made — any modification to either side breaks the binding.

---

## Audit Export

Evidence can be exported in formats suitable for regulatory examination:

| Export Type         | Format | Contents                                              |
|---------------------|--------|-------------------------------------------------------|
| Screening results   | CSV    | Entity results with layer, confidence, decision       |
| Evidence bundle     | JSON   | Full DecisionEventPackage per entity                  |
| Audit report        | PDF    | Regulatory narrative with evidence chain and governance metadata |
| Lineage export      | JSON   | Complete input-to-output trace per entity             |
| Receipt archive     | ZIP    | VeracityReceipts for all entities in a batch          |

Audit reports include governance context: the rule pack version, threshold policy, approval chain, and configuration snapshot that governed the screening. This allows examiners to understand not just what was decided, but under what policy regime.

---

## Why This Matters for Regulated Use

Regulatory examination of sanctions screening programs typically requires:

1. **What was the decision?** — CCAI records the resolution outcome and decision state for every entity.

2. **What data was used?** — The watchlist snapshot ID and hash identify exactly which version of reference data was consulted. Snapshot immutability ensures the data cannot be retroactively changed.

3. **What rules were applied?** — Rule pack versioning with approval chains provides a complete governance trail. The configuration snapshot records the exact policy state at execution time.

4. **Can the decision be reproduced?** — The combination of input entity, configuration snapshot, watchlist snapshot, and rule pack version is sufficient to replay any decision and verify that the same output is produced.

5. **Is the evidence independently verifiable?** — The VeracityReceipt is stored in a separate system (IA) with its own integrity guarantees. The hash binding allows independent verification without trusting either system alone.

CCAI does not claim to eliminate compliance risk. It provides the evidence infrastructure that allows regulated institutions to demonstrate the rigor, consistency, and traceability of their screening operations.
