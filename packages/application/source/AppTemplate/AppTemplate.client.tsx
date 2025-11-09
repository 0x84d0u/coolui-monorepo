"use client";
import { useAppTemplate } from "./AppTemplate.provider";
import { AppLayout as ServerAppLayout, AppLayoutProps as ServerAppLayoutProps } from "./AppTemplate";
import { AppSidebarToggle } from "./AppSidebarToggle/AppSidebarToggle.client";
import { ThemeToggle } from "./ThemeToggle/ThemeToggle";
import { useTheme } from "@/client";

// import { ToggleTheme } from "@/Template/components-client/ToggleTheme";

export type AppTemplateProps = ServerAppLayoutProps

export const AppTemplate = (props: AppTemplateProps) => {
    const state = useAppTemplate();
    const theme = useTheme();
    return <ServerAppLayout
        {...props}
            {...state}
        headerToolbarContent={<>
            <AppSidebarToggle />
            <ThemeToggle {...theme} />
            {props.headerToolbarContent}
        </>}
    />
}

