
import SectionReveal from './SectionReveal';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills">
      <SectionReveal>
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">technologies i work with</p>
      </SectionReveal>
      <div className="skills-grid">
        {skillsData.map((group, idx) => (
          <SectionReveal key={idx} className="glass-card skill-card">
            <h3 className="skill-category">{group.category}</h3>
            <div className="skill-tags">
              {group.items.map((item, i) => (
                <span key={i} className="skill-tag">{item}</span>
              ))}
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}