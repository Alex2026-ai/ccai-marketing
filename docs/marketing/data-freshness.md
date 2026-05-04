# Data Freshness

## Purpose

Explain that reproducible screening evidence still needs source-age context.

## Required message

A deterministic result can be replayable while still depending on the age of the source data. CCAI treats freshness as part of the evidence package.

## Freshness signals

- Snapshot build timestamp.
- Upstream source timestamp, when available.
- Snapshot age.
- Freshness policy comparison.
- Stale-window review indicators.
- Sentinel freshness observations.
- Operational queue items created when source age or restore-evidence context needs human attention.

## Why it matters

Regulators often care whether screening data was current at the time of review. Freshness metadata helps customers explain what was known, when it was known, and whether later source updates created a review or re-screening obligation.

Freshness messaging should stay clear that CCAI surfaces source-age evidence and review context. It should not imply that the product independently refreshes, approves, or resolves every customer obligation without operator review.
