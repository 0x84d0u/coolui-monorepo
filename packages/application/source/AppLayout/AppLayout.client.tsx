"use client";

import { useAppState } from "@/AppState/useAppState";
import { 
    AppLayout as ServerAppLayout,
    type AppLayoutProps as ServerAppLayoutProps
} from "./AppLayout";

export const AppLayout = (props: ServerAppLayoutProps) => {
    const state = useAppState();

    return <ServerAppLayout  appState={state} {...props}/>
}
