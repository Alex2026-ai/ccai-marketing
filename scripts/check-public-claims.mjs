#!/usr/bin/env node

import { readdirSync, readFileSync, statSync } from "node:fs"
import { join, relative } from "node:path"

const ROOT = process.cwd()
const SCAN_DIRS = ["src", "site", "docs"]
const EXTENSIONS = new Set([".md", ".tsx", ".ts"])
const POLICY_FILE = "docs/marketing/public-claims-policy.md"

const forbiddenClaims = [
  {
    label: "absolute compliance guarantee",
    pattern: /\b(guaranteed|guarantees|guarantee)\b.{0,40}\b(compliance|compliant|approval|outcome|accuracy|secure|security)\b|\b(compliance|compliant|approval|outcome|accuracy|secure|security)\b.{0,40}\b(guaranteed|guarantees|guarantee)\b/i,
    allow: [/SLA guarantees/i],
  },
  {
    label: "zero-error claim",
    pattern: /\b(zero false|100%\s+(accurate|accuracy|compliant|compliance|safe|secure))\b/i,
  },
  {
    label: "structural impossibility claim",
    pattern: /\bstructurally impossible\b/i,
  },
  {
    label: "final legal determination claim",
    pattern: /\b(provides?|produces?|delivers?|is)\b.{0,60}\b(final compliance determination|regulatory determination|legally compliant)\b/i,
  },
]

const requiredPhrases = [
  {
    file: "src/app/terms/page.tsx",
    phrase: "screening signals, not final compliance determinations",
  },
  {
    file: "docs/marketing/public-claims-policy.md",
    phrase: "Public copy must describe CCAI outputs as screening signals",
  },
]

function walk(dir) {
  const entries = []
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    const stats = statSync(path)
    if (stats.isDirectory()) {
      if (["node_modules", ".next", ".git"].includes(name)) continue
      entries.push(...walk(path))
    } else {
      const ext = name.slice(name.lastIndexOf("."))
      if (EXTENSIONS.has(ext)) entries.push(path)
    }
  }
  return entries
}

const failures = []

for (const dir of SCAN_DIRS) {
  for (const path of walk(join(ROOT, dir))) {
    const text = readFileSync(path, "utf8")
    const rel = relative(ROOT, path)
    if (rel === POLICY_FILE) continue
    const lines = text.split(/\r?\n/)

    lines.forEach((line, index) => {
      for (const claim of forbiddenClaims) {
        if (!claim.pattern.test(line)) continue
        if (claim.allow?.some((pattern) => pattern.test(line))) continue
        failures.push(`${rel}:${index + 1} uses ${claim.label}: ${line.trim()}`)
      }
    })
  }
}

for (const requirement of requiredPhrases) {
  const text = readFileSync(join(ROOT, requirement.file), "utf8")
  if (!text.includes(requirement.phrase)) {
    failures.push(`${requirement.file} must include: "${requirement.phrase}"`)
  }
}

if (failures.length > 0) {
  console.error("Public claims check failed:")
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log("Public claims check passed.")
