"use client";

import { RootLayoutContext } from "@/context/LayoutContext";
import { useContext } from "react"

export const useRootLayout = () => {
    const context =  useContext(RootLayoutContext);
    if (!context) {
        throw new Error("useRootLayout must be wrapped")
    }
    return context
}
