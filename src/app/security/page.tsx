import type { Metadata } from "next"
import { Shield, Lock, Eye, Server, FileCheck, Key } from "lucide-react"

export const metadata: Metadata = {
  title: "Security — CoreCompliance AI",
  description:
    "Security architecture, data protection, and compliance certifications for CoreCompliance AI.",
}

export default function SecurityPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 md:py-36 lg:px-8">
      <div className="fade-in-up">
        <p className="section-label">Security</p>
        <div className="section-divider mt-4" />
        <h1 className="mt-6 text-[2.5rem] font-semibold tracking-tight leading-[1.08] md:text-[2.75rem]">
          Security by architecture, not by promise.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          CCAI is designed for regulated environments. Security controls are
          structural — built into the data model, access layer, and deployment
          architecture.
        </p>
      </div>

      <div className="mt-16 space-y-6">
        {[
          {
            icon: Lock,
            title: "Tenant Isolation",
            desc: "Each tenant operates in a fully isolated data scope. Configuration, screening results, evidence packages, and audit trails are scoped per tenant with no cross-tenant data access.",
          },
          {
            icon: Key,
            title: "Authentication & Access",
            desc: "API access requires tenant-scoped API keys. Administrative endpoints require separate credentials. All API calls are logged with tenant context, trace IDs, and timestamps.",
          },
          {
            icon: Shield,
            title: "Encryption",
            desc: "Data is encrypted in transit (TLS 1.3) and at rest (AES-256). Encryption keys are managed through cloud provider key management services with automatic rotation.",
          },
          {
            icon: Eye,
            title: "Audit Trail",
            desc: "Every API call, screening decision, and administrative action is logged in an append-only audit trail. Audit events include trace IDs for end-to-end correlation.",
          },
          {
            icon: Server,
            title: "Infrastructure",
            desc: "Deployed on Google Cloud Platform with regional data residency options (US, EU). Infrastructure follows the principle of least privilege with network segmentation and managed firewalls.",
          },
          {
            icon: FileCheck,
            title: "Evidence Integrity",
            desc: "DecisionEventPackages are immutable once assembled. Evidence integrity is verified through hash binding and independently attested by the Intelligent Analyst verification layer.",
          },
        ].map((item) => (
          <div key={item.title} className="card-surface px-6 py-5">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/6 border border-accent/10">
                <item.icon size={15} className="text-accent" />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-semibold tracking-tight">Compliance Certifications</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          CCAI maintains compliance with industry standards for data security and privacy.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { cert: "SOC 2 Type II", scope: "Security, Availability" },
            { cert: "HIPAA", scope: "Protected Health Information" },
            { cert: "GDPR", scope: "EU Data Protection" },
          ].map((item) => (
            <div key={item.cert} className="rounded-xl border border-border bg-surface px-5 py-4 text-center">
              <p className="font-mono text-sm font-semibold text-foreground">{item.cert}</p>
              <p className="mt-1 text-xs text-muted">{item.scope}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-2xl border border-border bg-surface-2/30 px-6 py-5">
        <h3 className="text-[15px] font-semibold text-foreground">Security Inquiries</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          For security-related questions, vulnerability reports, or to request our
          SOC 2 report, contact us at{" "}
          <span className="font-mono text-foreground">security@corecompliance.ai</span>.
        </p>
      </div>
    </div>
  )
}
