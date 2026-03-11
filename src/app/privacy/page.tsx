import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — CoreCompliance AI",
  description: "How CoreCompliance AI collects, uses, and protects your information.",
}

const lastUpdated = "March 11, 2026"

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 md:py-36 lg:px-8">
      <div className="fade-in-up">
        <p className="section-label">Legal</p>
        <div className="section-divider mt-4" />
        <h1 className="mt-6 text-[2.5rem] font-semibold tracking-tight leading-[1.08] md:text-[2.75rem]">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated: {lastUpdated}</p>
        <p className="mt-6 text-base leading-relaxed text-muted">
          CoreCompliance AI (&quot;CCAI&quot;, &quot;we&quot;, &quot;us&quot;) is committed to protecting
          your privacy. This policy describes how we collect, use, and safeguard
          information when you visit our website or use our evaluation services.
        </p>
      </div>

      <div className="mt-16 space-y-14">
        <section>
          <h2 className="text-xl font-semibold tracking-tight">Information We Collect</h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-muted">
            <p>
              <strong className="text-foreground">Information you provide.</strong> When you
              request evaluation access, contact us, or submit forms, we collect the
              information you provide — including your name, email address,
              organization name, and use case description.
            </p>
            <p>
              <strong className="text-foreground">Automatically collected information.</strong> We
              collect standard web server logs including IP address, browser type,
              referring URL, pages visited, and timestamps. We do not use
              third-party analytics or tracking services.
            </p>
            <p>
              <strong className="text-foreground">Evaluation environment data.</strong> If you
              use our evaluation environment, we process the entity data you submit
              for screening purposes. This data is processed within your isolated
              evaluation tenant and is not shared with other tenants or used for any
              purpose beyond providing the evaluation service.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">How We Use Information</h2>
          <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
              To provision and operate your evaluation tenant
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
              To respond to your inquiries and support requests
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
              To maintain and improve the security of our services
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
              To comply with legal obligations
            </li>
          </ul>
          <p className="mt-4 text-base leading-relaxed text-muted">
            We do not sell, rent, or share your personal information with third
            parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">Cookies</h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-muted">
            <p>
              <strong className="text-foreground">Essential cookies.</strong> We use
              strictly necessary cookies to operate the website, including session
              management and cookie consent preferences. These cannot be disabled.
            </p>
            <p>
              <strong className="text-foreground">Non-essential cookies.</strong> We may
              use non-essential cookies for functionality improvements. These are
              only set with your explicit consent. You can withdraw consent at any
              time by clearing your browser cookies.
            </p>
            <p>
              We do not use advertising cookies or third-party tracking pixels.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">Evaluation Data</h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-muted">
            <p>
              Entity data submitted to the evaluation environment is processed
              within your isolated tenant. Evaluation tenants are fully separated
              from production environments and from other evaluation tenants.
            </p>
            <p>
              Evaluation data is retained for 30 days from submission, after which
              it is permanently deleted. You may request earlier deletion by
              contacting us.
            </p>
            <p>
              We do not use evaluation data for training models, benchmarking, or
              any purpose beyond providing the evaluation service to you.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">Data Retention</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border bg-surface-2/50">
                  <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">Data Type</th>
                  <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">Retention</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "Contact information", retention: "Until you request deletion" },
                  { type: "Evaluation entity data", retention: "30 days" },
                  { type: "Server logs", retention: "90 days" },
                  { type: "Cookie consent preferences", retention: "12 months" },
                ].map((row) => (
                  <tr key={row.type} className="border-b border-border-light last:border-0">
                    <td className="px-4 py-3 text-sm font-medium text-foreground">{row.type}</td>
                    <td className="px-4 py-3 text-sm text-muted">{row.retention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">Contact Information</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            For privacy-related inquiries, data deletion requests, or to exercise
            your rights under applicable data protection laws, contact us at:
          </p>
          <div className="mt-4 rounded-2xl border border-border bg-surface px-6 py-4">
            <p className="font-mono text-sm text-foreground">privacy@corecompliance.ai</p>
            <p className="mt-1 text-sm text-muted">CoreCompliance AI — Privacy Team</p>
          </div>
        </section>
      </div>
    </div>
  )
}
