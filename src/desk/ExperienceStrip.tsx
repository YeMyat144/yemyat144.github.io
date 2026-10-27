import { experience, EXPERIENCE_POS } from '../data/experience';

interface Props {
  ignoreClick: () => boolean;
  onOpen: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export function ExperienceStrip({ ignoreClick, onOpen, className, style }: Props) {
  return (
    <button
      type="button"
      aria-label="Open experience, git log of career"
      onClick={() => {
        if (ignoreClick()) return;
        onOpen();
      }}
      className={`absolute bg-paper px-4 py-5 text-left shadow-print ring-1 ring-ink/10 ${className ?? ''}`}
      style={{
        left: EXPERIENCE_POS.x,
        top: EXPERIENCE_POS.y,
        width: EXPERIENCE_POS.width,
        transform: `rotate(${EXPERIENCE_POS.rotate}deg)`,
        ...style,
      }}
    >
      <p className="font-mono text-[11px] text-ink/70">$ git log --career</p>
      <ol className="mt-4">
        {experience.map((job, i) => (
          <li
            key={job.id}
            className={`py-3 ${i < experience.length - 1 ? 'border-b border-dashed border-ink/20' : ''}`}
          >
            <p className="font-mono text-[10px] text-accent">{job.hash}</p>
            <p className="mt-1 font-display text-sm font-semibold leading-tight tracking-tight text-ink">
              {job.company}
            </p>
            <p className="font-display text-sm leading-tight text-ink">{job.role}</p>
            <p className="mt-1 font-mono text-[10px] text-ink/70">{job.dates}</p>
            <p className="mt-1.5 font-mono text-[11px] leading-snug text-ink">{job.impact}</p>
          </li>
        ))}
      </ol>
    </button>
  );
}
