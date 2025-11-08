"use client";

import { useAppTemplate } from "../AppTemplate.provider";
import { AppSidebarToggle as ServerAppSidebarToggle } from "./AppSidebarToggle.server";

export const AppSidebarToggle = () => {
    const { toggleSidebar } = useAppTemplate();
    return <ServerAppSidebarToggle  onClick={toggleSidebar} />
}