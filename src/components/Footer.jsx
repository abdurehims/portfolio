import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

export default function Footer({ onCircleHover }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[.07] px-[clamp(20px,5vw,60px)] py-10">
      <div className="flex flex-col gap-1">
        <span className="text-gradient font-heading text-base font-bold">Abdurehim Seid</span>
        <span className="font-mono text-[.8rem] text-[#55556a]">
          © {new Date().getFullYear()} · All rights reserved
        </span>
      </div>
      <motion.button
        className="tw-interactive inline-flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-white/[.07] bg-white/[.035] text-[#8a8aaa] transition-all duration-200 hover:border-cyan/40 hover:text-cyan hover:shadow-[0_6px_20px_rgba(0,229,255,.15)]"
        aria-label="Back to top"
        onClick={scrollToTop}
        onMouseEnter={() => onCircleHover(true)}
        onMouseLeave={() => onCircleHover(false)}
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <FiArrowUp size={18} />
      </motion.button>
    </footer>
  );
}
