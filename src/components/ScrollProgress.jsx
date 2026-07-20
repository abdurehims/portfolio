
import useScrollPosition from '../hooks/useScrollPosition';

export default function ScrollProgress() {
  const scrollY = useScrollPosition();
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight ? Math.min((scrollY / docHeight) * 100, 100) : 0;

  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}