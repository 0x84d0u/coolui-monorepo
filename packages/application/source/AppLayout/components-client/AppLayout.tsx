"use client";

import { AppLayout as AppLayoutTemplate } from "../components/AppLayout";
import { useAppLayout } from "../index.client";
import { AppLayoutProps } from "./types";

export const AppLayout = (props: AppLayoutProps) => {
    const state = useAppLayout();
    return <AppLayoutTemplate
        {...props}
        {...state}
    />
}