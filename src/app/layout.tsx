import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CookieBanner } from "@/components/cookie-banner"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "CoreCompliance AI — Deterministic Sanctions Screening",
  description:
    "Deterministic compliance screening infrastructure with verifiable evidence for every decision.",
  metadataBase: new URL("https://ccai-marketing.vercel.app"),
  openGraph: {
    title: "CoreCompliance AI — Deterministic Sanctions Screening",
    description:
      "Deterministic compliance screening infrastructure with verifiable evidence for every decision.",
    siteName: "CoreCompliance AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreCompliance AI — Deterministic Sanctions Screening",
    description:
      "Deterministic compliance screening infrastructure with verifiable evidence for every decision.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon-32.svg" />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  )
}
