'use client';

import { MODE_STORAGE_KEY, THEME_STORAGE_KEY } from "./constants";

export function applyThemeBeforeRender(
  themeStorageKey = THEME_STORAGE_KEY,
  modeStorageKey = MODE_STORAGE_KEY
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