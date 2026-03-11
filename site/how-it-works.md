# How It Works

CCAI screens entities through a structured protocol. Each stage produces traceable output. The full path from intake to attestation is deterministic, auditable, and reproducible.

---

## 1. Intake

Entities enter the system via batch upload or API submission. Each submission is assigned a unique trace identifier and bound to a tenant context.

During intake, the system:

- Detects file schema and identifies entity columns
- Classifies entity types (company, individual, vessel, address)
- Normalizes input (suffix stripping, transliteration, deduplication)
- Masks any detected PII before processing

The intake stage produces a normalized entity set ready for screening. No resolution decisions are made at this stage.

---

## 2. Screening

Each entity passes through the resolution waterfall — a sequence of layers ordered by cost and complexity:

| Layer | Method                  | Cost    | Description                                      |
|-------|-------------------------|---------|--------------------------------------------------|
| L0    | Garbage detection       | $0      | Filters invalid input (empty, numeric, file extensions, PII patterns) |
| L1    | Deterministic matching  | $0      | Exact match, normalized match, known alias/parent lookup |
| L2    | Vector similarity       | $0      | Character n-gram vectorization with cosine similarity against canonical index |
| L3    | Semantic reasoning      | ~$0.005 | LLM-based entity resolution for ambiguous cases  |
| L4    | Human review            | Variable| Escalation to operator queue for manual decision  |

An entity stops at the first layer that produces a confident resolution. Most entities resolve at L1 or L2. L3 and L4 handle the long tail.

Each layer records its result, confidence score, execution time, and the rules and data it consulted. This per-layer trace becomes part of the evidence record.

---

## 3. Evidence

Every screening decision produces a DecisionEventPackage — the structured evidence object that records:

- **Resolution path** — which layers were attempted and what each returned
- **Rule binding** — which rule pack version and specific rules were applied
- **Data binding** — which watchlist snapshot and reference data version were consulted
- **Confidence basis** — scores and thresholds at the resolving layer
- **Lineage** — full trace from raw input through normalization, clustering, resolution, and output
- **Configuration snapshot** — the exact tenant configuration active at execution time

The DecisionEventPackage is the irreducible output of the screening protocol. It cannot be modified after assembly.

---

## 4. Monitoring

Entities can be enrolled in continuous monitoring. When watchlist data is updated, monitored entities are automatically re-screened against the new snapshot.

Monitoring produces delta alerts when:

- A previously cleared entity now matches a new watchlist entry
- A match confidence score changes beyond a configured threshold
- A watchlist source is updated with new entries relevant to the entity

Each re-screening follows the same protocol and produces the same evidence structure as the initial screen.

---

## 5. Attestation via Intelligent Analyst

After evidence assembly, the DecisionEventPackage is handed off to Intelligent Analyst — the separate truth and attestation layer.

Intelligent Analyst:

- Records the decision in an append-only truth ledger
- Binds a VeracityReceipt to the decision (receipt_id, receipt_hash)
- Stores the receipt for long-term retention and regulatory retrieval
- Enables independent verification and replay

CCAI produces the screening decision. Intelligent Analyst attests it. These are separate systems with separate data stores. CCAI cannot modify IA records. IA cannot influence CCAI screening logic.

This separation ensures that the evidence record is independently verifiable and that no single system controls both the decision and its attestation.
