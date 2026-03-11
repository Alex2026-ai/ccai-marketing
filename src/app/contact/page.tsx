import type { Metadata } from "next"
import { Mail, ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export const metadata: Metadata = {
  title: "Contact — CoreCompliance AI",
  description: "Get in touch with the CoreCompliance AI team.",
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 md:py-36 lg:px-8">
      <div className="fade-in-up">
        <p className="section-label">Contact</p>
        <div className="section-divider mt-4" />
        <h1 className="mt-6 text-[2.5rem] font-semibold tracking-tight leading-[1.08] md:text-[2.75rem]">
          Get in touch.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          For evaluation access, technical questions, or partnership inquiries.
        </p>
      </div>

      <AnimateOnScroll className="mt-16">
        <div className="rounded-2xl border border-border bg-surface p-8">
          <form className="space-y-6" action="#" method="POST">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full rounded-lg border border-border bg-surface-2/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-light outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/8"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-lg border border-border bg-surface-2/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-light outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/8"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="org" className="block text-sm font-medium text-foreground">
                Organization
              </label>
              <input
                type="text"
                id="org"
                name="organization"
                className="mt-2 w-full rounded-lg border border-border bg-surface-2/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-light outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/8"
                placeholder="Company name"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="mt-2 w-full rounded-lg border border-border bg-surface-2/50 px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/8"
              >
                <option value="evaluation">Evaluation access request</option>
                <option value="technical">Technical question</option>
                <option value="partnership">Partnership inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-2 w-full resize-none rounded-lg border border-border bg-surface-2/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-light outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/8"
                placeholder="Describe your use case, screening volume, or question..."
              />
            </div>

            <button type="submit" className="btn-primary w-full justify-center">
              Send Message
              <ArrowRight size={15} />
            </button>
          </form>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-12">
        <div className="rounded-2xl border border-border bg-surface-2/30 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/8">
              <Mail size={16} className="text-accent" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Email us directly</p>
              <a
                href="mailto:contact@corecompliance.ai"
                className="font-mono text-sm text-accent hover:underline underline-offset-2"
              >
                contact@corecompliance.ai
              </a>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  )
}
