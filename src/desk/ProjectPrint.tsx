import { motion } from 'framer-motion';
import type { Project } from '../data/projects';
import { EASE_IN_OUT } from './easing';

interface Props {
  project: Project;
  dimmed: boolean;
  ignoreClick: () => boolean;
  onOpen: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export function ProjectPrint({ project, dimmed, ignoreClick, onOpen, className, style }: Props) {
  return (
    <motion.button
      type="button"
      tabIndex={dimmed ? -1 : 0}
      aria-label={`Open ${project.title}, ${project.disciplines.join(' and ')} project from ${project.year}`}
      onClick={() => {
        if (ignoreClick() || dimmed) return;
        onOpen();
      }}
      initial={false}
      animate={{
        rotate: project.rotate,
        opacity: dimmed ? 0.16 : 1,
        filter: dimmed ? 'grayscale(1)' : 'grayscale(0)',
      }}
      whileHover={dimmed ? undefined : { rotate: 0, y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.22, ease: EASE_IN_OUT }}
      className={`group absolute text-left ${dimmed ? 'cursor-default' : 'cursor-pointer'} ${className ?? ''}`}
      style={{ left: project.x, top: project.y, width: project.width, ...style }}
    >
      <span
        aria-hidden
        className="absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 -rotate-3 bg-accent/80"
      />
      <span className="block bg-paper p-2.5 pb-3 shadow-print ring-1 ring-ink/10">
        <span className="block overflow-hidden bg-ink/5" style={{ aspectRatio: project.aspect }}>
          <img
            src={project.image}
            alt={project.alt}
            draggable={false}
            className="h-full w-full object-cover"
          />
        </span>
        <span className="mt-3 flex items-baseline justify-between gap-3 px-1">
          <span className="font-display text-lg font-semibold leading-none tracking-tight text-ink">
            {project.title}
          </span>
          <span className="font-mono text-[11px] text-ink/70">{project.year}</span>
        </span>
        <span className="mt-1.5 block px-1 font-mono text-[11px] text-ink/70">
          {project.disciplines.join(' + ')}
        </span>
      </span>
    </motion.button>
  );
}
