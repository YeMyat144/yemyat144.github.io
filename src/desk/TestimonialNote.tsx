import type { Testimonial } from '../data/testimonials';

interface Props {
  note: Testimonial;
  ignoreClick: () => boolean;
  onOpen: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export function TestimonialNote({ note, ignoreClick, onOpen, className, style }: Props) {
  return (
    <button
      type="button"
      aria-label={`Open testimonial from ${note.name}, ${note.company}`}
      onClick={() => {
        if (ignoreClick()) return;
        onOpen();
      }}
      className={`absolute bg-paper px-5 pb-5 pt-6 text-left shadow-print ring-1 ring-ink/10 ${className ?? ''}`}
      style={{
        left: note.x,
        top: note.y,
        width: note.width,
        transform: `rotate(${note.rotate}deg)`,
        ...style,
      }}
    >
      <span className="absolute left-1/2 top-2 h-2.5 w-2.5 -translate-x-1/2 bg-accent" aria-hidden />
      <span className="block font-display text-xl font-medium leading-snug tracking-tight text-ink">
        {note.short}
      </span>
      <span className="mt-3 block font-mono text-[11px] text-ink/70">
        {note.name}
        <br />
        {note.role} · {note.company}
      </span>
    </button>
  );
}
