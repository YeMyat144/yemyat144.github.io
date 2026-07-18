/**
 * Solar-eclipse toggle
 *
 * Light mode: full circle (sun) with 8 radiating dots
 * Dark mode:  crescent moon — a second circle slides in from top-right
 *             and "bites" into the main circle, matching the background.
 *
 * The masking circle fill is var(--bg) so it blends seamlessly with the page,
 * and the CSS transition on --bg keeps it smooth during theme switches.
 */
import React from 'react';
import { motion } from 'framer-motion';

interface ColorModeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ease = [0.22, 1, 0.36, 1] as const;
const SIZE = 24;
const CX = SIZE / 2;
const CY = SIZE / 2;

/* 8 ray tips evenly distributed around the circle */
const RAY_INNER = 7;
const RAY_OUTER = 10;
const rays = Array.from({ length: 8 }, (_, i) => {
  const a = (i * Math.PI * 2) / 8 - Math.PI / 2;
  return {
    x1: CX + Math.cos(a) * RAY_INNER,
    y1: CY + Math.sin(a) * RAY_INNER,
    x2: CX + Math.cos(a) * RAY_OUTER,
    y2: CY + Math.sin(a) * RAY_OUTER,
  };
});

export const ColorModeToggle: React.FC<ColorModeToggleProps> = ({ isDark, onToggle }) => (
  <motion.button
    onClick={onToggle}
    aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    title={isDark ? 'Light mode' : 'Dark mode'}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.92 }}
    style={{
      width: 36,
      height: 36,
      borderRadius: '999px',
      border: '1px solid var(--border)',
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      padding: 0,
      color: 'var(--fg)',
      flexShrink: 0,
      /* inherit the global theme color transition */
      transition: 'border-color 220ms ease, background 220ms ease',
    }}
  >
    <svg
      width={SIZE}
      height={SIZE}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      fill="none"
      aria-hidden="true"
      style={{ display: 'block', overflow: 'visible' }}
    >
      {/* Sun rays — fade + scale out in dark mode */}
      {rays.map((r, i) => (
        <motion.line
          key={i}
          x1={r.x1} y1={r.y1}
          x2={r.x2} y2={r.y2}
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.4 : 1,
          }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
          transition={{ duration: 0.3, delay: isDark ? 0 : i * 0.025, ease }}
        />
      ))}

      {/* Main body — grows from sun radius to moon radius */}
      <motion.circle
        cx={CX}
        cy={CY}
        fill="currentColor"
        animate={{ r: isDark ? 6.5 : 4.5 }}
        transition={{ duration: 0.42, ease }}
      />

      {/* Eclipse mask circle — slides in from top-right to create crescent */}
      <motion.circle
        fill="var(--bg)"
        r={6}
        animate={{
          cx: isDark ? CX + 4.5 : CX + 15,
          cy: isDark ? CY - 4.5 : CY - 15,
        }}
        transition={{ duration: 0.42, ease }}
        style={
          /* keep mask fill in sync with background during theme transitions */
          { transition: 'fill 220ms ease' } as React.CSSProperties
        }
      />
    </svg>
  </motion.button>
);
