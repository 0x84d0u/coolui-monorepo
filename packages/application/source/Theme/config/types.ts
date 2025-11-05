export type ThemeName = 'default' | 'modern' | 'minimalist' | 'retro' | (string & {});
export type ThemeMode = 'light' | 'dark';

export interface Theme {
    value: ThemeName;
    label: string;
    description?: string;
}

export interface ThemeConfig {
    themes: Theme[];
    defaultTheme: string;
    defaultMode: ThemeMode;
    themeStorageKey: string;
    modeStorageKey: string;
}
