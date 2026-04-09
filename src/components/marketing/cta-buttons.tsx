import Link from "next/link"

export function PrimaryCTA({ className = "" }: { className?: string }) {
  return (
    <Link href="/evaluation" className={`btn-primary !text-[14px] !py-2.5 !px-6 ${className}`}>
      Try the Live Sandbox
    </Link>
  )
}

export function SecondaryCTA({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex items-center gap-2 rounded-lg border border-border px-6 py-2.5 text-[14px] font-medium text-foreground transition-all hover:bg-surface-2/80 hover:border-border ${className}`}
    >
      Book a 20-minute Architecture Deep-Dive
    </Link>
  )
}

export function CTAPair({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:gap-4 ${className}`}>
      <PrimaryCTA />
      <SecondaryCTA />
    </div>
  )
}
