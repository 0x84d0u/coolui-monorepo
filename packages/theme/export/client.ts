'use client';

// Client components (React hooks, context, etc.)
export { ThemeProvider, useTheme } from '../src/lib/context';
export { ThemeSelector } from '../src/components/theme-selector';
export { ThemePreview } from '../src/components/theme-preview';
export { Button, Card, SuccessAlert} from '../src/components/theme-preview';

// Re-export client utilities
export { applyThemeBeforeRender } from '../src/lib/apply-theme-before-render';

// Re-export constants and types
export { 
    THEME_STORAGE_KEY, 
    MODE_STORAGE_KEY, 
    DEFAULT_THEMES
} from '../src/lib/constants';

export type { 
    Theme,
    ThemeMode
} from '../src/lib/types';
