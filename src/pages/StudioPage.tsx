import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { notes } from '../data/notes';
import { CANVAS_H, CANVAS_W, projects, type Discipline } from '../data/projects';
import { testimonials } from '../data/testimonials';
import { Seo } from '../components/seo/Seo';
import { DeskNoteItem } from '../desk/DeskNotes';
import { EducationBadge } from '../desk/EducationBadge';
import { ExperienceStrip } from '../desk/ExperienceStrip';
import { FilterBar } from '../desk/FilterBar';
import { IndexView } from '../desk/IndexView';
import { Intro } from '../desk/Intro';
import { MiniMap } from '../desk/MiniMap';
import { PhoneColumn } from '../desk/PhoneColumn';
import { ProjectPrint } from '../desk/ProjectPrint';
import { SidePanel } from '../desk/SidePanel';
import { TestimonialNote } from '../desk/TestimonialNote';
import { TopBar, type ViewMode } from '../desk/TopBar';
import { useDeskCamera } from '../desk/useDeskCamera';
import type { Selection } from '../desk/types';

export default function StudioPage() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<Discipline | 'All'>('All');
  const [view, setView] = useState<ViewMode>('desk');
  const [selection, setSelection] = useState<Selection | null>(null);
  const [isPhone, setIsPhone] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false,
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const sync = () => setIsPhone(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const camera = useDeskCamera(viewportRef, !isPhone);

  const visibleIds = useMemo(() => {
    const ids = projects
      .filter((p) => filter === 'All' || p.disciplines.includes(filter))
      .map((p) => p.id);
    return new Set(ids);
  }, [filter]);

  return (
    <>
      <Seo
        title="Ye Myat Moe"
        description="Software engineer in Bangkok. A desk of shipped work — drag, scroll, or use the map."
        path="/"
      />
      <TopBar view={view} onViewChange={setView} />

      {isPhone ? (
        <PhoneColumn filter={filter} onSelect={setSelection} />
      ) : (
      <div
        ref={viewportRef}
        className="fixed inset-0 overflow-hidden bg-canvas"
      >
        <motion.div
          drag
          dragConstraints={camera.dragConstraints}
          dragElastic={0.06}
          dragTransition={{ power: 0.25, timeConstant: 220 }}
          onDragStart={camera.onDragStart}
          onDragEnd={camera.onDragEnd}
          className={`dot-grid absolute left-0 top-0 origin-top-left select-none ${
            camera.grabbing ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            x: camera.mvX,
            y: camera.mvY,
            scale: camera.mvScale,
            width: CANVAS_W,
            height: CANVAS_H,
          }}
        >
          <Intro hint="Drag anywhere, scroll, or use the map. Click any print to read how it was built." />

          {notes.map((note) => (
            <DeskNoteItem key={note.id} note={note} />
          ))}

          {projects.map((p) => (
            <ProjectPrint
              key={p.id}
              project={p}
              dimmed={!visibleIds.has(p.id)}
              ignoreClick={camera.ignoreClick}
              onOpen={() => setSelection({ kind: 'project', item: p })}
            />
          ))}

          <ExperienceStrip
            ignoreClick={camera.ignoreClick}
            onOpen={() => setSelection({ kind: 'experience' })}
          />
          <EducationBadge
            ignoreClick={camera.ignoreClick}
            onOpen={() => setSelection({ kind: 'education' })}
          />
          {testimonials.map((t) => (
            <TestimonialNote
              key={t.id}
              note={t}
              ignoreClick={camera.ignoreClick}
              onOpen={() => setSelection({ kind: 'testimonial', item: t })}
            />
          ))}
        </motion.div>

        <MiniMap
          x={camera.mvX}
          y={camera.mvY}
          scale={camera.scale}
          viewport={camera.viewport}
          projects={projects}
          visibleIds={visibleIds}
          onJump={camera.panTo}
        />
      </div>
      )}

      {view === 'desk' && <FilterBar active={filter} onChange={setFilter} />}

      <AnimatePresence>
        {view === 'index' && (
          <IndexView
            filter={filter}
            onSelect={setSelection}
          />
        )}
      </AnimatePresence>

      <SidePanel selection={selection} onClose={() => setSelection(null)} onSelect={setSelection} />
    </>
  );
}
