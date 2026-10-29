import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { animate, useMotionValue } from 'framer-motion';
import { CANVAS_H, CANVAS_W, INTRO } from '../data/projects';
import { EASE_IN_OUT, reducedMotion } from './easing';

function clamp(value: number, min: number, max: number) {
  return Math.max(Math.min(value, max), Math.min(min, max));
}

/** Zoom the table out on narrow / tablet widths so more of it fits. */
export function deskScaleForWidth(w: number) {
  if (w >= 1280) return 1;
  if (w <= 768) return 0.52;
  return 0.52 + ((w - 768) / (1280 - 768)) * 0.48;
}

export function useDeskCamera(
  viewportRef: React.RefObject<HTMLDivElement | null>,
  active = true,
) {
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const mvScale = useMotionValue(1);
  const dragging = useRef(false);
  const dragEndedAt = useRef(0);
  const scaleRef = useRef(1);
  const [viewport, setViewport] = useState({ w: 0, h: 0 });
  const [scale, setScale] = useState(1);
  const [grabbing, setGrabbing] = useState(false);

  const bounds = useCallback((w: number, h: number, s: number) => {
    const scaledW = CANVAS_W * s;
    const scaledH = CANVAS_H * s;
    return {
      minX: Math.min(0, w - scaledW),
      maxX: 0,
      minY: Math.min(0, h - scaledH),
      maxY: 0,
    };
  }, []);

  const placeAtIntro = useCallback(
    (w: number, h: number, s: number) => {
      const { minX, maxX, minY, maxY } = bounds(w, h, s);
      mvX.set(clamp(w / 2 - INTRO.x * s, minX, maxX));
      mvY.set(clamp(h / 2 - INTRO.y * s, minY, maxY));
    },
    [bounds, mvX, mvY],
  );

  const applyScale = useCallback(
    (s: number) => {
      scaleRef.current = s;
      mvScale.set(s);
      setScale(s);
    },
    [mvScale],
  );

  const panTo = useCallback(
    (canvasX: number, canvasY: number) => {
      const el = viewportRef.current;
      if (!el) return;
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (w < 10 || h < 10) return;
      const s = scaleRef.current;
      const { minX, maxX, minY, maxY } = bounds(w, h, s);
      const nextX = clamp(w / 2 - canvasX * s, minX, maxX);
      const nextY = clamp(h / 2 - canvasY * s, minY, maxY);
      const instant = reducedMotion();
      mvX.stop();
      mvY.stop();
      animate(mvX, nextX, { duration: instant ? 0 : 0.3, ease: EASE_IN_OUT });
      animate(mvY, nextY, { duration: instant ? 0 : 0.3, ease: EASE_IN_OUT });
    },
    [bounds, mvX, mvY, viewportRef],
  );

  useLayoutEffect(() => {
    if (!active) return;
    const el = viewportRef.current;
    if (!el) return;

    const place = (w: number, h: number) => {
      if (w < 10 || h < 10) return;
      const nextScale = deskScaleForWidth(w);
      const prevScale = scaleRef.current;
      const scaleChanged = Math.abs(prevScale - nextScale) > 0.001;

      applyScale(nextScale);
      setViewport((prev) => (prev.w === w && prev.h === h ? prev : { w, h }));

      if (scaleChanged) {
        placeAtIntro(w, h, nextScale);
      } else {
        const { minX, maxX, minY, maxY } = bounds(w, h, nextScale);
        mvX.set(clamp(mvX.get(), minX, maxX));
        mvY.set(clamp(mvY.get(), minY, maxY));
      }
    };

    applyScale(deskScaleForWidth(el.clientWidth));
    placeAtIntro(el.clientWidth, el.clientHeight, scaleRef.current);
    place(el.clientWidth, el.clientHeight);

    const observer = new ResizeObserver(([entry]) => {
      place(entry.contentRect.width, entry.contentRect.height);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [active, applyScale, bounds, mvX, mvY, placeAtIntro, viewportRef]);

  useEffect(() => {
    if (!active) return;
    const el = viewportRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const s = scaleRef.current;
      const { minX, maxX, minY, maxY } = bounds(el.clientWidth, el.clientHeight, s);
      mvX.stop();
      mvY.stop();
      mvX.set(clamp(mvX.get() - e.deltaX, minX, maxX));
      mvY.set(clamp(mvY.get() - e.deltaY, minY, maxY));
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [active, bounds, mvX, mvY, viewportRef]);

  const ignoreClick = useCallback(
    () => dragging.current || Date.now() - dragEndedAt.current < 120,
    [],
  );

  const dragConstraints = {
    left: Math.min(0, viewport.w - CANVAS_W * scale),
    right: 0,
    top: Math.min(0, viewport.h - CANVAS_H * scale),
    bottom: 0,
  };

  return {
    mvX,
    mvY,
    mvScale,
    scale,
    viewport,
    grabbing,
    dragConstraints,
    panTo,
    ignoreClick,
    onDragStart: () => {
      dragging.current = true;
      setGrabbing(true);
    },
    onDragEnd: () => {
      dragging.current = false;
      dragEndedAt.current = Date.now();
      setGrabbing(false);
    },
  };
}
