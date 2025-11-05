"use client";

import { useLayout } from "@/AppLayout/state/useLayout";
import { 
    AppLayout as ServerAppLayout,
    type AppLayoutProps as ServerAppLayoutProps
} from "../components-server/AppLayout";

export type AppLayoutProps = ServerAppLayoutProps

export const AppLayout = (props: AppLayoutProps) => {
    const state = useLayout();

    return <ServerAppLayout  state={state} {...props}/>
}
