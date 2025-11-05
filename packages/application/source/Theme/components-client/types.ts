import { Config } from "../lib/types";

export type ThemeProviderProps =  {
  children: React.ReactNode;
  config?: Partial<Config>
}