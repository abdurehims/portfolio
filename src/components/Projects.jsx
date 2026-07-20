import  { useState } from 'react';
import SectionReveal from './SectionReveal';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/portfolioData';

const categories = ['all', 'frontend', 'fullstack', 'utility'];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects">
      <SectionReveal>
        <h2 className="section-title">Things I’ve Built</h2>
        <p className="section-subtitle">selected projects</p>
      </SectionReveal>
      <div className="filter-buttons">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filtered.map(project => (
          <SectionReveal key={project.id}>
            <ProjectCard project={project} />
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}