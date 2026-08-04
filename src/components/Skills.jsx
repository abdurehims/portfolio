import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1200px] px-6 py-[110px] md:py-20">
      <SectionReveal>
        <span className="eyebrow">Skills &amp; Expertise</span>
        <h2 className="text-gradient mb-2 inline-block font-heading font-extrabold leading-[1.15] tracking-[-0.5px]"
          style={{ fontSize: 'clamp(2rem,5vw,2.75rem)' }}>
          Technologies I Work With
        </h2>
      </SectionReveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 mt-12">
        {skillsData.map((group, gi) => (
          <SectionReveal key={gi}>
            <motion.div
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[.07] bg-white/[.025] shadow-card-dark transition-[border-color,box-shadow] duration-300"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = group.borderHover; e.currentTarget.style.boxShadow = group.glowHover; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              {/* Accent bar */}
              <div className="absolute inset-x-0 top-0 h-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg,${group.accent},transparent)` }} />

              {/* Header */}
              <div className="flex items-center gap-3 border-b border-white/[.05] px-5 pb-4 pt-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold"
                  style={{ background: group.headerBg, color: group.accent, border: `1px solid ${group.accent}28` }}>
                  {group.category.charAt(0)}
                </div>
                <h3 className="font-heading text-[1rem] font-bold tracking-tight" style={{ color: group.accent }}>
                  {group.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex-1 p-5">
                <div className="grid grid-cols-3 gap-2.5">
                  {group.skills.map((skill, si) => (
                    <motion.div
                      key={si}
                      className="flex cursor-default flex-col items-center gap-1.5 rounded-xl border border-white/[.06] bg-white/[.025] p-2.5"
                      whileHover={{ y: -3, scale: 1.07 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                      title={skill.name}
                    >
                      <div className="h-7 w-7 flex-shrink-0" dangerouslySetInnerHTML={{ __html: skill.svg }} />
                      <span className="text-center font-mono text-[.6rem] leading-tight text-[#55556a] transition-colors duration-200 group-hover:text-[#8a8aaa]">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
