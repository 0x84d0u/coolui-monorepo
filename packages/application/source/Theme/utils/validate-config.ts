import { DEFAULT_THEME_CONFIG } from "../index.server";
import { Config } from "../lib/types";

export function validateConfig(config: Partial<Config>): Config {
    if (config?.themes) {
        const values = config.themes.map(t => t.value);
        const duplicates = values.filter((v, i) => values.indexOf(v) !== i);
        if (duplicates.length > 0) {
            throw new Error(`Duplicate theme values: ${duplicates.join(', ')}`);
        }
    }
    return { ...DEFAULT_THEME_CONFIG, ...config };
}