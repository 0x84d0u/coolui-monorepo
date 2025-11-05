"use client";

import { createContext } from "react";
import type { LayoutState } from "./types";

export const LayoutContext = createContext<LayoutState | undefined>(undefined)