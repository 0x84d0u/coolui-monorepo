"use client";

import { createContext } from "react";
import { State } from "./types";

export const AppLayoutContext = createContext<State | undefined>(undefined)
