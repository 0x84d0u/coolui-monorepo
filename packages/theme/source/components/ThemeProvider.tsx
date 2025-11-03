'use client';

import { useEffect, useState } from "react";
import { ThemeContext, ThemeContextType } from "@/context/ThemeContext";
import { DEFAULT_THEMES, MODE_STORAGE_KEY, THEME_STORAGE_KEY } from "@/utils/constants";
import { Theme, ThemeMode } from "@/types";

interface ThemeProviderProps {
  children: React.ReactNode;
  themes?: Theme[];
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

  const isValidTheme = (theme: string) => {
    return themes.some(t => t.value === theme);
  };

  useEffect(() => {
    setMounted(true);
    
    const savedTheme = localStorage.getItem(themeStorageKey);
    const savedMode = localStorage.getItem(modeStorageKey) as ThemeMode;
    
    if (savedTheme && isValidTheme(savedTheme)) {
      setThemeNameState(savedTheme);
    }
    
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
    
    if (themeName === 'default') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', themeName);
    }
    
    if (themeMode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
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

