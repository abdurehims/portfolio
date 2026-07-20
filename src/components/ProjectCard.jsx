import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  return (
    <div className="glass-card project-card" style={{ '--card-gradient': project.gradient }}>
      <div className="card-top-border" />
      <div className="card-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-thumbnail"
          loading="lazy"
        />
      </div>
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
        </div>
        <div className="project-links">
          <a href={project.live} className="interactive" aria-label="Live demo"><FiExternalLink /> Demo</a>
          <a href={project.github} className="interactive" aria-label="GitHub repository"><FiGithub /> Code</a>
        </div>
      </div>
    </div>
  );
}