export {
    getThemeScript,
    THEME_STORAGE_KEY,
    MODE_STORAGE_KEY
} from './lib/theme-script';

export { DEFAULT_THEMES, type ThemeConfig } from './lib/theme-config';

// import { getThemeScript } from './lib/theme-script';

// export function getThemeScriptTag(
//     themeStorageKey?: string,
//     modeStorageKey?: string
// ) {
//     return {
//         __html: getThemeScript(themeStorageKey, modeStorageKey),
//     };
// }
