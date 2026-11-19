import { useEffect, useState } from 'react'
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'

function WhatsAppIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function Hero({
  availability,
  photo = '/logos/profile.jpeg',
}: {
  availability: string
  photo?: string
}) {
  const time = useBangkokTime()
  const now = [
    { label: 'Studying', value: 'Master’s in Computer Science, KMUTT' },
    { label: 'Exploring', value: 'Intersection of technology and society' },
    { label: 'Based in', value: `Bangkok · ${time}` },
  ]
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-12 sm:px-8 md:pt-16 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
        <div className="min-w-0">
          <p className="text-lg font-medium text-ink-soft">Hi, I’m Ye Myat Moe.</p>

          <h1 className="mt-4 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[4.5rem]">
            I build products, and the{' '}
            <span className="relative whitespace-nowrap">
              <span className="absolute inset-x-[-0.08em] bottom-[0.08em] top-[0.52em] -z-0 bg-pop" aria-hidden />
              <span className="relative">AI that runs</span>
            </span>{' '}
            them.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
            Software engineer working across full-stack SaaS, AR apps and machine
            learning, with a focus on AI automation using n8n, Gemini and Claude.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#story"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform duration-150 ease-out active:scale-[0.97]"
            >
              See my story
              <ArrowDown className="size-4" />
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=18dvE9NNR4XppbyuOiZIn8KnHd8jtFcJ1"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors duration-150 ease-out hover:border-ink hover:bg-paper active:scale-[0.97]"
            >
              <Download className="size-4" />
              Resume
            </a>
            <a
              href="https://github.com/yemyat144"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid size-11 place-items-center rounded-full border border-line transition-colors duration-150 ease-out hover:border-ink"
            >
              <Github className="size-4" />
            </a>
            <a
              href="https://linkedin.com/in/yemyatmoe14"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid size-11 place-items-center rounded-full border border-line transition-colors duration-150 ease-out hover:border-ink"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href="https://wa.me/66617406702"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid size-11 place-items-center rounded-full border border-line transition-colors duration-150 ease-out hover:border-ink"
            >
              <WhatsAppIcon className="size-4" />
            </a>
          </div>

          <dl className="mt-12 max-w-xl divide-y divide-line border-y border-line">
            {now.map((n) => (
              <div key={n.label} className="flex items-baseline gap-6 py-3">
                <dt className="w-20 shrink-0 font-mono text-xs text-muted">{n.label}</dt>
                <dd className="min-w-0 text-[15px] font-medium tabular-nums">{n.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] bg-accent sm:translate-x-4 sm:translate-y-4" aria-hidden />
          <div className="relative overflow-hidden rounded-[28px] border-2 border-ink bg-surface">
            <img
              src={photo || '/logos/profile.jpeg'}
              alt="Ye Myat Moe"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -left-3 bottom-6 flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-4 py-2 text-sm font-medium sm:-left-6">
            <span className="size-2 rounded-full bg-ok" />
            <span className="whitespace-nowrap">{availability}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function useBangkokTime() {
  const fmt = () =>
    new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Bangkok',
    }).format(new Date())
  const [t, setT] = useState(fmt)
  useEffect(() => {
    const id = setInterval(() => setT(fmt()), 30_000)
    return () => clearInterval(id)
  }, [])
  return t
}
