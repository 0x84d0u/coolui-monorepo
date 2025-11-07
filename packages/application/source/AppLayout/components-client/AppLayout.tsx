import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { AppLayout as ServerAppLayout } from "../index.server"
import { ClientAppLayoutProps, State } from "../lib/types"
import { ChildrenComponent } from "@coolui/core";
import { useTheme } from "@/client";
import { ToggleTheme } from "@/Template/components-client/ToggleTheme";

const AppLayoutContext = createContext<Required<State> | undefined>(undefined);

export const useAppLayout = () => {
    const ctx = useContext(AppLayoutContext);
    if (!ctx) {
        throw new Error("useAppLayout must be wrapped by its provider")
    }
    return ctx
}

const Provider = ({ children }: ChildrenComponent) => {
    const [headerIsScrolled, setHeaderScrolled] = useState<boolean>(false)
    const [sidebarIsOpen, setSidebarOpen] = useState<boolean>(false)

    // Track header scroll (only needs to run once)
    useEffect(() => {
        const onScroll = () => setHeaderScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Handle escape key to close sidebar
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && sidebarIsOpen) {
                setSidebarOpen(false);
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [sidebarIsOpen]);

    // Prevent body scroll when sidebar is open
    useEffect(() => {
        if (sidebarIsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [sidebarIsOpen]);

    // ✅ Memoize functions
    const closeSidebar = useCallback(() => setSidebarOpen(false), []);
    const openSidebar = useCallback(() => setSidebarOpen(true), []);
    const toggleSidebar = useCallback(() => setSidebarOpen(prev => !prev), []);

    // ✅ Memoize context value - THIS IS CRITICAL!
    const state: Required<State> = useMemo(() => ({
        headerIsScrolled,
        
        sidebarIsOpen,
        closeSidebar,
        openSidebar,
        toggleSidebar,
    }), [headerIsScrolled, sidebarIsOpen, closeSidebar, openSidebar, toggleSidebar]);

    return <AppLayoutContext.Provider value={state}>
        {children}
    </AppLayoutContext.Provider>
}


const ClientAppLayout = (props: ClientAppLayoutProps) => {
    const state = useAppLayout();
    return <ServerAppLayout 
        {...state}
        {...props}
        headerToolbar={<>
            <ToggleTheme />
            {props.headerToolbar}
        </>}
    />
}

export const AppLayout = (props: ClientAppLayoutProps) => {
    return <Provider>
        <ClientAppLayout {...props}/>
    </Provider>
}