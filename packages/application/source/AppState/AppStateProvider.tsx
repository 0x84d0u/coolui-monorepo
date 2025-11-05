import type { AppState, AppProviderProps } from "./types"
import { AppStateContext } from "./AppStateContext"
import { useEffect, useState } from "react";

export const AppStateProvider = ({ children }: AppProviderProps) => {
    const [isHeaderScrolled, setHeaderScrolled] = useState<boolean>(false)

    // Track Header scroll 
    useEffect(() => {
        const onScroll = () => setHeaderScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const appCtx: AppState = {
        isHeaderScrolled: isHeaderScrolled,
        isSidebarOpen: false,
        closeSidebar: () => null
    }

    return <AppStateContext.Provider value={appCtx}>
        {children}
    </AppStateContext.Provider>
}