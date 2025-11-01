export interface ThemeConfig {
  value: string;
  label: string;
  description?: string;
}

export const DEFAULT_THEMES: ThemeConfig[] = [
  { 
    value: 'default', 
    label: 'Default', 
    description: 'Classic light theme' 
  },
  { 
    value: 'midnight', 
    label: 'Midnight', 
    description: 'Deep blue theme' 
  },
];
