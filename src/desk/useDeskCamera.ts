import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { animate, useMotionValue } from 'framer-motion';
import { CANVAS_H, CANVAS_W, INTRO } from '../data/projects';
import { EASE_IN_OUT, reducedMotion } from './easing';

function clamp(value: number, min: number, max: number) {
  return Math.max(Math.min(value, max), Math.min(min, max));
}

export function useDeskCamera(viewportRef: React.RefObject<HTMLDivElement | null>) {
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const centered = useRef(false);
  const dragging = useRef(false);
  const dragEndedAt = useRef(0);
  const [viewport, setViewport] = useState({ w: 0, h: 0 });
  const [grabbing, setGrabbing] = useState(false);

  const panTo = useCallback(
    (canvasX: number, canvasY: number) => {
      const el = viewportRef.current;
      if (!el) return;
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (w < 10 || h < 10) return;
      const nextX = clamp(-(canvasX - w / 2), w - CANVAS_W, 0);
      const nextY = clamp(-(canvasY - h / 2), h - CANVAS_H, 0);
      const instant = reducedMotion();
      mvX.stop();
      mvY.stop();
      animate(mvX, nextX, { duration: instant ? 0 : 0.3, ease: EASE_IN_OUT });
      animate(mvY, nextY, { duration: instant ? 0 : 0.3, ease: EASE_IN_OUT });
    },
    [mvX, mvY, viewportRef],
  );

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const place = (w: number, h: number) => {
      if (w < 10 || h < 10) return;
      setViewport((prev) => (prev.w === w && prev.h === h ? prev : { w, h }));
      if (!centered.current) {
        centered.current = true;
        mvX.set(clamp(-(INTRO.x - w / 2), w - CANVAS_W, 0));
        mvY.set(clamp(-(INTRO.y - h / 2), h - CANVAS_H, 0));
      } else {
        mvX.set(clamp(mvX.get(), w - CANVAS_W, 0));
        mvY.set(clamp(mvY.get(), h - CANVAS_H, 0));
      }
    };
    const observer = new ResizeObserver(([entry]) => {
      place(entry.contentRect.width, entry.contentRect.height);
    });
    observer.observe(el);
    place(el.clientWidth, el.clientHeight);
    return () => observer.disconnect();
  }, [mvX, mvY, viewportRef]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      mvX.stop();
      mvY.stop();
      mvX.set(clamp(mvX.get() - e.deltaX, el.clientWidth - CANVAS_W, 0));
      mvY.set(clamp(mvY.get() - e.deltaY, el.clientHeight - CANVAS_H, 0));
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [mvX, mvY, viewportRef]);

  const ignoreClick = useCallback(
    () => dragging.current || Date.now() - dragEndedAt.current < 120,
    [],
  );

  return {
    mvX,
    mvY,
    viewport,
    grabbing,
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
