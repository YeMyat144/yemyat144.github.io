import { useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'

const EMAIL = 'yemyatmoe.tetee@gmail.com'

const links = [
  { label: 'GitHub', handle: 'yemyat144', href: 'https://github.com/yemyat144' },
  { label: 'LinkedIn', handle: 'yemyatmoe14', href: 'https://linkedin.com/in/yemyatmoe14' },
  { label: 'WhatsApp', handle: 'yemyatmoe', href: 'https://wa.me/66617406702' },
  { label: 'Phone', handle: '+66 61 740 6702', href: 'tel:+66617406702' },
]

export function Contact() {
  const [copied, setCopied] = useState(false)
  function copy() {
    navigator.clipboard?.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-6xl">
          Got a process that should run itself? <span className="text-accent">Let’s automate it.</span>
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex min-w-0 items-center gap-2 rounded-full bg-ink px-5 py-3.5 text-base font-medium text-paper transition-colors duration-150 ease-out hover:bg-ink-soft"
          >
            <span className="truncate">{EMAIL}</span>
            <ArrowUpRight className="size-4 shrink-0" />
          </a>
          <button
            onClick={copy}
            className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface px-4 py-3.5 text-sm font-medium transition-[border-color,transform] duration-150 ease-out hover:border-ink active:scale-[0.97]"
          >
            {copied ? <Check className="size-4 text-ok" /> : <Copy className="size-4" />}
            {copied ? 'Copied' : 'Copy email'}
          </button>
        </div>

        <ul className="mt-16 grid grid-cols-2 border-t border-line md:grid-cols-4">
          {links.map((l) => (
            <li key={l.label} className="border-b border-line md:border-b-0">
              <a
                href={l.href}
                {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex flex-col gap-1 py-5 pr-4 transition-colors duration-150 ease-out"
              >
                <span className="font-mono text-xs text-muted">{l.label}</span>
                <span className="flex items-center gap-1 truncate font-medium group-hover:text-accent">
                  {l.handle}
                  <ArrowUpRight className="size-3.5 shrink-0 opacity-50" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-12 font-mono text-xs text-muted">© 2026 Ye Myat Moe · Bangkok, Thailand</p>
      </div>
    </section>
  )
}
