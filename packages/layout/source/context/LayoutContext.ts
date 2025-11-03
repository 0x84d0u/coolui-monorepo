"use client";

import { createContext } from "react"

export interface RootLayoutContextType {
    sidebar: {
        open: () => void,
        close: () => void,
        toggle: () => void,
        isOpen: boolean,
        isClose: boolean,
    },
    header: {
        scrolled : boolean,
    }
}
export const RootLayoutContext = createContext<RootLayoutContextType | null>(null)
