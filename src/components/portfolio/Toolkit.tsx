import { certificates, skills } from '../../data/storyData'

export function Toolkit() {
  const [primary, ...rest] = skills
  return (
    <section id="toolkit" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
          <div>
            <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Toolkit</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
              AI is where I spend most of my time. The rest is what lets me take an
              idea all the way to production.
            </p>
          </div>

          <div className="min-w-0">
            <div className="rounded-2xl bg-accent p-6 text-white sm:p-8">
              <p className="font-mono text-sm text-white/80">{primary.group} · focus</p>
              <p className="mt-3 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                {primary.items.join(' · ')}
              </p>
            </div>

            <dl className="mt-4 divide-y divide-line border-b border-line">
              {rest.map((s) => (
                <div key={s.group} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr] sm:gap-6">
                  <dt className="font-mono text-sm text-muted">{s.group}</dt>
                  <dd className="text-[17px] leading-relaxed text-ink">{s.items.join(', ')}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-14">
              <h3 className="text-lg font-semibold tracking-tight">Certificates</h3>
              <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
                {certificates.map((c) => (
                  <li key={c.name} className="flex items-baseline justify-between gap-4 border-t border-line py-3.5">
                    <div className="min-w-0">
                      <p className="font-medium">{c.name}</p>
                      <p className="text-sm text-muted">{c.issuer}</p>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-muted">{c.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
