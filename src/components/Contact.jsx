import { FiMail, FiGithub, FiLinkedin, FiPhone, FiCopy, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';

const EMAIL = 'abdurehimseidd@gmail.com';
const PHONE = '+251938367273';

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
    <circle cx="12" cy="12" r="11" fill="#229ED9" />
    <path d="M5 11.5l10.5-4.1-1.5 8.2-3-2.6-1.5 1.5V12l4.5-4-5.6 3.4z" fill="none" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
    <path d="M10 14.5l1.1-1.1 1.5 1.1" fill="none" stroke="#fff" strokeWidth=".9" strokeLinejoin="round" />
  </svg>
);

const SOCIALS = [
  { href: 'https://github.com/abdurehims', label: 'GitHub', handle: '@abdurehims', icon: <FiGithub size={20} />, hover: 'hover:border-white/[.25] hover:text-[#f0f0f5] hover:bg-white/[.06]' },
  { href: 'https://linkedin.com/in/abdurehims', label: 'LinkedIn', handle: '@abdurehims', icon: <FiLinkedin size={20} />, hover: 'hover:border-[#0a66c2]/50 hover:text-[#0a66c2] hover:bg-[#0a66c2]/[.07]' },
  { href: 'https://t.me/abunezir', label: 'Telegram', handle: '@abunezir', icon: <TelegramIcon />, hover: 'hover:border-[#229ED9]/50 hover:text-[#229ED9] hover:bg-[#229ED9]/[.07]' },
  { href: `mailto:${EMAIL}`, label: 'Email', handle: 'Say hello', icon: <FiMail size={20} />, hover: 'hover:border-cyan/40 hover:text-cyan hover:bg-cyan/[.06]' },
];

const cardBase = 'group flex cursor-default items-center gap-4 rounded-2xl border border-white/[.07] bg-white/[.025] px-6 py-5 text-left transition-all duration-300 hover:border-cyan/35 hover:shadow-[0_0_30px_rgba(0,229,255,.08)]';
const iconBox = 'flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-cyan/18 bg-cyan/[.07] text-cyan transition-all duration-200 group-hover:bg-cyan/[.12] group-hover:shadow-[0_0_20px_rgba(0,229,255,.18)]';
const copyBtn = 'tw-interactive flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] border border-white/[.07] bg-white/[.04] text-[#55556a] transition-all duration-200 hover:border-cyan/40 hover:bg-cyan/10 hover:text-cyan';

export default function Contact({ showToast }) {
  const copy = (text, label) => navigator.clipboard.writeText(text).then(() => showToast(`${label} copied!`));

  return (
    <section id="contact" className="py-[110px] md:py-20">
      <div className="mx-auto max-w-[680px] px-6 text-center">

        <SectionReveal>
          <span className="eyebrow eyebrow-center">Get In Touch</span>
          <h2 className="text-gradient mb-2 inline-block font-heading font-extrabold leading-[1.15] tracking-[-0.5px]"
            style={{ fontSize: 'clamp(2rem,5vw,2.75rem)' }}>
            Let's Build Something Together
          </h2>
          <p className="mb-6 font-mono text-[.8rem] uppercase tracking-[2.5px] text-[#55556a]">
            available for projects &amp; opportunities
          </p>
          <p className="mx-auto mb-12 max-w-[560px] text-[1.02rem] leading-[1.8] text-[#8a8aaa]">
            Whether you have a project in mind, a freelance opportunity, or just want to say hi —
            my inbox is always open. I'm currently available for full-time roles and freelance work.
          </p>
        </SectionReveal>

        <SectionReveal>
          <div className="mb-10 flex flex-col gap-3.5">
            <motion.div className={cardBase} whileHover={{ scale: 1.012, y: -2 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }}>
              <div className={iconBox}><FiMail size={20} /></div>
              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <span className="font-mono text-[.68rem] uppercase tracking-[2px] text-[#55556a]">Email</span>
                <a href={`mailto:${EMAIL}`} className="truncate text-[.95rem] font-semibold text-[#f0f0f5] transition-colors duration-200 hover:text-cyan">{EMAIL}</a>
              </div>
              <button onClick={() => copy(EMAIL, 'Email')} aria-label="Copy email" className={copyBtn}><FiCopy size={14} /></button>
            </motion.div>

            <motion.div className={cardBase} whileHover={{ scale: 1.012, y: -2 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }}>
              <div className={iconBox}><FiSend size={18} /></div>
              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <span className="font-mono text-[.68rem] uppercase tracking-[2px] text-[#55556a]">Phone / WhatsApp</span>
                <a href={`tel:${PHONE}`} className="text-[.95rem] font-semibold text-[#f0f0f5] transition-colors duration-200 hover:text-cyan">{PHONE}</a>
              </div>
              <button onClick={() => copy(PHONE, 'Phone')} aria-label="Copy phone" className={copyBtn}><FiCopy size={14} /></button>
            </motion.div>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/[.07]" />
            <span className="whitespace-nowrap font-mono text-[.7rem] uppercase tracking-[2px] text-[#55556a]">or find me on</span>
            <div className="h-px flex-1 bg-white/[.07]" />
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {SOCIALS.map(({ href, label, handle, icon, hover }) => (
              <motion.a key={label} href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={`${label} — ${handle}`}
                className={`tw-interactive flex flex-col items-center gap-2 rounded-2xl border border-white/[.07] bg-white/[.025] p-4 text-[#8a8aaa] transition-all duration-300 ${hover}`}
                whileHover={{ y: -4, scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                {icon}
                <span className="font-heading text-[.8rem] font-semibold leading-none">{label}</span>
                <span className="font-mono text-[.65rem] text-[#55556a]">{handle}</span>
              </motion.a>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
