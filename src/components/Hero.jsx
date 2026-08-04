import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import useTypewriter from '../hooks/useTypewriter';
import profileImg from '../images/abdurehim-profile.jpg';
import cvFile from '../assets/cv/ABDUREHIM CV.pdf';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero({ showToast }) {
  const typedText = useTypewriter(
    ['Full-Stack Developer', 'React Developer', 'Node.js Developer', 'Mobile Unlocker'],
    80, 50, 2000
  );

  return (
    <section
      id="home"
      className="relative z-[2] flex items-center overflow-hidden"
      style={{ minHeight: '100vh', paddingTop: '68px' }}
    >
      {/* Grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)',
        }}
      />

      <div className="relative z-[1] mx-auto w-full max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-20 items-center">

        {/* ── Left ── */}
        <div className="flex flex-col items-start max-lg:items-center max-lg:text-center">

          {/* Status badge */}
          <motion.span
            {...fadeUp(0.1)}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-mono text-[.72rem] tracking-wide text-emerald-400"
          >
            <span className="inline-block h-[7px] w-[7px] flex-shrink-0 rounded-full bg-emerald-500 animate-status-pulse" />
            Available for work
          </motion.span>

          {/* Eyebrow */}
          <motion.p {...fadeUp(0.2)} className="eyebrow mb-4 max-lg:eyebrow-center max-lg:before:hidden max-lg:justify-center">
            {'< Hello There />'}
          </motion.p>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.3)}
            className="mb-5 font-heading font-extrabold leading-[1.08] tracking-[-1.5px] text-[#38BDF8]"
            style={{ fontSize: 'clamp(2.6rem,6vw,4.25rem)' }}
          >
            Abdurehim <span className="text-gradient">Seid</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            {...fadeUp(0.4)}
            className="mb-5 flex min-h-[2rem] items-center gap-0.5 font-mono text-lg text-[#8a8aaa]"
          >
            <span>{typedText}</span>
            <span className="font-light text-cyan animate-blink">|</span>
          </motion.div>

          <motion.p
            {...fadeUp(0.5)}
            className="mb-8 max-w-[480px] text-base leading-[1.75] text-[#8a8aaa] max-lg:max-w-full"
          >
            I build fast, modern, and scalable web applications that help businesses grow.
            Every project focuses on{' '}
            <strong className="font-semibold text-[#f0f0f5]">performance</strong>,
            clean code, and delivering real user value.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-3.5 max-lg:justify-center">
            <a
              href="#projects"
              className="tw-interactive relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3 text-[.9rem] font-semibold text-[#060609] bg-gradient-cta shadow-glow-cyan-btn transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-glow-cyan-btn-hover active:scale-[.98]"
            >
              View My Work <FiArrowRight />
            </a>
            <a
              href={cvFile}
              download="Abdurehim_Seid_CV.pdf"
              onClick={() => showToast('CV downloaded!')}
              className="tw-interactive inline-flex items-center gap-2 rounded-full border border-white/[.15] bg-white/[.04] px-7 py-3 text-[.9rem] font-semibold text-[#f0f0f5] transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-cyan/60 hover:bg-cyan/[.07] hover:shadow-[0_0_24px_rgba(0,229,255,.18)] active:scale-[.98]"
            >
              <FiDownload /> Download CV
            </a>
          </motion.div>
        </div>

        {/* ── Profile image ── */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative" style={{ width: 'clamp(240px,30vw,320px)', height: 'clamp(240px,30vw,320px)' }}>
            {/* Spinning conic ring */}
            <div
              className="absolute rounded-full animate-spin-slow"
              style={{ inset: '-12px', padding: '2px', background: 'conic-gradient(from 0deg,#00e5ff,#8b5cf6,#4d7cff,#00e5ff)' }}
            >
              <div className="h-full w-full rounded-full bg-[#060609]" />
            </div>
            {/* Photo */}
            <div className="absolute inset-0 overflow-hidden rounded-full bg-white/[.04]">
              <img
                src={profileImg}
                alt="Abdurehim Seid — Full-Stack Developer"
                className="h-full w-full rounded-full object-cover object-top"
                loading="eager"
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320'%3E%3Ccircle cx='160' cy='160' r='155' fill='%2316161f'/%3E%3Ctext x='50%25' y='54%25' text-anchor='middle' fill='%2300e5ff' font-size='18' font-family='sans-serif'%3EAbdurehim%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            {/* Glow */}
            <div
              className="pointer-events-none absolute -inset-10 -z-10 rounded-full animate-glow-pulse"
              style={{ background: 'radial-gradient(circle,rgba(139,92,246,.18) 0%,rgba(0,229,255,.08) 50%,transparent 70%)' }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
