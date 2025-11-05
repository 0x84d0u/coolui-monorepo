"use client";

import { useContext } from "react"
import { LayoutContext } from "./LayoutContext"

export const useLayout = () => {
    const ctx = useContext(LayoutContext);
    if (!ctx) {
        throw new Error("useAppLayout must be wrapped by AppLayoutProvider")
    }
    return ctx
}