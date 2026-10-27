import { Link } from 'react-router-dom';
import { SITE } from '../data/site';
import type { DeskNote } from '../data/notes';

interface Props {
  note: DeskNote;
  className?: string;
  style?: React.CSSProperties;
}

export function DeskNoteItem({ note, className, style }: Props) {
  const pos = {
    left: note.x,
    top: note.y,
    width: note.width,
    transform: `rotate(${note.rotate}deg)`,
    ...style,
  };

  if (note.kind === 'sticky') {
    return (
      <aside
        className={`absolute bg-accent p-5 text-ink shadow-print ${className ?? ''}`}
        style={pos}
      >
        <p className="font-mono text-[11px] text-ink/80">{note.label}</p>
        <p className="mt-3 font-display text-xl font-medium leading-snug">{note.body}</p>
      </aside>
    );
  }

  if (note.kind === 'scrap') {
    return (
      <aside
        className={`absolute border border-dashed border-ink/25 bg-paper p-4 text-ink shadow-print ${className ?? ''}`}
        style={pos}
      >
        <svg viewBox="0 0 200 120" className="h-28 w-full text-ink" aria-hidden>
          <path
            d="M30 108 H120 M75 108 L75 70 L118 30 L150 46 M118 30 L130 18 M150 46 L160 70"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M138 64 Q160 78 172 72"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 5"
            className="text-accent"
          />
          <path
            d="M20 20 L60 60 M60 20 L20 60"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="text-accent"
          />
        </svg>
        <p className="mt-2 font-mono text-[11px] text-ink/70">{note.label}</p>
        <p className="mt-1 font-mono text-xs leading-relaxed">{note.body}</p>
      </aside>
    );
  }

  if (note.kind === 'stack') {
    return (
      <aside
        className={`absolute bg-ink p-5 font-mono text-[11px] leading-relaxed text-paper shadow-print ${className ?? ''}`}
        style={pos}
      >
        <p className="text-paper/70">$ cat stack.txt</p>
        <ul className="mt-3 space-y-1">
          {SITE.stack.map((line) => (
            <li key={line}>→ {line}</li>
          ))}
        </ul>
      </aside>
    );
  }

  return (
    <aside
      className={`absolute bg-paper p-6 text-ink shadow-print ring-1 ring-ink/10 ${className ?? ''}`}
      style={pos}
    >
      <p className="font-display text-3xl font-semibold leading-[1.05] tracking-tight">
        {SITE.contactQuestion}
      </p>
      <a
        href={`mailto:${SITE.email}`}
        className="mt-4 block font-mono text-xs text-ink underline-offset-4 hover:underline"
      >
        {SITE.email}
      </a>
      <ul className="mt-3 space-y-1 font-mono text-[11px] text-ink/70">
        {SITE.socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="desk-btn mt-5"
      >
        Open contact
      </Link>
    </aside>
  );
}
