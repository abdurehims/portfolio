
import useIntersection from '../hooks/useIntersection';
import useCountUp from '../hooks/useCountUp';

export default function StatsCard({ label, value, suffix }) {
  const [ref, isVisible] = useIntersection({ threshold: 0.5 });
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div ref={ref} className="glass-card stats-card">
      <span className="stats-number gradient-text">
        {count}{suffix}
      </span>
      <span className="stats-label">{label}</span>
    </div>
  );
}