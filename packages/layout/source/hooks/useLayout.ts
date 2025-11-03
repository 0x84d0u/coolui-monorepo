"use client";

import { LayoutContext } from "@/context/LayoutContext";
import { useContext } from "react"

export const useLayout = () => {
    const context =  useContext(LayoutContext);
    if (!context) {
        throw new Error("useRootLayout must be wrapped")
    }
    return context
}
