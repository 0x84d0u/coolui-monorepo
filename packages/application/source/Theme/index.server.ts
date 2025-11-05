export {
    DEFAULT_THEME_CONFIG
} from './lib/constants'

export type {
    Config as ThemeConfig,
    State as ThemeState,
    Theme,
    ThemeMode,
    ThemeName,
} from './lib/types'

export {
    NextThemeScript,
    getThemeScript
} from './utils/NextThemeScript'

export {
    mergeThemes
} from './utils/merge-themes'