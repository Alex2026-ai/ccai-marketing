import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function ContinueReading({
  href,
  label,
  description,
}: {
  href: string
  label: string
  description: string
}) {
  return (
    <AnimateOnScroll className="mt-24 border-t border-border-light pt-12">
      <Link
        href={href}
        className="group flex items-center justify-between rounded-2xl border border-border bg-surface px-6 py-5 transition-all duration-300 hover:border-accent/20 hover:shadow-sm"
      >
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-light">
            Continue reading
          </p>
          <p className="mt-1 text-base font-semibold text-foreground">{label}</p>
          <p className="mt-0.5 text-sm text-muted">{description}</p>
        </div>
        <ArrowRight
          size={16}
          className="shrink-0 text-muted-light transition-all duration-300 group-hover:text-accent group-hover:translate-x-1"
        />
      </Link>
    </AnimateOnScroll>
  )
}
