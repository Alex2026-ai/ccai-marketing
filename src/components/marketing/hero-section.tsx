import { CTAPair } from "./cta-buttons"
import { ScreenshotPlaceholder } from "./screenshot-placeholder"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div className="fade-in-up">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
            Deterministic Compliance Execution Platform
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Compliance screening that doesn&apos;t guess.
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
            Upload your data &mdash; run screening + ownership intelligence +
            structured adverse media signals &mdash; get auditable review cases
            with complete evidence lineage and hash chain provenance.
            Self-serve or embed via API.
          </p>
          <CTAPair className="mt-7" />
        </div>
        <div className="fade-in-up" style={{ animationDelay: "0.15s" }}>
          <ScreenshotPlaceholder
            label="Batch screening results — Total Records, Clear, Review, Match Candidates"
            src="/screenshots/batch-results.png"
          />
        </div>
      </div>
      {/* Subtle accent glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-violet/5 blur-3xl" />
    </section>
  )
}
