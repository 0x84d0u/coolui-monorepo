import { Theme } from "./types";

export const THEME_STORAGE_KEY = 'app-theme-name';
export const MODE_STORAGE_KEY = 'app-theme-mode';


export const DEFAULT_THEMES: Theme[] = [
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
