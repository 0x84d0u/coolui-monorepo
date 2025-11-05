import { DEFAULT_THEME_CONFIG } from "../lib/constants";
import { Config } from "../lib/types";


export function getThemeScript(
  themeStorageKey: string = DEFAULT_THEME_CONFIG.themeStorageKey,
  modeStorageKey: string = DEFAULT_THEME_CONFIG.modeStorageKey
): string {
  return `
    (function() {
      try {
        const theme = localStorage.getItem('${themeStorageKey}');
        const mode = localStorage.getItem('${modeStorageKey}');
        
        if (theme && theme !== 'default') {
          document.documentElement.setAttribute('data-theme', theme);
        }
        
        if (mode === 'dark') {
          document.documentElement.classList.add('dark');
        }
      } catch (e) {
        console.error('Theme initialization error:', e);
      }
    })();
  `.trim();
}


export const NextThemeScript = ({
  config
}: {
  config: Partial<Config>
}) => <script
  dangerouslySetInnerHTML={{
    __html: getThemeScript(
      config.themeStorageKey || DEFAULT_THEME_CONFIG.themeStorageKey, 
      config.modeStorageKey || DEFAULT_THEME_CONFIG.modeStorageKey
    )
  }}
></script>