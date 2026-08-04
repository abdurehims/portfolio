import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useScrollPosition from '../hooks/useScrollPosition';

const SECTIONS = ['home', 'about', 'skills', 'projects', 'contact'];

export default function Navbar() {
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.35 }
    );
    SECTIONS.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Smooth scroll to center handler
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    closeMobile();
  };

  const scrolled = scrollY > 60;

  return (
    <>
      {/* ── Top bar ── */}
      <nav
        className={`fixed inset-x-0 top-0 z-[9000] flex h-[68px] items-center justify-between px-[clamp(20px,5vw,60px)] transition-all duration-300
          ${scrolled ? 'bg-[rgba(6,6,9,0.85)] shadow-[0_1px_0_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-2xl' : ''}`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={e => go(e, 'home')}
          className="text-gradient z-[9001] font-heading text-[1.3rem] font-extrabold tracking-tight"
        >
          Abdurehim S
        </a>

        {/* Desktop links */}
        <div className="z-[9001] hidden items-center gap-1.5 md:flex">
          {SECTIONS.map(s => (
            <a
              key={s}
              href={`#${s}`}
              onClick={e => go(e, s)}
              className={`relative rounded-lg px-3.5 py-[7px] text-[0.875rem] font-medium tracking-[0.1px] transition-all duration-200
                after:absolute after:bottom-[3px] after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2
                after:rounded-sm after:bg-gradient-to-r after:from-cyan after:to-blue after:transition-[width] after:duration-300
                ${active === s
                  ? 'bg-cyan/[0.07] text-[#f0f0f5] after:w-5'
                  : 'text-[#8a8aaa] hover:bg-white/[0.05] hover:text-[#f0f0f5] hover:after:w-5'
                }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="z-[9001] flex flex-col gap-[5px] rounded-xl p-2 transition-colors hover:bg-white/[0.05] md:hidden"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="block h-[2px] w-[22px] rounded-sm bg-[#f0f0f5] transition-all duration-300"
              style={
                i === 0 ? (mobileOpen ? { transform: 'translateY(7px) rotate(45deg)' } : {}) :
                  i === 1 ? (mobileOpen ? { opacity: 0 } : {}) :
                    (mobileOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {})
              }
            />
          ))}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-[8998] bg-black/60 backdrop-blur-sm transition-all duration-300
          ${mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed right-0 top-0 z-[8999] flex h-full w-[280px] max-w-[85vw] flex-col items-start justify-center gap-2
          border-l border-white/[0.07] bg-[rgba(10,10,15,0.97)] px-12 backdrop-blur-[40px] transition-transform duration-500
          ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {SECTIONS.map((s, i) => (
          <motion.a
            key={s}
            href={`#${s}`}
            onClick={e => go(e, s)}
            className={`w-full py-3 font-heading text-[1.5rem] font-bold transition-all duration-200 hover:translate-x-1.5
              ${active === s ? 'text-cyan' : 'text-[#8a8aaa] hover:text-[#f0f0f5]'}`}
            initial={{ opacity: 0, x: 20 }}
            animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: i * 0.07, duration: 0.3 }}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </motion.a>
        ))}
      </div>
    </>
  );
}
