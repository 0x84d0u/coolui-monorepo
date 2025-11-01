'use client';

// Client components (React hooks, context, etc.)
export { ThemeProvider, useTheme } from './lib/context';
export { ThemeSelector } from './components/theme-selector';
export { ThemePreview } from './components/theme-preview';

// Re-export client utilities
export { applyThemeBeforeRender } from './lib/apply-theme-before-render';

// Re-export constants and types
export { 
    THEME_STORAGE_KEY, 
    MODE_STORAGE_KEY, 
    DEFAULT_THEMES
} from './lib/constants';

export type { 
    Theme,
    ThemeMode
} from './lib/types';
