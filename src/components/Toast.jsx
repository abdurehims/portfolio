import { motion } from 'framer-motion';

export default function Toast({ message }) {
  return (
    <motion.div
      role="status"
      aria-live="polite"
      className="fixed bottom-9 left-1/2 z-[10001] -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan/40 bg-[rgba(16,16,22,0.92)] px-7 py-3 text-[0.9rem] font-medium text-[#f0f0f5] shadow-[0_0_30px_rgba(0,229,255,.2),0_8px_32px_rgba(0,0,0,.5)] backdrop-blur-xl"
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {message}
    </motion.div>
  );
}
