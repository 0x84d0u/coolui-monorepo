// Server-safe utilities (no React hooks/context)
export { 
    getThemeScript 
} from '../src/lib/get-theme-script';

// Re-export constants and types

export { 
    THEME_STORAGE_KEY, 
    MODE_STORAGE_KEY, 
    DEFAULT_THEMES
} from '../src/lib/constants';

export type { 
    Theme,
    ThemeName,
    ThemeMode
} from '../src/lib/types';

// Server-only utility functions
import { getThemeScript } from '../src/lib/get-theme-script';
export function getThemeScriptTag(
    themeStorageKey?: string,
    modeStorageKey?: string
) {
    return {
        __html: getThemeScript(themeStorageKey, modeStorageKey),
    };
}