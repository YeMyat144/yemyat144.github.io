import { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const coordRef = useRef<HTMLSpanElement | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    if (isCoarse) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const interactiveSelector =
      'a, button, [role="button"], input, textarea, select, label, .is-interactive';

    const onOver = (e: Event) => {
      const el = e.target as HTMLElement | null;
      if (el && el.closest && el.closest(interactiveSelector)) {
        cursorRef.current?.classList.add('is-hover');
      }
    };
    const onOut = (e: Event) => {
      const el = e.target as HTMLElement | null;
      if (el && el.closest && el.closest(interactiveSelector)) {
        cursorRef.current?.classList.remove('is-hover');
      }
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.22;
      pos.current.y += (target.current.y - pos.current.y) * 0.22;

      const node = cursorRef.current;
      if (node) {
        node.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      const coord = coordRef.current;
      if (coord) {
        const x = String(Math.round(pos.current.x)).padStart(4, '0');
        const y = String(Math.round(pos.current.y)).padStart(4, '0');
        coord.textContent = `X·${x}  Y·${y}`;
      }

      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className="ymm-cursor" ref={cursorRef}>
      <span className="cx" />
      <span className="cy" />
      <span className="dot" />
      <span className="coord" ref={coordRef}>X·0000  Y·0000</span>
    </div>
  );
};

export default Cursor;
