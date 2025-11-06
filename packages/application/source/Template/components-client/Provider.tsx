"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
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
    }, []);

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

    // ✅ Memoize functions
    const closeSidebar = useCallback(() => setSidebarOpen(false), []);
    const openSidebar = useCallback(() => setSidebarOpen(true), []);
    const toggleSidebar = useCallback(() => setSidebarOpen(prev => !prev), []);

    // ✅ Memoize context value - THIS IS CRITICAL!
    const appCtx: State = useMemo(() => ({
        config,
        isHeaderScrolled,
        isSidebarOpen,
        closeSidebar,
        openSidebar,
        toggleSidebar,
    }), [config, isHeaderScrolled, isSidebarOpen, closeSidebar, openSidebar, toggleSidebar]);

    return <Context.Provider value={appCtx}>
        {children}
    </Context.Provider>
}