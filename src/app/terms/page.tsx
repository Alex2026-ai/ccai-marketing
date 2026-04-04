import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service — CoreCompliance AI",
  description: "Terms governing the use of CoreCompliance AI services and evaluation environment.",
}

const lastUpdated = "March 11, 2026"

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 md:py-36 lg:px-8">
      <div className="fade-in-up">
        <p className="section-label">Legal</p>
        <div className="section-divider mt-4" />
        <h1 className="mt-6 text-[2.5rem] font-semibold tracking-tight leading-[1.08] md:text-[2.75rem]">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated: {lastUpdated}</p>
        <p className="mt-6 text-base leading-relaxed text-muted">
          These terms govern your access to and use of the CoreCompliance AI
          website and evaluation services. By accessing or using our services,
          you agree to be bound by these terms.
        </p>
      </div>

      <div className="mt-16 space-y-14">
        <section>
          <h2 className="text-xl font-semibold tracking-tight">Service Description</h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-muted">
            <p>
              CoreCompliance AI (&quot;CCAI&quot;) provides deterministic entity screening
              infrastructure for regulated institutions. The service resolves entities
              against sanctions lists, PEP databases, and adverse media sources using
              a layered resolution protocol.
            </p>
            <p>
              CCAI produces structured evidence records for every screening decision.
              The service is consumed via REST API. Decisions
              are attested through Intelligent Analyst, a separate verification layer.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">Evaluation Environment Disclaimer</h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-muted">
            <p>
              The evaluation environment runs the same screening engine as
              production but operates against reference watchlist data, not
              production data feeds. Evaluation results should not be used as the
              basis for regulatory compliance decisions.
            </p>
            <p>
              Evaluation access is provided for integration testing, accuracy
              validation, and evidence format review. Evaluation tenants are subject
              to defined limits on batch size, L3 budget, and data retention.
            </p>
            <p>
              Evaluation data is retained for 30 days and then permanently deleted.
              Evaluation access does not constitute a commitment to production
              service availability or pricing.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">Acceptable Use</h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-muted">
            <p>You agree not to:</p>
            <ul className="space-y-2 pl-1">
              {[
                "Submit data containing real personally identifiable information (PII) to the evaluation environment",
                "Attempt to access other tenants' data or circumvent tenant isolation boundaries",
                "Use the service to facilitate sanctions evasion or other unlawful activity",
                "Reverse engineer, decompile, or attempt to extract the source code of the service",
                "Exceed published rate limits or batch size constraints",
                "Redistribute, resell, or sublicense access to the service without written authorization",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">Limitation of Liability</h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-muted">
            <p>
              CCAI is screening infrastructure. It does not provide legal, regulatory,
              or compliance advice. Screening results and evidence records are
              informational outputs that support your compliance program — they do not
              replace professional judgment or regulatory obligations.
            </p>
            <p>
              To the maximum extent permitted by law, CoreCompliance AI shall not be
              liable for indirect, incidental, special, consequential, or punitive
              damages arising from your use of the service, including but not limited
              to regulatory penalties, loss of business, or data loss.
            </p>
            <p>
              Our total liability for any claim arising from the service shall not
              exceed the fees paid by you in the twelve months preceding the claim.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">Intellectual Property</h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-muted">
            <p>
              The CCAI service, including its resolution protocol, evidence structure,
              API design, and documentation, is the intellectual property of
              CoreCompliance AI. You retain ownership of all data you submit to the
              service.
            </p>
            <p>
              Screening results and evidence records generated from your data are
              owned by you. You may export, store, and use these outputs in
              accordance with your compliance requirements.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">Governing Law</h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-muted">
            <p>
              These terms are governed by and construed in accordance with the laws
              of the State of Delaware, United States, without regard to conflict of
              law provisions.
            </p>
            <p>
              Any disputes arising from these terms or the use of our services shall
              be resolved through binding arbitration in accordance with the rules of
              the American Arbitration Association.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-surface px-6 py-5">
          <p className="text-sm leading-relaxed text-muted">
            For questions about these terms, contact us at{" "}
            <a href="mailto:legal@corecompliance.ai" className="font-mono text-accent hover:underline underline-offset-2">
              legal@corecompliance.ai
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
