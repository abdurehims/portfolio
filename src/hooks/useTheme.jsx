// Dark-only mode — always applies the `dark` class, no toggle
import { useEffect } from 'react';

export default function useTheme() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
}
