import appleClone    from '../images/apple-clone.png';
import amazonClone   from '../images/amazon-clone.png';
import weatherApp    from '../images/weather-app.png';
import todoApp       from '../images/todo-app.png';
import calculator    from '../images/calculator.png';
import ageCalculator from '../images/age calculator.png';

/* ─── SKILL ICONS — inline SVG strings ─────────────────────────────────── */
const HTML = `<svg viewBox="0 0 32 32"><path d="M5.9 27.2L4 5h24l-1.9 22.2L16 30z" fill="#e44d26"/><path d="M16 27.9l8.2-2.3 1.6-18.2H16z" fill="#f16529"/><path d="M16 13.4h-4.1l-.3-3.2H16V7.2H8.2l.8 8.5H16zm0 8.3l-3.4-.9-.2-2.5H9.2l.4 4.9 6.4 1.7z" fill="#ebebeb"/><path d="M16 13.4v3.1h3.8l-.4 4-3.4.9v3.2l6.3-1.8.7-8.1-.8-.8z" fill="#fff"/></svg>`,
  CSS  = `<svg viewBox="0 0 32 32"><path d="M5.9 27.2L4 5h24l-1.9 22.2L16 30z" fill="#1572b6"/><path d="M16 27.9l8.2-2.3 1.6-18.2H16z" fill="#33a9dc"/><path d="M16 13.2h4.1l.3-3.2H16V6.9h7.8l-.8 8.5H16zm0 8.5l-3.4-.9-.2-2.5H9.2l.4 4.9 6.4 1.7z" fill="#ebebeb"/><path d="M16 13.2v3.1h-3.8l-.4 4 3.4.9v3.2l-6.3-1.8-.7-8.1.8-.8z" fill="#fff"/></svg>`,
  JS   = `<svg viewBox="0 0 32 32"><path d="M2 2h28v28H2z" fill="#f0db4f"/><path d="M20.8 23.9a2.9 2.9 0 0 0 2.6 1.6c1.1 0 1.8-.5 1.8-1.3 0-.9-.7-1.2-1.9-1.7l-.7-.3c-1.9-.8-3.2-1.8-3.2-4 0-2 1.5-3.5 3.9-3.5a3.9 3.9 0 0 1 3.7 2.1l-2 1.3a1.8 1.8 0 0 0-1.7-1.1 1.1 1.1 0 0 0-1.3 1.1c0 .8.5 1.1 1.6 1.6l.7.3c2.2 1 3.5 1.9 3.5 4.1 0 2.4-1.9 3.7-4.4 3.7a5.1 5.1 0 0 1-4.8-2.7zm-9.3.2c.4.7.8 1.4 1.7 1.4.9 0 1.4-.3 1.4-1.6V14.8h2.5v9a3.8 3.8 0 0 1-4 3.9 4.1 4.1 0 0 1-3.9-2.4z" fill="#323330"/></svg>`,
  BS   = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="5" fill="#7952b3"/><path d="M9 7h8.5c2 0 3.5.4 4.5 1.3a4 4 0 0 1 1.5 3.2 4 4 0 0 1-.7 2.3 4.2 4.2 0 0 1-2 1.5v.1a4.5 4.5 0 0 1 2.5 1.5 4.3 4.3 0 0 1 .9 2.8 4.7 4.7 0 0 1-1.6 3.7C21.4 24.5 19.6 25 17.3 25H9zm3 7.5h5c1.1 0 2-.2 2.6-.7a2.2 2.2 0 0 0 .9-1.9 2 2 0 0 0-.8-1.7c-.5-.4-1.4-.6-2.5-.6H12zm0 7.7h5.4c1.2 0 2.2-.3 2.8-.8a2.6 2.6 0 0 0 1-2.1 2.4 2.4 0 0 0-1-2.1c-.7-.5-1.6-.7-2.9-.7H12z" fill="#fff"/></svg>`,
  REACT= `<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="2.5" fill="#61dafb"/><g stroke="#61dafb" stroke-width="1.2" fill="none"><ellipse rx="11" ry="4.2" cx="16" cy="16"/><ellipse rx="11" ry="4.2" cx="16" cy="16" transform="rotate(60 16 16)"/><ellipse rx="11" ry="4.2" cx="16" cy="16" transform="rotate(120 16 16)"/></g></svg>`,
  TW   = `<svg viewBox="0 0 32 32"><path d="M16 6.4c-4.3 0-7 2.1-8 6.4 1.6-2.1 3.5-2.9 5.6-2.4 1.2.3 2.1 1.2 3 2.2 1.6 1.6 3.4 3.4 7.2 3.4 4.3 0 7-2.1 8-6.4-1.6 2.1-3.5 2.9-5.6 2.4-1.2-.3-2.1-1.2-3-2.2C21.6 8.2 19.8 6.4 16 6.4zm-8 9.6c-4.3 0-7 2.1-8 6.4 1.6-2.1 3.5-2.9 5.6-2.4 1.2.3 2.1 1.2 3 2.2 1.6 1.6 3.4 3.4 7.2 3.4 4.3 0 7-2.1 8-6.4-1.6 2.1-3.5 2.9-5.6 2.4-1.2-.3-2.1-1.2-3-2.2C15.6 17.8 13.8 16 8 16z" fill="#38bdf8"/></svg>`,
  NODE = `<svg viewBox="0 0 32 32"><path d="M16 3L3 10v12l13 7 13-7V10z" fill="#3c873a"/><path d="M16 6l-10 5.5v11L16 28l10-5.5v-11z" fill="#3c873a"/><text x="16" y="19" text-anchor="middle" font-size="8" font-weight="bold" fill="#fff" font-family="sans-serif">JS</text></svg>`,
  EXP  = `<svg viewBox="0 0 32 32"><path d="M32 24.8c-1.2.3-1.9 0-2.5-1l-4.6-6.4-.7-.9-5.4 7.3c-.6.9-1.3 1.3-2.4 1l6.9-9.2-6.4-8.3c1.1-.2 1.9-.1 2.6 1l4.7 6.5 4.7-6.5c.6-.9 1.3-1.2 2.4-.9l-2.4 3.1-3.4 4.6c-.3.4-.3.7 0 1.1L32 24.8zM0 15.4l.6-2.8C2 7.2 8.4 4.9 13 8.3c2.7 2 3.5 4.8 3.2 8.1H1.8c-.2 4.3 3 6.8 7 5.5 1.6-.5 2.5-1.8 3-3.4.2-.9.6-1.1 1.5-.8-1 3.9-3.5 6-7.6 6C1.7 23.7.3 20.8 0 15.4zm1.9-.6h11.2c-.2-3.7-2.5-6.2-5.2-6.2C4.8 8.6 2.4 11 1.9 14.8z" fill="#f0f0f5"/></svg>`,
  REST = `<svg viewBox="0 0 32 32"><rect x="2" y="9" width="28" height="14" rx="4" fill="none" stroke="#8b5cf6" stroke-width="1.8"/><path d="M7 16h4m4 0h4m4 0h2" stroke="#8b5cf6" stroke-width="1.8" stroke-linecap="round"/><circle cx="7" cy="16" r="1.5" fill="#8b5cf6"/><circle cx="25" cy="16" r="1.5" fill="#8b5cf6"/></svg>`,
  MONGO= `<svg viewBox="0 0 32 32"><path d="M16 3c-5.5 0-9 7.4-9 13.1 0 4.5 1.8 7.7 4.8 9.7l.9 3.2h2.7l.2-1.5c.5.1 1 .1 1.4.1s.9 0 1.4-.1l.2 1.5h2.7l.9-3.2C24.2 23.8 25 20.6 25 16.1 25 10.3 21.5 3 16 3z" fill="#599636"/><path d="M16.8 22.7c-.3.1-.5.1-.8.1s-.5 0-.8-.1V11.8c.8-2.2 1.8-3.2 1.8-3.2s1.5 2.1 1.5 6.1c0 2.9-.7 5.8-1.7 8z" fill="#6cac48"/></svg>`,
  MYSQL= `<svg viewBox="0 0 32 32"><path d="M2 21.5c3.9.4 5.8-2.7 5.8-2.7V27H10v-9.8H7.8S6.4 20.7 2 21.5zm12.5-4.7c0-2.1.7-3.2 2.1-3.2s2.1 1.1 2.1 3.2-.7 3.2-2.1 3.2-2.1-1.1-2.1-3.2zm6.8 0c0-3.4-1.9-5.3-4.7-5.3s-4.7 1.9-4.7 5.3 1.9 5.3 4.7 5.3 4.7-1.9 4.7-5.3zm3.5 5H27.3v-6.3l4.7 6.3H33V11.5h-2.5v6.3l-4.7-6.3H24V22.5h-1.2z" fill="#00758f"/></svg>`,
  FB   = `<svg viewBox="0 0 32 32"><path d="M5.8 25.4L10 7.2l4.9 4.2-4.2 8z" fill="#ffa000"/><path d="M5.8 25.4l7-4 .7-11z" fill="#f57f17"/><path d="M19.4 10.4l3.8 15-17.4 0z" fill="#ffca28"/><path d="M5.8 25.4l17.4 0-6.5-8.9z" fill="#ffa000"/><path d="M13.6 3.7l.8 7.7 4.9-4.2z" fill="#dd2c00"/></svg>`,
  GIT  = `<svg viewBox="0 0 32 32"><path d="M29.5 14.5L17.5 2.5a1.8 1.8 0 0 0-2.6 0l-2.5 2.5 3.2 3.2a2.1 2.1 0 0 1 2.7 2.7l3.1 3.1a2.1 2.1 0 1 1-1.3 1.3l-2.9-2.9v7.6a2.1 2.1 0 1 1-1.8-.1V12.3a2.1 2.1 0 0 1-1.1-2.8L11.1 6.3 2.5 14.9a1.8 1.8 0 0 0 0 2.6l12 12a1.8 1.8 0 0 0 2.6 0l12.4-12.4a1.8 1.8 0 0 0 0-2.6z" fill="#f05033"/></svg>`,
  GH   = `<svg viewBox="0 0 32 32"><path d="M16 2A14 14 0 0 0 2 16a14 14 0 0 0 9.6 13.3c.7.1 1-.3 1-.7v-2.3c-3.9.8-4.7-1.9-4.7-1.9-.6-1.6-1.6-2-1.6-2-1.3-.9.1-.8.1-.8 1.4.1 2.1 1.4 2.1 1.4 1.3 2.1 3.3 1.5 4.1 1.2.1-.9.5-1.5.9-1.9-3.1-.4-6.4-1.6-6.4-6.9 0-1.5.5-2.8 1.4-3.7-.1-.4-.6-1.8.1-3.7 0 0 1.2-.4 3.9 1.4A13.4 13.4 0 0 1 16 9.6c1.2.01 2.4.16 3.5.5 2.7-1.8 3.9-1.4 3.9-1.4.8 1.9.3 3.3.1 3.7.9 1 1.4 2.2 1.4 3.7 0 5.4-3.3 6.5-6.4 6.9.5.4 1 1.3 1 2.6v3.9c0 .4.2.8 1 .7A14 14 0 0 0 30 16 14 14 0 0 0 16 2z" fill="#f0f0f5"/></svg>`,
  VSC  = `<svg viewBox="0 0 32 32"><path d="M30.9 3.7L24.2 1a1.7 1.7 0 0 0-2 .4L9.2 13.2 3.7 9.1A1.1 1.1 0 0 0 2.3 9.2l-1.1 1a1.1 1.1 0 0 0 0 1.6L4.3 16 1.2 20.2a1.1 1.1 0 0 0 0 1.6l1.1 1a1.1 1.1 0 0 0 1.4.06l5.5-4.1 13 11.9a1.7 1.7 0 0 0 2 .4L30.9 28.3A1.7 1.7 0 0 0 32 26.9V5.1A1.7 1.7 0 0 0 30.9 3.7zM24 23.4l-9.2-7.4L24 8.6z" fill="#007acc"/></svg>`,
  PMAN = `<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#ff6c37"/><path d="M22.5 9.5a9 9 0 1 0 0 13M17 16l5.5-6.5" stroke="#fff" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="17" cy="16" r="1.5" fill="#fff"/></svg>`,
  FIG  = `<svg viewBox="0 0 32 32"><path d="M10 2h6v10h-6a5 5 0 0 1 0-10z" fill="#f24e1e"/><path d="M16 2h6a5 5 0 0 1 0 10h-6z" fill="#ff7262"/><path d="M16 12h6a5 5 0 0 1 0 10h-6z" fill="#a259ff"/><path d="M10 12h6v10h-6a5 5 0 0 1 0-10z" fill="#1abcfe"/><circle cx="21" cy="27" r="5" fill="#0acf83"/></svg>`;

