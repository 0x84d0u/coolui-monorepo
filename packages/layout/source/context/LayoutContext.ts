"use client";

import { createContext } from "react"

export interface LayoutContextType {
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
export const LayoutContext = createContext<LayoutContextType | null>(null)
