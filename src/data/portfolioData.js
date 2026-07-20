import appleClone from '../images/apple-clone.png';
import amazonClone from '../images/amazon-clone.png';
import weatherApp from '../images/weather-app.png';
import todoApp from '../images/todo-app.png';
import calculator from '../images/calculator.png';
import ageCalculator from '../images/age calculator.png';

export const skillsData = [
  { category: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'] },
  { category: 'Database', items: ['MySQL', 'MongoDB Basics', 'Firebase'] },
  { category: 'Tools & Deployment', items: ['Git', 'GitHub', 'Docker (Basics)', 'Vercel', 'Netlify', 'CI/CD'] },
  { category: 'Mobile Solutions', items: ['Mobile Unlocking', 'Firmware Solutions'] }
];

export const projectsData = [
  {
    id: 1,
    title: "Apple Homepage Clone",
    description:
      "Pixel‑perfect responsive recreation of Apple’s homepage with modern CSS techniques.",
    tags: ["HTML", "CSS", "React"],
    gradient: "linear-gradient(135deg, #00e5ff, #4d7cff)",
    category: "frontend",
    image: appleClone,
    live: "#",
    github: "https://github.com/abdurehims",
  },
  {
    id: 2,
    title: "Amazon Clone",
    description:
      "Full e‑commerce UI with cart functionality, user authentication and responsive design.",
    tags: ["React", "Node.js", "Express", "MySQL"],
    gradient: "linear-gradient(135deg, #f59e0b, #ec4899)",
    category: "fullstack",
    image: amazonClone,
    live: "#",
    github: "https://github.com/abdurehims",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "Real‑time API integration with dynamic backgrounds and location search.",
    tags: ["JavaScript", "API", "CSS"],
    gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
    category: "frontend",
    image: weatherApp,
    live: "#",
    github: "https://github.com/abdurehims",
  },
  {
    id: 4,
    title: "Todo App",
    description:
      "CRUD operations with local storage, drag‑and‑drop and category filters.",
    tags: ["React", "LocalStorage"],
    gradient: "linear-gradient(135deg, #4d7cff, #00e5ff)",
    category: "utility",
    image: todoApp,
    live: "#",
    github: "https://github.com/abdurehims",
  },
  {
    id: 5,
    title: "Calculator",
    description:
      "Modern neumorphic design with full arithmetic operations and keyboard support.",
    tags: ["HTML", "CSS", "JavaScript"],
    gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    category: "utility",
    image: calculator,
    live: "#",
    github: "https://github.com/abdurehims",
  },
  {
    id: 6,
    title: "Age Calculator",
    description:
      "Calculates exact age in years, months, and days from a given birth date with a clean, intuitive interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    gradient: "linear-gradient(135deg, #00e5ff, #8b5cf6)",
    category: "utility",
    image: ageCalculator,
    live: "#",
    github: "https://github.com/abdurehims",
  },
];

export const stats = [
  { label: 'Years Coding', value: 2, suffix: '+' },
  { label: 'Projects Completed', value: 10, suffix: '+' },
  { label: 'Satisfied Clients', value: 4, suffix: '+' },
  { label: 'Learner Mindset', value: 24, suffix: '/7' }
];