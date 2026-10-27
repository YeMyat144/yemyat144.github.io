import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SITE } from '../data/site';

export type ViewMode = 'desk' | 'index';

interface TopBarProps {
  view: ViewMode;
  onViewChange: (v: ViewMode) => void;
}

export function TopBar({ view, onViewChange }: TopBarProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-start justify-between p-5">
      <div className="pointer-events-auto min-w-0 bg-paper px-3 py-2 ring-1 ring-ink/15">
        <p className="truncate font-display text-base font-bold leading-none tracking-tight text-ink">
          {SITE.name}
        </p>
        <p className="mt-1 truncate font-mono text-[10px] text-ink/70">{SITE.role}</p>
      </div>

      <div className="pointer-events-auto flex shrink-0 items-center gap-2">
        <div
          role="tablist"
          aria-label="View"
          className="relative flex bg-paper p-1 ring-1 ring-ink/15"
        >
          {(['desk', 'index'] as ViewMode[]).map((v) => (
            <button
              key={v}
              type="button"
              role="tab"
              aria-selected={view === v}
              onClick={() => onViewChange(v)}
              className="relative px-3 py-1.5 font-mono text-xs capitalize"
            >
              {view === v && (
                <motion.span
                  layoutId="view-pill"
                  className="absolute inset-0 bg-ink"
                  transition={{ duration: 0.2, ease: [0.65, 0, 0.35, 1] }}
                />
              )}
              <span className={`relative z-10 ${view === v ? 'text-[#F7FBFD]' : 'text-ink/70'}`}>
                {v === 'desk' ? 'Desk' : 'Index'}
              </span>
            </button>
          ))}
        </div>

        <Link to="/contact" className="desk-btn">
          <Mail className="h-3.5 w-3.5 sm:hidden" aria-hidden />
          <span className="hidden sm:inline">Say hello</span>
        </Link>
      </div>
    </div>
  );
}
