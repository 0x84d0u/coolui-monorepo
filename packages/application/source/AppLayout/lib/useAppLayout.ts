"use client";

import { useContext } from "react";
import { AppLayoutContext } from "./AppLayoutContext";

export const useAppLayout = () => {
    const ctx = useContext(AppLayoutContext);
    if (!ctx) {
        throw new Error("useAppLayout must be wrapped by AppLayoutProvider")
    }
    return ctx
}