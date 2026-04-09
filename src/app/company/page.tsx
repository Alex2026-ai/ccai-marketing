import type { Metadata } from "next"
import Link from "next/link"
import { Shield, FileCheck, Zap } from "lucide-react"
import { FinalCTASection } from "@/components/marketing/final-cta-section"

export const metadata: Metadata = {
  title: "About — CoreCompliance AI",
  description: "CoreCompliance AI builds deterministic compliance screening infrastructure for regulated institutions. Auditable, tenant-isolated, regulator-defensible.",
}

const principles = [
  {
    icon: Shield,
    title: "Determinism over convenience",
    desc: "Screening decisions must be reproducible. Same input + same data = same output. No hidden model drift.",
  },
  {
    icon: FileCheck,
    title: "Evidence over assertion",
    desc: "Every decision must carry its proof. Who was screened, against what data, with what result — all recorded, all verifiable.",
  },
  {
    icon: Zap,
    title: "Self-serve over gatekeeping",
    desc: "Compliance teams should evaluate, adopt, and operate screening tools without months of procurement.",
  },
]

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Compliance infrastructure, built by people who&apos;ve been audited.
          </h1>
          <p className="mt-6 text-[16px] leading-relaxed text-muted">
            CoreCompliance AI exists because screening systems should be deterministic,
            auditable, and explainable — not probabilistic black boxes that pass vendor
            demos but fail regulatory scrutiny.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground">
            Make compliance execution provable.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-muted">
            Regulated institutions need to screen entities, resolve ownership, assess adverse
            media, and document their decisions — every day, at scale, with audit trails that
            survive regulatory examination.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Most screening tools are designed for the sales demo, not the audit. They produce
            matches you can&apos;t explain, use models you can&apos;t inspect, and version data
            you can&apos;t reproduce.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            CCAI is designed for the audit. Every screening decision is deterministic. Every
            data version is content-hashed. Every ownership chain is traceable. Every
            intelligence signal is explainable.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-border bg-foreground/[0.02] py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <h2 className="text-center text-xl font-bold tracking-tight text-foreground">
            What we believe
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-surface p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/8 text-accent">
                  <p.icon size={22} />
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="text-center text-xl font-bold tracking-tight text-foreground">
            Why this product exists
          </h2>
          <ul className="mt-8 space-y-4 text-[14px] text-muted">
            <li>• Vendors promise &quot;AI-powered screening&quot; but can&apos;t explain why a name matched</li>
            <li>• Vendors promise &quot;comprehensive coverage&quot; but return hundreds of duplicate raw hits with no structure</li>
            <li>• Vendors promise &quot;easy integration&quot; but require months of professional services</li>
            <li>• Regulators ask &quot;show me your decision logic&quot; and the answer is &quot;we trust the vendor&quot;</li>
          </ul>
          <p className="mt-6 text-[14px] text-muted">
            CCAI closes that gap. The screening is deterministic. The ownership graph is native.
            The media intelligence is structured. The audit trail is complete. And you can start
            in minutes, not months.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-border bg-foreground/[0.02] py-20 lg:py-24">
        <div className="mx-auto max-w-2xl px-5 text-center lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-foreground">Talk to us.</h2>
          <div className="mt-6 space-y-3 text-[14px] text-muted">
            <p>
              <Link href="/contact" className="text-accent hover:text-accent-deep transition-colors font-medium">
                Book a 20-minute Architecture Deep-Dive →
              </Link>
            </p>
            <p>General inquiry: <span className="text-foreground">contact@corecomplianceai.com</span></p>
            <p>API documentation: <Link href="/developers" className="text-accent hover:text-accent-deep transition-colors">developers →</Link></p>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}
