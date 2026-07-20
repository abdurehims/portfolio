
import useIntersection from '../hooks/useIntersection';

export default function SectionReveal({ children, className = '' }) {
  const [ref, isVisible] = useIntersection({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}