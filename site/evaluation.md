# Evaluation

CCAI provides a guided evaluation path. Teams can test the screening protocol, inspect evidence output, and validate integration patterns before committing to production use.

---

## Evaluation Workspace

The evaluation environment runs the same engine and protocol as production. It is not a demo or simulation — it executes real screening logic against reference data.

The workspace provides:

- **Batch submission** — Upload test entity files or submit via API
- **Result inspection** — View per-entity resolution, layer distribution, and confidence scores
- **Evidence review** — Inspect DecisionEventPackage structure and content
- **Audit export** — Generate sample audit reports and evidence bundles
- **API validation** — Test integration patterns against live endpoints

Evaluation runs are tenant-isolated and do not affect production data.

---

## What You Can Try

### Batch screening accuracy

Submit a known entity list and compare CCAI resolution results against expected outcomes. Inspect which layer resolved each entity and the confidence basis for each decision.

### Layer distribution analysis

Review how entities distribute across L1 (deterministic), L2 (vector), L3 (semantic), and L4 (human review). Understand cost implications — L1 and L2 are zero-cost, L3 incurs per-call LLM cost, L4 requires operator time.

### Evidence completeness

Examine the DecisionEventPackage for representative entities. Verify that lineage, rule bindings, data bindings, and configuration snapshots are present and internally consistent.

### Integration patterns

Test the API endpoints with your existing tooling. Validate request/response schemas, error handling, and webhook delivery. Confirm that the integration surface meets your platform requirements.

### Audit report format

Generate a sample audit report and review the regulatory narrative format. Confirm that the evidence chain, governance metadata, and receipt references meet your reporting requirements.

---

## Limits and Safety

The evaluation environment has defined boundaries:

| Constraint              | Limit                                             |
|-------------------------|---------------------------------------------------|
| Batch size              | Up to 1,000 entities per submission               |
| L3 budget               | Capped per evaluation tenant                      |
| Data scope              | Reference watchlist data (not production feeds)    |
| Retention               | Evaluation data retained for 30 days              |
| Tenant isolation         | Evaluation tenants are fully isolated from production |

Evaluation access does not grant production API keys, access to production data, or the ability to modify system configuration.

---

## Request Access

To begin evaluation:

1. **Request access** — Submit a request through the site. Include your organization, use case, and estimated screening volume.
2. **Receive credentials** — Evaluation tenant provisioned with API key and dashboard access.
3. **Run evaluation** — Submit test data, inspect results, validate integration.
4. **Review with team** — Export evidence samples and audit reports for internal review.
5. **Proceed or ask questions** — Move to production onboarding or schedule a technical discussion.

There is no sales process required to begin evaluation. Access is granted based on use case fit.
