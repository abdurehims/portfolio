import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[.07] bg-white/[.025] shadow-card-dark 
      transition-all duration-300 hover:border-white/[.14] hover:shadow-card-hover"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <div className="h-[3px] flex-shrink-0" style={{ background: project.gradient }} />

      <div className="relative h-[190px] flex-shrink-0 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: 'linear-gradient(to bottom,transparent 50%,rgba(6,6,9,.7) 100%)' }} />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 font-heading text-[1.05rem] font-bold tracking-tight text-[#f0f0f5] transition-colors duration-200 group-hover:text-cyan">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-[.875rem] leading-[1.65] text-[#8a8aaa]">{project.description}</p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span key={tag} className="rounded-[5px] border border-white/[.07] bg-white/[.04] px-2.5 py-1 font-mono text-[.68rem] tracking-[.2px] text-[#55556a]">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-2.5">
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            aria-label={`Live demo of ${project.title}`}
            className="tw-interactive inline-flex items-center gap-1.5 rounded-lg border border-cyan/25 bg-cyan/10 px-4 py-2 font-mono text-[.78rem] font-semibold tracking-[.3px] text-cyan transition-all duration-200 hover:-translate-y-px hover:border-cyan/50 hover:bg-cyan/[.18]">
            <FiExternalLink size={12} /> Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            aria-label={`GitHub repository for ${project.title}`}
            className="tw-interactive inline-flex items-center gap-1.5 rounded-lg border border-white/[.07] bg-white/[.04] px-4 py-2 font-mono text-[.78rem] font-semibold tracking-[.3px] text-[#8a8aaa] transition-all duration-200 hover:-translate-y-px hover:border-white/[.14] hover:text-[#f0f0f5]">
            <FiGithub size={12} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
