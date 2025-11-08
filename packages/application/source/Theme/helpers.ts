import type { Theme, Config } from "./types";

export const DEFAULT_CONFIG: Config = {
    defaultTheme: 'default',
    defaultMode: 'light',
    modeStorageKey: 'app-theme-mode',
    themeStorageKey: 'app-theme-name',
    themes: [
        { label: "Default", value: "default" },
        { label: "Minimalist", value: "minimalist" },
        { label: "Modern", value: "modern" },
        { label: "Retro", value: "retro" },
    ]
}



export function mergeThemes(defaults: Theme[], custom: Theme[]): Theme[] {
    const seen = new Set<string>();
    const merged: Theme[] = [];

    [...defaults, ...custom].forEach((theme) => {
        if (!seen.has(theme.value)) {
            merged.push(theme);
            seen.add(theme.value);
        } else {
            console.warn(`Duplicate theme ignored: "${theme.value}"`);
        }
    });

    return merged;
}



export function validateConfig(config: Partial<Config>): Config {
    if (config?.themes) {
        const values = config.themes.map(t => t.value);
        const duplicates = values.filter((v, i) => values.indexOf(v) !== i);
        if (duplicates.length > 0) {
            throw new Error(`Duplicate theme values: ${duplicates.join(', ')}`);
        }
    }
    return { ...DEFAULT_CONFIG, ...config };
}