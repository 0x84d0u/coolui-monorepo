export type ThemeName = 'default' | 'modern' | 'minimalist' | 'retro' | (string & {});

export interface Theme {
  value: ThemeName;
  label: string;
  description?: string;
}

export type ThemeMode = 'light' | 'dark';

