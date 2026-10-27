import { notes } from '../data/notes';
import { testimonials } from '../data/testimonials';
import { projects, type Discipline } from '../data/projects';
import { DeskNoteItem } from './DeskNotes';
import { EducationBadge } from './EducationBadge';
import { ExperienceStrip } from './ExperienceStrip';
import { Intro } from './Intro';
import { ProjectPrint } from './ProjectPrint';
import { TestimonialNote } from './TestimonialNote';
import type { Selection } from './types';

interface Props {
  filter: Discipline | 'All';
  onSelect: (s: Selection) => void;
}

export function PhoneColumn({ filter, onSelect }: Props) {
  const sticky = notes.filter((n) => n.kind === 'sticky');
  const scrap = notes.find((n) => n.kind === 'scrap');
  const stack = notes.find((n) => n.kind === 'stack');
  const contact = notes.find((n) => n.kind === 'contact');

  return (
    <div className="dot-grid min-h-screen">
    <div className="mx-auto flex w-full max-w-[448px] flex-col gap-10 px-4 pb-36 pt-24">
      <Intro
        hint="Tap any print to read how it was built."
        className="!relative !left-auto !top-auto !w-full"
      />

      {projects.map((p, i) => (
        <div key={p.id} className={`w-[90%] ${i % 2 === 1 ? 'ml-auto' : ''}`}>
          <ProjectPrint
            project={{ ...p, rotate: i % 2 === 0 ? -2 : 2 }}
            dimmed={filter !== 'All' && !p.disciplines.includes(filter)}
            ignoreClick={() => false}
            onOpen={() => onSelect({ kind: 'project', item: p })}
            className="!relative !left-auto !top-auto !w-full"
          />
        </div>
      ))}

      {scrap && (
        <div className="w-[78%]">
          <DeskNoteItem note={scrap} className="!relative !left-auto !top-auto !w-full" style={{ transform: 'none' }} />
        </div>
      )}

      {sticky[0] && (
        <div className="ml-auto w-[78%]">
          <DeskNoteItem note={sticky[0]} className="!relative !left-auto !top-auto !w-full" style={{ transform: 'none' }} />
        </div>
      )}

      <ExperienceStrip
        ignoreClick={() => false}
        onOpen={() => onSelect({ kind: 'experience' })}
        className="!relative !left-auto !top-auto !w-full"
        style={{ transform: 'rotate(-1deg)' }}
      />

      {stack && (
        <div className="w-[78%]">
          <DeskNoteItem note={stack} className="!relative !left-auto !top-auto !w-full" style={{ transform: 'none' }} />
        </div>
      )}

      <EducationBadge
        ignoreClick={() => false}
        onOpen={() => onSelect({ kind: 'education' })}
        className="!relative !left-auto !top-auto w-[78%]"
        style={{ transform: 'rotate(2deg)' }}
      />

      {testimonials.map((t, i) => (
        <div key={t.id} className={`w-[78%] ${i % 2 === 1 ? 'ml-auto' : ''}`}>
          <TestimonialNote
            note={t}
            ignoreClick={() => false}
            onOpen={() => onSelect({ kind: 'testimonial', item: t })}
            className="!relative !left-auto !top-auto !w-full"
            style={{ transform: `rotate(${i % 2 === 0 ? -2 : 3}deg)` }}
          />
        </div>
      ))}

      {sticky[1] && (
        <div className="w-[78%]">
          <DeskNoteItem note={sticky[1]} className="!relative !left-auto !top-auto !w-full" style={{ transform: 'none' }} />
        </div>
      )}

      {contact && (
        <DeskNoteItem
          note={contact}
          className="!relative !left-auto !top-auto !w-full"
          style={{ transform: 'none' }}
        />
      )}
    </div>
    </div>
  );
}
