import { useState, useEffect } from 'react';
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
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({ show: false, message: '' });
  const [cursorHidden, setCursorHidden] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 2500);
  };

  return (
    <>
      {loading && <LoadingScreen />}
       <CustomCursor hidden={cursorHidden} />
      <ScrollProgress />
      <ParticlesCanvas />
      <Navbar showToast={showToast} />
      <main>
        <Hero showToast={showToast} />
        <About />
        <Skills />
        <Projects />
        <Contact showToast={showToast} />
      </main>
      <Footer onCircleHover={setCursorHidden} />
      {toast.show && <Toast message={toast.message} />}
    </>
  );
}

export default App;