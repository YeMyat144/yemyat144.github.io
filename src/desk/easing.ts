export const EASE_OUT = [0.23, 1, 0.32, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;
export const SPRING_FOLLOW = { type: 'spring' as const, stiffness: 280, damping: 28 };

export function reducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
