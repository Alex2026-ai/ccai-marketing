import { CTAPair } from "./cta-buttons"

export function FinalCTASection() {
  return (
    <section className="border-t border-border bg-foreground/[0.02] py-20 lg:py-28">
      <div className="mx-auto max-w-2xl px-5 text-center lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Start screening in minutes.
        </h2>
        <p className="mt-4 text-[15px] text-muted">
          No procurement. No integration project. Upload a list and get results.
        </p>
        <CTAPair className="mt-8 justify-center" />
      </div>
    </section>
  )
}
