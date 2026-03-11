# Developer

CCAI is designed for API-first consumption. Platform teams integrate screening into existing workflows without adopting a standalone product.

---

## API-First Consumption

The primary integration surface is the REST API:

| Endpoint           | Method | Purpose                                    |
|--------------------|--------|--------------------------------------------|
| `/resolve`         | POST   | Screen a single entity                     |
| `/batch`           | POST   | Submit a batch of entities (JSON array)    |
| `/batch-upload`    | POST   | Upload a file for batch screening (multipart) |
| `/audit/{trace_id}`| GET    | Retrieve full audit trail for a screening  |
| `/health`          | GET    | System health with component status        |
| `/stats`           | GET    | Global performance metrics                 |

Authentication is via API key. Tenant context is bound via request header. All responses include trace identifiers for audit correlation.

---

## Batch Screening

Batch processing is the primary operational mode for most integrations:

1. Submit entity file (CSV, XLSX, JSON, Parquet) or JSON array
2. Receive batch_id and trace_id
3. Poll for completion or receive webhook notification
4. Retrieve results with per-entity resolution detail
5. Export evidence bundles or audit reports as needed

Batches support up to 10,000 entities per submission. Processing is parallelized across resolution layers. Results include layer distribution, confidence scores, and evidence references for every entity.

---

## Event and Webhook Model

CCAI emits events at key points in the screening lifecycle:

| Event                        | Trigger                                        |
|------------------------------|------------------------------------------------|
| `batch.completed`            | All entities in a batch have been resolved     |
| `batch.failed`               | Batch processing encountered an unrecoverable error |
| `alert.created`              | A new case has been escalated to human review  |
| `monitoring.delta`           | A monitored entity's status changed on re-screen |

Webhooks are delivered via HTTP POST with signed payloads. Events include the trace_id and batch_id for correlation with audit records.

---

## Evaluation Workspace

Before production integration, teams can evaluate CCAI in a sandboxed environment:

- Submit test batches against reference watchlist data
- Inspect resolution results, layer distribution, and evidence output
- Validate API integration patterns and response schemas
- Review audit export format and evidence bundle structure

The evaluation workspace uses the same engine and protocol as production. The only difference is the data scope and access tier.

---

## Why Use CCAI as a Layer

CCAI is infrastructure, not a product you switch to. It fits into existing compliance architectures:

**For platform teams** — Embed screening as an API call within existing entity onboarding, transaction monitoring, or KYC workflows. CCAI handles the resolution protocol and evidence generation. Your platform handles the business logic around the results.

**For compliance systems** — Feed CCAI the entity lists your existing systems produce. Consume the structured evidence output for regulatory reporting. CCAI does not replace your compliance program — it provides the screening execution and evidence layer.

**For data pipelines** — Submit batch files on a schedule. Receive structured results with full lineage. Load results into your data warehouse or reporting system. CCAI operates as a processing stage, not a destination.