export const skillsData = [
  {
    category: 'Frontend',
    accent: '#00e5ff',
    headerBg: 'rgba(0,229,255,0.08)',
    borderHover: 'rgba(0,229,255,0.35)',
    glowHover: '0 0 28px rgba(0,229,255,0.12)',
    skills: [
      { name: 'HTML5',      svg: HTML  },
      { name: 'CSS3',       svg: CSS   },
      { name: 'JavaScript', svg: JS    },
      { name: 'Bootstrap',  svg: BS    },
      { name: 'React',      svg: REACT },
      { name: 'Tailwind',   svg: TW    },
    ],
  },
  {
    category: 'Backend',
    accent: '#8b5cf6',
    headerBg: 'rgba(139,92,246,0.08)',
    borderHover: 'rgba(139,92,246,0.35)',
    glowHover: '0 0 28px rgba(139,92,246,0.12)',
    skills: [
      { name: 'Node.js',    svg: NODE  },
      { name: 'Express.js', svg: EXP   },
      { name: 'REST APIs',  svg: REST  },
    ],
  },
  {
    category: 'Database',
    accent: '#ec4899',
    headerBg: 'rgba(236,72,153,0.08)',
    borderHover: 'rgba(236,72,153,0.35)',
    glowHover: '0 0 28px rgba(236,72,153,0.12)',
    skills: [
      { name: 'MongoDB',  svg: MONGO },
      { name: 'MySQL',    svg: MYSQL },
      { name: 'Firebase', svg: FB    },
    ],
  },
  {
    category: 'Tools',
    accent: '#f59e0b',
    headerBg: 'rgba(245,158,11,0.08)',
    borderHover: 'rgba(245,158,11,0.35)',
    glowHover: '0 0 28px rgba(245,158,11,0.12)',
    skills: [
      { name: 'Git',     svg: GIT  },
      { name: 'GitHub',  svg: GH   },
      { name: 'VS Code', svg: VSC  },
      { name: 'Postman', svg: PMAN },
      { name: 'Figma',   svg: FIG  },
    ],
  },
];

