import { useState, useEffect } from 'react';

export default function useCountUp(end, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, startCounting]);

  return count;
}