import { motion, useTransform, type MotionValue } from 'framer-motion';
import { Undo2 } from 'lucide-react';
import { CANVAS_H, CANVAS_W, INTRO, INTRO_ORIGIN, type Project } from '../data/projects';
import { EXPERIENCE_POS } from '../data/experience';
import { EDUCATION_POS } from '../data/education';
import { testimonials } from '../data/testimonials';
import { notes } from '../data/notes';

const MAP_W = 176;
const MAP_SCALE = MAP_W / CANVAS_W;
const MAP_H = CANVAS_H * MAP_SCALE;

interface Props {
  x: MotionValue<number>;
  y: MotionValue<number>;
  scale: number;
  viewport: { w: number; h: number };
  projects: Project[];
  visibleIds: Set<string>;
  onJump: (cx: number, cy: number) => void;
}

export function MiniMap({ x, y, scale, viewport, projects, visibleIds, onJump }: Props) {
  const s = Math.max(scale, 0.01);
  const frameX = useTransform(x, (v) => (-v / s) * MAP_SCALE);
  const frameY = useTransform(y, (v) => (-v / s) * MAP_SCALE);
  const frameW = Math.max(8, (viewport.w / s) * MAP_SCALE);
  const frameH = Math.max(8, (viewport.h / s) * MAP_SCALE);

  const others = [
    { id: 'exp', x: EXPERIENCE_POS.x, y: EXPERIENCE_POS.y, w: EXPERIENCE_POS.width, h: 420 },
    { id: 'edu', x: EDUCATION_POS.x, y: EDUCATION_POS.y, w: EDUCATION_POS.width, h: 220 },
    ...notes.map((n) => ({ id: n.id, x: n.x, y: n.y, w: n.width, h: n.width * 0.8 })),
    ...testimonials.map((t) => ({ id: t.id, x: t.x, y: t.y, w: t.width, h: t.width * 0.7 })),
  ];

  return (
    <div className="absolute bottom-5 right-5 z-20 hidden sm:flex flex-col items-end gap-2">
      <button type="button" onClick={() => onJump(INTRO.x, INTRO.y)} className="back-btn">
        <Undo2 className="h-3.5 w-3.5" aria-hidden />
        Back to intro
      </button>
      <button
        type="button"
        aria-label="Map of the table. Click to jump to a spot."
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          onJump((e.clientX - rect.left) / MAP_SCALE, (e.clientY - rect.top) / MAP_SCALE);
        }}
        className="relative block cursor-crosshair overflow-hidden bg-paper/90 ring-1 ring-ink/15 backdrop-blur"
        style={{ width: MAP_W, height: MAP_H }}
      >
        {others.map((o) => (
          <span
            key={o.id}
            aria-hidden
            className="absolute bg-ink/15"
            style={{
              left: o.x * MAP_SCALE,
              top: o.y * MAP_SCALE,
              width: o.w * MAP_SCALE,
              height: o.h * MAP_SCALE,
            }}
          />
        ))}
        {projects.map((p) => (
          <span
            key={p.id}
            aria-hidden
            className={`absolute transition-colors duration-200 ${
              visibleIds.has(p.id) ? 'bg-accent' : 'bg-ink/15'
            }`}
            style={{
              left: p.x * MAP_SCALE,
              top: p.y * MAP_SCALE,
              width: p.width * MAP_SCALE,
              height: p.width * MAP_SCALE * 0.95,
            }}
          />
        ))}
        <span
          aria-hidden
          className="absolute bg-ink"
          style={{
            left: INTRO_ORIGIN.x * MAP_SCALE,
            top: (INTRO_ORIGIN.y + 80) * MAP_SCALE,
            width: 700 * MAP_SCALE,
            height: 3,
          }}
        />
        <motion.span
          aria-hidden
          className="pointer-events-none absolute border-[1.5px] border-ink"
          style={{
            left: frameX,
            top: frameY,
            width: frameW,
            height: frameH,
          }}
        />
      </button>
    </div>
  );
}
