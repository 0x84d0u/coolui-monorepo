'use client';

import { DEFAULT_THEME_CONFIG } from "../lib/constants";


export function applyThemeBeforeRender(
  themeStorageKey = DEFAULT_THEME_CONFIG.themeStorageKey,
  modeStorageKey = DEFAULT_THEME_CONFIG.modeStorageKey
): void {
  try {
    const theme = localStorage.getItem(themeStorageKey);
    const mode = localStorage.getItem(modeStorageKey);
    
    if (theme && theme !== 'default') {
      document.documentElement.setAttribute('data-theme', theme);
    }
    
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    console.error('Theme initialization error:', e);
  }
}