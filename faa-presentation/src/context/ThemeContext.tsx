"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'classic' | 'experience';

interface ThemeContextProps {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>('classic');

  const toggleTheme = () => {
    setTheme(prev => prev === 'classic' ? 'experience' : 'classic');
  };

  // Add a class to the document body to allow global CSS targeting
  useEffect(() => {
    if (theme === 'experience') {
      document.body.classList.remove('theme-presentation');
      document.body.classList.add('theme-experience');
    } else {
      document.body.classList.remove('theme-experience');
      document.body.classList.add('theme-presentation');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
