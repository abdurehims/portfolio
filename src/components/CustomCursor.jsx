import { useEffect, useRef, useState } from 'react';

export default function CustomCursor({ hidden = false }) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = e => { pos.current = { x: e.clientX, y: e.clientY }; };
    const onOver = e => {
      setHover(!!e.target.closest('a,button,.tw-interactive,input,textarea,select,label'));
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });

    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${pos.current.x}px`;
        dotRef.current.style.top = `${pos.current.y}px`;
      }
      ring.current.x += (pos.current.x - ring.current.x) * 0.14;
      ring.current.y += (pos.current.y - ring.current.y) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className="tw-cursor" aria-hidden="true">
      {/* Dot */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed z-[99999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,background] duration-200 will-change-[left,top]
          ${hover
            ? 'h-[10px] w-[10px] bg-white shadow-[0_0_20px_rgba(255,255,255,.9)]'
            : 'h-[6px]  w-[6px]  bg-cyan  shadow-[0_0_12px_rgba(0,229,255,.8)]'
          }`}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed z-[99998] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color,background] duration-300 will-change-[left,top]
          ${hover
            ? 'h-[44px] w-[44px] border-white/50 bg-white/[.04]'
            : 'h-[32px] w-[32px] border-cyan/45 bg-transparent'
          }`}
        style={{ borderWidth: '1.5px' }}
      />
    </div>
  );
}
