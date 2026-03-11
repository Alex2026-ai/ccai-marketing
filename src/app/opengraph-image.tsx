import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "CoreCompliance AI — Deterministic Sanctions Screening"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #fafafa 0%, #f0f9ff 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Accent line */}
        <div
          style={{
            width: "60px",
            height: "4px",
            borderRadius: "2px",
            background: "linear-gradient(90deg, #0ea5e9, #a78bfa)",
            opacity: 0.6,
            marginBottom: "24px",
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: "52px",
            fontWeight: 600,
            color: "#111827",
            letterSpacing: "-1.5px",
            lineHeight: 1.15,
          }}
        >
          Deterministic screening.
        </div>
        <div
          style={{
            fontSize: "52px",
            fontWeight: 600,
            color: "#0ea5e9",
            letterSpacing: "-1.5px",
            lineHeight: 1.15,
          }}
        >
          Verifiable evidence.
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "#6b7280",
            marginTop: "24px",
            lineHeight: 1.5,
          }}
        >
          Compliance screening infrastructure with structured
          evidence for every decision.
        </div>

        {/* Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "48px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "rgba(14, 165, 233, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: 700,
              color: "#0ea5e9",
            }}
          >
            C
          </div>
          <div
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#111827",
              letterSpacing: "-0.3px",
            }}
          >
            CoreCompliance AI
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
