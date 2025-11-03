import { Theme } from "@/types";

export const THEME_STORAGE_KEY = 'app-theme-name';
export const MODE_STORAGE_KEY = 'app-theme-mode';


export const DEFAULT_THEMES: Theme[] = [
  { label: "Default", value: "default"},
  { label: "Minimalist", value: "minimalist"},
  { label: "Modern", value: "modern"},
  { label: "Retro", value: "retro"},

];
