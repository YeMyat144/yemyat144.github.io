import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, type Discipline } from '../data/projects';
import { experience } from '../data/experience';
import { education } from '../data/education';
import { testimonials } from '../data/testimonials';
import { SPRING_FOLLOW } from './easing';
import type { Selection } from './types';

interface Props {
  filter: Discipline | 'All';
  onSelect: (s: Selection) => void;
}

export function IndexView({ filter, onSelect }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const visible =
    filter === 'All' ? projects : projects.filter((p) => p.disciplines.includes(filter));
  const photo = projects.find((p) => p.id === hovered);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
      className="fixed inset-0 z-[45] overflow-y-auto bg-canvas pt-24"
    >
      <div className="mx-auto max-w-5xl px-6 pb-32 md:px-10">
        <div className="hidden grid-cols-[1fr_160px_1fr_72px] gap-4 border-b border-ink/15 pb-3 font-mono text-[11px] text-ink/70 md:grid">
          <span>Project</span>
          <span>Discipline</span>
          <span>Client</span>
          <span className="text-right">Year</span>
        </div>
        {visible.map((p) => (
          <button
            key={p.id}
            type="button"
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onSelect({ kind: 'project', item: p })}
            className="group w-full border-b border-ink/15 py-5 text-left md:grid md:grid-cols-[1fr_160px_1fr_72px] md:items-baseline md:gap-4"
          >
            <span className="block font-display text-xl font-semibold leading-[0.95] tracking-[-0.035em] text-ink transition-[transform,color] duration-200 group-hover:translate-x-3 group-hover:text-accent md:text-2xl lg:text-[28px]">
              {p.title}
            </span>
            <span className="mt-2 block font-mono text-[11px] text-ink/70 md:mt-0">
              {p.disciplines.join(' + ')}
            </span>
            <span className="block font-mono text-[11px] text-ink/70">{p.client}</span>
            <span className="block font-mono text-[11px] text-ink/70 md:text-right">{p.year}</span>
          </button>
        ))}

        <Section title="Experience">
          {experience.map((job) => (
            <button
              key={job.id}
              type="button"
              onClick={() => onSelect({ kind: 'experience' })}
              className="flex w-full items-baseline justify-between gap-4 border-b border-ink/15 py-4 text-left"
            >
              <span className="font-display text-lg font-semibold tracking-tight md:text-xl">
                {job.company}
              </span>
              <span className="shrink-0 font-mono text-[11px] text-ink/70">{job.dates}</span>
            </button>
          ))}
        </Section>

        <Section title="Education">
          {education.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => onSelect({ kind: 'education' })}
              className="flex w-full items-baseline justify-between gap-4 border-b border-ink/15 py-4 text-left"
            >
              <span className="font-display text-lg font-semibold tracking-tight md:text-xl">
                {s.school}
              </span>
              <span className="shrink-0 font-mono text-[11px] text-ink/70">{s.years}</span>
            </button>
          ))}
        </Section>

        <Section title="Testimonials">
          {testimonials.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => onSelect({ kind: 'testimonial', item: t })}
              className="flex w-full items-baseline justify-between gap-4 border-b border-ink/15 py-4 text-left"
            >
              <span className="font-display text-lg font-semibold tracking-tight md:text-xl">
                {t.company}
              </span>
              <span className="shrink-0 font-mono text-[11px] text-ink/70">{t.name}</span>
            </button>
          ))}
        </Section>
      </div>

      <AnimatePresence>
        {photo && (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.96, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={SPRING_FOLLOW}
            className="pointer-events-none fixed z-40 hidden w-48 overflow-hidden shadow-print lg:block"
            style={{ top: mouse.y + 18, left: mouse.x + 18 }}
          >
            <img src={photo.image} alt="" className="block w-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-16">
      <h2 className="mb-2 font-mono text-[11px] uppercase tracking-wide text-ink/70">{title}</h2>
      <div className="border-t border-ink/15">{children}</div>
    </section>
  );
}
