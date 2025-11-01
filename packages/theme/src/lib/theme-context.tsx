'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { THEME_STORAGE_KEY, MODE_STORAGE_KEY } from './theme-script';
import { DEFAULT_THEMES, type ThemeConfig } from './theme-config';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  themeName: string;
  themeMode: ThemeMode;
  themes: ThemeConfig[];
  setThemeName: (theme: string) => void;
  setThemeMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  themes?: ThemeConfig[];
  defaultTheme?: string;
  defaultMode?: ThemeMode;
  themeStorageKey?: string;
  modeStorageKey?: string;
}

export function ThemeProvider({
  children,
  themes = DEFAULT_THEMES,
  defaultTheme = 'default',
  defaultMode = 'light',
  themeStorageKey = THEME_STORAGE_KEY,
  modeStorageKey = MODE_STORAGE_KEY,
}: ThemeProviderProps) {
  const [themeName, setThemeNameState] = useState<string>(defaultTheme);
  const [themeMode, setThemeModeState] = useState<ThemeMode>(defaultMode);
  const [mounted, setMounted] = useState(false);

  // Validate theme exists
  const isValidTheme = (theme: string) => {
    return themes.some(t => t.value === theme);
  };

  useEffect(() => {
    setMounted(true);
    
    const savedTheme = localStorage.getItem(themeStorageKey);
    const savedMode = localStorage.getItem(modeStorageKey) as ThemeMode;
    
    // Load saved theme if valid
    if (savedTheme && isValidTheme(savedTheme)) {
      setThemeNameState(savedTheme);
    }
    
    // Load saved mode or detect system preference
    if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
      setThemeModeState(savedMode);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        setThemeModeState('dark');
      }
    }
  }, [themeStorageKey, modeStorageKey, themes]);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    // Apply theme name via data attribute
    if (themeName === 'default') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', themeName);
    }
    
    // Apply theme mode via class
    if (themeMode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Persist to localStorage
    localStorage.setItem(themeStorageKey, themeName);
    localStorage.setItem(modeStorageKey, themeMode);
  }, [themeName, themeMode, mounted, themeStorageKey, modeStorageKey]);

  const setThemeName = (theme: string) => {
    if (isValidTheme(theme)) {
      setThemeNameState(theme);
    } else {
      console.warn(`Theme "${theme}" is not registered. Available themes:`, themes.map(t => t.value));
    }
  };

  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
  };

  const toggleMode = () => {
    setThemeModeState(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value: ThemeContextType = {
    themeName,
    themeMode,
    themes,
    setThemeName,
    setThemeMode,
    toggleMode,
    mounted,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