/* ─── PROJECTS ──────────────────────────────────────────────────────────── */
export const projectsData = [
  {
    id: 1,
    title: 'Apple Homepage Clone',
    description: "Pixel‑perfect responsive recreation of Apple's homepage with modern CSS techniques.",
    tags: ['HTML', 'CSS', 'React'],
    gradient: 'linear-gradient(135deg,#00e5ff,#4d7cff)',
    category: 'frontend',
    image: appleClone,
    live: '#',
    github: 'https://github.com/abdurehims',
  },
  {
    id: 2,
    title: 'Amazon Clone',
    description: 'Full e‑commerce UI with cart functionality, user authentication and responsive design.',
    tags: ['React', 'Node.js', 'Express', 'MySQL'],
    gradient: 'linear-gradient(135deg,#f59e0b,#ec4899)',
    category: 'fullstack',
    image: amazonClone,
    live: '#',
    github: 'https://github.com/abdurehims',
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'Real‑time API integration with dynamic backgrounds and location search.',
    tags: ['JavaScript', 'API', 'CSS'],
    gradient: 'linear-gradient(135deg,#8b5cf6,#ec4899)',
    category: 'frontend',
    image: weatherApp,
    live: '#',
    github: 'https://github.com/abdurehims',
  },
  {
    id: 4,
    title: 'Todo App',
    description: 'CRUD operations with local storage, drag‑and‑drop and category filters.',
    tags: ['React', 'LocalStorage'],
    gradient: 'linear-gradient(135deg,#4d7cff,#00e5ff)',
    category: 'utility',
    image: todoApp,
    live: '#',
    github: 'https://github.com/abdurehims',
  },
  {
    id: 5,
    title: 'Calculator',
    description: 'Modern neumorphic design with full arithmetic operations and keyboard support.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'linear-gradient(135deg,#ec4899,#8b5cf6)',
    category: 'utility',
    image: calculator,
    live: '#',
    github: 'https://github.com/abdurehims',
  },
  {
    id: 6,
    title: 'Age Calculator',
    description: 'Calculates exact age in years, months, and days from a given birth date.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'linear-gradient(135deg,#00e5ff,#8b5cf6)',
    category: 'utility',
    image: ageCalculator,
    live: '#',
    github: 'https://github.com/abdurehims',
  },
];

/* ─── STATS ─────────────────────────────────────────────────────────────── */
export const stats = [
  { label: 'Years Coding',       value: 2,  suffix: '+' },
  { label: 'Projects Completed', value: 10, suffix: '+' },
  { label: 'Satisfied Clients',  value: 4,  suffix: '+' },
  { label: 'Learner Mindset',    value: 24, suffix: '/7' },
];
