import { Theme, ThemeMode } from "../config/types";

export interface ThemeState {
    themeName: string;
    themeMode: ThemeMode;
    themes: Theme[];
    setThemeName: (theme: string) => void;
    setThemeMode: (mode: ThemeMode) => void;
    toggleMode: () => void;
    mounted: boolean;
}