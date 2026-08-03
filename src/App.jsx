import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ParticlesCanvas from './components/ParticlesCanvas';
import Toast from './components/Toast';
import useTheme from './hooks/useTheme';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({ show: false, message: '' });
  const [cursorHidden, setCursorHidden] = useState(false);

  // Permanently apply dark class — no toggle
  useTheme();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(t);
  }, []);

  const showToast = (msg) => {
    setToast({ show: true, message: msg });
    setTimeout(() => setToast({ show: false, message: '' }), 2600);
  };

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen key="loading" />}</AnimatePresence>

      <CustomCursor hidden={cursorHidden} />
      <ScrollProgress />
      <ParticlesCanvas />
      <Navbar />

      <main>
        <Hero showToast={showToast} />
        <About />
        <Skills />
        <Projects />
        <Contact showToast={showToast} />
      </main>

      <Footer onCircleHover={setCursorHidden} />

      <AnimatePresence>
        {toast.show && <Toast key="toast" message={toast.message} />}
      </AnimatePresence>
    </>
  );
}

export default App;
