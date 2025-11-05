"use client";

import { useEffect, useState } from "react";
import { State } from "../lib/types";
import { AppLayoutProviderProps } from "./types";
import { AppLayoutContext } from "../lib/context";

export const AppLayoutProvider = ({ children }: AppLayoutProviderProps) => {
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

    const appCtx: State = {
        isHeaderScrolled: isHeaderScrolled,
        isSidebarOpen: isSidebarOpen,
        closeSidebar: () => setSidebarOpen(false),
        openSidebar: () => setSidebarOpen(true),
        toggleSidebar: () => setSidebarOpen(prev => !prev),
    }

    return <AppLayoutContext.Provider value={appCtx}>
        {children}
    </AppLayoutContext.Provider>
}