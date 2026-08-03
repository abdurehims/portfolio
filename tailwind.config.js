/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyan:    '#00e5ff',
        blue:    '#4d7cff',
        violet:  '#8b5cf6',
        pink:    '#ec4899',
        amber:   '#f59e0b',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'card-dark':  '0 1px 3px rgba(0,0,0,.3), 0 8px 32px rgba(0,0,0,.4)',
        'card-hover': '0 4px 6px rgba(0,0,0,.3), 0 20px 60px rgba(0,0,0,.6)',
        'glow-cyan':  '0 0 40px rgba(0,229,255,.2)',
        'glow-sm':    '0 0 20px rgba(0,229,255,.18)',
        'glow-cyan-btn': '0 4px 20px rgba(0,229,255,.3)',
        'glow-cyan-btn-hover': '0 8px 30px rgba(0,229,255,.5)',
      },
      keyframes: {
        'spin-slow':  { to: { transform: 'rotate(360deg)' } },
        'spin-ring':  { to: { transform: 'rotate(360deg)' } },
        'glow-pulse': {
          '0%,100%': { opacity: '.7', transform: 'scale(1)' },
          '50%':     { opacity: '1', transform: 'scale(1.08)' },
        },
        'status-pulse': {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(16,185,129,.6)' },
          '50%':     { boxShadow: '0 0 0 5px rgba(16,185,129,0)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
        'logo-pulse': {
          '0%,100%': { boxShadow: '0 0 0 2px rgba(0,229,255,.4), 0 0 20px rgba(0,229,255,.3)' },
          '50%':     { boxShadow: '0 0 0 4px rgba(0,229,255,.6), 0 0 60px rgba(0,229,255,.5)' },
        },
        'load-fill': {
          '0%':   { width: '0%' },
          '50%':  { width: '70%' },
          '90%':  { width: '95%' },
          '100%': { width: '100%' },
        },
        'reveal-up': {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'spin-slow':    'spin-slow 8s linear infinite',
        'spin-ring':    'spin-ring 3s linear infinite',
        'glow-pulse':   'glow-pulse 4s ease-in-out infinite',
        'status-pulse': 'status-pulse 2s ease-in-out infinite',
        blink:          'blink 1s step-end infinite',
        'logo-pulse':   'logo-pulse 1.4s ease-in-out infinite',
        'load-fill':    'load-fill 1.6s cubic-bezier(.16,1,.3,1) forwards',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34,1.56,0.64,1)',
        out:    'cubic-bezier(0.16,1,0.3,1)',
      },
      backgroundImage: {
        'gradient-cta':  'linear-gradient(135deg,#00e5ff,#4d7cff)',
        'gradient-text-brand': 'linear-gradient(135deg,#00e5ff 0%,#4d7cff 50%,#8b5cf6 100%)',
        'gradient-ring': 'conic-gradient(from 0deg,#00e5ff,#8b5cf6,#4d7cff,#00e5ff)',
        'gradient-bar':  'linear-gradient(90deg,#00e5ff,#4d7cff)',
        'gradient-mesh-dark': `
          radial-gradient(ellipse 80% 50% at 20% 40%,rgba(0,229,255,.06) 0%,transparent 60%),
          radial-gradient(ellipse 60% 50% at 80% 70%,rgba(139,92,246,.07) 0%,transparent 60%),
          radial-gradient(ellipse 50% 40% at 50% 10%,rgba(77,124,255,.05) 0%,transparent 60%)`,
        'gradient-mesh-light': `
          radial-gradient(ellipse 80% 50% at 20% 40%,rgba(0,180,255,.05) 0%,transparent 60%),
          radial-gradient(ellipse 60% 50% at 80% 70%,rgba(139,92,246,.04) 0%,transparent 60%),
          radial-gradient(ellipse 50% 40% at 50% 10%,rgba(77,124,255,.04) 0%,transparent 60%)`,
      },
    },
  },
  plugins: [],
};
