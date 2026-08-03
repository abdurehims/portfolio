import useIntersection from '../hooks/useIntersection';

export default function SectionReveal({ children, className = '' }) {
  const [ref, isVisible] = useIntersection({ threshold: 0.12 });
  return (
    <div ref={ref} className={`reveal-on-scroll ${isVisible ? 'revealed' : ''} ${className}`}>
      {children}
    </div>
  );
}
