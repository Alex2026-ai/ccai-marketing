"use client"

import { useState, useEffect } from "react"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("ccai-cookie-consent")
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(t)
    }
  }, [])

  function accept() {
    localStorage.setItem("ccai-cookie-consent", "accepted")
    setVisible(false)
  }

  function reject() {
    localStorage.setItem("ccai-cookie-consent", "rejected")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-surface/95 backdrop-blur-xl"
      style={{
        animation: "fade-in-up 0.5s cubic-bezier(0.16,1,0.3,1) both",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="text-sm leading-relaxed text-muted">
          We use essential cookies to operate this site. Non-essential cookies are used only with your consent.{" "}
          <a href="/privacy" className="text-accent underline-offset-2 hover:underline">
            Privacy Policy
          </a>
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={reject}
            className="rounded-lg border border-border px-4 py-2 text-xs font-medium text-muted transition-colors hover:text-foreground hover:border-foreground"
          >
            Reject non-essential
          </button>
          <button
            onClick={accept}
            className="btn-primary !text-xs !px-4 !py-2"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
