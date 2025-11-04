"use client";

import { useContext } from "react"
import { AppLayoutContext } from "./contexts";

export const useAppLayout = () => {
    const context =  useContext(AppLayoutContext);
    if (!context) {
        throw new Error("useAppLayout must be wrapped")
    }
    return context
}
