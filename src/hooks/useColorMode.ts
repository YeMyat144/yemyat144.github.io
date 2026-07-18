import { useEffect, useLayoutEffect, useState } from 'react';

const KEY = 'ymm-mode';

function getInitial(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return localStorage.getItem(KEY) === 'dark';
  } catch {
    return false;
  }
}

export function useColorMode() {
  const [isDark, setIsDark] = useState<boolean>(getInitial);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, isDark ? 'dark' : 'light');
    } catch {}
  }, [isDark]);

  return {
    isDark,
    toggle: () => setIsDark((v) => !v),
  };
}
