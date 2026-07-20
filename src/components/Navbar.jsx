import { useState, useEffect } from 'react';
import useScrollPosition from '../hooks/useScrollPosition';

export default function Navbar({ showToast }) {
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Intersection Observer to update active link (unchanged)
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const closeMobile = () => setMobileOpen(false);

  // Smooth scroll to top handler
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMobile();
  };

  return (
    <>
      <nav className={`navbar ${scrollY > 50 ? 'scrolled' : ''}`}>
        <a href="#home" className="nav-logo" onClick={closeMobile}>Abdurehim S</a>

        <div className="nav-links desktop">
          {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
            <a
              key={section}
              href={`#${section}`}
              className={activeSection === section ? 'active' : ''}
              onClick={(e) => handleNavClick(e, section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      
      <div className={`mobile-overlay ${mobileOpen ? 'show' : ''}`} onClick={closeMobile} />
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => handleNavClick(e, section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
    </>
  );
}
