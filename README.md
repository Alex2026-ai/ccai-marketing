# CCAI Marketing Site

Public website for CoreCompliance AI.

## Repository Scope

This repository contains the marketing website only. It is separate from:

| Repository           | Purpose                          |
|----------------------|----------------------------------|
| `ccai-frontend`      | Operator dashboard (Next.js)     |
| `ccai-engine`        | Backend services (Python)        |
| `ccai-protocol-spec` | Architecture corpus              |

## Structure

```
ccai-marketing/
├── docs/         → Site planning and content specs
├── site/         → Page content (Markdown source)
├── assets/       → Images, icons, brand assets
└── diagrams/     → Architecture and flow diagrams
```

## Pages

| Route              | Content                                  |
|--------------------|------------------------------------------|
| `/`                | Homepage — positioning, value prop, CTA  |
| `/how-it-works`    | Protocol walkthrough                     |
| `/architecture`    | System architecture overview             |
| `/use-cases/shipping`  | Shipping industry use case           |
| `/use-cases/insurance` | Insurance industry use case          |
| `/developer`       | Developer documentation and API access   |
| `/evidence`        | Evidence model and transparency          |
| `/evaluation`      | Evaluation methodology and benchmarks    |
| `/trust-review`    | Trust, review, PI, freshness, and exam boundaries |
