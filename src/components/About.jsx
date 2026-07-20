
import SectionReveal from './SectionReveal';
import StatsCard from './StatsCard';
import { stats } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about">
      <SectionReveal>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>About Me</h2>
      </SectionReveal>
      <div className="about-grid">
        <SectionReveal className="about-text">
          <p  style={{ marginTop: "0" }}>
            I'm a Full-Stack Web Developer passionate about building fast, modern, and scalable
            web applications. I turn ideas into clean, responsive, and user-friendly digital
            experiences that help businesses grow. Every project I build focuses on performance,
            quality, and delivering real value.
          </p>
        </SectionReveal>
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <StatsCard key={idx} label={stat.label} value={stat.value} suffix={stat.suffix} />
          ))}
        </div>
      </div>
    </section>
  );
}
