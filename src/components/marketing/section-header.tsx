interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ eyebrow, title, description, centered = false }: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center mx-auto max-w-2xl" : ""}>
      {eyebrow && (
        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-[15px] leading-relaxed text-muted ${centered ? "" : "max-w-xl"}`}>
          {description}
        </p>
      )}
    </div>
  )
}
