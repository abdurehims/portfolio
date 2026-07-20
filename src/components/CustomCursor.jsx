import React, { useEffect, useState } from 'react';

export default function CustomCursor({ hidden = false }) {  // ← prop added here
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .interactive, input, textarea')) setHover(true);
      else setHover(false);
    };
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className={`custom-cursor ${hidden ? 'cursor-hidden' : ''}`} aria-hidden="true">
      <div
        className={`cursor-dot ${hover ? 'hover-interactive' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`cursor-ring ${hover ? 'hover-interactive' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </div>
  );
}