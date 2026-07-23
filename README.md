# Shield Point Risk Advisors — Momentum System Dashboard

A client-facing dashboard documenting the Momentum AMS build for Shield Point Risk Advisors: pipeline architecture, custom data fields, automations, and system status.

## Stack

React + Vite + TypeScript + Tailwind CSS + shadcn/ui (Dialog + Accordion) + Framer Motion + lucide-react.

## Development

```bash
npm install
npm run dev
```

## Content updates

All dashboard content lives in `src/data/momentum.ts` — a plain TypeScript data file. Update it, then:

```bash
npm run build   # verify no TS errors
git add -A && git commit -m "Update dashboard content"
git push
```

Vercel auto-deploys on push (standard Vite preset — no manual build/commit-dist step needed).
