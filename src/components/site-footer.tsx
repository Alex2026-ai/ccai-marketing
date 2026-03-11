import Link from "next/link"
import { Shield } from "lucide-react"

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
    heading: "Developers",
    links: [
      { label: "API Overview", href: "/developer" },
      { label: "Evaluation", href: "/evaluation" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-2/50">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10">
                <Shield size={14} className="text-accent" />
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-foreground">
                CoreCompliance AI
              </span>
            </div>
            <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-muted">
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
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-[12px] text-muted-light">
            &copy; {new Date().getFullYear()} CoreCompliance AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
