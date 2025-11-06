"use client";

import { useContext } from "react";
import { Context } from "./Context";

export const useTemplate = () => {
    const ctx = useContext(Context);
    if (!ctx) {
        throw new Error("useTemplate must be wrapped by its provider")
    }
    return ctx
}