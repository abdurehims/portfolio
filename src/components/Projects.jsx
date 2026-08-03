import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import SectionReveal from './SectionReveal';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/portfolioData';

const CATS = ['all', 'frontend', 'fullstack', 'utility'];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? projectsData : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="mx-auto max-w-[1200px] px-6 py-[110px] md:py-20">
      <SectionReveal>
        <span className="eyebrow">My Work</span>
        <h2 className="text-gradient mb-2 inline-block font-heading font-extrabold leading-[1.15] tracking-[-0.5px]"
          style={{ fontSize: 'clamp(2rem,5vw,2.75rem)' }}>
          Things I've Built
        </h2>
        {/* <p className="mb-10 font-mono text-[.8rem] uppercase tracking-[2.5px] text-[#55556a]">selected projects</p> */}
      </SectionReveal>

      <SectionReveal>
        <div className="mb-10 mt-7 flex flex-wrap gap-2">
          {CATS.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`rounded-full border px-5 py-2 font-mono text-[.82rem] tracking-[.3px] transition-all duration-200
                ${filter === cat
                  ? 'border-cyan/40 bg-cyan/[.09] text-cyan'
                  : 'border-white/[.07] bg-transparent text-[#55556a] hover:border-white/[.14] hover:text-[#8a8aaa]'}`}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </SectionReveal>

      <LayoutGroup>
        <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <motion.div key={project.id} layout
                initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }} transition={{ duration: 0.35, ease: [0.16, 1, .3, 1] }}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </section>
  );
}
