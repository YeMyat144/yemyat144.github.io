import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check, ChevronDown, Play, RotateCcw } from 'lucide-react'

import { chapters, type Chapter, type Kind } from '../../data/storyData'

const filters: Array<'All' | Kind> = ['All', 'Work', 'Project', 'Education']
const STEP_MS = 2000

export function Story({ order = 'asc' }: { order?: 'asc' | 'desc' }) {
  const [filter, setFilter] = useState<'All' | Kind>('All')
  const [open, setOpen] = useState<string | null>('salesmind')
  const [ran, setRan] = useState<number>(-1)
  const [running, setRunning] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  const list = useMemo(() => {
    const base = order === 'desc' ? [...chapters].reverse() : chapters
    return filter === 'All' ? base : base.filter((c) => c.kind === filter)
  }, [order, filter])

  useEffect(() => () => {
    if (timer.current) clearInterval(timer.current)
  }, [])

  function run() {
    if (timer.current) clearInterval(timer.current)
    setFilter('All')
    setRunning(true)
    setRan(0)
    const seq = order === 'desc' ? [...chapters].reverse() : chapters
    setOpen(seq[0].id)
    let i = 0
    timer.current = setInterval(() => {
      i += 1
      if (i >= seq.length) {
        if (timer.current) clearInterval(timer.current)
        setRunning(false)
        return
      }
      setRan(i)
      setOpen(seq[i].id)
    }, STEP_MS)
  }

  const fullOrder = order === 'desc' ? [...chapters].reverse() : chapters
  const doneIds = new Set(fullOrder.slice(0, ran + 1).map((c) => c.id))
  const finished = ran >= chapters.length - 1 && !running

  return (
    <section id="story" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[320px_1fr] lg:gap-16 lg:py-28">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">The story so far</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
            From a data science degree to shipping AI in production.
            Open any step, or run the whole thing like a workflow.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              onClick={run}
              disabled={running}
              className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-[background-color,transform] duration-150 ease-out hover:bg-ink-soft active:scale-[0.97] disabled:opacity-60"
            >
              {finished ? <RotateCcw className="size-4" /> : <Play className="size-4" />}
              {running ? 'Running…' : finished ? 'Run again' : 'Run my story'}
            </button>
            <span className="font-mono text-xs text-muted">
              {ran < 0
                ? `${chapters.length} steps`
                : `${Math.min(ran + 1, chapters.length)}/${chapters.length} executed`}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter steps">
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`cursor-pointer whitespace-nowrap rounded-full border px-3 py-1.5 text-sm transition-colors duration-150 ease-out ${filter === f
                  ? 'border-ink bg-ink text-paper'
                  : 'border-line bg-surface text-ink-soft hover:border-ink-soft'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <ol className="relative min-w-0">
          <span aria-hidden className="absolute bottom-6 left-[15px] top-6 w-px bg-line" />
          {list.map((c, i) => (
            <Step
              key={c.id}
              chapter={c}
              showYear={i === 0 || list[i - 1].year !== c.year}
              isOpen={open === c.id}
              done={doneIds.has(c.id)}
              active={running && fullOrder[ran]?.id === c.id}
              onToggle={() => setOpen(open === c.id ? null : c.id)}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}

const kindStyle: Record<Kind, string> = {
  Work: 'bg-ink text-paper',
  Project: 'bg-accent/12 text-accent',
  Education: 'bg-ok/10 text-ok',
}

function Step({
  chapter: c,
  showYear,
  isOpen,
  done,
  active,
  onToggle,
}: {
  chapter: Chapter
  showYear: boolean
  isOpen: boolean
  done: boolean
  active: boolean
  onToggle: () => void
}) {
  const reduce = useReducedMotion()
  return (
    <li className="relative">
      {showYear && (
        <div className="relative flex items-center gap-4 pb-3 pt-6 first:pt-0">
          <span className="relative z-10 grid w-8 place-items-center bg-paper">
            <span className="size-1.5 rounded-full bg-muted" />
          </span>
          <span className="font-mono text-sm text-muted">{c.year}</span>
        </div>
      )}

      <div className="flex gap-4 pb-2">
        <span
          className={`relative z-10 mt-4 grid size-8 shrink-0 place-items-center rounded-full border-2 transition-colors duration-200 ease-out ${done
            ? 'border-ok bg-ok text-white'
            : active
              ? 'border-accent bg-surface'
              : c.now
                ? 'border-accent bg-surface'
                : 'border-line bg-surface'
            }`}
        >
          {done ? (
            <Check className="size-4" strokeWidth={3} />
          ) : (
            <span className={`size-2 rounded-full ${c.now ? 'bg-accent' : 'bg-line'}`} />
          )}
        </span>

        <div
          className={`min-w-0 flex-1 rounded-2xl border transition-colors duration-200 ease-out ${isOpen ? 'border-ink/15 bg-surface' : 'border-transparent hover:bg-surface/70'
            }`}
        >
          <button
            onClick={onToggle}
            aria-expanded={isOpen}
            className="flex w-full cursor-pointer items-start gap-4 px-4 py-4 text-left sm:px-5"
          >
            <div className="min-w-0 flex-1">
              <div className="mb-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className={`rounded-md px-2 py-0.5 font-mono text-[11px] font-medium ${kindStyle[c.kind]}`}>
                  {c.kind}
                </span>
                <span className="font-mono text-xs text-muted">{c.dates}</span>
                {c.now && <span className="font-mono text-xs font-medium text-accent">● now</span>}
              </div>
              <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{c.role}</h3>
              <p className="text-sm text-muted">{c.org}</p>
              {!isOpen && <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{c.oneLiner}</p>}
            </div>
            <ChevronDown
              className={`mt-1 size-5 shrink-0 text-muted transition-transform duration-200 ease-out ${isOpen ? 'rotate-180' : ''
                }`}
            />
          </button>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={reduce ? false : { height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={reduce ? undefined : { height: 0, opacity: 0 }}
                transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-5 sm:px-5">
                  <p className="text-[15px] font-medium leading-relaxed text-ink">{c.oneLiner}</p>
                  <ul className="mt-3 space-y-2">
                    {c.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                        <span className="mt-2.5 h-px w-3 shrink-0 bg-muted" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  {c.stack && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {c.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-line bg-paper px-2 py-1 font-mono text-xs text-ink-soft"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </li>
  )
}
