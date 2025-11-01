// Server-safe utilities (no React hooks/context)
export { 
    getThemeScript 
} from './lib/get-theme-script';

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

// Server-only utility functions
import { getThemeScript } from './lib/get-theme-script';
export function getThemeScriptTag(
    themeStorageKey?: string,
    modeStorageKey?: string
) {
    return {
        __html: getThemeScript(themeStorageKey, modeStorageKey),
    };
}