export default function Footer({ onCircleHover }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer>
      <p>...</p>
      <button
        className="back-to-top interactive"
        aria-label="Back to top"
        onClick={scrollToTop}
        onMouseEnter={() => onCircleHover(true)}
        onMouseLeave={() => onCircleHover(false)}
        style={{ cursor: 'pointer' }}   /* ← shows the hand */
      >
        ↑
      </button>
    </footer>
  );
}