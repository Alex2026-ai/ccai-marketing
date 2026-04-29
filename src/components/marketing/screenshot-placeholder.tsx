import Image from "next/image"

interface ScreenshotPlaceholderProps {
  label: string
  aspectRatio?: string
  /** When a real screenshot is available, pass the src path */
  src?: string
}

export function ScreenshotPlaceholder({ label, aspectRatio = "16/9", src }: ScreenshotPlaceholderProps) {
  if (src) {
    return (
      <div className="relative overflow-hidden rounded-xl border border-border shadow-soft">
        <Image
          src={src}
          alt={label}
          width={1600}
          height={900}
          className="w-full h-auto"
        />
      </div>
    )
  }

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-surface-2/80 to-surface-2/30"
      style={{ aspectRatio }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="text-center max-w-xs">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/8 ring-1 ring-accent/10">
            <svg className="h-5 w-5 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
            </svg>
          </div>
          <p className="text-[11px] font-medium text-muted-light leading-relaxed">{label}</p>
        </div>
      </div>
      {/* Dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }} />
    </div>
  )
}
