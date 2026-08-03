import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h ? Math.min((window.scrollY / h) * 100, 100) : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[9999] h-[2px] bg-gradient-bar shadow-[0_0_8px_#00e5ff] transition-[width] duration-100"
      style={{ width: `${progress}%` }}
    />
  );
}
