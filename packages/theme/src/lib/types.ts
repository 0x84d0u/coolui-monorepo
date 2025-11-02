export type ThemeName = 'default' | 'midnight' | (string & {});

export interface Theme {
  value: ThemeName;
  label: string;
  description?: string;
}

export type ThemeMode = 'light' | 'dark';

