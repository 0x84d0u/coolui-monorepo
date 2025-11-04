import { createContext } from "react";
import { AppLayoutContextProps } from "./types";

export const AppLayoutContext = createContext<AppLayoutContextProps| null>(null)
