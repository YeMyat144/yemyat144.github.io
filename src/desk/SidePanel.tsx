import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { experience } from '../data/experience';
import { education } from '../data/education';
import { projects } from '../data/projects';
import { EASE_OUT } from './easing';
import type { Selection } from './types';

interface Props {
  selection: Selection | null;
  onClose: () => void;
  onSelect: (s: Selection) => void;
}

export function SidePanel({ selection, onClose, onSelect }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selection) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selection, onClose]);

  return (
    <AnimatePresence>
      {selection && (
        <>
          <motion.button
            type="button"
            aria-label="Close panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-ink/35"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="panel-title"
            initial={{ x: '100%', opacity: 0, scale: 0.96 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: '100%', opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.28, ease: EASE_OUT }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full flex-col overflow-y-auto bg-paper text-ink md:w-[576px] md:ring-1 md:ring-ink/10"
          >
            <div className="flex items-start justify-between gap-4 px-6 pt-6 md:px-8">
              <p className="font-mono text-[11px] uppercase tracking-wide text-ink/70">
                {selection.kind === 'project'
                  ? selection.item.disciplines.join(' · ')
                  : selection.kind}
              </p>
              <button
                ref={closeRef}
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center ring-1 ring-ink/15"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="px-6 pb-10 pt-4 md:px-8">
              {selection.kind === 'project' && (
                <ProjectBody
                  selection={selection}
                  onSelect={onSelect}
                />
              )}
              {selection.kind === 'experience' && <ExperienceBody />}
              {selection.kind === 'education' && <EducationBody />}
              {selection.kind === 'testimonial' && <TestimonialBody selection={selection} />}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function ProjectBody({
  selection,
  onSelect,
}: {
  selection: Extract<Selection, { kind: 'project' }>;
  onSelect: (s: Selection) => void;
}) {
  const p = selection.item;
  const idx = projects.findIndex((x) => x.id === p.id);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <div className="aspect-[4/3] overflow-hidden bg-ink/5">
        <img src={p.image} alt={p.alt} className="h-full w-full object-cover" />
      </div>
      <h2
        id="panel-title"
        className="mt-6 font-display text-4xl font-semibold leading-[0.92] tracking-[-0.035em] md:text-5xl"
      >
        {p.title}
      </h2>
      <p className="mt-2 font-mono text-xs text-ink/70">{p.client}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {p.repoLink && (
          <a
            href={p.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink px-3 py-2 font-mono text-[11px] text-[#F7FBFD]"
          >
            View code
          </a>
        )}
        {p.liveLink && (
          <a
            href={p.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 font-mono text-[11px] text-ink ring-1 ring-ink"
          >
            Live
          </a>
        )}
      </div>
      <p className="mt-6 font-display text-lg leading-relaxed">{p.story}</p>
      <dl className="mt-8 grid gap-4 border-y border-ink/15 py-5 md:grid-cols-3">
        <Stat label="Year" value={p.year} />
        <Stat label="Role" value={p.role} />
        <Stat label="Time" value={p.duration} />
      </dl>
      <p className="mt-6 font-mono text-[10px] uppercase tracking-wide text-ink/70">Built with</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {p.stack.map((t) => (
          <li key={t} className="px-2 py-1 font-mono text-[11px] ring-1 ring-ink/15">
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-8 border-l-[3px] border-accent pl-4">
        <p className="font-mono text-[10px] uppercase tracking-wide text-ink/70">Result</p>
        <p className="mt-1 font-display text-base">{p.result}</p>
      </div>
      <div className="mt-10 flex justify-between gap-3 border-t border-ink/15 pt-5">
        <button
          type="button"
          onClick={() => onSelect({ kind: 'project', item: prev })}
          className="px-3 py-2 text-left font-mono text-[11px] ring-1 ring-ink/15"
        >
          <span className="block text-ink/70">← Prev</span>
          <span className="font-display text-sm font-semibold">{prev.title}</span>
        </button>
        <button
          type="button"
          onClick={() => onSelect({ kind: 'project', item: next })}
          className="px-3 py-2 text-right font-mono text-[11px] ring-1 ring-ink/15"
        >
          <span className="block text-ink/70">Next →</span>
          <span className="font-display text-sm font-semibold">{next.title}</span>
        </button>
      </div>
    </>
  );
}

function ExperienceBody() {
  return (
    <>
      <p className="font-mono text-[11px] text-ink/70">$ git log --career</p>
      <h2 id="panel-title" className="mt-3 font-display text-4xl font-semibold tracking-[-0.035em]">
        Experience
      </h2>
      <ol className="mt-8">
        {experience.map((job, i) => (
          <li
            key={job.id}
            className={`py-5 ${i < experience.length - 1 ? 'border-b border-dashed border-ink/20' : ''}`}
          >
            <p className="font-mono text-[11px] text-accent">{job.hash}</p>
            <p className="mt-1 font-display text-2xl font-semibold leading-tight tracking-tight">
              {job.company}
            </p>
            <p className="font-display text-lg">{job.role}</p>
            <p className="mt-1 font-mono text-[11px] text-ink/70">{job.dates}</p>
            <p className="mt-3 font-display leading-relaxed">{job.body}</p>
            <div className="mt-3 border-l-[3px] border-accent pl-3 font-display text-sm">
              {job.impact}
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

function EducationBody() {
  const school = education[0];
  return (
    <>
      <h2 id="panel-title" className="font-display text-4xl font-semibold tracking-[-0.035em]">
        Education
      </h2>
      <p className="mt-6 font-display text-2xl font-semibold leading-tight">{school.school}</p>
      <p className="mt-1 font-display text-lg">{school.degree}</p>
      <p className="mt-2 font-mono text-xs text-ink/70">{school.years}</p>
      <ul className="mt-6 space-y-2 font-display leading-relaxed">
        {school.points.map((p) => (
          <li key={p}>→ {p}</li>
        ))}
      </ul>
    </>
  );
}

function TestimonialBody({
  selection,
}: {
  selection: Extract<Selection, { kind: 'testimonial' }>;
}) {
  const t = selection.item;
  return (
    <>
      <h2 id="panel-title" className="font-display text-3xl font-semibold leading-[1.1] tracking-tight">
        “{t.quote}”
      </h2>
      <p className="mt-6 font-mono text-xs text-ink/70">
        {t.name}
        <br />
        {t.role} · {t.company}
      </p>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-wide text-ink/70">{label}</dt>
      <dd className="mt-1 font-display text-sm font-medium">{value}</dd>
    </div>
  );
}
