
import { FiMail, FiGithub, FiLinkedin, FiPhone, FiCopy } from 'react-icons/fi';
import SectionReveal from './SectionReveal';

const EMAIL = 'abdurehimseidd@gmail.com';
const PHONE = '+251938367273';

export default function Contact({ showToast }) {
  const copy = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label} copied!`);
    });
  };

  return (
    <section id="contact" style={{ textAlign: 'center' }}>
      <SectionReveal>
        <h2 className="section-title">Let's Build Something Together</h2>
        <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
          Available for freelance projects and full-time opportunities
        </p>
      </SectionReveal>

      {/* Direct contact cards */}
      <SectionReveal>
        <div className="contact-cards">

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <FiMail size={22} />
            </div>
            <div className="contact-info-body">
              <span className="contact-info-label">Email</span>
              <a href={`mailto:${EMAIL}`} className="contact-info-value">{EMAIL}</a>
            </div>
            <button
              className="contact-copy-btn interactive"
              onClick={() => copy(EMAIL, 'Email')}
              aria-label="Copy email"
            >
              <FiCopy size={16} />
            </button>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <FiPhone size={22} />
            </div>
            <div className="contact-info-body">
              <span className="contact-info-label">Phone / WhatsApp</span>
              <a href={`tel:${PHONE}`} className="contact-info-value">{PHONE}</a>
            </div>
            <button
              className="contact-copy-btn interactive"
              onClick={() => copy(PHONE, 'Phone number')}
              aria-label="Copy phone"
            >
              <FiCopy size={16} />
            </button>
          </div>

        </div>
      </SectionReveal>

      {/* Social links */}
      <SectionReveal>
        <div className="contact-socials">
          <a
            href="https://github.com/abdurehims"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-circle interactive"
            aria-label="GitHub"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/abdurehims"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-circle interactive"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="contact-circle interactive"
            aria-label="Send email"
          >
            <FiMail size={24} />
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}
