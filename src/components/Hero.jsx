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
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <SectionReveal>
            <p className="hero-label font-mono">{'< Hello World />'}</p>
          </SectionReveal>
          <SectionReveal>
            <h1 className="hero-name">
              Abdurehim <span className="gradient-text">Seid</span>
            </h1>
          </SectionReveal>
          <SectionReveal>
            <div className="typewriter-wrapper">
              <span className="typewriter">{typedText}</span>
              <span className="cursor-blink">|</span>
            </div>
          </SectionReveal>
          <SectionReveal>
            <div className="university-badge">
              <FiMapPin size={16} color="#8b5cf6" />
              <span>Modern, Responsive, and Scalable Web Applications.</span>
            </div>
          </SectionReveal>

          {/*<SectionReveal>
            <div className="skill-badges">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MySQL', 'Mobile Unlocker'].map(skill => (
                <span key={skill} className="badge">{skill}</span>
              ))}
            </div>
          </SectionReveal> */}

          <SectionReveal className="hero-buttons">
            <a href="#projects" className="btn-primary">View My Work</a>
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
