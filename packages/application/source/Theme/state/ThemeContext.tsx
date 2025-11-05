"use client";

import { createContext } from "react";
import { ThemeState } from "./types";

export const ThemeContext = createContext<ThemeState | undefined>(undefined);