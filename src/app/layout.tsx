import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CookieBanner } from "@/components/cookie-banner"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: "CoreCompliance AI — Deterministic Screening, UBO Graph, Adverse Media Intelligence",
    template: "%s | CoreCompliance AI",
  },
  description:
    "Deterministic screening. Native UBO graph. Explainable adverse media intelligence. All in one self-serve, auditable platform.",
  metadataBase: new URL("https://corecomplianceai.com"),
  openGraph: {
    title: "CoreCompliance AI",
    description:
      "Deterministic screening. Native UBO graph. Explainable adverse media intelligence. All in one self-serve platform.",
    siteName: "CoreCompliance AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreCompliance AI",
    description:
      "Deterministic screening. Native UBO graph. Explainable adverse media intelligence. All in one self-serve platform.",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("ccai-theme");if(t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme:dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
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
