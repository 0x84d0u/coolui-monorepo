"use client";


import React, { useEffect, useState } from "react";
import { LayoutContext } from "./LayoutContext"
import type { LayoutState } from "./types"

export const LayoutProvider = ({ children }: { children?: React.ReactNode }) => {
    const [isHeaderScrolled, setHeaderScrolled] = useState<boolean>(false)
    const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false)

    // Track Header scroll 
    useEffect(() => {
        const onScroll = () => setHeaderScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close sidebar on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isSidebarOpen) {
                setSidebarOpen(false);
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isSidebarOpen]);

    // Prevent body scroll when sidebar is open
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isSidebarOpen]);

    const appCtx: LayoutState = {
        isHeaderScrolled: isHeaderScrolled,
        isSidebarOpen: isSidebarOpen,
        closeSidebar: () => setSidebarOpen(false),
        openSidebar: () => setSidebarOpen(true),
        toggleSidebar: () => setSidebarOpen(prev => !prev),
    }

    return <LayoutContext.Provider value={appCtx}>
        {children}
    </LayoutContext.Provider>
}