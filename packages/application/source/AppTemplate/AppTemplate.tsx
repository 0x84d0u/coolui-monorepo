import { AppSidebar } from "./AppSidebar/AppSidebar";
import { AppOverlay } from "./AppSidebar/AppOverlay";
import { AppHeader } from "./AppHeader/AppHeader";
import { AppFooter } from "./AppFooter/AppFooter";

import type {
    HeaderConfig,
    FooterConfig,
    LogoConfig,
    NavigationConfig,
    RootConfig,
    SidebarConfig
} from "./types";
import { ChildrenComponent } from "@coolui/core";


export type AppLayoutProps = HeaderConfig & SidebarConfig & FooterConfig & RootConfig & LogoConfig & NavigationConfig;

export const AppLayout = (props: AppLayoutProps) => {
    return <Root>
        <AppSidebar {...props} />
        <AppOverlay {...props} />
        <Wrapper>
            <AppHeader {...props} />
            <Main>
                {props.children}
            </Main>
            <AppFooter
                {...props}
            />
        </Wrapper>
    </Root>
}

AppLayout.displayName = "AppLayout"


const Root = (props: ChildrenComponent) => <div className="relative flex min-h-svh transition-colors duration-200 print:block print:min-h-0">{props.children}</div>
const Wrapper = (props: ChildrenComponent) => <div className="min-h-svh flex-1 flex flex-col w-full">{props.children}</div>
const Main = (props: ChildrenComponent) => <main className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth focus-visible:outline-none">{props.children}</main>