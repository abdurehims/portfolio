import { motion } from 'framer-motion';
import useIntersection from '../hooks/useIntersection';
import useCountUp from '../hooks/useCountUp';

export default function StatsCard({ label, value, suffix }) {
  const [ref, isVisible] = useIntersection({ threshold: 0.5 });
  const count = useCountUp(value, 1800, isVisible);

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-white/[.07] bg-white/[.035] p-7 text-center shadow-card-dark"
      whileHover={{ scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 0%,rgba(0,229,255,.05) 0%,transparent 70%)' }} />
      <span className="text-gradient font-heading text-[2.5rem] font-extrabold leading-none tracking-tight">
        {count}{suffix}
      </span>
      <span className="font-mono text-[.8rem] uppercase tracking-[1px] text-[#55556a]">{label}</span>
    </motion.div>
  );
}
