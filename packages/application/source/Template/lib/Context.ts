"use client";

import { createContext } from "react";
import { State } from "./types";

export const Context = createContext<State | undefined>(undefined)
