import { SITE } from '../data/site';
import { INTRO_ORIGIN } from '../data/projects';

interface Props {
  hint: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Intro({ hint, className, style }: Props) {
  return (
    <header
      className={`absolute ${className ?? ''}`}
      style={{
        left: INTRO_ORIGIN.x,
        top: INTRO_ORIGIN.y,
        width: INTRO_ORIGIN.width,
        ...style,
      }}
    >
      <p className="font-mono text-xs text-ink/70">
        {SITE.name} — {SITE.role}, {SITE.city}
      </p>
      <h1 className="mt-5 font-display text-[44px] font-semibold leading-[0.92] tracking-[-0.035em] text-ink md:text-[88px]">
        {SITE.headlineLead}{' '}
        <span className="text-accent">{SITE.headlineAccent}</span>
      </h1>
      <div className="mt-8 flex items-start gap-4">
        <svg viewBox="0 0 80 40" className="mt-1 h-8 w-16 shrink-0 text-ink" aria-hidden>
          <path
            d="M4 30 C 20 6, 44 6, 72 20 M62 12 L72 20 L60 26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="max-w-sm font-mono text-xs leading-relaxed text-ink/70">{hint}</p>
      </div>
    </header>
  );
}
