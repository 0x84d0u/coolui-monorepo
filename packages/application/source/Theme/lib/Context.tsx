"use client";

import { createContext } from "react";
import { State } from "./types";

export const ThemeContext = createContext<State | undefined>(undefined);