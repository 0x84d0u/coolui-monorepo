'use client';

import { useEffect, useState } from "react";
import type { ThemeConfig, ThemeMode } from "../config/types";
import type { ThemeState } from "./types";
import { DEFAULT_THEME_CONFIG } from "../config/constants";
import { ThemeContext } from "./ThemeContext";
import { mergeThemes } from "../helpers/merge-themes";

interface Props {
  children: React.ReactNode;
  config?: Partial<ThemeConfig>
}

export function ThemeProvider({
  children,
  config = DEFAULT_THEME_CONFIG
}: Props) {


  const {
    defaultMode,
    defaultTheme,
    modeStorageKey,
    themeStorageKey,
    themes,
  }: ThemeConfig = {
    defaultMode: config.defaultMode || DEFAULT_THEME_CONFIG.defaultMode,
    defaultTheme: config.defaultTheme || DEFAULT_THEME_CONFIG.defaultTheme,
    modeStorageKey: config.modeStorageKey || DEFAULT_THEME_CONFIG.modeStorageKey,
    themeStorageKey: config.themeStorageKey || DEFAULT_THEME_CONFIG.themeStorageKey,
    themes: mergeThemes(DEFAULT_THEME_CONFIG.themes, config.themes || [])
  }


  const [themeName, setThemeNameState] = useState<string>(defaultTheme);
  const [themeMode, setThemeModeState] = useState<ThemeMode>(defaultMode);
  const [isMounted, setMounted] = useState(false);

  const isValidTheme = (theme: string) => themes.some(t => t.value === theme);

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
    if (!isMounted) return;

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
  }, [themeName, themeMode, isMounted, themeStorageKey, modeStorageKey]);

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

  const ctx: ThemeState = {
    themeName,
    themeMode,
    themes,
    setThemeName,
    setThemeMode,
    toggleMode,
    mounted: isMounted,
  };

  return (
    <ThemeContext.Provider value={ctx}>
      {children}
    </ThemeContext.Provider>
  );
}

