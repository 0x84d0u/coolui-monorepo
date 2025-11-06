"use client";

import { useEffect, useState } from "react";
import { Config, State } from "../lib/types";
import { Context } from "../lib/Context";

export type ProviderProps = {
    children: React.ReactNode,
    config?: Partial<Config>
}

export const Provider = ({ children, config }: ProviderProps) => {
    const [isHeaderScrolled, setHeaderScrolled] = useState<boolean>(false)
    const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false)

    // Track header scroll (only needs to run once)
    useEffect(() => {
        const onScroll = () => setHeaderScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []); // ← Only run once on mount

    // Handle escape key to close sidebar
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
        config,
        isHeaderScrolled: isHeaderScrolled,
        isSidebarOpen: isSidebarOpen,
        closeSidebar: () => setSidebarOpen(false),
        openSidebar: () => setSidebarOpen(true),
        toggleSidebar: () => setSidebarOpen(prev => !prev),
    }

    return <Context.Provider value={appCtx}>
        {children}
    </Context.Provider>
}