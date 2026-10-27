import { ALL_DISCIPLINES, countByDiscipline, projects, type Discipline } from '../data/projects';

interface Props {
  active: Discipline | 'All';
  onChange: (d: Discipline | 'All') => void;
}

export function FilterBar({ active, onChange }: Props) {
  const items: { label: string; value: Discipline | 'All'; count: number }[] = [
    { label: 'All', value: 'All', count: projects.length },
    ...ALL_DISCIPLINES.map((d) => ({ label: d, value: d, count: countByDiscipline(d) })),
  ];

  return (
    <div className="pointer-events-none fixed bottom-5 left-5 right-5 z-30 flex flex-col items-start gap-2 sm:right-auto">
      <p className="pointer-events-none hidden font-mono text-[11px] text-ink/70 md:block">
        Drag or scroll to wander
      </p>
      <div
        role="radiogroup"
        aria-label="Filter projects"
        className="pointer-events-auto flex max-w-full gap-0 overflow-x-auto bg-paper ring-1 ring-ink/15"
      >
        {items.map(({ label, value, count }) => {
          const selected = active === value;
          return (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(value)}
              className={`flex shrink-0 items-baseline gap-1.5 whitespace-nowrap px-3 py-1.5 font-mono text-xs ${
                selected ? 'bg-accent text-ink' : 'text-ink/70 hover:text-ink'
              }`}
            >
              {label}
              <span className="text-[10px] opacity-70">{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
