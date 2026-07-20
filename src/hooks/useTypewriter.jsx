import { useState, useEffect } from 'react';

export default function useTypewriter(words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    // if (index === words.length) setIndex(0);

    const timeout = setTimeout(() => {
      if (!reverse) {
        setText(words[index].substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);

        if (subIndex + 1 === words[index].length) {
          setTimeout(() => setReverse(true), pauseTime);
        }
      } else {
        setText(words[index].substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);

        if (subIndex === 0) {
          setReverse(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, reverse ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}