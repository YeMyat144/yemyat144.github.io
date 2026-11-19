import { MessagesSquare, Wrench } from 'lucide-react'

const days = [
  {
    icon: MessagesSquare,
    day: 'Day 1 · Panel',
    title: 'Real-world AI automation',
    body: 'Led the panel on what automation looks like in production, how to prompt well, and how to build a career in it.',
  },
  {
    icon: Wrench,
    day: 'Day 2 · Workshop',
    title: 'Build a support chatbot',
    body: 'Every attendee left with a working AI customer support bot, wired up with n8n, Telegram and an LLM.',
  },
]

export function Speaking() {
  return (
    <section id="speaking" className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:py-28">
        <div className="min-w-0">
          <p className="font-mono text-sm text-paper/60">Jul 11–12, 2026 · RiseUp Organization</p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Sharing what I build.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-paper/75">
            Guest speaker at n8n Playground, a two-day program for young people from
            Myanmar learning to automate with AI.
          </p>
          <div className="mt-10 flex items-end gap-4">
            <span className="text-7xl font-semibold leading-none tracking-[-0.04em] text-pop sm:text-8xl">
              60+
            </span>
            <span className="pb-2 text-sm leading-snug text-paper/70">
              Myanmar youth
              <br />
              participants
            </span>
          </div>
        </div>

        <ol className="min-w-0 divide-y divide-paper/15 border-y border-paper/15">
          {days.map(({ icon: Icon, day, title, body }) => (
            <li key={day} className="flex gap-5 py-7">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-paper/10">
                <Icon className="size-5 text-paper" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-xs text-paper/60">{day}</p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-paper/75">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
