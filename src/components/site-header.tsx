"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Shield, Menu, X } from "lucide-react"

const nav = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Architecture", href: "/architecture" },
  { label: "Developer", href: "/developer" },
  { label: "Evidence", href: "/evidence" },
  { label: "Evaluation", href: "/evaluation" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10">
            <Shield size={14} className="text-accent" />
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            CoreCompliance
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 ${
                pathname === item.href
                  ? "bg-surface-2 text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <span className="inline-flex items-center rounded-lg bg-foreground px-3.5 py-1.5 text-[13px] font-medium text-surface transition-colors hover:bg-foreground/90 cursor-pointer">
            Request Access
          </span>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-1.5 text-muted hover:text-foreground md:hidden"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-surface px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2 text-[14px] font-medium ${
                  pathname === item.href
                    ? "bg-surface-2 text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 border-t border-border pt-3">
              <span className="inline-flex w-full items-center justify-center rounded-lg bg-foreground px-3.5 py-2 text-[14px] font-medium text-surface cursor-pointer">
                Request Access
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
