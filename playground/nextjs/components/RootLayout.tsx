import { LAYOUT_CONFIG } from "@/config";
import { MainNavigation } from "./MainNavigation";
import { ChildrenComponent } from "@coolui/core";
import { AppLayout, Template } from "@coolui/application";
import { AppLayout as ClientAppLayout } from "@coolui/application/client";

export const RootLayout = ({ children }: ChildrenComponent) => <Template
    config={LAYOUT_CONFIG}
    sidebarBody={<MainNavigation />}
>
    {children}
</Template>


// const c = APPLAYOUT_TEMPLATe

export const RootLayout2 = ({ children}: ChildrenComponent) => <AppLayout >
    {children}
</AppLayout>


export const RootLayout3 = ({ children}: ChildrenComponent) => <ClientAppLayout>
    {children}
</ClientAppLayout>