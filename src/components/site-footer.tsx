import Link from "next/link"
import { VerifiedShieldIcon } from "@/components/icons/verified-shield"

const footerNav = [
  {
    heading: "Product",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Architecture", href: "/architecture" },
      { label: "Evidence", href: "/evidence" },
    ],
  },
  {
    heading: "Verticals",
    links: [
      { label: "Maritime Screening", href: "/maritime-screening" },
      { label: "Insurance Screening", href: "/insurance-screening" },
      { label: "Platform Integrations", href: "/platform-integrations" },
    ],
  },
  {
    heading: "Developers",
    links: [
      { label: "API Overview", href: "/developer" },
      { label: "Evaluation", href: "/evaluation" },
      { label: "Contact", href: "/contact" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-2/30">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/8">
                <VerifiedShieldIcon size={14} className="text-accent" />
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-foreground">
                CoreCompliance AI
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-muted">
              Deterministic sanctions screening infrastructure with verifiable
              evidence for every decision.
            </p>
          </div>

          {/* Nav columns */}
          {footerNav.map((section) => (
            <div key={section.heading}>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-light">
                {section.heading}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-muted transition-colors duration-200 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-muted-light">
            &copy; {new Date().getFullYear()} CoreCompliance AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-[12px] text-muted-light transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="text-[12px] text-muted-light transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="/security" className="text-[12px] text-muted-light transition-colors hover:text-foreground">
              Security
            </Link>
            <Link href="/developer" className="text-[12px] text-muted-light transition-colors hover:text-foreground">
              Developer
            </Link>
            <Link href="/evaluation" className="text-[12px] text-muted-light transition-colors hover:text-foreground">
              Evaluation
            </Link>
            <Link href="/contact" className="text-[12px] text-muted-light transition-colors hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
