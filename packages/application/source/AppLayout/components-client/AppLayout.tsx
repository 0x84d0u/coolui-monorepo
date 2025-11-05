"use client";

import { AppLayout as AppLayoutTemplate } from "../components/AppLayout";
import { useAppLayout } from "../index.client";
import { AppLayoutProps } from "./types";
import { AppSidebarToggle } from "./AppSidebarToggle";
import { ThemeToggle } from "./ThemeToggle";
// import { useMemo } from "react";

export const AppLayout = (props: AppLayoutProps) => {
    const state = useAppLayout();

    //     const headerToolbar = useMemo(() => (
      
    // ), [props.sidebarEnabled, props.headerThemeToggleEnabled, props.headerToolbar]);
    

    return <AppLayoutTemplate
        {...props}
        {...state}
        headerToolbar={  <>
            <AppSidebarToggle 
                sidebarEnabled={props.sidebarEnabled}
            />
            {props.headerThemeToggleEnabled && <ThemeToggle />}
            {props.headerToolbar}
        </>}
    />
}