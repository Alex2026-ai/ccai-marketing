# CCAI Marketing Site — Content & Page Spec Package

**Created:** 2026-04-08
**Status:** Content package ready for implementation
**Target:** corecomplianceai.com (ccai-marketing repo, Vercel)

## What This Is

Complete content, information architecture, and page specifications for the marketing site overhaul. Each file contains implementation-ready copy, section ordering, CTA placement, and Tailwind layout guidance.

## Files

| File | Page | URL |
|------|------|-----|
| `homepage.md` | Homepage | `/` |
| `product.md` | Product | `/product` |
| `graph.md` | Graph Intelligence | `/graph` |
| `intelligence.md` | Adverse Media Intelligence | `/intelligence` |
| `pricing.md` | Pricing | `/pricing` |
| `developers-api.md` | Developers / API | `/developers` |
| `company.md` | Company | `/company` |
| `regulatory-examination.md` | Regulatory Examination Readiness | `/regulatory-examination` |
| `evaluation-boundaries.md` | Evaluation Boundaries | `/evaluation-boundaries` |
| `data-freshness.md` | Data Freshness | `/data-freshness` |
| `human-review.md` | Human Review by Design | `/human-review` |
| `pi-assistive.md` | PI Is Assistive, Not Authoritative | `/pi-assistive` |
| `compliance-certification-narrative.md` | Public certification narrative | Content governance |

## Implementation Notes

- All pages should use the existing ccai-marketing Next.js setup
- Dark-mode friendly, professional blue + dark navy palette
- Real CCAI screenshots only — no stock illustrations
- CTAs consistent across all pages:
  - Primary: "Try the Live Sandbox"
  - Secondary: "Book a 20-minute Architecture Deep-Dive"
- Marketing site is separate from the product dashboard (ccai-frontend) and the engine (ccai-engine)
