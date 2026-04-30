# Public Compliance Certification Narrative

**Status:** Public positioning draft  
**Scope:** `ccai-marketing` public website and content docs  
**Last updated:** 2026-04-30

This document defines how the public site should describe CCAI's compliance certification story without overstating product authority.

## Public Position

CoreCompliance AI is deterministic screening infrastructure for regulated teams. It helps customers produce screening signals, evidence records, review cases, and examination-ready narratives.

Public copy must not say or imply that CCAI:

- provides legal advice
- makes final regulatory determinations
- replaces the customer's compliance officer
- eliminates compliance risk
- guarantees screening outcomes

## Cross-Repo Responsibility Model

| Repository | Certification responsibility |
|---|---|
| `ccai-engine` | Source of record for deterministic screening, reliance metadata, jurisdiction semantics, PI safety, exam package generation, durability posture, and audit controls |
| `ccai-frontend` | Operator surface for BFF-safe workflows, review-quality friction, PI draft review, and clearly labeled exam package drafts |
| `ccai-marketing` | Public explanation of the system, evaluation boundaries, data freshness, reliance boundaries, and examination readiness |

The marketing site should point prospects toward the certification story, but it must not invent implementation details that the engine and frontend do not support.

## Required Public Framing

- CCAI outputs are screening signals and evidence records.
- Customers own final compliance decisions and legal interpretation.
- Determinism is scoped to the same canonical input, rules, tenant configuration, and data snapshot.
- Data freshness is part of reliance context.
- PI can assist with drafts and explanations, but PI does not own outcomes.
- Exam packages organize evidence for review; they do not transform software output into legal advice.

## Public Pages Supporting the Narrative

- `/regulatory-examination`
- `/evaluation-boundaries`
- `/data-freshness`
- `/evidence`
- `/terms`
- `/security`

## Certification Claim Boundary

The public site may claim that CCAI is designed to support a defensible process. It must not claim that use of CCAI by itself makes a customer compliant.

The strongest safe claim is:

> CCAI provides deterministic screening evidence and review infrastructure so regulated teams can document, review, and defend their own compliance process.
