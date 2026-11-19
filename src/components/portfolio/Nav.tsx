
const links = [
  { href: '#story', label: 'Story' },
  { href: '#speaking', label: 'Speaking' },
  { href: '#toolkit', label: 'Toolkit' },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 whitespace-nowrap">
          <span className="grid size-8 place-items-center rounded-lg bg-ink font-mono text-xs font-medium text-paper">
            Ye
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors duration-150 ease-out hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:yemyatmoe.tetee@gmail.com"
          className="whitespace-nowrap rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors duration-150 ease-out hover:bg-ink-soft"
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}
