import { education, EDUCATION_POS } from '../data/education';

interface Props {
  ignoreClick: () => boolean;
  onOpen: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export function EducationBadge({ ignoreClick, onOpen, className, style }: Props) {
  const school = education[0];
  return (
    <button
      type="button"
      aria-label={`Open education, ${school.degree} at ${school.school}`}
      onClick={() => {
        if (ignoreClick()) return;
        onOpen();
      }}
      className={`absolute bg-paper text-left shadow-print ring-1 ring-ink/10 ${className ?? ''}`}
      style={{
        left: EDUCATION_POS.x,
        top: EDUCATION_POS.y,
        width: EDUCATION_POS.width,
        transform: `rotate(${EDUCATION_POS.rotate}deg)`,
        ...style,
      }}
    >
      <span className="block h-2 bg-ink" />
      <span className="flex justify-center -mt-2">
        <span className="h-4 w-4 rounded-full bg-canvas ring-2 ring-ink/20" aria-hidden />
      </span>
      <span className="block px-5 pb-5 pt-3">
        <span className="block font-mono text-[10px] uppercase tracking-wide text-ink/70">
          Student
        </span>
        <span className="mt-2 block font-display text-lg font-semibold leading-tight tracking-tight text-ink">
          {school.school}
        </span>
        <span className="mt-1 block font-display text-sm text-ink">{school.degree}</span>
        <span className="mt-2 block font-mono text-[11px] text-ink/70">{school.years}</span>
        <span className="mt-3 block font-mono text-[11px] leading-snug text-ink">
          {school.points[0]}
        </span>
      </span>
    </button>
  );
}
