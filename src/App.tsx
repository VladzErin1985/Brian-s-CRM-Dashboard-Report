import { useState } from 'react'
import {
  Workflow,
  Database,
  Zap,
  ShieldCheck,
  ListChecks,
  Map,
  MessageSquare,
  Sparkles,
  ArrowRight,
  AlertTriangle,
  type LucideIcon,
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { overviewStats, systemCards, projectFlow, pipelineFlows, type SystemCard, type LaneItem, type FlowStep } from '@/data/momentum'

const ICONS: Record<SystemCard['icon'], LucideIcon> = {
  workflow: Workflow,
  database: Database,
  zap: Zap,
  'shield-check': ShieldCheck,
  'list-checks': ListChecks,
  map: Map,
  'message-square': MessageSquare,
  sparkles: Sparkles,
}

function StatusBadge({ status }: { status: LaneItem['status'] }) {
  if (!status) return null
  const styles: Record<NonNullable<LaneItem['status']>, string> = {
    live: 'bg-green/10 text-green border-green/30',
    draft: 'bg-accent/10 text-accent border-accent/30',
    pending: 'bg-orange/10 text-orange border-orange/30',
    blocked: 'bg-red-500/10 text-red-600 border-red-500/30',
  }
  const labels: Record<NonNullable<LaneItem['status']>, string> = {
    live: 'Live',
    draft: 'Built',
    pending: 'In Progress',
    blocked: 'On Hold',
  }
  return (
    <span
      className={`shrink-0 rounded-full border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${styles[status]}`}
    >
      {labels[status]}
    </span>
  )
}

function FlowChart({ steps }: { steps: FlowStep[] }) {
  return (
    <div className="flex flex-wrap items-stretch gap-2 rounded-lg border border-border bg-white p-4 shadow-sm sm:gap-1">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center gap-1">
          <div
            className={`flex min-w-[140px] flex-col justify-center rounded-md border px-3 py-2 text-center text-xs font-semibold ${
              step.flag
                ? 'border-red-500/30 bg-red-500/5 text-red-700'
                : 'border-border bg-light text-navy'
            }`}
          >
            <span>{step.label}</span>
            {step.flag && (
              <span className="mt-1 flex items-center justify-center gap-1 text-[10px] font-medium normal-case text-red-600">
                <AlertTriangle className="h-3 w-3 shrink-0" />
                {step.flag}
              </span>
            )}
          </div>
          {i < steps.length - 1 && (
            <ArrowRight className="h-4 w-4 shrink-0 text-muted" />
          )}
        </div>
      ))}
    </div>
  )
}

function App() {
  const [openCardId, setOpenCardId] = useState<string | null>(null)
  const openCard = systemCards.find((c) => c.id === openCardId) ?? null

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-br from-navy to-blue px-6 py-10 text-white sm:px-10">
        <div className="mx-auto max-w-5xl">
          <span className="mb-4 inline-block rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-sky-200">
            System Dashboard
          </span>
          <h1 className="mb-1 text-3xl font-bold leading-tight sm:text-4xl">
            Shield Point Risk Advisors
          </h1>
          <p className="text-sky-200">Momentum AMS &mdash; system status and documentation</p>
        </div>
      </header>

      {/* Overview stats */}
      <div className="mx-auto -mt-6 max-w-5xl px-6 sm:px-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {overviewStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-border bg-white p-4 shadow-sm"
            >
              <div className="text-2xl font-bold text-navy">{stat.value}</div>
              <div className="text-xs font-medium text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Project flow */}
      <div className="mx-auto mt-10 max-w-5xl px-6 sm:px-10">
        <h2 className="mb-1 text-base font-bold text-navy">How a Lead Becomes a Client</h2>
        <p className="mb-4 text-sm text-muted">Your own process, end to end</p>
        <FlowChart steps={projectFlow} />
      </div>

      {/* Pipeline detail flows */}
      <div className="mx-auto mt-10 max-w-5xl px-6 sm:px-10">
        <h2 className="mb-1 text-base font-bold text-navy">Pipeline Flows</h2>
        <p className="mb-4 text-sm text-muted">Where automation is proposed next, from your own pipeline structure</p>
        <div className="space-y-6">
          {pipelineFlows.map((flow) => (
            <div key={flow.title}>
              <h3 className="mb-0.5 text-sm font-bold text-navy">{flow.title}</h3>
              <p className="mb-2 text-xs text-muted">{flow.summary}</p>
              <FlowChart steps={flow.steps} />
            </div>
          ))}
        </div>
      </div>

      {/* System cards */}
      <main className="mx-auto max-w-5xl px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {systemCards.map((card) => {
            const Icon = ICONS[card.icon]
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => setOpenCardId(card.id)}
                className="group flex flex-col items-start rounded-lg border border-border bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mb-1 text-base font-bold text-navy">{card.title}</h2>
                <p className="text-sm text-muted">{card.tagline}</p>
                <span className="mt-4 text-xs font-semibold text-accent opacity-0 transition group-hover:opacity-100">
                  View details &rarr;
                </span>
              </button>
            )
          })}
        </div>
      </main>

      <footer className="border-t border-border py-6 text-center text-xs text-muted">
        Last updated {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </footer>

      {/* Detail dialog */}
      <Dialog open={openCard !== null} onOpenChange={(next) => !next && setOpenCardId(null)}>
        {openCard && (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{openCard.title}</DialogTitle>
              <DialogDescription>{openCard.tagline}</DialogDescription>
            </DialogHeader>
            <Accordion type="single" collapsible defaultValue="lane-0" className="w-full">
              {openCard.lanes.map((lane, i) => (
                <AccordionItem key={lane.name} value={`lane-${i}`}>
                  <AccordionTrigger>
                    <div className="flex flex-col items-start text-left">
                      <span>{lane.name}</span>
                      <span className="text-xs font-normal text-muted">{lane.summary}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3">
                      {lane.items.map((item) => (
                        <li key={item.label} className="flex flex-col gap-1 rounded-md bg-light p-3">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-semibold text-navy">{item.label}</span>
                            <StatusBadge status={item.status} />
                          </div>
                          <span className="text-sm text-muted">{item.detail}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}

export default App
