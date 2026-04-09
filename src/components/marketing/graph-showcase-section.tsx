import Link from "next/link"
import { SectionHeader } from "./section-header"
import { ScreenshotPlaceholder } from "./screenshot-placeholder"

export function GraphShowcaseSection() {
  return (
    <section className="border-t border-border bg-foreground/[0.02] py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Graph Intelligence"
            title="See the ownership chain. Not just the name."
          />
          <ul className="mt-8 space-y-3 text-[14px] text-muted">
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Depth control: 1–5 levels of traversal
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Risk path analysis: shell chains, unknown UBOs, deep structures
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Adverse media correlation on graph entities
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Snapshot-scoped: every query is reproducible
            </li>
          </ul>
          <div className="mt-8">
            <Link href="/graph" className="text-[14px] font-medium text-accent hover:text-accent-deep transition-colors">
              Explore the Graph →
            </Link>
          </div>
        </div>
        <ScreenshotPlaceholder
          label="Ownership graph — resolved chain with ROOT/INTERMEDIATE/UBO nodes, risk path badges"
          src="/screenshots/graph-ownership.png"
        />
      </div>
    </section>
  )
}
