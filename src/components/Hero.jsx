import { FiDownload, FiMapPin } from 'react-icons/fi';
import useTypewriter from '../hooks/useTypewriter';
import SectionReveal from './SectionReveal';
import profileImg from '../images/abdurehim-profile.jpg';
import cvFile from '../assets/cv/ABDUREHIM CV.pdf';

export default function Hero({ showToast }) {
  const typedText = useTypewriter([
    'Full-Stack Developer',
    'React Developer',
    'Node js Developer',
    'Mobile Unlocker'
  ], 80, 50, 2000);

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
              className="btn-outline"
              onClick={() => showToast('CV downloaded successfully!')}
            >
              <FiDownload /> Download CV
            </a>
          </SectionReveal>
        </div>

        {/* 🌟 NEW: Right column with profile image */}
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img  src={profileImg}
                alt="Abdurehim Seid portrait"
                className="hero-profile-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="280" height="280" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="45" fill="%2316161f" stroke="%2300e5ff" stroke-width="2"/%3E%3Ctext x="50" y="55" text-anchor="middle" fill="%2300e5ff" font-size="20" font-family="sans-serif"%3EImage%3C/text%3E%3C/svg%3E';
                }}
                loading="lazy"
              />

            {/* decorative glow */}
            <div className="image-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}